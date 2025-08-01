import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

interface SuePolaroidProps {
    photoUrl: string;
    caption: string;
    location: string;
    createdAt: string;
}

export default function SuePolaroid({ photoUrl, caption, location, createdAt }: SuePolaroidProps) {
    return (
        <div>
            <Card className="w-full max-w-[275px] min-w-[275px] min-h-[355px] shadow-none hover:shadow-none mx-2 my-2">
                <Card.Content>
                    <div className="w-full aspect-square border-2">
                        <img src={photoUrl} alt={`Sue's photo at ${location}`} className="w-full h-full object-cover" />
                    </div>
                </Card.Content>
                <Card.Content className="flex-col justify-center items-center pb-1" role="contentinfo">
                    <Text as="p" className="text-md" aria-label="Photo caption">{caption}</Text>
                    <Text as="p" className="text-md" aria-label="Photo location and Date">{location}</Text>
                    <Text as="p" className="text-md" aria-label="Photo date">
                        {new Date(createdAt).toLocaleDateString()}
                    </Text>
                </Card.Content>
            </Card>
        </div>
    );
}