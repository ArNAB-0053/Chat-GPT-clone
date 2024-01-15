"use client";
import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "next-themes";
import ThemeChanger from "./Mode";
import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";

const Sidebar = () => {
  const { data: session } = useSession();
  const [popup, setPopup] = useState(false);

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createAt", "desc")
      )
  );

  const divRef:any = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setPopup(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  // console.log(chats);
  return (
    <ThemeProvider attribute="class">
      <div
        id="Sidebar"
        className="dark:bg-black  bg-[#fff] h-screen w-[16rem] px-2 py-2"
      >
        <div className="h-[7vh] w-full">
          <NewChat />
        </div>

        {/* Creating sidebar chat section */}
        <div className="h-[84vh] w-full scrollbarStyle">
          {chats?.docs.map((chat) => (
            <ChatRow id={chat.id} />
          ))}
        </div>

        <div
          className={`dark:bg-black bg-transparent h-[7vh] w-full flex items-center justify-center flex-col`}
        >
          <div className="flex flex-col items-center justify-center absolute left-2 bottom-[3.8rem] w-[15rem]">
            <div
              className={`bg-[#685CFE] dark:bg-[#202123] w-full rounded-lg py-3 flex items-center justify-center flex-col ${
                popup ? `block` : "hidden"
              } trans`}
            >
              <button className="hover:bg-gray-700/50 rounded-lg text-white w-[91%]">
                <ThemeChanger />
              </button>
              <button
                onClick={() => {
                  signOut();
                }}
                className={` flex items-center justify-start gap-[0.9rem] px-[1.7rem] py-2 hover:bg-gray-700/50  text-white rounded-lg w-[91%]`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-[1.2rem] h-[1.2rem] text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                  />
                </svg>
                Log out
              </button>
            </div>
          </div>

          {session && (
            <button
              ref={divRef}
              onClick={() => {
                setPopup((prevPopup) => !prevPopup);
              }}
              className={`flex items-center justify-center gap-3 hover px-2 py-2 w-[15rem] cursor-pointer hover:text-white 
              ${
                popup
                  ? `bg-[#685CFE] dark:bg-[#202123] text-white hover:bg-[#413aa0] dark:hover:bg-gray-700/50`
                  : `bg-transparent`
              }
              `}
            >
              <img
                src={session.user?.image!}
                alt="image"
                className="rounded-full w-8 h-8 "
              />
              <h1
                className={` text-sm ${
                  popup ? `text-white` : `dark:text-white text-black`
                } font-semibold `}
              >
                {session.user?.name!}
              </h1>
            </button>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Sidebar;
