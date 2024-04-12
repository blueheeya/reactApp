import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
    watch,
  } =useForm({mode:'onChange'});
  function onSubmit({email, password}){
    const body = {
        email, password
    };
    try {
      toast.info('로그인에 성공했습니다.');
        console.log(body);
        reset();  
    } catch(error) {
      toast.info('회원가입에 실패했습니다.')
    }
  }
  const userEmail = {
    required:{
      value :true,
      message : "이메일은 필수 입니다."
    },
    pattern:{
      value : /^\S+@\S+$/i,
      message : "이메일 양식에 맞게 입력하세요"
    },
    minLength: {
      value : 7,
      message : "최소 7자입니다."
    }
  };
  const userPassword ={
    required :{
      value : true,
      message : "패스워드는 필수 입니다."
    },
    minLength : {
      value : 4,
      message : "최소 4자입니다."
    }
  };
  return (
    <>
        <section className='container m-auto mt-7'>
        {/* <h2>로그인</h2> */}
        <div className='max-w-[400px] m-auto mt-28 border rounded-md p-7 shadow-md'>
          <h3 className='text-center font-semibold text-lg mb-4'>로그인</h3>
          <form onSubmit={handleSubmit(onSubmit)} className='mb-4'>
            <div className='mb-4'>
              <label htmlFor='email' className=' font-semibold text-sm text-gray-500 pl-1'>이메일</label>
              <input type="text" id='email' className='border w-full rounded-md p-2 text-xs' placeholder='이메일을 입력하세요'
              {...register("email",userEmail)} />
              {errors.email && (<div className='text-red-400 text-xs mt-2'>{errors.email.message}</div>)}
            </div>
            <div className='mb-4'>
              <label htmlFor='password' className=' font-semibold text-sm text-gray-500 pl-1'>패스워드</label>
              <input type="password" id='password' className='border w-full rounded-md p-2 text-xs' placeholder='비밀번호를 입력하세요.'
              {...register("password",userPassword)} />
              {errors.password && (<div className='text-red-400 text-xs mt-2'>{errors.password.message}</div>)}
            </div>
            <button className='w-full bg-orange-400 rounded-md p-2 text-white hover:bg-orange-600'>로그인</button>
          </form>
          <div className='w-full text-center text-xs'>아이디가 없다면 <a href='./regist' className='text-orange-600 font-bold underline'>회원가입</a> 하세요.</div>
        </div>
    </section>
    </>
  )
}

export default LoginPage