import React,{useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../constext/aouthcontext.jsx';
import { Link,useNavigate } from 'react-router-dom';
import cookie from "js-cookie"
function Login() {

const {register,handleSubmit,formState:{errors}} = useForm();
const onSubmit = handleSubmit(data=>{
      sining(data)
    
    })
    const navigate = useNavigate()
   
const {sining,isauthenticated,error}=useAuth()
useEffect(()=>{
    
    if(isauthenticated) {navigate("/task");}
    
    },[isauthenticated])
  return (
      <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
          <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>

          {
              error.map((e) => {
                 
                  return (<div key={`key:${e}`} className='bg-red-500 p-2 text-white'>
                      {typeof(e) == "string" ? e :e.message}
                  </div>)
              })
          }

      <h1 className='font-bold text-2xl'>
        Login
      </h1>


              <form action="" onSubmit={onSubmit}

              >

                  <input type="email"
                      placeholder='email'
                      {...register("email", { required: true })}
                      className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
                  />
                  {errors.email && (<p className='text-red-500'>
                      email is requerid
                  </p>)}
                  <input type="password"
                      placeholder='password'
                      {...register("password", { required: true })}
                      className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
                  />
                  {errors.password && (<p className='text-red-500'>
                      password is requerid
                  </p>)}
                  <button type='submit' className='p-2 bg-black rounded-md'
                
                  >login</button>

              </form>

              <p className='flex gap-x-2 justify-between'>
                ¿No tienes una cuenta ?<Link to="/register" 
                className='text-sky-500'> Sing up</Link>
              </p>
          </div>
      </div>
  )
}

export default Login