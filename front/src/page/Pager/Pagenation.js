import React, { useState } from 'react'

function Pagenation({listData}) {
  return (
    <>
    <section className='container m-auto mt-7'>
        <h2>PageNation</h2>
        <div className='container m-auto mb-3'>
            {
                listData.map((item,i)=>{
                    return (
                    <ul className='flex justify-between border mb-2 p-4 rounded-md items-center'>
                        <li key={i} className='font-semibold text-lg min-w-[50px] text-center'>{item.id}</li>
                        <ul className='w-full'>
                            <li key={i} className=' font-semibold text-lg'>{item.title}</li>
                            <li key={i}>{item.body}</li>
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