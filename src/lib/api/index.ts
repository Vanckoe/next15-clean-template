import { Fetcher } from './fetcher';

export const apiClient = new Fetcher(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/`);
