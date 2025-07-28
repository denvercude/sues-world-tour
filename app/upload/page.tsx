import TitleBar from "@/components/TitleBar";
import UploadForm from "@/components/UploadForm";

export default function UploadPage() {
    return (
        <div className="w-screen h-screen border-8 bg-[#d9bcb4] flex flex-col items-center">
            <TitleBar
                title="UPLOAD A PHOTO"
                links={[
                    { href: "/gallery", text: "Gallery", colorClass: "text-[#e23123]" },
                    { href: "/", text: "Home", colorClass: "text-[#f0b83e]" },
                ]}
            />
            <UploadForm />
        </div>
    );
} 