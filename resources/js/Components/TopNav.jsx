import { Ostracon } from "@/Components/icons/Ostracon-Std";
import React from "react";

const TopNav = () => {
    return (
        <nav className="flex flex-row items-center w-full h-14 bg-primary-500 dark:bg-black">
            <a className=" cursor-pointer flex items-center justify-center w-16 min-h-full fill-white">
                <Ostracon size={30} />
            </a>
        </nav>
    );
};

export default TopNav;
