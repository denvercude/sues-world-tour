"use client";

import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";

// Fixed InputWithLabel component
interface InputWithLabelProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
}

export default function InputWithLabel(props: InputWithLabelProps) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input 
        type={props.type} 
        id={props.id} 
        placeholder={props.placeholder}
        className={props.type === "file" ? "cursor-pointer" : ""}
        value={props.type === "file" ? undefined : props.value}
        onChange={props.onChange}
        accept={props.accept}
      />
    </div>
  );
}