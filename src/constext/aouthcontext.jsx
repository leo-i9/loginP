import {useContext, createContext,useState, useEffect } from "react";
import { registerP,loginRequest, veryfyToken } from "../Api/Api.js";
import cookie from "js-cookie"
export const useAuth=()=>{
    const context = useContext(AuthContext);
    if(!context){
      throw new Error("problem");
    }
    return context;
    }

export const AuthContext = createContext()



export const AuthProvider=({children})=>{
 const [user,setUser]=useState(null);
const [isauthenticated,setIsauthenticated] = useState(false);
const [error ,setError] = useState([]);
const [login ,setLogin] = useState(true)

 const sinup = async (user)=>{
    try {
        const res = await registerP(user)
        
        
       if(res.length>0){ 
       
        setError(res)
    }
        if(res && res.username){
         console.log(res)
            setUser(res.data);    
            setIsauthenticated(true)
        }else  setIsauthenticated(false)
      
    } catch (error) {
        console.log(error);
    }
    
 }

 useEffect(()=>{
setTimeout(()=>{
    setError([])
},5000)
 },[error])

useEffect( ()=>{

    const registroi = async () => {
        const cookies = cookie.get();
    
        if(!cookies.token ){
            setIsauthenticated(false);
            setUser(null);
            setLogin(false)
                        return
        }
       try {
        const res = veryfyToken();
       if (await res ==undefined ||  await res == "string") {
            setLogin(false)
            setIsauthenticated(false);
            setUser(null);
            return
        }
        setLogin(false)

 setIsauthenticated(true)
 setUser(res);
            
            
    }

        catch (error) {
        setIsauthenticated(false);
            setUser(null);
       }
       
   
}
registroi()
},[])

const logout =()=>{
   
cookie.remove("token",{ path: '' });
setIsauthenticated(false);
setLogin(false)
setUser(null)

}

 const sining = async (user)=>{

    try {
        
        const res = await loginRequest(user);  
        
        if(res.length>0){ 
          
     
            setError(res)
        }
        if(res && res.email){
      
            setUser(res);    
            setIsauthenticated(true)
        }else  setIsauthenticated(false)
    
    } catch (error) {
        console.error(error)
    }

 }
    return (
        <AuthContext.Provider value={{
            sinup,user,isauthenticated,error,login,sining,logout}}>
            {children}
        </AuthContext.Provider>
    )
}