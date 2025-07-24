"use client";
import TitleBar from "@/components/TitleBar";
import { Text } from "@/components/retroui/Text";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen">
        <div className="w-full border-8 bg-[#d9bcb4] flex flex-col items-center">
          <TitleBar
            title="SUE'S WORLD TOUR"
            links={[
              { href: "/gallery", text: "Gallery", colorClass: "text-[#e23123]" },
              { href: "/upload", text: "Upload", colorClass: "text-[#f0b83e]" },
            ]}
          />
          <div className="flex flex-col md:flex-row gap-4 p-4 w-5/6 h-3/4 m-3">
            <div className="bg-white flex flex-col items-center w-full md:w-1/3 aspect-[3/4] p-3">
              <div className="bg-black w-full flex-1 flex items-center justify-center">
                <Image src="/images/sue-1.jpeg" alt="about" width={400} height={400} className="max-w-full max-h-full rotate-70 p-10" />
              </div>
              <div className="p-4 flex flex-col gap-4 items-center">
                <Text className="text-black text-6xl font-black">ABOUT</Text>
                <Text>Sue is a plastic dinosaur that emerged from the sands of Pismo Beach, California in Summer 2025. I mailed her to my friend and now she is on vaction forever. Enjoy her travel photos</Text>
              </div>
            </div>
            <div className="bg-white flex w-full md:w-1/3 aspect-[3/4] p-3">
              <div className="bg-black flex-1 flex items-center justify-center">
                <Image src="/images/sue-2.jpeg" alt="about" width={400} height={400} className="max-w-full max-h-full p-20" />
              </div>
              <div className="flex items-center justify-center w-1/3">
                <Text className="text-black text-6xl rotate-[-90deg] font-black whitespace-nowrap">IN TRANSIT</Text>
              </div>
            </div>
            <div className="bg-white flex flex-col items-center w-full md:w-1/3 aspect-[3/4] p-3">
              <div className="bg-black w-full flex-1 flex items-center justify-center">
                <Image src="/images/sue-1.jpeg" alt="about" width={400} height={1000} className="max-w-full max-h-full rotate-180 p-10" />
              </div>
              <div className="p-4">
                <Text className="text-black text-6xl font-black">CREATED BY</Text>
                <Text className="text-black text-xl p-2">Denver Cude</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}