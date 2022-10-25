import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-row justify-end items-stretch pt-6 sm:pt-0 bg-surface-light">
            <div className="px-12 py-4 flex flex-col justify-center w-full md:w-1/2 bg-white shadow-xl overflow-hidden sm:rounded-lg">
                <div>
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    </Link>
                </div>

                {children}
            </div>
        </div>
    );
}
