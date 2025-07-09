import { supabase } from './supabaseClient';

export async function uploadSueImage(file: File) {
    // Check if there even is a file.
    if (!file) {
        throw new Error('File is required');
    }

    // Check if the file is an image.
    if(!file.type.startsWith('image/')){
        throw new Error('File must be an image');
    }

    // Check that the file isn't > 5MB
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
        throw new Error('File size must be less than 5MB');
    }

    // Sanitize the file name (replace all characters not in a-z, A-Z, 0-9, dot, dash
    // with an underscore).
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');

    // Prepends a timestamp in milliseconds to the file-name
    // before storage. This prevents duplicate file names.
    const fileName = `${Date.now()}-${sanitizedName}`;

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

    // Verify the public URL was generated successfully
    if (!publicUrlData?.publicUrl) {
        throw new Error('Failed to generate public URL for uploaded image');
    }

    return publicUrlData.publicUrl;
};