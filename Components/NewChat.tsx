import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NewQues from "./NewQues";

const NewChat = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        // messages: [],
        userId: session?.user?.email!,
        createAt: serverTimestamp(),
      }
    );

    router.push(`/chat/${doc.id}`);
  };

  return (
    <button
      onClick={createNewChat}
      id="newchat"
      className="hover newChat flex items-center justify-between gap-2 px-2 py-2 h-12 w-full mb-6 hover:text-white active:scale-[0.9] trans"
    >
      <div className="flex items-center justify-start gap-2">
        <span className="w-7 h-7 flex items-center justify-center bg-white rounded-full">
          <Image
            src="/Images/chatgpt.svg"
            width={500}
            height={500}
            alt="ChatGPT"
            className="aspect-square select-none"
          />
        </span>
        <h2 className="text-md font-bold dark:text-white text-black">
          New Chat
        </h2>
      </div>
      <Image
        src="/Images/getQues.svg"
        width={500}
        height={500}
        alt="ChatGPT"
        id="getques"
        className=" aspect-square invert dark:invert-0 w-[2.4rem] h-[2.4rem] select-none"
      />
    </button>
  );
};

export default NewChat;
