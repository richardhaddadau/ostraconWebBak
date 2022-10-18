import React from "react";
import CreatePost from "@/Components/Post/CreatePost";
import Post from "@/Components/Post/Post";
import { Skeleton } from "@mui/material";

const FeedScreen = (props) => {
    return (
        <>
            <section className="py-6 px-4 flex flex-col items-center gap-4 grow overflow-y-auto">
                <CreatePost />

                <article className="p-5 flex flex-col bg-surface-light dark:bg-black rounded-2xl border border-white dark:border-black w-full max-w-2xl">
                    <div className="pb-3 flex flex-col w-full">
                        <Skeleton animation="wave" height={20} width={125} />
                        <Skeleton animation="wave" height={15} width={200} />
                    </div>

                    <div
                        className="-mt-1 dark:border-gray-700 text-primary-500 dark:text-gray-300 overflow-x-hidden"
                        id="post-body"
                    >
                        <Skeleton
                            animation="wave"
                            height={100}
                            width={"100%"}
                        />
                    </div>

                    <div
                        className="pt-3 flex flex-row items-center gap-14 w-full"
                        id="post-interactions"
                    >
                        <Skeleton animation="wave" height={20} width={50} />
                        <Skeleton animation="wave" height={20} width={50} />
                        <Skeleton animation="wave" height={20} width={50} />
                    </div>
                </article>

                <Post />
                <Post />
                <Post />
                <Post />
            </section>
        </>
    );
};

export default FeedScreen;
