import React from "react";
import { DocumentData } from "firebase/firestore";
type Props = {
  message: DocumentData;
  index: number;
};

const Message = ({ message, index }: Props) => {
  return (
    <div className="">
      <div
        className={`flex items-start justify-start flex-col gap-1 ${
          index % 2 === 0 ? "" : "mt-4 mb-16"
        }`}
      >
        <span className="flex items-center justify-center gap-x-4 text-md font-semibold dark:text-[#ececf1da] text-black font-[sohne] leading-6 text-[16px]">
          <img
            src={message.user.avatar}
            alt=""
            className="w-6 h-6 rounded"
          />
          {index % 2 === 0 ? "You" : "ChatGPT"}
        </span>
        <p className="text-[14px] text-black dark:text-[#ececf1da] px-10 font-[sohneSpread] font-[600] leading-6">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
