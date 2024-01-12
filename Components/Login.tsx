'use client'
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="bg-blue-500 h-screen w-screen flex items-center justify-center flex-col">
      <Image
        src="/Images/chatgpt.svg"
        width={500}
        height={500}
        alt="ChatGPT"
        className="aspect-square w-16 h-16"
      />
      <button onClick={()=> signIn("google")} className="text-white text-3xl">Sign In to continee</button>
    </div>
  );
};

export default Login;
