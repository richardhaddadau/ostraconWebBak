import React from "react";

const SettingsScreen = (props) => {
    return (
        <>
            <section className="py-6 px-4 flex flex-col items-center gap-4 grow overflow-y-auto">
                <h3 className="w-full max-w-2xl text-center md:text-left font-bold text-primary-500 uppercase">
                    Account Settings
                </h3>
                <div className="p-3 pb-6 flex flex-col md:flex-row items-center justify-between border-b-2 border-gray-300 text-left w-full max-w-2xl">
                    <div className="font-bold text-primary-500 dark:text-white">
                        Change nickname
                    </div>
                    <div className="flex flex-row gap-1.5 text-sm font-bold text-primary-300 dark:text-gray-700">
                        Archer
                    </div>
                </div>

                <div className="p-3 pb-6 flex flex-col md:flex-row items-center justify-between border-b-2 border-gray-300 text-left w-full max-w-2xl">
                    <div className="font-bold text-primary-500 dark:text-white">
                        Change handle
                    </div>
                    <div className="flex flex-row gap-1.5 text-sm font-bold text-primary-300 dark:text-gray-700">
                        randy
                    </div>
                </div>

                <div className="p-3 pb-6 flex flex-col md:flex-row items-center justify-between border-b-2 border-gray-300 text-left w-full max-w-2xl">
                    <div className="font-bold text-primary-500 dark:text-white">
                        Change email address
                    </div>
                    <div className="flex flex-row gap-1.5 text-sm font-bold text-primary-300 dark:text-gray-700">
                        Archer
                    </div>
                </div>

                <div className="p-3 pb-6 flex flex-col md:flex-row items-center justify-between border-b-2 border-gray-300 text-left w-full max-w-2xl">
                    <div className="font-bold text-primary-500 dark:text-white">
                        Change password
                    </div>
                    <div className="flex flex-row gap-1.5 text-sm font-bold text-primary-300 dark:text-gray-700">
                        *****
                    </div>
                </div>

                <div className="p-3 pb-6 flex flex-col md:flex-row items-center justify-between border-b-2 border-gray-300 text-left w-full max-w-2xl">
                    <div className="font-bold text-primary-500 dark:text-white">
                        Show date of birth
                    </div>
                    <div className="flex flex-row gap-1.5 text-sm font-bold text-primary-300 dark:text-gray-700">
                        Archer
                    </div>
                </div>
            </section>
        </>
    );
};

export default SettingsScreen;
