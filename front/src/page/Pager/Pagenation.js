import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react'

function Pagenation() {
    const [postData,setPostData] = useState ([]);
    // const [viewLoding,setViewLoding] =useState (true);
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
            // setViewLoding(false);
            },3000)
        } catch(error) {
            console.log(error)
            // setViewLoding(false);
        }
        }
        viewList();
    },[])
  return (
    <>
    <section className='container m-auto mt-7'>
        <h2>PageNation</h2>
        <div className='container m-auto mb-3'>
            {
                postData.map((pagelist,i)=>{
                    return (
                    <ul key={i} className='flex justify-between border mb-2 p-4 rounded-md items-center'>
                        <li className='font-semibold text-lg min-w-[50px] text-center'>{pagelist.id}</li>
                        <ul className='w-full'>
                            <li className=' font-semibold text-lg'>{pagelist.title}</li>
                            <li>{pagelist.body}</li>
                        </ul>
                    </ul>
                    )
                })
            }
        </div>
        <div className='flex justify-center p-4 pagerWrap'>
            <div className='bg-gray-100 p-1 border rounded-md'>이전</div>
            <ul className='flex'>
                <li className='py-1 px-3 active'>1</li>
                <li className='py-1 px-3'>2</li>
                <li className='py-1 px-3'>3</li>
            </ul>
            <div className='bg-gray-100 p-1 border rounded-md'>다음</div>
        </div>
    </section>
    </>
  )
}

export default Pagenation