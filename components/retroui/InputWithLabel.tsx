import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";

interface InputWithLabelProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
}

export default function InputStyleWithLabel(props: InputWithLabelProps) {
  return (
    <div className="w-full grid gap-1.5 p-2">
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input 
        type={props.type} 
        id={props.id} 
        placeholder={props.placeholder}
        className={props.type === "file" ? "cursor-pointer" : ""}
      />
    </div>
  );
}