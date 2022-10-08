import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Navigation = () => {
    const links = {
        home: {
            title: "Home",
            icon: "",
            link: "",
        },
        chapters: { title: "Chapters", icon: "", link: "" },
        trending: { title: "Trending", icon: "", link: "" },
        ostraconPlus: { title: "Ostracon Plus", icon: "", link: "" },
        settings: { title: "Settings", icon: "", link: "" },
        help: { title: "Help and Support", icon: "", link: "" },
    };

    return (
        <>
            {Object.keys(links).map((item) => (
                <div>{links[item].title}</div>
            ))}
        </>
    );
};

export default Navigation;
