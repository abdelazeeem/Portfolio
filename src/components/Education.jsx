import React from 'react';
import {HiAcademicCap} from "react-icons/hi";

const Education = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                               Education
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>  <HiAcademicCap  size={30} />  <span className='text-4xl font-bold text-pink-600 ' > M </span>
                  Odern University For Technology And Information  </p>
            </div>
            <div>
              <p className=' text-4xl font-bold text-[#8892b0] py-4 max-w-[700px]' > Computer science </p>
              <p  className='text-4xl'  > <span className='text-4xl font-bold text-pink-600 ' >2</span>0  <span className='text-4xl font-bold text-pink-600 ' >2</span>0 </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Education;
