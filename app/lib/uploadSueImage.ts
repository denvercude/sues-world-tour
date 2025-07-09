import { supabase } from './supabaseClient';

export async function uploadSueImage(file: File) {
    // Prepends a timestamp in milliseconds to the file-name
    // before storage. This prevents duplicate file names.
    const fileName = `${Date.now()}-${file.name}`;

    // Uploads the file to Supabase storage bucket.
    const { error } = await supabase.storage
    .from('sue-images')
    .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
    });

    // Handle any errors in upload.
    if (error) {
        console.error(error);
        throw error;
    }

    // Retrieve and return the public url to the image.
    const { data: publicUrlData } = supabase.storage
    .from('sue-images')
    .getPublicUrl(fileName);

    return publicUrlData.publicUrl;
};