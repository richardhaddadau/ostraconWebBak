import React from "react";
import CreatePost from "@/Components/Post/CreatePost";
import Post from "@/Components/Post/Post";

const FeedScreen = (props) => {
    return (
        <>
            <section className="py-6 px-4 flex flex-col items-center gap-4 grow overflow-y-auto">
                <CreatePost />
                <Post />
                <Post />
                <Post />
                <Post />
            </section>
        </>
    );
};

export default FeedScreen;
