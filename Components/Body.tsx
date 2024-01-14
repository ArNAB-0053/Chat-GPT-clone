"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import {texts} from "@/lib/randomQues";

const Body = () => {
  const [len, setLen] = useState(4);
  const [displayedPrompts, setDisplayedPrompts] = useState(() =>
    getRandomPrompts()
  );

  // useEffect(() => {
  //   if (window.innerWidth > 768) {
  //     setLen(4);
  //   } else {
  //     setLen(2);
  //   }
  // }, []);

  function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
  }

  function getRandomPrompts() {
    const randomPrompts = Array.from({ length: len }, () => getRandomPrompt());
    return randomPrompts;
  }

  useEffect(() => {  
    setInterval(()=>{
      setDisplayedPrompts(getRandomPrompts);
    }, 10000)
  }, []);

  return (
    <ThemeProvider attribute="class">
      <div className="chatStyle h-screen">
        <span className="p-2 w-20 h-20 flex items-center justify-center rounded-full dark:bg-white bg-black">
          <Image
            src="/Images/chatgpt.svg"
            width={500}
            height={500}
            alt="ChatGPT"
            className="aspect-square w-16 h-16 invert dark:invert-0  "
          />
        </span>

        <h1 className="text-3xl dark:text-white">How can I help you today?</h1>

        <div className={`grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-6 mt-24 place-items-center animate-pulse`}>
          {displayedPrompts.map((prompt, index) => (
            <h1 key={index} className="w-[95%] min-h-16 lg:w-72 border-2 border-solid border-gray-700 dark:border-gray-400/50 px-4 py-3 rounded-lg text-sm text-gray-700 dark:text-gray-400 text-center lg:text-start">
              {prompt}
            </h1>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default dynamic(() => Promise.resolve(Body), { ssr: false });
