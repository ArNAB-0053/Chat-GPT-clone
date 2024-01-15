"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { texts } from "@/lib/randomQues";

const NewQues = () => {
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

  function handleButtonClick() {
    const newPrompts = getRandomPrompts();
    setDisplayedPrompts(newPrompts);
  }

  useEffect(() => {
    setInterval(() => {
      setDisplayedPrompts(getRandomPrompts);
    }, 10000);
  }, []);
  return (
    <>
      <div
        className={`grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-6 mt-16 lg:mt-24 place-items-center animate-pulse`}
      >
        {displayedPrompts.map((prompt, index) => (
          <h1
            key={index}
            className="w-[84vw] min-h-16 md:w-[30rem] lg:w-72 border-2 border-solid border-gray-700 dark:border-gray-400/50 px-4 py-3 rounded-lg text-sm text-gray-700 dark:text-gray-400 text-center lg:text-start"
          >
            {prompt}
          </h1>
        ))}
      </div>
      <button onClick={handleButtonClick} className="fixed top-1  right-3 z-40 w-[2.4rem] h-[2.4rem] p-0 md:hidden">
        <Image
          src="/Images/getQues.svg"
          width={500}
          height={500}
          alt="ChatGPT"
          className="aspect-square  invert dark:invert-0 w-full h-full"
        />
      </button>
    </>
  );
};

export default NewQues;
