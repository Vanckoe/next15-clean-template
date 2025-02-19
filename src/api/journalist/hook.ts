import { useQuery } from '@tanstack/react-query';
import { getJournalistPosts } from './queries';

export const useJournalistsPosts = () =>
    useQuery({
        queryKey: ['journalists-posts'],
        queryFn: getJournalistPosts,
    });
