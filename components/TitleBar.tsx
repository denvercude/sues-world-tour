import React from "react";
import { Text } from "@/components/retroui/Text";
import Link from "next/link";

type TitleBarProps = {
  title: string;
  links: { href: string; text: string; colorClass?: string }[];
};

export default function TitleBar({ title, links }: TitleBarProps) {
  return (
    <div className="flex justify-center items-center h-32 md:h-40 w-full relative">
      <div className="w-full h-full flex flex-col">
        <div className="bg-black h-1/2 flex justify-center md:justify-end items-center gap-12 px-4 md:pr-30">
          {links.map((link, idx) => (
            <Link key={idx} href={link.href} aria-label={`Navigate to ${link.text}`}>
              <Text className={`${link.colorClass ?? "text-white"} font-bold hover:underline mb-5`}>
                {link.text}
              </Text>
            </Link>
          ))}
        </div>
        <div className="h-1/2"></div>
      </div>
      <div className="border-2 border-black bg-white px-4 md:px-8 py-2 font-bold shadow-[6px_6px_0px_0px_rgba(34,34,34,1)] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
        <Text className="text-xl md:text-2xl">{title}</Text>
      </div>
    </div>
  );
}