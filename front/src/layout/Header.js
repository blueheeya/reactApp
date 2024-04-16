import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
function Header() {
    const topMenu = [
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
            ,
        },
        { to: "/pager", name: "Pagenation",
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
        , },
        { to: "/todo", name: "TodoList" },
        { to: "/redux", name: "Redux" },
        { to: "/api", name: "API" },
    ]
    const userMenu = [
        { to: "/login", name: "로그인" },
        { to: "/Regist", name: "회원가입" }
    ]

    return (
        <header className="w-full bg-white h-16 py-5 shadow-md">
            <div className="container m-auto flex justify-between h-full items-center">
                <h1 className="min-w-[150px] font-semibold text-blue-800">React를 공부하자!</h1>
                <div className="flex w-full justify-between">
                    <ul className="flex topMenu">
                        {
                            topMenu.map((menu, i) => {
                                return (
                                    <>
                                        <MenuItems items={menu} key={i} />
                                    </>
                                )
                            })
                        }
                    </ul>
                    <div className="flex gap-2">
                        {userMenu.map((item, i) => {
                            return (
                                <>
                                    <li key={i}><Link to={item.to} className="rounded-md p-2  font-semibold">{item.name}</Link></li>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </header>
    )
}
const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
    const dropView = () => {
        setDropdown(true);
    }
    return (
        <>
            <li className="menu-items">
                {items.submenu ? (
                    <>
                        <li onMouseOver={()=>{setDropdown(true)}}>
                            <NavLink className="p-5 rounded-md" to={items.to} >{items.name}</NavLink>
                            {dropdown == true ? <Dropdown submenus={items.submenu} /> : null}
                        </li>
                    </>
                ) : <li><NavLink className="p-2 rounded-md" to={items.to}>{items.name}</NavLink></li>}
            </li>
        </>
    )
}

const Dropdown = ({ submenus}) => {
    return (
        <ul className="dropdown">
            {submenus.map((submenu, i) => {
                <li key={i} className="p-2"><NavLink to={submenu.to}>{submenu.name}</NavLink></li>
            })}
        </ul>
    )
}
export default Header