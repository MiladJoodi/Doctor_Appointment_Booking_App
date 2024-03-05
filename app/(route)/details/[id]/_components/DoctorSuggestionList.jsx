import Image from 'next/image';
import Link from 'next/link';

const getData = async ()=>{
    const res = await fetch('https://realtendency.backendless.app/api/data/DoctorsCat')
    return res.json();
}

async function  DoctorSuggestionList() {

    const doctors = await getData()
    console.log(doctors)
    
   
  return (
    <div className=' p-4 border-[1px] mt-5 md:ml-5 rounded-lg '>
        <h2 className='mb-3 font-bold'>Suggestions</h2>

        {doctors.map((doctor,index)=>(
            <Link href={'/details/'+doctor.objectId} className=' mb-4 p-3 shadow-sm w-full 
            cursor-pointer hover:bg-slate-100
            rounded-lg flex items-center gap-3'>
                <Image src={doctor.image}
                width={70}
                height={70}
                className='w-[70px] h-[70px] rounded-full object-cover'
                />
                <div className='mt-3 flex-col flex gap-1 items-baseline'>
                    <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2
                     text-primary'>{doctor.Categories}</h2>
                <h2 className='font-medium text-sm'>{doctor.name}</h2>
                <h2 className='text-primary text-xs flex gap-2'>
                    {/* <GraduationCap/> */}
                    {doctor.Experience} Years</h2>
                    </div>
            </Link>
        ))}
    </div>
  )
}

export default DoctorSuggestionList