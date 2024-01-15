"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [onClick, setOnClick] = useState(false);

  return (
    <div className="w-screen h-20 px-20 py-6 md:p-0 absolute top-0 left-0 z-40 trasition-all ease-linear duration-[2s]">
      <div className="bg-zinc-700 dark:bg-[#202123]  w-screen h-[3.5rem] fixed left-0 top-0 md:bg-transparent md:dark:bg-transparent ">
        <div className="w-screen h-[3rem] bg-gray-200 dark:bg-[#343541] border-solid border-b-[0.5px] border-white/20 md:border-none">
          {/* <Bars3Icon
            onClick={() => setOnClick(true)}
            className="text-black dark:text-white w-6 h-6 md:hidden cursor-pointer top-3 left-3 absolute"
          /> */}
          <button
            onClick={() => setOnClick(true)}
            className="w-6 h-6 md:hidden cursor-pointer top-3 left-3 absolute select-none"
          >
            <Image
              src="/Images/bars.svg"
              width={500}
              height={500}
              alt="ChatGPT"
              className="aspect-square  invert dark:invert-0 w-full h-full "
            />
          </button>
          <h1 className="absolute left-[50%] top-3 translate-x-[-50%] font-[900] font-[sohne] text-xl md:hidden text-black dark:text-white select-none">
            ChatGPT
          </h1>
        </div>
      </div>

      <div
        className={`fixed top-0 ${
          onClick ? `left-0` : `left-[-100vw]`
        } md:fixed md:left-0 trans`}
      >
        <XMarkIcon
          onClick={() => setOnClick(false)}
          className={`text-white dark:text-white w-10 h-10 p-1 fixed z-10 top-4  md:hidden ${
            onClick ? `left-[16rem]` : `left-[-100vw]`
          } trans cursor-pointer border-[0.15rem] border-solid border-[#685CFE] bg-[#685CFE] dark:bg-black dark:border-white`}
        />
        <Sidebar />
      </div>
    </div>
  );
};

export default Header;
