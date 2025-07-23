"use client";
import TitleBar from "@/components/TitleBar";
import { Text } from "@/components/retroui/Text";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen">
        <div className="h-full w-full border-8 bg-[#d9bcb4]">
          <TitleBar />
          <div className="h-3/4 w-full flex justify-center items-center p-10">
            <div className="w-1/3 h-full m-20 bg-white flex flex-col pt-5 px-5">
              <div className="w-full h-4/6 border-2 bg-black" />
              <Text className="text-6xl font-bold pt-5">ABOUT</Text>
            </div>
            <div className="w-1/3 h-full m-20 bg-white flex flex-row py-5 px-5">
              <div className="w-4/6 h-full border-2 bg-black" />
            </div>
            <div className="w-1/3 h-full m-20 bg-white flex flex-col pt-5 px-5">
              <div className="w-full h-4/6 border-2 bg-black" />
              <Text className="text-6xl font-bold pt-5">SOMETHING</Text>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}