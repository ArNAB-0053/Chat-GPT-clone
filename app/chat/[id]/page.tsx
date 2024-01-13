import Chat from "@/Components/Chat";
import ChatInput from "@/Components/ChatInput";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const ChatPage = ({ params: { id } }: Props) => {
  return (
    <div className="bg-gray-100 dark:bg-[#343541] w-screen md:w-[calc(100vw-16rem)] flex items-center justify-start flex-col min-h-screen px-10 lg:px-36 lg:xl:px-48 xl:2xl:px-80 pt-16 pb-24">
      <div className="w-full dark:bg-[#343541] bg-[#F3F4F6] text-center fixed top-0 h-[7vh] flex items-center justify-center">
        <h1></h1>
      </div>
      <div className=""><Chat chatId={id} /></div>
      <div className="fixed bottom-0 flex items-center justify-center">
        <ChatInput chatId={id} />
      </div>
    </div>
  );
};

export default ChatPage;
