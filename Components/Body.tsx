"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import NewQues from "./NewQues";

const Body = () => {
  return (
    <ThemeProvider attribute="class">
      <div className="chatStyle h-[100svh]">
        <span className="p-2 w-20 h-20 flex items-center justify-center rounded-full dark:bg-white bg-black">
          <Image
            src="/Images/chatgpt.svg"
            width={500}
            height={500}
            alt="ChatGPT"
            className="aspect-square w-16 h-16 invert dark:invert-0  select-none"
          />
        </span>

        <h1 className="text-xl md:text-3xl dark:text-white">
          How can I help you today?
        </h1>

        <div>
          <NewQues />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default dynamic(() => Promise.resolve(Body), { ssr: false });
