import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import NavBar from "@/Components/NavBar";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="p-4 relative flex items-top justify-center min-h-screen bg-base-light dark:bg-base-dark sm:items-center sm:pt-0">
                <div className="w-full">
                    <NavBar />
                </div>
            </div>
        </>
    );
}
