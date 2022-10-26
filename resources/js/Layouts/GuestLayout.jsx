import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";
import { Ostracon } from "@/Components/icons/Ostracon-Std";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-row justify-end items-stretch pt-6 sm:pt-0 bg-primary-500">
            <div className="px-12 py-4 flex flex-col justify-center w-full md:w-1/2 bg-white shadow-xl overflow-hidden sm:rounded-lg">
                <div className="pb-8 self-center">
                    <Link href="/">
                        <Ostracon size={70} color="#363744" />
                    </Link>
                </div>

                {children}
            </div>
        </div>
    );
}
