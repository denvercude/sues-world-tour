import React from "react";
import { Text } from "@/components/retroui/Text";
import Link from "next/link";

export default function TitleBar() {
    return (
        <div className="flex justify-center items-center h-40 w-full relative">
            <div className="w-full h-full flex flex-col">
                <div className="bg-black h-1/2 flex justify-end items-center gap-12 pr-30">
                    <Link href="./gallery">
                        <Text className="text-[#e23123] font-bold">Gallery</Text>
                    </Link>
                    <Link href="./upload">
                        <Text className="text-[#f0b83e] font-bold">Upload</Text>
                    </Link>
                </div>
                <div className="h-1/2"></div>
            </div>
            <div className="border-2 border-black bg-white px-8 py-2 font-bold shadow-[6px_6px_0px_0px_rgba(34,34,34,1)] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                <Text className="text-2xl">{"SUE&apos;S WORLD TOUR"}</Text>
            </div>
        </div>
    );
}