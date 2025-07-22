import { supabase } from './supabaseClient';

// Defines the TypeScript interface for a SuePost returned from Supabase
export interface SuePostResponse {
    id: number;
    created_at: string;
    photo_url: string;
    location: string;
    caption: string;
    secret_used: string;
}

// Retrieves all Sue posts, ordered by creation data (newest first)
export async function getSuePosts(): Promise<SuePostResponse[]> {
    const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

    if (error) {
        console.error(error);
        throw error;
    }

    if (!data) {
        return [];
    }

    return data.map((post) => ({
        id: post.id,
        created_at: post.created_at,
        photo_url: post.photo_url || '',
        location: post.location,
        caption: post.caption,
        secret_used: post.secret_used,
    })) as SuePostResponse[];
}