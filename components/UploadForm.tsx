import { Card } from "@/components/retroui/Card";
import { Button } from "@/components/retroui/Button";
import InputStyleWithLabel from "./retroui/InputWithLabel";

export default function UploadForm() {
    return (
        <div>
            <Card className="w-[277px] h-[410px] shadow-none hover:shadow-none flex flex-col">
                <Card.Content className="flex flex-col justify-center items-center">
                    <InputStyleWithLabel label="Image Upload" type="file" id="file" placeholder=""/>
                    <InputStyleWithLabel label="Caption" type="text" id="caption" placeholder="Say whatever you want!"/>
                    <InputStyleWithLabel label="Location" type="text" id="location" placeholder="Where is she now?"/>
                    <InputStyleWithLabel label="Password" type="text" id="password" placeholder="Enter Sue's password"/>
                    <Button className="m-2">Post!</Button>
                </Card.Content>
            </Card>
        </div>
    );
}