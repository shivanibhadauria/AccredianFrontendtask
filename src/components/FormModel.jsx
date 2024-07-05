import Refernow from './Refernow';

export default function FormModel({onClose}){

   

    
   
    return(<>
    
<div className='fixed inset-0  bg-black bg-opacity-30 backdrop-blur-sm flex flex-col items-center justify-center '>
<div className='flex flex-col items-center justify-center'><button onClick={onClose} className='flex mx-2 p-2 border-2 place-self-end rounded-full border-black bg-blue-100 hover:bg-blue-800 hover:text-white font-bold '>Close</button></div>


   <div className='flex items-center justify-center '>
    
    
    <div className=' border-8	 border-blue-500 flex items-center justify-center flex-col bg-slate-500 m-10 p-4 rounded-3xl	bg-gradient-to-r from-blue-200 to-cyan-200 text-2xl font-bold'>
        
        <h1 className='m-1  p-1  bg-white rounded-lg text-blue-600 '>Referrer Details</h1>
        <form  className='flex items-center justify-center flex-col'>
            <label className='m-1  p-1 ' >Full Name</label>
            <input className='m-1  p-1 ' type='text' placeholder='Enter Value'required/>
            <label className='m-1  p-1 '>Mobile Number</label>
            <input className='m-1  p-1' type='number' placeholder='Enter Value' required/>
            <label className='m-1 p-1'>Email</label>
            <input className='m-1  p-1 ' type='text' placeholder='Enter Value' required/>
            <button className='m-1 p-1 rounded-full border-2 mt-4 border-black bg-blue-100 hover:bg-blue-800 hover:text-white font-bold '>Submit</button>
        </form>
    </div>

    <div className=' border-8	 border-blue-500 flex items-center justify-center flex-col bg-slate-500 m-10 p-4 rounded-3xl	bg-gradient-to-r from-blue-200 to-cyan-200 text-2xl font-bold'>
        
        <h1 className='m-1  p-1 bg-white rounded-lg text-blue-600 '>Referee Details</h1>
        <form  className='flex items-center justify-center flex-col'>
            <label className='m-1  p-1 ' >Full Name</label>
            <input className='m-1  p-1 ' type='text' placeholder='Enter Value'required/>
            <label className='m-1  p-1 '>Mobile Number</label>
            <input className='m-1  p-1' type='number' placeholder='Enter Value' required/>
            <label className='m-1 p-1'>Email</label>
            <input className='m-1  p-1 ' type='text' placeholder='Enter Value' required/>
            <button className='m-1 p-1 rounded-full border-2 mt-4 border-black bg-blue-100 hover:bg-blue-800 hover:text-white font-bold '>Submit</button>
        </form>
    </div>
    
    
    </div> 
</div>
   
    
    
    
    </>)
}