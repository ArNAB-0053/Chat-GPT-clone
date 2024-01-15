import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/Components/SessionProvider";
import { getServerSession } from "next-auth";
import Login from "@/Components/Login";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Header from "@/Components/Header";
import Notify from "@/Components/Notify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatGPT clone",
  description: "ChatGPT 3.5 clone version",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  // console.log(session)

  return (
    <html lang="en" className="h-[100svh]">
      <body className={`${inter.className} overflow-x-hidden scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-gray-300 dark:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 height-[100svh]`}>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex items-end justify-end bg-gray-200 dark:bg-[#343541] flex-col ">
              <Header/>
              <Notify/>
              <div>{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
