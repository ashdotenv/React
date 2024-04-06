import { useContext, useState } from 'react'
import { userContext } from './Context/Context'

function App() {
  let {setUser,user}=useContext(userContext)
  return (
    <>
   
      <div className='h-screen bg-sky-500 text-bk flex flex-col items-center justify-center'> 
       <h1 className='text-4xl'>{user}</h1> 
      <input type="text" className='p-4 w-[500px] rounded-full bg-transparent border-black border mt-5' onChange={(e)=>setUser(e.target.value)}  />
       </div>
    </>
  )
}

export default App
