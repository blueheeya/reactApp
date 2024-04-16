import React from "react";
// import {useState,useEffect} from 'react'
import { Route, Routes } from 'react-router-dom';
import './assets/css/style.scss';
import './assets/css/tailStyle.scss';
import Header from "./layout/Header";
import ApiKakao from "./page/API/ApiKakao";
import Home from "./page/Home";
import LoginPage from "./page/Login/LoginPage";
import Pagenation from "./page/Pager/Pagenation";
import TodoList from "./page/Pager/TodoList";
import ReduxPage from "./page/Redux/ReduxPage";
import RegisterPage from "./page/Register/RegisterPage";
import Swiper from "./page/Swiper/SwiperPage";
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
