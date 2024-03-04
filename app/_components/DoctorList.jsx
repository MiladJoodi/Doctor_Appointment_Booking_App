"use client"
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

const DoctorList = () => {

    const [doctorsList, setDoctorsList] = useState([]);

    useEffect(() => {
      axios
        .get('http://localhost:4000/doctors')
        .then(response => {
            setDoctorsList(response.data)
        })
    }, [])
      
    return (
        <div className="mb-10 px-8">
            <h2 className="font-bold text-xl">Popular Doctors</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-4">
                {doctorsList && doctorsList.map((doctor, index)=>(
                    <div 
                    key={index} 
                    className="border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary hover:shadow-sm transition-all ease-in-out">
                       <Image
                        src={doctor.image}
                        alt={doctor.name}
                        width={500}
                        height={200}
                        className="h-[200px] w-full object-cover rounded"
                       />
                       <div className="mt-3 items-baseline flex flex-col gap-1">
                            <h2 className="text-[10px] bg-blue-100 p-1 rounded-full px--2 text-primary">
                                {doctor.Categories}
                                </h2>
                                <h2 className="font-bold">{doctor.name}</h2>
                                <h2 className="text-primary text-sm">{doctor.Experience} Year</h2>
                                <h2 className="text-gray-500 text-sm">{doctor.Address}</h2>

                                <h2 className="p-2 px-3 border-[1px] text-primary rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-primary hover:text-white">Book Now</h2>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DoctorList;