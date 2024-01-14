"use client";
import { loginTexts } from "@/lib/randomQues";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { Typewriter } from "nextjs-simple-typewriter";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const notify = () =>
    toast("This project is created for learning and demonstration purposes only. It is not intended for production use and may not have undergone rigorous testing. Use it at your own risk. The developer takes no responsibility for any potential issues or consequences resulting from the use of this project.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  return (
    <div className=" h-screen w-screen flex items-center justify-center">
      <div className="flex items-center justify-center absolute left-4 top-4">
        <h1 className="md:text-[#D292FF] text-white text-xl font-bold">
          ChatGPT
        </h1>
        <div className="w-4 h-4 rounded-full bg-white md:bg-[#D292FF] ml-2"></div>
      </div>
      <div className="bg-[#00002E] h-screen xl:w-[60vw] md:w-[50vw] items-start justify-start p-6 hidden md:flex">
        <div className="place-self-center w-[90%] h-full flex items-center justify-start text-[#D292FF] text-5xl font-bold">
          <h1>
            <Typewriter
              words={loginTexts}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={30}
              deleteSpeed={40}
              delaySpeed={1400}
            />
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 flex-col h-screen w-screen md:w-[50vw] xl:w-[40vw] bg-black">
        <div className="flex flex-col items-center justify-center gap-6 mt-[-14vh]">
          <h1 className="text-white text-3xl font-bold">Get Started</h1>
          <div className="flex items-center justify-center gap-5 max-[768px]:flex-col">
            <button onClick={() => signIn("google")} className="logBtn">
              Log In
            </button>
            <button onClick={() => signIn("google")} className="logBtn">
              Sign Up
            </button>
          </div>
        </div>
        <span className="flex items-center justify-center gap-1 text-white absolute bottom-20 cursor-auto select-none">
          <Image
            src="/Images/chatgpt.svg"
            width={500}
            height={500}
            alt="ChatGPT"
            className="aspect-square w-10 h-10 invert"
          />
          <p>OpenAI</p>
        </span>
        <div className="absolute bottom-10 text-gray-300/80 flex items-center justify-center gap-2 text-sm">
          <button onClick={notify} className="text-[0.7rem] underline">Terms of use</button>
          <div>|</div>
          <a className="text-[0.7rem] underline" href="https://arnab-here.vercel.app/ " target="_blank" rel="noopener noreferrer" >About me</a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
