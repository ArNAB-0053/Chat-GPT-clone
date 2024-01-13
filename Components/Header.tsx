'use client'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {
    const [onClick, setOnClick] = useState(false);
    
    return (
        <div className="w-screen h-20 px-20 py-6 md:p-0 absolute top-0 left-0 z-40 trasition-all ease-linear duration-[2s]">
            <Bars3Icon onClick={() => setOnClick(true)} className="text-black dark:text-white w-6 h-6 md:hidden cursor-pointer" />

            <div className={`fixed top-0 ${onClick ? `left-0` : `left-[-100vw]`} md:fixed md:left-0 trans`}>
                <XMarkIcon onClick={() => setOnClick(false)} className={`text-black dark:text-white w-6 h-6 fixed z-10 md:hidden ${onClick ? `left-[16rem]` : `left-[-100vw]`} trans cursor-pointer`}/>
                <Sidebar/>
            </div>
        </div>
    );
};

export default Header;
