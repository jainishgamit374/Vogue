import { CiSearch } from "react-icons/ci";
import React from 'react'
import { IoIosMenu } from "react-icons/io";

const Sidenav = () => {
  return (
    <div className='h-screen w-[6vw] bg-[#dbdbdb] fixed top-0 right-0 border-l-2 border-zinc-800 z-40 flex flex-col py-4 px-[1.5vw] gap-2'>
        <div className="icon w-12 h-12 flex items-center justify-center">
        <IoIosMenu size={'3vw'}/>
        </div>
        <div className="icon w-12 h-12 flex items-center justify-center">
        <CiSearch size={'2.5vw'}/>
        </div>
        <div className='w-12 text-center mt-10'>
        <ul>
           {
            ['01','02','03','04','05','06'].map((item,idx)=>(
              <a href={"#"+item} key={idx} className='inline-block text-[#2e2e2e] mb-3 text-3xl font-semibold'>{item}</a>
                
            ))
           }
        </ul>
        </div>
    </div>
  )
}

export default Sidenav