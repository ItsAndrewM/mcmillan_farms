import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";

export const footerData = [
    {
        name: "activities",
        link: "/activities",
        submenu: [
            {
                name: "attractions",
                link: "/activities/attractions"
            },
            {
                name: "products",
                link: "/activities/products"
            },
            {
                name: "weddings",
                link: "/activities/weddings"
            },
            {
                name: "school bookings",
                link: "/activities/school-bookings"
            }
        ]
    },
    {
        name: "about us",
        link: "/about-us",
        submenu: [
            {
                name: "our farm",
                link: "/about-us#our-farms"
            },
            {
                name: "meet the farmers",
                link: "/about-us#meet-the-farmers"
            },
            {
                name: "history",
                link: "/about-us#history"
            },
        ]
    },
    {
        name: "contact us",
        link: "/contact-us",
        submenu: [
            {
                name: "support",
                link: "/support"
            },
            {
                name: "careers",
                link: "/careers"
            },
        ]
    },
    {
        name: "follow us",
        link: "/contact-us",
        submenu: [
            {
                name: "facebook",
                link: "https://www.facebook.com/McMillanFarms.CornMaze.and.PumpkinPatch",
                icon: <BsFacebook />
            },
            {
                name: "instagram",
                link: "https://www.instagram.com/mcmillanfarms/",
                icon: <BsInstagram />
            },
            {
                name: "tik tok",
                link: "https://www.tiktok.com/@mcmillanfarms",
                icon: <BsTiktok />
            },

        ]
    }
]