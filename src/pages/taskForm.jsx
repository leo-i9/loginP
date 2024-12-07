import React, { useEffect,useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTask } from '../constext/taskcontext.jsx'
import { Link,useNavigate ,useParams} from 'react-router-dom';
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js"
dayjs.extend(utc)

function TaskForm() {

  const {register,handleSubmit } = useForm()
  const {task,createTask,UpdateTask,getTak} = useTask()
  const param = useParams(); 
  const [dates,setDate] = useState("")
const [correct,setCorrect] = useState(false);
  useEffect(()=>{
    async function name() { 
if(param.id){
  const res = getTak(param.id)
  const {_id,date} = await res
setDate(date)
  if(_id!=undefined ) setCorrect(true);
  } 
    }
name();
  },[])
const navigate = useNavigate()
   const onSubmit = handleSubmit((data)=>{
   
    if(param.id){
      if(data.date.length ==0){
        data.date= dates
       }
      if(correct== true){
        UpdateTask(param.id,{...data,
          date:dayjs.utc(data.date).format()
        })   
     
      }
       
     
      navigate("/task") 
    }else {
      if(data.date.length ==0){
        data.date= new Date()
       }
      createTask({...data,
        date:dayjs.utc(data.date).format()
      })    
      navigate("/task")  
    }
   })
   
   return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md  flex justify-center items-center'>
 
    <form action=""  onSubmit={onSubmit}>

      <input type="text" placeholder='title' {...register("title")}
      className='w-full  bg-zinc-700 text-white px-4 m-2 py-2 rounded-md'
      autoFocus
      />
      <textarea name="" id="" rows={3} 
      className='w-full  bg-zinc-700 text-white px-4 py-2 m-2 rounded-md'
      placeholder='descricion' {...register("descripcion")}></textarea>
   
   <input type="date" {...register("date")}
   className='w-full
    bg-zinc-700 text-white px-4 py-2 m-2 rounded-md'
   />

   <button type='submit' className='m-2 p-3 bg-indigo-500 py-2 rounded-md'>Save</button>
    </form>

    </div>
  )
}

export default TaskForm