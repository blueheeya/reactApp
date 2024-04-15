import React, { useState } from "react";
import {NavLink, Link } from 'react-router-dom';
function Header(){
    const topMenu = [
      {to : "/" , name :"Home"},
      {to : "/swiper" , name :"Swiper"},
      {to : "/pager" , name :"Pagenation"},
      {to : "/todo" , name :"TodoList"},
      {to : "/redux" , name :"Redux"},
      {to : "/api" , name :"API"},
    ]
    const userMenu = [
      {to : "/login",  name: "로그인"},
      {to : "/Regist",  name: "회원가입"}
    ]
    const [submenu,setSubMenu] = useState(false);
    function onHover() {
      setSubMenu(true);
    }
    return (
      <header className="w-full bg-white h-16 py-5 shadow-md">
        <div className="container m-auto flex justify-between h-full items-center">
            <h1 className="min-w-[150px] font-semibold text-blue-800">React를 공부하자!</h1>
            <div className="flex w-full justify-between">
            <ul className="flex topMenu">
                {
                topMenu.map((topitem,i)=>{
                    return (
                    <>
                        <li key={i} onMouseOver={()=>{onHover();}} ><NavLink to={topitem.to} className="rounded-md p-2 ml-2 font-semibold">{topitem.name}</NavLink>
                        {submenu == true ? <Submenu1 /> :null}</li>
                    </>
                    )
                })
                }
            </ul>
            <div className="flex gap-2">
                {userMenu.map((item,i)=>{
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
 function Submenu1 () {
  const sub1 = [
    {to : "/swiper", name:"swiper_full"},
    {to : "/swiper", name:"swiper_full"},
    {to : "/swiper", name:"swiper_full"},
    {to : "/swiper", name:"swiper_full"}
  ]
  return (
    <ul>
      {
        sub1.map((subitem,i)=>{
          return (
          <li key={i}>{subitem}</li>
        )
        })
      }
    </ul>
  )
 }
  export default Header