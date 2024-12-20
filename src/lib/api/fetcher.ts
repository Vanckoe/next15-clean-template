type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface FetchOptions {
    method?: HttpMethod;
    body?: unknown;
    headers?: Record<string, string>;
    queryParams?: Record<string, string>;
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

    private buildUrl(endpoint: string, queryParams?: Record<string, string>): string {
        const url = new URL(endpoint, this.baseUrl);
        if (queryParams) {
            Object.entries(queryParams).forEach(([key, value]) =>
                url.searchParams.append(key, value),
            );
        }
        return url.toString();
    }

    private mergeHeaders(customHeaders?: Record<string, string>, authToken?: string): Headers {
        const headers = new Headers({ ...this.defaultHeaders, ...customHeaders });
        if (authToken) {
            headers.set('Authorization', `Bearer ${authToken}`);
        }
        return headers;
    }

    public async request<T>(endpoint: string, options?: FetchOptions): Promise<FetchResponse<T>> {
        const { method = 'GET', body, headers, queryParams, authToken } = options || {};
        const url = this.buildUrl(endpoint, queryParams);
        const requestOptions: RequestInit = {
            method,
            headers: this.mergeHeaders(headers, authToken),
        };

        if (body) {
            requestOptions.body = JSON.stringify(body);
            requestOptions.headers = {
                ...requestOptions.headers,
                'Content-Type': 'application/json',
            };
        }

        const response = await fetch(url, requestOptions);

        let data: T | null = null;
        try {
            data = (await response.json()) as T;
        } catch (error) {
            if (!response.ok) {
                throw new Error(`Failed to parse JSON: ${error}`);
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
    }
}
