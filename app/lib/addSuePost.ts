import { supabase } from './supabaseClient';

// Defines the TypeScript interface, provides a blueprint
// for what shape the post object should have.
interface AddSuePostParams {
    photoUrl: string;
    location: string;
    caption: string;
    secretUsed: string;
}

// The first part of this function uses the interface to more cleanly
// destructure the passed in parameters.
// It does the same thing that this would:
// function addSuePost(params: AddSuePostParams) {
// const photoUrl = params.photoUrl;
// ...
// }
export async function addSuePost({
    photoUrl,
    location,
    caption,
    secretUsed,
}: AddSuePostParams) {
    // This part of the function targets the posts table and
    // inserts a new row with the data from the parameters passed in.
    // Supabase insert() method expects an array, allowing multiple row
    // insertions at once. In our case, we are only inserting
    // 1 row.
    const { data, error } = await supabase.from('posts').insert([
        {
            photo_url: photoUrl,
            location,
            caption,
            secret_used: secretUsed,
        },
    ]);

    // The function above immediatley pulls out the response objects from
    // Supabase into error and data variable, so they are ready to use.

    // Handle errors in database insertion
    if(error) {
        throw new Error(`Failed to add post: ${error.message}`);
    }

    return data;
}