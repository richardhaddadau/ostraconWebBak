import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import SideNav from "@/Components/SideNav";
import {
    Bookmark,
    Flame,
    Globe,
    Home,
    Ostracon,
    Settings,
} from "@/Components/icons/Ostracon-Std";
import TopNav from "@/Components/TopNav";
import {
    Bookmark as BookmarkActive,
    Flame as FlameActive,
    Globe as GlobeActive,
    Home as HomeActive,
    Settings as SettingsActive,
} from "@/Components/icons/Ostracon-Active";
import FeedScreen from "@/Pages/PageComponents/FeedScreen";
import SettingsScreen from "@/Pages/PageComponents/SettingsScreen";
import OPlusScreen from "@/Pages/PageComponents/OPlusScreen";
import ChaptersScreen from "@/Pages/PageComponents/ChaptersScreen";
import TrendingScreen from "@/Pages/PageComponents/TrendingScreen";
import GlobalScreen from "@/Pages/PageComponents/GlobalScreen";

export default function Welcome(props) {
    //States
    const [currentPage, setCurrentPage] = useState("home");

    const pages = {
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
            component: <FeedScreen />,
            sideNav: true,
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
            component: <GlobalScreen />,
            sideNav: true,
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
            component: <TrendingScreen />,
            sideNav: true,
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
            component: <ChaptersScreen />,
            sideNav: true,
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
            component: <OPlusScreen />,
            sideNav: true,
        },
        settings: {
            title: "Settings",
            icon: (
                <Settings
                    size={24}
                    style="fill-secondary-400 hover:fill-secondary-500 translate-all duration-500"
                />
            ),
            iconActive: (
                <Settings
                    size={24}
                    style="fill-secondary-500 translate-all duration-500"
                />
            ),
            component: <SettingsScreen />,
            sideNav: false,
        },
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex flex-col min-h-fit h-screen overflow-hidden">
                <TopNav page={currentPage} setPage={setCurrentPage} />
                <div className="grow relative flex flex-row bg-base-light dark:bg-base-dark h-1">
                    <SideNav
                        page={currentPage}
                        links={pages}
                        setPage={setCurrentPage}
                    />

                    {pages[currentPage].component}
                </div>
            </div>
        </>
    );
}
