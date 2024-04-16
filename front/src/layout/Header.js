import React, { useState } from "react";
import {NavLink, Link } from 'react-router-dom';
function Header(){
    const topMenu = [
      {to : "/" , name :"Home" , subMenu : "<Submenu1 />"},
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
    const subMenu = [
      <Submenu1 />,
      <Submenu2 />,


    ]
    const [mNum,setMNum] = useState(0);
    const [submenuView,setSubMenuView] = useState(false);
    const onHover = () => {
      setSubMenuView(true);
    }
    const onOut = () => {
      setSubMenuView(false);
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
                        <li key={i} onMouseOver={()=>{onHover(true)}} onMouseOut={onOut} ><NavLink to={topitem.to} className="rounded-md p-2 ml-2 font-semibold">{topitem.name}</NavLink>
                       {/* {submenuView === true ? <Submenu1 />:null}  */}
                        </li>
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
    {to : "/swiper", name:"swiper_full1"},
    {to : "/swiper", name:"swiper_full2"},
    {to : "/swiper", name:"swiper_full3"},
    {to : "/swiper", name:"swiper_full4"}
  ]
  return (
    <ul className=" absolute">
      {
        sub1.map((subitem,i)=>{
          return (
          <li key={i}>{subitem.name}</li>
        )
        })
      }
    </ul>
  )
 }
 function Submenu2 () {
  const sub2 = [
    {to : "/swiper", name:"swiper_full1"},
    {to : "/swiper", name:"swiper_full2"},
    {to : "/swiper", name:"swiper_full3"},
    {to : "/swiper", name:"swiper_full4"}
  ]
  return (
    <ul className=" absolute">
      {
        sub2.map((subitem,i)=>{
          return (
          <li key={i}>{subitem.name}</li>
        )
        })
      }
    </ul>
  )
 }
  export default Header