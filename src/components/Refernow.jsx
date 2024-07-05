import { useState } from 'react'
import FormModel from './FormModel'
import img from './Image/img.png'

export default function Refernow(){
    const [model, setModel] = useState(false)
    function handleClose(){
        setModel(false);
    }

   
    return(<>
    <div className='h-screen w-screen flex items-center justify-center flex-col '>
         <div className='  w-4/6 h-4/6 flex items-center justify-center gap-20'>
        <div className=' m-4 p-4  '>
            <h1 className='top-10 text-6xl font-bold m-2 p-2'>Lets Learn & Earn</h1>
            <p className='text-2xl bottom-6 m-2 p-2'>Get a chance to win up-to <br/> <span className='font-bold text-blue-600 text-4xl '>Rs. 1500 </span></p>
            <a onClick={(()=>{ setModel(true)})} className=' cursor-pointer flex items-center justify-center h-15 border-2 absolute border-black  m-4 p-4 rounded-full bg-blue-400 hover:bg-blue-800 hover:text-white font-bold'>Refer Now</a>
        </div>
        <div className='w-4/6'>
        <img className='h-100 w-100' src={img} alt='refer now'/>


        </div>
        
        </div>
             {model &&  <FormModel onClose={handleClose}/>}

  
    </div>

    
    
    </>)
}