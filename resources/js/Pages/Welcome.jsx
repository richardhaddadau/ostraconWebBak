import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import SideNav from "@/Components/SideNav";
import {
    Attach,
    Clap,
    Comment,
    NewPost,
    Ostracon,
} from "@/Components/icons/Ostracon-Std";
import TopNav from "@/Components/TopNav";
import Post from "@/Components/Post/Post";
import CreatePost from "@/Components/Post/CreatePost";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex flex-col min-h-fit h-screen overflow-hidden">
                <TopNav />
                <div className="grow relative flex flex-row bg-base-light dark:bg-base-dark h-1">
                    <SideNav page="home" />

                    <section className="py-6 px-4 flex flex-col items-center gap-4 grow overflow-y-auto">
                        <CreatePost />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </section>
                </div>
            </div>
        </>
    );
}
