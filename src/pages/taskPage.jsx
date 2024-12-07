import React, { useEffect } from 'react'
import { useTask } from '../constext/taskcontext.jsx'
import CarsTask from '../components/carsTask.jsx'

function TaskPage() {
  const {GetsTask,task} = useTask()
 useEffect(()=>{
  GetsTask()

 },[])

 if(task.length == 0){
  return (
    <h1>no hay tareas</h1>
  )
 }
  return (
    <div className='grid md:grid-cols-2 justify-center grid-cols-2 gap-2'>
      {
     Array.isArray(task) &&
task.map((e,i)=>{
 
  return(
<CarsTask key={"crats-"+i} id={i}  task={e}/>
  
  )
}) }
    </div>
  )
}

export default TaskPage