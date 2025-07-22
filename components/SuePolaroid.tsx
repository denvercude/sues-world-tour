import { Card } from "@/components/retroui/Card";

interface SuePolaroidProps {
    photoUrl: string;
    caption: string;
    location: string;
    createdAt: string;
}

export default function SuePolaroid(props: SuePolaroidProps) {
    return (
        <div>
            <Card className="w-full max-w-[275px] min-w-[275px] min-h-[355px] shadow-none hover:shadow-none">
                <Card.Content>
                    <div className="w-full aspect-square border border-2">
                        <img src={props.photoUrl} alt={`Sue's photo at ${props.location}`} />
                    </div>
                </Card.Content>
                <Card.Content className="flex-col justify-center items-center">
                    <p className="text-sm text-gray-500">{props.caption}</p>
                    <p className="text-sm text-gray-500">{props.location}</p>
                    <p className="text-sm text-gray-500">{props.createdAt}</p>
                </Card.Content>
            </Card>
        </div>
    );
}