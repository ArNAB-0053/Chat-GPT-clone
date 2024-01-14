'use client'
import { db } from "@/firebase";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/solid";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

type Props = {
  id: string;
};

const ChatRow = ({ id }: Props) => {
  const router = useRouter();
  const { data: session } = useSession();
  const pathName = usePathname();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(
      collection(db, "users", session?.user?.email!, "chats", id, "message")
  );

  useEffect(() => {
    if(!pathName) return;

    setActive(pathName.includes(id))
  }, [pathName])
  
  const removeChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, 'chats', id))
    router.replace('/')
  }


  return (
    <Link
      href={`/chat/${id}`}
      className={`hover flex items-center justify-between gap-2 pl-3 pr-4 mr-2 py-2 ${active && 'dark:bg-[#202123] bg-[#685CFE]'} mb-1`}
    >
      <span className="flex items-center justify-start gap-2 ">
        <ChatBubbleLeftIcon className={`msgBtn dark:text-gray-400 text-black  w-4 h-4 ${active && 'text-white dark:text-white'}`} />
        <p className={`msg w-28 overflow-hidden truncate dark:text-gray-400 text-black text-sm ${active && 'text-white dark:text-white'}`}>
          {messages?.docs[messages?.docs.length - 1]?.data().text || <p>New Chat</p>}
        </p>
      </span>
      <TrashIcon onClick={removeChat} className={`dltBtn dark:text-gray-400 text-black w-5 h-5 hover:text-[#ff0000] dark:hover:text-[#ff0000] ${active && 'text-white dark:text-white'}`} />
    </Link>
  );
};

export default ChatRow;
