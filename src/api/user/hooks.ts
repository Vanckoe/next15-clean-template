import { useQuery } from '@tanstack/react-query';
import { getUser } from './fetchers';

export const useUser = () =>
    useQuery({
        queryKey: ['user'],
        queryFn: getUser,
    });
