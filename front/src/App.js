import React from "react";
import {useState,useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import axios from 'axios';
import './assets/css/tailStyle.scss'
import './assets/css/style.scss'
import Header from "./layout/Header";
import Home from "./page/Home";
import Swiper from "./page/Swiper/Swiper";
import Pagenation from "./page/Pager/Pagenation";
import RegisterPage from "./page/Register/RegisterPage";
import LoginPage from "./page/Login/LoginPage";
import ReduxPage from "./page/Redux/ReduxPage";
import TodoList from "./page/Pager/TodoList";
function App() {
  const [postData,setPostData] = useState ([]);
  const [viewLoding,setViewLoding] =useState (true);
  useEffect(()=>{
    async function viewList(){
      try {
        await axios
        .get ("https://jsonplaceholder.typicode.com/posts?_page=1&limit=10")
        .then ((res)=>{
          setPostData(res.data)
          console.log(res.data)
        })
        .catch ((error)=>{
          console.log(error)
        })
        setTimeout(()=>{
          setViewLoding(false);
        },3000)
      } catch(error) {
        console.log(error)
        setViewLoding(false);
      }
    }
    viewList();
  },[])
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/swiper" element={<Swiper />}></Route>
      <Route path="/pager" element={<Pagenation listData={postData} />}></Route>
      <Route path="/todo" element={<TodoList />}></Route>
      <Route path="/redux" element={<ReduxPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/regist" element={<RegisterPage />}></Route>
    </Routes>
    </>
  );
}

export default App;
