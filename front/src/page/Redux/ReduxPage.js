import React from 'react'
import {createStore} from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'
const intialState ={
  num : 0,
  title : "안녕하세요.",
  content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, ullam."
};
function reducer (state, aciton) {
  console.log(aciton);
  if (aciton.type === "numUp") {
    return {
      ...state, num:state.num + aciton.payload,
    };
  }
  if (aciton.type === "titleModi") {
    return {
      ...state, title:aciton.text
    };
  }
  return state;
}
const store = createStore(reducer, intialState);
function ReduxPage() {
  
  return (
    <>
    <section className='container m-auto mt-7 max-w-[500px]'>
        <h2>Redux</h2>
        <Provider store={store}>
          <div>
            <h3 className='text-lg font-semibold mb-4'>이곳이 APP이 되는..</h3>
            <ChildOne />
          </div>
        </Provider>
    </section>
    </>
  );
}

function ChildOne() {
  const title = useSelector((state)=>{
    return state.title;
  });
  return (
    <>
      <div className='border p-4'>
        <h3>내가 Child가 되는...</h3>
        <li className='mb-4'>{title}</li>
        <ChlidTwo />
      </div>
    </>
  )
}

function ChlidTwo() {
  // const num = useSelector((state)=>{
  //   return state.num;
  // });
  // const title = useSelector((state)=>{
  //   return state.title;
  // })
  // const content = useSelector((state)=>{
  //   return state.content;
  // })
  const {num, title, content} =  useSelector((state)=> state); 
  const dispatch = useDispatch();
  return (
    <>
      <div className='bg-gray-100 mb-4 rounded-md p-4'>
        <li className='p-2'>number : {num}</li>
        <li className='p-2'>title : {title}</li>
        <li className='p-2'>content : {content}</li>
      </div>
      <div className='w-full text-center'>
        <button onClick={()=>{dispatch({type:"numUp", payload :1})}} className=' bg-orange-500 p-2 text-white rounded-md mr-5'>num +</button>
        <button onClick={()=>{dispatch({type:"titleModi", text: "이놈의 자식이"})}} className=' bg-orange-500 p-2 text-white rounded-md'>textChange</button>
      </div>
    </>
  )
}
export default ReduxPage