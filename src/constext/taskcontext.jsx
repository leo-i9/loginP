import React,{createContext, useContext,useState} from 'react'
import { 
    CreateTask,
    getTasks,
    deleteteTask,
    updateTask,
Gettak } from '../Api/Api.js';
import { set } from 'react-hook-form';


const TaskContext = createContext();


export const useTask=()=>{
    const context = useContext(TaskContext);

    if(!context){
        throw new Error("usetack not find")
    }

    return context
} 


export const TaskProvider =({children}) => {
    const [task,setTask] = useState([])

    const createTask =async (task)=>{
 
       try {
      
        setTask(res)  
       } catch (error) {
        console.log(error)
       }
     

    }

    const GetsTask =async ()=>{
try {
    const res =await getTasks()
  if(Array.isArray(res)){setTask(res)}
    else setTask([])
} catch (error) {
    console.log(error)
}
    }

    const deletetask= async (id)=>{

try {
    const res  = await deleteteTask(id);
if(res.status==204){
    setTask(task.filter(task=> task._id !== id))
}
} catch (error) {
    console.log(error)
}
       

    }
const getTak = async (id)=>{
try {
   const res = Gettak(id);
   const {tak} = await res;
   
   return tak
} catch (error) {
    
}
}

    const UpdateTask = async(id,udate)=>{

        try {
           const res =   await updateTask(id,udate);
       
         GetsTask()
        } catch (error) {
            console.log(error);
        }
    }
return(
    <TaskContext.Provider 
    value={{
        task,
        createTask,
        GetsTask,
        deletetask,
        UpdateTask,
        getTak
        }}>
        {children}
    </TaskContext.Provider>
)

}
