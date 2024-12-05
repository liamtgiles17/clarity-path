const carouselTheme = {
    "root": {
        "base": "relative h-full w-full",
        "leftControl": "absolute left-0 top-0 flex h-full items-center justify-center px-2 focus:outline-none",
        "rightControl": "absolute right-0 top-0 flex h-full items-center justify-center px-2 focus:outline-none"
    },
    "indicators": {
        "active": {
            "off": "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
            "on": "bg-white dark:bg-gray-800"
        },
        "base": "h-3 w-3 rounded-full",
        "wrapper": "absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    "item": {
        "base": "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
        "wrapper": {
            "off": "w-full flex-shrink-0 transform cursor-default snap-center",
            "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
        }
    },
    "control": {
        "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
        "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
    },
    "scrollContainer": {
        "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
        "snap": "snap-x"
    }
};

const tabsTheme = {
    "base": "flex flex-col gap-2",
    "tablist": {
        "base": "flex text-center",
        "variant": {
            "default": "flex-wrap border-b border-gray-200 dark:border-gray-700",
            "underline": "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",
            "pills": "flex-wrap space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",
            "fullWidth": "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-xs font-medium shadow dark:divide-gray-700 dark:text-gray-400"
        },
        "tabitem": {
            "base": "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-4 focus:ring-cyan-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
            "variant": {
                "default": {
                    "base": "rounded-t-lg",
                    "active": {
                        "on": "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
                        "off": "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    }
                },
                "underline": {
                    "base": "rounded-t-lg",
                    "active": {
                        "on": "active rounded-t-lg border-b-2 border-cyan-600 text-cyan-600 dark:border-cyan-500 dark:text-cyan-500",
                        "off": "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                    }
                },
                "pills": {
                    "base": "",
                    "active": {
                        "on": "rounded-lg bg-cyan-600 text-white",
                        "off": "rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                    }
                },
                "fullWidth": {
                    "base": "ml-0 flex w-full rounded-none first:ml-0",
                    "active": {
                        "on": "active rounded-none bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white",
                        "off": "rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                    }
                }
            },
            "icon": "mr-2 h-5 w-5"
        }
    },
    "tabitemcontainer": {
        "base": "",
        "variant": {
            "default": "",
            "underline": "",
            "pills": "",
            "fullWidth": ""
        }
    },
    "tabpanel": "py-1"
};