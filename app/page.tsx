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
              <div className="w-full h-4/6 bg-black">
                <img src="/images/sue-1.jpeg" alt="sue" className="w-full h-full p-10 border-2 border-white" />
              </div>
              <Text className="text-6xl font-bold pt-5">ABOUT</Text>
              <Text className="pt-5">Sue is a plastic dinosaur who emerged from the sands of Pismo Beach, Ca. She will be on vacation forever. Enjoy her travel blog.</Text>
            </div>
            <div className="w-1/3 h-full m-20 bg-white flex relative py-5 px-5 overflow-hidden">
              <div className="w-4/6 h-full bg-black" />
              <Text className="absolute rotate-90 text-6xl font-bold left-50 bottom-5/12 whitespace-nowrap">
                IN TRANSIT
              </Text>
            </div>
            <div className="w-1/3 h-full m-20 bg-white flex flex-col pt-5 px-5">
              <div className="w-full h-4/6 border-2 bg-black">
              </div>
              <Text className="text-6xl font-bold pt-5">SOMETHING</Text>
              <Text className="pt-5">{"Some other text here. I haven't quite figured out what to put here yet, but it will say something cool and intersting."}</Text>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}