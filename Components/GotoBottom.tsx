'use client'
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

const ScrollToBottomButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollBottom = window.scrollY + window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    setIsVisible(scrollBottom > 0 && scrollBottom < documentHeight);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <ArrowDownIcon 
      id="scrollToBottomBtn"
      style={{ display: isVisible ? "block" : "none" }}
      onClick={scrollToBottom}
      className="text-black dark:text-white fixed w-12 h-12 right-[50%] translate-x-[50%] md:right-12 xl:right-24 bottom-32 bg-gray-300 dark:bg-gray-600/50 p-3 rounded-full cursor-pointer"
      />
  );
};

export default ScrollToBottomButton;
