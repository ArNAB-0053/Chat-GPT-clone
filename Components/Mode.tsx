"us client";
import { ThemeProvider, useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <ThemeProvider attribute="class">
      <div className="relative w-full">
        {theme === "dark" && (
          <button className="modeBtn w-full" onClick={() => setTheme("light")}>
            <SunIcon className="text-[#fff000] h-6 w-6" />
            Light Mode
          </button>
        )}
        {theme === "light" && (
          <button className="modeBtn w-full" onClick={() => setTheme("dark")}>
            <MoonIcon className="h-6 w-6 text-white" />
            Dark Mode
          </button>
        )}
      </div>
    </ThemeProvider>
  );
};

export default dynamic(() => Promise.resolve(ThemeChanger), { ssr: false });
