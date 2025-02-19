type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface FetchOptions {
    method?: HttpMethod;
    body?: unknown;
    headers?: Record<string, string>;
    queryParams?: Record<string, string | number | boolean | symbol>;
    authToken?: string;
}

interface FetchResponse<T> {
    data: T;
    status: number;
    headers: Headers;
}

export class Fetcher {
    private baseUrl: string;
    private defaultHeaders: Record<string, string>;

    constructor(baseUrl: string, defaultHeaders: Record<string, string> = {}) {
        this.baseUrl = baseUrl;
        this.defaultHeaders = defaultHeaders;
    }

    private convertToString(value: unknown): string {
        if (typeof value === 'symbol') {
            return value.toString().replace(/^Symbol\((.*)\)$/, '$1');
        }
        return String(value);
    }

    private buildUrl(
        endpoint: string,
        queryParams?: Record<string, string | number | boolean | symbol>,
    ): string {
        const url = new URL(endpoint, this.baseUrl);
        if (queryParams) {
            Object.entries(queryParams).forEach(([key, value]) => {
                const stringValue = this.convertToString(value);
                url.searchParams.append(key, stringValue);
            });
        }
        return url.toString();
    }

    private mergeHeaders(customHeaders?: Record<string, string>, authToken?: string): Headers {
        const headers = new Headers();

        // Add default headers
        Object.entries(this.defaultHeaders).forEach(([key, value]) => {
            headers.set(key, this.convertToString(value));
        });

        // Add custom headers
        if (customHeaders) {
            Object.entries(customHeaders).forEach(([key, value]) => {
                headers.set(key, this.convertToString(value));
            });
        }

        // Add auth token
        if (authToken) {
            headers.set('Authorization', `Bearer ${authToken}`);
        }

        return headers;
    }

    public async request<T>(endpoint: string, options?: FetchOptions): Promise<FetchResponse<T>> {
        try {
            const { method = 'GET', body, headers, queryParams, authToken } = options || {};
            const url = this.buildUrl(endpoint, queryParams);

            const mergedHeaders = this.mergeHeaders(headers, authToken);

            const requestOptions: RequestInit = {
                method,
                headers: mergedHeaders,
            };

            if (body) {
                requestOptions.body = JSON.stringify(body);
                mergedHeaders.set('Content-Type', 'application/json');
            }

            const response = await fetch(url, requestOptions);

            let data: T | null = null;

            const contentType = response.headers.get('content-type');
            if (contentType?.includes('application/json')) {
                try {
                    data = (await response.json()) as T;
                } catch (error) {
                    throw new Error(
                        `Failed to parse JSON: ${error instanceof Error ? error.message : String(error)}`,
                    );
                }
            }

            if (!response.ok) {
                throw new Error(
                    `Request failed with status ${response.status}: ${response.statusText}`,
                );
            }

            return {
                data: data as T,
                status: response.status,
                headers: response.headers,
            };
        } catch (error) {
            throw new Error(
                `Request failed: ${error instanceof Error ? error.message : String(error)}`,
            );
        }
    }
}
