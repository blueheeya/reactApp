import React from "react";
// import {useState,useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import './assets/css/tailStyle.scss'
import './assets/css/style.scss'
import Header from "./layout/Header";
import Home from "./page/Home";
import Swiper from "./page/Swiper/SwiperPage";
import Pagenation from "./page/Pager/Pagenation";
import RegisterPage from "./page/Register/RegisterPage";
import LoginPage from "./page/Login/LoginPage";
import ReduxPage from "./page/Redux/ReduxPage";
import TodoList from "./page/Pager/TodoList";
import ApiKakao from "./page/API/ApiKakao";
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/swiper" element={<Swiper />}></Route>
      <Route path="/pager" element={<Pagenation />}></Route>
      <Route path="/todo" element={<TodoList />}></Route>
      <Route path="/redux" element={<ReduxPage />}></Route>
      <Route path="/api" element={<ApiKakao />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/regist" exact element={<RegisterPage />}></Route>
    </Routes>
    </>
  );
}
export default App;
