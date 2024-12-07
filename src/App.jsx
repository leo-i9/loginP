import { useState,useContext } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import { AuthProvider,AuthContext } from './constext/aouthcontext.jsx'
import Protectetd from './protectetd.jsx'
import TaskPage from './pages/taskPage.jsx'
import TaskForm from './pages/taskForm.jsx'
import Profile from './pages/profile.jsx'
import { TaskProvider } from './constext/taskcontext.jsx'
import Navar from './components/navar.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
 <AuthProvider>
<TaskProvider>
<BrowserRouter>
<main className='conteiner mx-auto px-10'>
<Navar/>
  <Routes>
    <Route  path='/' element={<h1>Home page </h1>}/>
    <Route  path='/login' element={<Login/>}/>
    <Route  path='/register' element={ <Register/> }/>
   
   <Route element={<Protectetd/>}>
   <Route  path='/task' element={<TaskPage/>}/>
    <Route  path='/task/:id' element={<TaskForm/>}/>
    <Route  path='/profile' element={<Profile/>}/>
    <Route  path='/add-task' element={<TaskForm/>}/>
   </Route>
     </Routes>
</main>
  </BrowserRouter>
</TaskProvider>
 </AuthProvider>
  )
}

export default App
