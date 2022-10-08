import React from "react";

import {
    Bookmark,
    Flame,
    Globe,
    Home,
    Ostracon,
    Settings,
} from "@/Components/icons/Ostracon-Std";

import {
    Bookmark as BookmarkActive,
    Flame as FlameActive,
    Globe as GlobeActive,
    Home as HomeActive,
    Settings as SettingsActive,
} from "@/Components/icons/Ostracon-Active";

const Navigation = (props) => {
    const links = {
        home: {
            title: "Home",
            icon: (
                <Home
                    size={20}
                    style="fill-primary-300 hover:fill-primary-500"
                />
            ),
            iconActive: (
                <HomeActive
                    size={20}
                    style="fill-primary-500 translate-all duration-500"
                />
            ),
            link: "",
        },
        global: {
            title: "Global",
            icon: (
                <Globe
                    size={20}
                    style="fill-primary-300 hover:fill-primary-500 translate-all duration-500"
                />
            ),
            iconActive: (
                <GlobeActive
                    size={20}
                    style="fill-primary-500 translate-all duration-500"
                />
            ),
            link: "",
        },
        trending: {
            title: "Trending",
            icon: (
                <Flame
                    size={20}
                    style="fill-primary-300 hover:fill-primary-500 translate-all duration-500"
                />
            ),
            iconActive: (
                <FlameActive
                    size={20}
                    style="fill-primary-500 translate-all duration-500"
                />
            ),
            link: "",
        },
        chapters: {
            title: "Chapters",
            icon: <Bookmark size={20} />,
            iconActive: (
                <BookmarkActive
                    size={20}
                    style="fill-primary-500 translate-all duration-500"
                />
            ),
            link: "",
        },
        ostraconPlus: {
            title: "Ostracon Plus",
            icon: (
                <Ostracon
                    size={24}
                    style="fill-secondary-400 hover:fill-secondary-500 translate-all duration-500"
                />
            ),
            iconActive: (
                <Ostracon
                    size={24}
                    style="fill-secondary-500 translate-all duration-500"
                />
            ),
            link: "",
        },
        settings: {
            title: "Settings",
            icon: (
                <Settings
                    size={20}
                    style="fill-primary-300 hover:fill-primary-500 translate-all duration-500"
                />
            ),
            iconActive: (
                <SettingsActive
                    size={20}
                    style="fill-primary-500 translate-all duration-500"
                />
            ),
            link: "",
        },
    };

    return (
        <section className="pt-8 flex flex-col gap-5 items-center w-full">
            {Object.keys(links).map((item) => {
                let iconTint =
                    props.page === item
                        ? "fill-primary-500"
                        : "fill-primary-300";

                return (
                    <a
                        href=""
                        className={
                            "p-3.5 rounded-lg hover:shadow-lg dark:bg-white hover:stroke-2 hover:fill-primary-500" +
                            " hover:translate-x-0.5 hover:-translate-y-0.5 transition-all duration-300 " +
                            iconTint
                        }
                        key={item}
                    >
                        {props.page === item
                            ? links[item].iconActive
                            : links[item].icon}
                    </a>
                );
            })}
        </section>
    );
};

export default Navigation;
