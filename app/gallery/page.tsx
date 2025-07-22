import UploadLinkPolaroid from "@/components/UploadLinkPolaroid";
import SuePolaroid from "@/components/SuePolaroid";
import { getSuePosts } from "@/lib/getSuePosts";

export default async function GalleryPage() {
    const posts = await getSuePosts();
    const displayPosts = posts.slice(0, 20);

    const suePolaroids = displayPosts.map((post) => (
        <SuePolaroid
            key={post.id}
            photoUrl={post.photo_url}
            caption={post.caption}
            location={post.location}
            createdAt={post.created_at}
        />
    ));

    return (
        <main>
            <h1 className="flex justify-center text-7xl">Gallery Page</h1>
            <div className="container mx-auto my-4 px-1 py-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                     <UploadLinkPolaroid />
                     {suePolaroids}
                </div>
             </div>
        </main>
    );
} 