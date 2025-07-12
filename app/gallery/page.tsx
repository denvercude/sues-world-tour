import UploadLinkPolaroid from "@/components/UploadLinkPolaroid";

export default function GalleryPage() {
    return (
        <main>
            <h1 className="flex justify-center text-7xl">Gallery Page</h1>
            <div className="h-screen flex justify-center items-center">
                <UploadLinkPolaroid />
            </div>
        </main>
    );
} 