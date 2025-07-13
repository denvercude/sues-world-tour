import { Card } from "@/components/retroui/Card";
import { Button } from "@/components/retroui/Button";
import InputStyleWithLabel from "./retroui/InputWithLabel";

export default function UploadForm() {
    return (
        <Card className="w-[350px] shadow-none hover:shadow-none">
            <Card.Content>
                <div className="w-full aspect-square border-dashed border-2"></div>
            </Card.Content>
            <Card.Content className="flex-col justify-content items-center">
                <InputStyleWithLabel label="Upload Photo" type="file" id="file" placeholder="" />
                <InputStyleWithLabel label="Caption" type="text" id="caption" placeholder="Write whatever you want" />
                <InputStyleWithLabel label="Location" type="text" id="location" placeholder="Where is she now?" />
                <InputStyleWithLabel label="Password" type="password" id="password" placeholder="What's the password?" />
                <Button className="m-1">Upload</Button>
            </Card.Content>
        </Card>
    );
}
