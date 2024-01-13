'use client'
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");
  return (
    <div className="chatStyle px-8 lg:px-32 lg:xl:px-44 xl:2xl:px-72 py-3 ">
      <form action='form' className="flex items-center justify-center bg-transparent dark:bg-[#343541] px-4 py-3 border-solid border-zinc-500/50 border-2 rounded-2xl w-full z-10">
        <input
          type="text"
          placeholder="Message ChatGPT..."
          value={prompt}
          onChange={(e) => {
           setPrompt(e.target.value);
          }}

          className="outline-none bg-transparent w-full text-md"
        />

        <button>
            <PaperAirplaneIcon className="w-6 h-6 text-gray-500/50 dark:hover:text-white hover:text-black rotate-[-45deg] hover:rotate-0 trans" />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
