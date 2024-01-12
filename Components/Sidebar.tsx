"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import ThemeChanger from "./Mode";
import { signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();
  const [popup, setPopup] = useState(false);
  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen w-[16rem] py-3 px-2 bg-gray-300 dark:bg-black relative">
        <button className="hover flex items-center justify-start gap-2 px-2 py-2 w-full">
          <span className="w-7 h-7 flex items-center justify-center bg-white rounded-full">
            <Image
              src="/Images/chatgpt.svg"
              width={500}
              height={500}
              alt="ChatGPT"
              className="aspect-square "
            />
          </span>
          <h2 className="text-black dark:text-white text-md font-bold">
            New Chat
          </h2>
        </button>

        <div className="absolute left-2 bottom-2">
          <ThemeChanger />
          <div
            onClick={() => {
              setPopup(true);
              setTimeout(() => {
                setPopup(false);
              }, 3000);
            }}
            className="flex flex-col items-center justify-center cursor-pointer "
          >
            <button
              onClick={() => {
                signOut();
              }}
              className={`${popup ? `block` : "hidden"}`}
            >
              Log out
            </button>
            {session && (
              <div className="flex items-center justify-center gap-3 hover">
                <img
                  src={session.user?.image!}
                  alt="image"
                  className="rounded-full w-8 h-8 "
                />
                <h1 className="text-black dark:text-white font-semibold">
                  {session.user?.name!}
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Sidebar;
