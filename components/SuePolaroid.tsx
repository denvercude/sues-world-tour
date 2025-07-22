import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

interface SuePolaroidProps {
    photoUrl: string;
    caption: string;
    location: string;
    createdAt: string;
}

export default function SuePolaroid(props: SuePolaroidProps) {
    return (
        <div>
            <Card className="w-full max-w-[275px] min-w-[275px] min-h-[355px] max-h-[355px] shadow-none hover:shadow-none">
                <Card.Content>
                    <div className="w-full aspect-square border-2">
                        <img src={props.photoUrl} alt={`Sue's photo at ${props.location}`} className="w-full h-full object-cover" />
                    </div>
                </Card.Content>
                <Card.Content className="flex-col justify-center items-center">
                    <Text as="p" className="text-md">{props.caption}</Text>
                    <Text as="p" className="text-md">{props.location}</Text>
                    <Text as="p" className="text-md">{props.createdAt.split("T")[0]}</Text>
                </Card.Content>
            </Card>
        </div>
    );
}