import React from 'react'
import { Link } from 'react-router-dom' 
import { useTask } from '../constext/taskcontext.jsx'
function CarsTask({task}) {
    const {deletetask}= useTask()
   const borrar = (task)=>{
       deletetask(task._id)
         }
  return (
      <div key={`jhbjfbjr-${task.id}`}
          className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>

          <header key={`khebr-${task.id}`}><h2 className='text-2xl capitalize font-bold'>{task.title}</h2>
              <p><b>Descripcion:</b> {task.descripcion}</p>
              <p>{new Date(task.date).toLocaleDateString()}</p>
              </header>
          <div key={`2234-${task.id} `} className='flex gap-[20px] mt-2'>
              <button 
              onClick={()=>
                borrar(task)
              }
              className='text-[20px] bg-red-600 rounded-md p-1 text-center'>delete</button>
              <button
              className='text-[20px] bg-green-500 rounded-md p-1 text-center'
              ><Link to={`/task/${task._id}`}>Edit</Link></button>
          </div>
      </div>
  )
}

export default CarsTask