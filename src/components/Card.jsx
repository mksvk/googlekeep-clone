import React from 'react'

import { useState } from "react";

import { MdDelete } from "react-icons/md";
import { BsCardImage } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";

import { RxDrawingPin } from "react-icons/rx";
import { MdDone } from "react-icons/md";

export default function Card({ title, content, onDelete, id ,handleLable1,}) {
    const [isShown, setIsShown] = useState(false);
    const [isSh, setIsSh] = useState(false);
    const [lable1 , setLable1] =useState("")
    const inpu = ()=>{
        console.log("add label clicked")
        setIsSh(!isSh)
    }
    const handleLable= (e)=>{
        setLable1(e.target.value)

    }

    const addLable = ()=>{
     console.log(lable1)
     handleLable1(id,lable1)
     setLable1("")
     setIsSh(!isSh)   
    }
  return (
   
        <div className="note relative "  onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)} > 
      
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>
        <MdDelete size={25} />
      </button>
    

{isShown && (
            <div className=''>
                  <div className=' l-0 grid grid-cols-5 '>
        <BsCardImage className='text-slate-400 col-span-1 my-auto'/>
        <AiOutlineUserAdd className='text-slate-400 col-span-1  my-auto'/>
        <RxDrawingPin className='text-slate-400 col-span-1  my-auto' />
        <span onClick={inpu} className='bg-amber-200 hover:text-black text-white hover:cursor-pointer  hover:bg-amber-300 rounded-md col-span-2 px-1'>
            Addlable</span>


        </div>
     {
        isSh&& ( <div className='bg-slate-400 flex border-solid absolute bottom--24 right-0'> 
        <input value={lable1} onChange={handleLable} className='border-solid border-2 border-slate-400' placeholder='Enter-Lable'></input>
        <MdDone onClick={addLable} size={20} className='my-auto hover:cursor-pointer text-amber-200 text-10'/></div>)
     }
        
            </div>
      

      )}
      
   </div>
  )
}
