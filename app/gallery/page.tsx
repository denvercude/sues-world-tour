export const dynamic = "force-dynamic";

import UploadLinkPolaroid from "@/components/UploadLinkPolaroid";
import SuePolaroid from "@/components/SuePolaroid";
import { getSuePosts } from "@/lib/getSuePosts";
import TitleBar from "@/components/TitleBar";

export default async function GalleryPage() {
    try {
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
                <div className="w-full min-h-screen border-8 bg-[#d9bcb4] flex flex-col items-center">
                    <TitleBar
                        title="GALLERY"
                        links={[
                            { href: "/upload", text: "Upload", colorClass: "text-[#f0b83e]" },
                            { href: "/", text: "Home", colorClass: "text-[#e23123]" },
                        ]}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
                        <UploadLinkPolaroid />
                        {suePolaroids}
                    </div>
                </div>
            </main>
        );
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return (
            <main>
                <div className="w-full border-8 bg-[#d9bcb4] flex flex-col items-center">
                    <TitleBar
                        title="GALLERY"
                        links={[
                            { href: "/upload", text: "Upload", colorClass: "text-[#f0b83e]" },
                            { href: "/", text: "Home", colorClass: "text-[#e23123]" },
                        ]}
                    />
                </div>
                <div className="flex justify-center items-center mt-8">
                    <p>Failed to load gallery. Please try again later.</p>
                </div>
            </main>
        );
    }
} 