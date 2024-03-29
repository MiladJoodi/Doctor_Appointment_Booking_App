"use client";
import DoctorList from "@/app/_components/DoctorList";
import axios from "axios";
import { useEffect, useState } from "react";

const Search = ({ params }) => {
  const [doctorsList, setDoctorsList] = useState();

  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = () => {
    axios.get("https://realtendency.backendless.app/api/data/DoctorsCat").then((response) => {
        setDoctorsList(response.data);
      });
  };

  return (
    <div className="mt-5">
      <DoctorList heading={params.cname} />
    </div>
  );
};

export default Search;
