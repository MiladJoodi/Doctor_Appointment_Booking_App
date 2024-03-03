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
    <div className="mb-10 flex flex-col items-center gap-2">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>

      <h2 className="text-gray-400 text-xl">
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
      {categoryList.map((item, index) => (
        <div key={index} 
        className="flex flex-col text-center gap-2"
        >
          <Image
            src={item.attributes?.icon?.data.attributes?.url}
            alt="icon"
            width={40}
            height={40}
          />
          <label>{item.attributes?.Name}</label>
        </div>
      ))}
    </div>
  );
};

export default CategorySearch;
