
const options = { 
  method: 'POST',
  headers :{
       'Content-Type': 'application/json' 
  }  }

   options.credentials = 'include';

export const registerP=async(user)=>{
    options.body=JSON.stringify(user)
    options.method='POST';
         try { 
         
            const res = await fetch("https://new-proyect.onrender.com/register", options);
          
            if (!res.ok) {
          
              return await res.json()
                } 
                const data = await res.json(); // Analiza la respuesta JSON 
                 
                 return data; 
            } 
            catch (error) {
                 console.error('Hubo un problema con la solicitud:', error);
                  return error; 
                }

} 

export const loginRequest = async (user)=>{
    /// alert(JSON.stringify(user))
    const options = { 
        method: 'POST',
        headers :{
             'Content-Type': 'application/json' 
        },
       
           body: JSON.stringify(user)  }
           options.credentials = 'include';
         
           try { 
          
            const res = await fetch("https://new-proyect.onrender.com/login", options);
         
            if (!res.ok) {
          
              return await res.json()
                } 
                const data = await res.json(); // Analiza la respuesta JSON 
                 
                 return data; 
            } 
            catch (error) {
                 console.error('Hubo un problema con la solicitud:', error);
                  return error; 
                }

}
export const veryfyToken = async()=>{
  const options = { 
    method: 'get',
    headers :{
         'Content-Type': 'application/json' 
    },credentials: 'include'
    ,}

    try {
        const res = await fetch("https://new-proyect.onrender.com/veryfy",options);
    return res.json()
    } catch (error) {
        
    }
}

//crud de task
export const getTasks =async()=>{
  const options = { 
    method: 'GET',
    headers :{
         'Content-Type': 'application/json' 
    }  }
  
     options.credentials = 'include';
try {
  const res = await fetch("https://new-proyect.onrender.com/task", options);
 return  res.json()
} catch (error) {
 console.log(error) 
}

}
export const Gettak = async(id)=>{
  const options = { 
    method: 'GET',
    headers :{
         'Content-Type': 'application/json' 
    }  }
    options.credentials = 'include';
    try {
    
      const res = await fetch(`https://new-proyect.onrender.com/task/${id}`, options);
       
      return await  res.json();
        
    } catch (error) {
     console.log(error) 
    }
     
}

export const updateTask =async (id,udate)=>{
  const options = { 
    method: 'PUT',
    headers :{
         'Content-Type': 'application/json' 
    }  }
  
     options.credentials = 'include';
     options.body= JSON.stringify(udate);
     try {
    
      const res = await fetch(`https://new-proyect.onrender.com/task/${id}`, options);
       
      return await  res.json();
   
    } catch (error) {
     console.log(error) 
    }
  
}

export const deleteteTask =async(id)=>{
  const options = { 
    method: 'DELETE',
    headers :{
         'Content-Type': 'application/json' 
    }  }
  
     options.credentials = 'include';

     try {
      const res = await fetch(`https://new-proyect.onrender.com/task/${id}`, options);
     return await res
    } catch (error) {
     console.log(error) 
    }
}
export const CreateTask =async(datos)=>{
options.method = "POST"
options.body=JSON.stringify(datos)
  try {
    const res = await fetch("https://new-proyect.onrender.com/task", options);
   return await res.json()
  } catch (error) {
   console.log(error) 
  }
  
}