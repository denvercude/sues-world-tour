"use client";

import { Card } from "@/components/retroui/Card";
import { Button } from "@/components/retroui/Button";
import InputWithLabel from "./retroui/InputWithLabel";
import { useState, ChangeEvent } from "react";
import { uploadSueImage } from "@/lib/uploadSueImage";
import { addSuePost } from "@/lib/addSuePost";
import { useRouter } from "next/navigation";
import { Text } from "./retroui/Text";

export default function UploadForm() {
    const router = useRouter();

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

    const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success'>('idle');

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

    const handleUpload = async() => {
        if (uploadStatus === "uploading") return;
        setUploadStatus("uploading");

        let hasError = false;
        const newErrors = { ...errors };

        // --- Required fields ---
        if (!formData.file) {
            newErrors.file = "Please upload a photo";
            hasError = true;
        }

        const trimmedCaption = formData.caption.trim();
        if (!trimmedCaption) {
            newErrors.caption = "Caption cannot be empty";
            hasError = true;
        }

        const trimmedLocation = formData.location.trim();
        if (!trimmedLocation) {
            newErrors.location = "Location cannot be empty";
            hasError = true;
        }

        const trimmedPassword = formData.password.trim();
        if (!trimmedPassword) {
            newErrors.password = "Password cannot be empty";
            hasError = true;
        }

        // --- File type & size ---
        if (formData.file) {
            const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
            if (!allowedTypes.includes(formData.file.type)) {
                newErrors.file = "Only JPG, PNG or GIF images are allowed";
                hasError = true;
            }
            
            const MAX_SIZE = 5 * 1024 * 1024; // 5 MB

            if (formData.file.size > MAX_SIZE) {
                newErrors.file = "Image must be smaller than 5 MB";
                hasError = true;
            }
        }

        // --- Caption length & content ---
        if (formData.caption.length > 200) {
            newErrors.caption = "Caption can be at most 200 characters";
            hasError = true;
        }

        // --- Location format & length ---
        if (formData.location.length > 100) {
            newErrors.location = "Location can be at most 100 characters";
            hasError = true;
        }
        const locRegex = /^[A-Za-z0-9\s,.'-]+$/;
        if (formData.location && !locRegex.test(formData.location)) {
            newErrors.location = "Location contains invalid characters";
            hasError = true;
        }

        // --- Password match ---
        try {
            const response = await fetch("/api/validate-upload", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ password: formData.password })
            });
            if (!response.ok) {
                newErrors.password = "Unable to verify password. Please try again.";
                hasError = true;
            } else {
                const data = await response.json();
                if (!data.valid) {
                    newErrors.password = "Incorrect password!";
                    hasError = true;
                }
            }
        } catch (error) {
            console.error('Password validation failed:', error);
            newErrors.password = "Unable to verify password. Please check your connection.";
            hasError = true;
        }

        setErrors(newErrors);

        if (!hasError) {
            try {
                // Check that formData.file is not null.
                if (!formData.file) {
                    setErrors(prev => ({ ...prev, file: "Please upload a photo" }));
                    return;
                  }
                const photoUrl = await uploadSueImage(formData.file);
                await addSuePost({
                    photoUrl: photoUrl,
                    location: formData.location,
                    caption: formData.caption,
                });
                setUploadStatus("success");
                setTimeout(() => {
                    router.push("/gallery");
                }, 1000);
            } catch (error) {
                console.error("Upload failed:", error);
                setUploadStatus("idle");
                setErrors(prev => ({
                    ...prev,
                    file: error instanceof Error ? error.message : "Upload failed. Please try again."
                }));
            }
        } else {
            setUploadStatus("idle");
        }
    };

    return (
        <Card className="w-full max-w-[320px] shadow-none hover:shadow-none m-2 md:m-5">
            <Card.Content className="px-4 pt-4 pb-0">
                <div className="w-full aspect-square border-dashed border-2 bg-gray-200 flex items-center justify-center">
                    <Text className="text-gray-500 text-sm">Upload Photo</Text>
                </div>
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
                        className="mt-1 mb-4 mx-1"
                        onClick={handleUpload}
                        disabled={uploadStatus === "uploading" || uploadStatus === "success"}
                    >
                        {uploadStatus === "uploading"
                            ? "Uploading..."
                            : uploadStatus === "success"
                            ? "Success!"
                            : "Upload"
                        }
                    </Button>
                </div>
            </Card.Content>
        </Card>
    );
}