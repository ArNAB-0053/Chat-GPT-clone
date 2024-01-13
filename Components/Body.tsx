"use client";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";

const Body = () => {
  return (
    <ThemeProvider attribute="class">
      <div className="chatStyle h-screen">
        <span className="p-2 w-20 h-20 flex items-center justify-center rounded-full">
          <Image
            src="/Images/chatgpt.svg"
            width={500}
            height={500}
            alt="ChatGPT"
            className="aspect-square w-16 h-16"
          />
        </span>

        <h1 className="text-3xl dark:text-white">How can I help you today?</h1>
      </div>
    </ThemeProvider>
  );
};

export default dynamic(() => Promise.resolve(Body), { ssr: false });
