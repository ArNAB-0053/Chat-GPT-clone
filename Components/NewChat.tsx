import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NewChat = () => {
   const router = useRouter();
   const {data : session} = useSession();

   const createNewChat =async () => {
      const doc = await addDoc(
        collection(db, "users", session?.user?.email!, "chats"), {
          messages: [],
          userId: session?.user?.email!,
          createAt: serverTimestamp()
        }
      )

      router.push(`/chat/${doc.id}`)
   }


  return (
    <button onClick={createNewChat} className="hover flex items-center justify-start gap-2 px-2 py-2 w-full">
      <span className="w-7 h-7 flex items-center justify-center bg-white rounded-full">
        <Image
          src="/Images/chatgpt.svg"
          width={500}
          height={500}
          alt="ChatGPT"
          className="aspect-square "
        />
      </span>
      <h2 className="text-black dark:text-white text-md font-bold">New Chat</h2>
    </button>
  );
};

export default NewChat;
