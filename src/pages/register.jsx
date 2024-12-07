import React, { useEffect } from 'react'
import {useForm} from "react-hook-form"
import { useAuth } from '../constext/aouthcontext';
import { useNavigate,Link } from 'react-router-dom';
function Register() {

    const {register,handleSubmit,formState:{errors}} =  useForm();
const {sinup,isauthenticated,error}= useAuth()
    const navigate = useNavigate()

useEffect(()=>{
    
if(isauthenticated) {navigate("/task");}

},[isauthenticated])
  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
    
       

     <div
          className='bg-zinc-800 max-w-md p-10 rounded-md'>
          {
              error.map((e) => {
                   
                  return (<div key={`key:${e}`} className='bg-red-500 p-2 text-white'>
                      {typeof(e) == "string" ? e :e.message}
                  </div>)
              })
          }
<h1 className='font-bold text-2xl'>Register</h1>
        <form action="" onSubmit={handleSubmit( async(values)=>{
      sinup(values)
        })}

        >
            <input type="text"
            placeholder='userName'
            {...register("userName",{required:true})}
            className='w-full bg-zinc-700 text-white px-4 py-2  rounded-md my-2'
            />
            {errors.userName&&(<p className='text-red-500'>
                username is requerid
            </p>)}
            <input type="email" 
            placeholder='email'
            {...register("email",{required:true})}
                        className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
            />
               {errors.email&&(<p className='text-red-500'>
                email is requerid
            </p>)}
            <input type="password" 
            placeholder='password'
            {...register("password",{required:true})}
                        className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
            />
               {errors.password&&(<p className='text-red-500'>
                password is requerid
            </p>)}
            <button type='submit'>Register</button>
        </form>

        <p className='flex gap-x-2 justify-between'>
                ¿Ya tienes una cuenta ?<Link to="/login" 
                className='text-sky-500'> Login</Link>
              </p>
    </div>
  </div>
     
  )
}

export default Register