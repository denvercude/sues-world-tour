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

    // Handle any errors in upload using Supabase's documented error codes.
    if (error) {
        console.error('Upload failed:', error.message);

        if (error.message.includes('NoSuchBucket')) {
            throw new Error('Upload failed: Storage bucket not found. Please contact the site admin.');
        } else if (error.message.includes('AccessDenied')) {
            throw new Error('Upload failed: Access denied. Check storage policies.');
        } else if (error.message.includes('EntityTooLarge')) {
            throw new Error('Upload failed: File is too large. Please upload a smaller image.');
        } else if (
            error.message.includes('KeyAlreadyExists') ||
            error.message.includes('ResourceAlreadyExists')
        ) {
            throw new Error('Upload failed: A file with this name already exists.');
        } else if (error.message.includes('InternalError')) {
            throw new Error('Upload failed due to a server error. Please try again later.');
        } else {
            throw new Error(`Upload failed: ${error.message}`);
        }
    }

    // Retrieve and return the public url to the image.
    const { data: publicUrlData } = supabase.storage
    .from('sue-images')
    .getPublicUrl(fileName);

    return publicUrlData.publicUrl;
};