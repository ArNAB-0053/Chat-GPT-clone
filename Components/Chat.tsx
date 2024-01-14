"use client";
import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";
import Body from "./Body";

type Props = {
  chatId: string;
};

const Chat = ({ chatId }: Props) => {
  const { data: session } = useSession();
  const [messages] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats", chatId, 'message'),
        orderBy("createAt", 'asc')
      )
  );

  return (
    <div className="flex w-full items-start justify-start flex-col ">
      {messages?.empty && (
          <div className="absolute left-0 md:left-[16rem] top-0">
            <Body/>
          </div>
      )}

      {messages?.docs.map((msg, messageIndex) => (
        <Message key={msg.id} message={msg.data()} index={messageIndex} />
      ))}
    </div>
  );
};

export default Chat;
