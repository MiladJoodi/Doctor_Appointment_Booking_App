"use client";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";



const DoctorList = ({ doctorList, heading = "Popular Doctors" }) => {
  const [doctorsList, setDoctorsList] = useState([]);

  useEffect(() => {
    axios
      .get("https://realtendency.backendless.app/api/data/DoctorsCat")
      .then((response) => {
        setDoctorsList(response.data);
      });
  }, []);

  return (
    <div className="mb-10 px-8">
      <h2 className="font-bold text-xl">{heading}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-4">
        {doctorsList.length > 0
          ? doctorsList.map((doctor, index) => (
              <Link href={"/details/"+doctor.objectId}
                key={index}
                className="border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary hover:shadow-sm transition-all ease-in-out"
              >
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
                  <h2 className="text-primary text-sm">
                    {doctor.Experience} Year
                  </h2>
                  <h2 className="text-gray-500 text-sm">{doctor.Address}</h2>

                  <Link href={"/details/" + doctor?.id} className="w-full">
                    <h2 className="p-2 px-3 border-[1px] text-primary rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-primary hover:text-white">
                      Book Now
                    </h2>
                  </Link>
                </div>
              </Link>
            ))
          : // Skeleton Effect
            [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div className="h-[220px] bg-slate-200 w-full rounded-lg animate-pulse"></div>
            ))}
      </div>
    </div>
  );
};

export default DoctorList;
