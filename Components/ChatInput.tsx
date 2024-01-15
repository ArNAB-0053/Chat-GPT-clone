"use client";
import { db } from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  // useSWR to fetch model
  const model = "gpt-3.5-turbo";

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name!}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "message"
      ),
      message
    );

    // Toast notification for loading
    const notify = toast.loading("Thinking...");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      // Toast notifiactin for successful
      toast.success('Responded!', { id: notify })
    });
  };

  return (
    <div className="chatStyle px-8 lg:px-32 lg:xl:px-44 xl:2xl:px-72 py-3 ">
      <form
        onSubmit={sendMessage}
        action="form"
        className="flex items-center justify-center bg-transparent dark:bg-[#343541] px-4 py-3 border-solid border-zinc-500/50 border-2 rounded-2xl w-full z-10"
      >
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
      <p className="text-sm dark:text-gray-500/50 text-gray-600/50  mb-4 mt-3">Made with ❤️ for learning purposes</p>
    </div>
  );
};

export default ChatInput;
