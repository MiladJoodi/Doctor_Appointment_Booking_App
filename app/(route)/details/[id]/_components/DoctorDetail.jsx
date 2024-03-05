"use client";
import { Button } from '@/components/ui/button'
import { GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
// import BookAppointment from './BookAppointment'

const getData = async (params)=>{
    console.log(params)
    const res = await fetch('https://realtendency.backendless.app/api/data/DoctorsCat/'+params)
    return res.json();
}

async function DoctorDetail() {

    // console.log(params.id)
    const pathName = usePathname()
    var params = pathName.split('/')[2];
    const doctor = await getData(params)
    console.log(doctor)

    const socialMediaList=[
        {
            id:1,
            icon:'/youtube.png',
            url:''
        },
        {
            id:2,
            icon:'/linkedin.png',
            url:''
        },
        {
            id:3,
            icon:'/twitter.png',
            url:''
        },
        {
            id:4,
            icon:'/facebook.png',
            url:''
        }
    ]

    
  
    

  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg'>
          {/* Doctor Image  */}
          <div>
              <Image src={doctor.image}
              width={200}
              height={200}
              alt='doctor-image'
              className='rounded-lg w-full h-[280px] object-cover'
              />
          </div>
          {/* Doctor Info  */}
          <div className='col-span-2 mt-5 flex md:px-10 flex-col gap-3 items-baseline'>
                <h2 className='font-bold text-2xl'>Dr. Lary Page</h2>
                <h2 className='flex gap-2 text-gray-500 text-md'>
                    <GraduationCap/>
                    <span>{doctor.Experience} Year of Experince</span>
                </h2>
                <h2 className='text-md flex gap-2 text-gray-500'>
                    <MapPin/>
                    <span>{doctor.Address}</span>
                </h2>
                <h2 className='text-[10px] bg-blue-100 p-1 rounded-full
                        px-2 text-primary'>{doctor.name}</h2>

                <div className='flex gap-3'>
                    {socialMediaList.map((item,index)=>(
                        <Image src={item.icon} key={index}
                        alt='social'
                        width={30}
                        height={30}
                        />
                    ))}
                </div>
                {/* <BookAppointment doctor={doctor} /> */}
          </div>

          {/* About Doctor  */}

         
        </div>
         <div className='p-3 border-[1px] rounded-lg mt-5'>
         <h2 className='font-bold text-[20px]'>About Me</h2>
         <p className='text-gray-500 tracking-wide mt-2'>{doctor.Address}</p>
       </div>
       </>
  )
}

export default DoctorDetail