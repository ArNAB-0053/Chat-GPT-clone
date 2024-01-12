"use client";
import { ThemeProvider } from "next-themes";
import Body from "@/Components/Body";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <main>
        <Body />
      </main>
    </ThemeProvider>
  );
}
