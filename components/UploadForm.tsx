"use client";

import { Card } from "@/components/retroui/Card";
import { Button } from "@/components/retroui/Button";
import InputWithLabel from "./retroui/InputWithLabel";
import { useState, ChangeEvent } from "react";

export default function UploadForm() {
    const [formData, setFormData] = useState({
        caption: "",
        password: "",
        location: "",
        file: null as File | null
    });
    
    const [errors, setErrors] = useState({
        caption: "",
        password: "",
        location: "",
        file: ""
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        
        // Clear error when user starts typing
        if (errors[id as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [id]: "" }));
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData(prev => ({ ...prev, file }));
        
        // Clear file error when a file is selected
        if (errors.file) {
            setErrors(prev => ({ ...prev, file: "" }));
        }
    };

    const handleUpload = () => {
        let hasError = false;
        const newErrors = { ...errors };
        
        // Validate file
        if (!formData.file) {
            newErrors.file = "Please upload a photo";
            hasError = true;
        }
        
        // Validate caption
        if (!formData.caption.trim()) {
            newErrors.caption = "Caption cannot be empty";
            hasError = true;
        }
        
        // Validate location
        if (!formData.location.trim()) {
            newErrors.location = "Location cannot be empty";
            hasError = true;
        }
        
        // Validate password
        if (!formData.password.trim()) {
            newErrors.password = "Password cannot be empty";
            hasError = true;
        }
        
        setErrors(newErrors);
        
        if (!hasError) {
            alert("Upload successful!");
        }
    };

    return (
        <Card className="w-[350px] shadow-none hover:shadow-none">
            <Card.Content className="px-4 pt-4 pb-0">
                <div className="w-full aspect-square border-dashed border-2"></div>
            </Card.Content>
            <Card.Content className="flex-col justify-content items-center">
                <InputWithLabel
                    label="Upload Photo"
                    type="file"
                    id="file"
                    placeholder=""
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <p className={`flex justify-center text-xs mt-1 h-3 ${errors.file ? "text-red-500" : "invisible"}`}>
                    {errors.file}
                </p>
                
                <InputWithLabel 
                    label="Caption" 
                    type="text" 
                    id="caption" 
                    placeholder="Write whatever you want"
                    value={formData.caption}
                    onChange={handleInputChange}
                />
                <p className={`flex justify-center text-xs mt-1 h-3 ${errors.caption ? "text-red-500" : "invisible"}`}>
                    {errors.caption}
                </p>
                
                <InputWithLabel 
                    label="Location" 
                    type="text" 
                    id="location" 
                    placeholder="Where is she now?"
                    value={formData.location}
                    onChange={handleInputChange}
                />
                <p className={`flex justify-center text-xs mt-1 h-3 ${errors.location ? "text-red-500" : "invisible"}`}>
                    {errors.location}
                </p>
                
                <InputWithLabel 
                    label="Password" 
                    type="password" 
                    id="password" 
                    placeholder="What's the password?"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <p className={`flex justify-center text-xs mt-1 h-3 ${errors.password ? "text-red-500" : "invisible"}`}>
                    {errors.password}
                </p>
                
                <div className="flex justify-center pt-1.5">
                    <Button 
                        className="m-1"
                        onClick={handleUpload}
                    >
                        Upload
                    </Button>
                </div>
            </Card.Content>
        </Card>
    );
}