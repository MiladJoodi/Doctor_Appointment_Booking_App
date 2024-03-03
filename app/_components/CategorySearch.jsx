"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GlobalApi from "@/_units/GlobalApi";
import { useEffect, useState } from "react";

const CategorySearch = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    });
  };

  return (
    <div className="mb-10 flex flex-col items-center gap-2 px-5">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>

      <h2 className="text-gray-400 text-lg sm:text-lg ">
        Search Your Doctor and Book Appointment in one click
      </h2>

      <div className="flex w-full max-w-sm mt-3 items-center space-x-2">
        <Input type="email" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      {/* Display List of Category */}
      <div className="grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6">
        {categoryList.map((item, index) =>index<6 && (
          <div key={index} 
          className="flex flex-col items-center text-center gap-2 bg-blue-100 p-5 m-2 rounded-lg hover:scale-110 transition-all ease-in-out cursor-pointer"
          >
            <Image
              src={item.attributes?.icon?.data.attributes?.url}
              alt="icon"
              width={40}
              height={40}
            />
            <label className="text-blue-600 text-sm">{item.attributes?.Name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySearch;
