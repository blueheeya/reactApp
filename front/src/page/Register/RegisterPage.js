import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState :{errors},
    reset,
    watch,
  } =useForm();
  toast('🦄 회원가입을 성공하였습니다.', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    // transition: Bounce,
    });
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
  const userName = {
    required:{
      value :true,
      message : "이름은 필수 입니다."
    },
    minLength :{
      value : 2,
      message : "최소 2자입니다."
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
        {/* <h2>회원가입</h2> */}
        <div className='max-w-[400px] m-auto mt-28 border rounded-md p-7 shadow-md'>
          <h3 className='text-center font-semibold text-lg mb-4'>회원가입</h3>
          <form onSubmit={handleSubmit(onsubmit)} className='mb-4'>
            <div className='mb-4'>
              <label htmlFor='email' className=' font-semibold text-sm text-gray-500 pl-1'>이메일</label>
              <input type="text" id='email' className='border w-full rounded-md p-2 text-xs' placeholder='이메일을 입력하세요'
              {...register("email",userEmail)} />
              {errors.email && (<div className='text-red-400 text-xs mt-2'>{errors.email.message}</div>)}
            </div>
            <div className='mb-4'>
              <label htmlFor='name' className=' font-semibold text-sm text-gray-500 pl-1'>이름</label>
              <input type="text" id='name' className='border w-full rounded-md p-2 text-xs' placeholder='이름을 입력하세요'
              {...register("name",userName)} />
              {errors.name && (<div className='text-red-400 text-xs mt-2'>{errors.name.message}</div>)}
            </div>
            <div className='mb-4'>
              <label htmlFor='password' className=' font-semibold text-sm text-gray-500 pl-1'>패스워드</label>
              <input type="password" id='password' className='border w-full rounded-md p-2 text-xs' placeholder='비밀번호를 입력하세요.'
              {...register("password",userPassword)} />
              {errors.password && (<div className='text-red-400 text-xs mt-2'>{errors.password.message}</div>)}
            </div>
            <div className='mb-6'>
              <label htmlFor='passwordConfirm' className=' font-semibold text-sm text-gray-500 pl-1'>패스워드 확인</label>
              <input type="password" id='passwordConfirm' className='border w-full rounded-md p-2 text-xs' placeholder='비밀번호 확인입니다.'
              {...register("passwordConfirm", {validate : (value) => {
                return value ===watch("password") || "비밀번호 일치 안함";
              }})} />
              {errors.passwordConfirm && (<div className='text-red-400 text-xs mt-2'>{errors.passwordConfirm.message}</div>)}
            </div>
            <button className='w-full bg-orange-400 rounded-md p-2 text-white hover:bg-orange-600'>회원가입</button>
          </form>
          <div className='w-full text-center text-xs'>아이디가 있다면 <a href='./login' className='text-orange-600 font-bold underline'>로그인</a> 하세요.</div>
        </div>
    </section>
    </>
  )
}

export default RegisterPage