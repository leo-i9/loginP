import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../constext/aouthcontext.jsx'
function Navar() {
const{isauthenticated,logout,user} = useAuth()
  const [name ,setName]=useState("")

async function Left(){
    if(!Array.isArray(user)){
        if(user){
            const {username} = await user;
            setName(username)
        }
       
    }
   
   
}
Left()
return (
   <nav className='bg-zinc-700 my-3 flex justify-between py-5 px-10  rounded-md'> 
  
  <Link to={`${isauthenticated? "/task":"/"}`}>
  <h1 className='text-2xl '>task manager</h1>
  </Link>  
    <ul className='flex gap-x-2'>
              {
                  isauthenticated ? (<>
                      <li> welcome {name}</li>
                      <li>
                          <Link to={"/add-task"}
                          className='bg-indigo-500 px-4 py-1 rounded-sm'>añadir tarea</Link>
                      </li>

                      <li ><Link to="/" onClick={()=>{
                        logout()}}>logout</Link> </li>
                  </>) : (<>
                      <li><Link to={"/login"}
                         className='bg-indigo-500 px-4 py-1 rounded-sm'>login</Link></li>
                      <li>
                          <Link to={"/register"}
                             className='bg-indigo-500 px-4 py-1 rounded-sm'>register</Link>
                      </li>
                  </>
                  )
        }
    </ul>
   </nav>
  )
}

export default Navar