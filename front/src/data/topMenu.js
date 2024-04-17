export const topMenu = [
    {
        to: "/", name: "Home"
    },
    {
        to: "/swiper", name: "Swiper",
        submenu: [
            {
                to: "Swiper1",
                name: "Swiper1"
            },
            {
                to: "Swiper2",
                name: "Swiper2"
            },
        ]
    },
    { to: "/pager", name: "Pagenation",
    submenu: [
        {
            to: "pager1",
            name: "pager1"
        },
        {
            to: "Pager2",
            name: "Pager2"
        },
    ]
    },
    { to: "/todo", name: "TodoList" },
    { to: "/redux", name: "Redux" },
    { to: "/api", name: "API" },
];