import UploadLinkPolaroid from "@/components/UploadLinkPolaroid";
import SuePolaroid from "@/components/SuePolaroid";

export default function GalleryPage() {
    return (
        <main>
            <h1 className="flex justify-center text-7xl">Gallery Page</h1>
            <div className="h-screen flex justify-center items-center">
                <UploadLinkPolaroid />
                <SuePolaroid />
            </div>
        </main>
    );
} 