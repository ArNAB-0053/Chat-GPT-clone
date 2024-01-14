"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className=" h-screen w-screen flex items-center justify-center">
      <div className="bg-[#00002E] h-screen w-[60vw] flex items-start justify-start p-6">
        <div className="flex items-center justify-center">
          <Image
            src="/Images/chatgpt.svg"
            width={500}
            height={500}
            alt="ChatGPT"
            className="aspect-square w-10 h-10 invert"
          />
          <h1 className="text-[#D292FF] text-xl font-bold">ChatGPT</h1>
          <div className="w-4 h-4 rounded-full bg-[#D292FF] ml-2"></div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 flex-col h-screen w-[40vw] bg-black">
        <h1 className="text-white text-3xl font-bold">Get Started</h1>
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={() => signIn("google")}
            className="text-white bg-[#3C46FF] px-20 py-4 text-sm rounded-md"
          >
            Log In
          </button>
          <button
            onClick={() => signIn("google")}
            className="text-white bg-[#3C46FF] px-20 py-4 text-sm rounded-md"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
