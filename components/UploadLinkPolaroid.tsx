import { Card } from "@/components/retroui/Card";
import { Button } from "@/components/retroui/Button"
import Link from "next/link";

export default function UploadLinkPolaroid() {
    return (
        <Card className="w-full max-w-[275px] min-w-[275px] min-h-[355px] max-h-[355px] shadow-none hover:shadow-none">
            <Card.Content>
                <div className="w-full aspect-square border-dashed border-2"></div>
            </Card.Content>
            <Card.Content className="flex-col justify-center items-center">
                <Link href="/upload" aria-label="Navigate to upload page">
                    <Button className="m-1">Add a photo</Button>
                </Link>
            </Card.Content>
        </Card>
    );
}