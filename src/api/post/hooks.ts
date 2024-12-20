import { useQuery } from '@tanstack/react-query';
import { getPosts } from './queries';

export const usePosts = () =>
    useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
    });
