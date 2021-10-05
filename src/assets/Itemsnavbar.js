import React from 'react'
import * as FaIcons from "react-icons/fa";
export const Itemsnavbar = [
    {
        title: "Me",
        path: "/",
        icon: <FaIcons.FaUserAlt />,
        cName: "ItemTab"
    },
    {
        title: "Works",
        path: "/Works",
        icon:<FaIcons.FaBriefcase />,
        cName: "ItemTab"
    },
    {
        title: "Projects",
        path: "/Projects",
        icon:  <FaIcons.FaRocket />,
        cName: "ItemTab"
    },
    {
        title: "Blog",
        path: "/Blog",
        icon:  <FaIcons.FaBlog />,
        cName: "ItemTab"
    },
    {
        title: "Contact",
        path: "/Contact",
        icon:    <FaIcons.FaAddressCard />,
        cName: "ItemTab"
    },
]


