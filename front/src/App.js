import React from "react";
import {Routes, Route, NavLink} from 'react-router-dom'
import './assets/css/tailStyle.scss'
import './assets/css/style.scss'
function Header(){
  const topMenu = [
    {to : "/" , name :"Home"},
    {to : "/swiper" , name :"Swiper"},
    {to : "/pager" , name :"Pagenation"},
    {to : "/redux" , name :"Redux"},
  ]
  const userMenu = [
    {to : "/",  name: "로그인"},
    {to : "/",  name: "회원가입"}
  ]
  return (
    <header className="w-full flex justify-between">
      <h1 className="min-w-[150px]">React를 공부하자!</h1>
      <div className="flex w-full justify-between">
        <ul className="flex">
          {
            topMenu.map((item,i)=>{
              return (
                <>
                  <li key={i} className="bg-gray-100"><NavLink to={item.to}>{item.name}</NavLink></li>
                </>
              )
            })
          }
        </ul>
        <div className="flex">
          {userMenu.map((itme,i)=>{
            return (
              <></>
            )
          })}
        </div>
      </div>
    </header>
  )
}
function App() {
  return (
    <>
    <Header />
    <div className="App">test</div>
    <Routes>
      <Route></Route>
    </Routes>
    </>
  );
}

export default App;
