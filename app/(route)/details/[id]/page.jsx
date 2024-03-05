// "use client";
// import DoctorList from "@/app/_components/DoctorList";
// import axios from "axios";
// import { useEffect, useState } from "react";

import DoctorDetail from "./_components/DoctorDetail";
import DoctorSuggestionList from "./_components/DoctorSuggestionList";

const Details = async ({ params }) => {

  return (
    <div className='p-5 md:px-10'>
      <h2 className='font-bold text-[22px]'>Details</h2>

      <div className='grid grid-cols-1 lg:grid-cols-4 '>
        {/* Doctor Detail  */}
        <div className=' col-span-3'>
        <DoctorDetail />
         
        </div>
        {/* Doctor Suggestion  */}
        <div>
          <DoctorSuggestionList/>
        </div>
      </div>
    </div>
  );
};

export default Details;
