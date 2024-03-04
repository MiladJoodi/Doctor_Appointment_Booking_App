"use client";
import axios from "axios";
import { useEffect, useState } from "react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const CategoryList = () => {
  const [categoryList, setCategoryList] = useState([]);

 const params = usePathname()
 const category = params.split('/')[2];

  useEffect(() => {
    getCategoryList();
    
  }, []);

  const getCategoryList = () => {
    axios
      .get("https://realtendency.backendless.app/api/data/DoctorCats")
      .then((response) => {
        setCategoryList(response.data);
      });
  };

  return (
    <div className='h-screen mt-5 flex flex-col'>
    <Command >
<CommandInput placeholder="Type a command or search..." />
<CommandList className="overflow-visible">
<CommandEmpty>No results found.</CommandEmpty>
<CommandGroup heading="Suggestions" >
    {categoryList&&categoryList.map((item,index)=>(
            <CommandItem key={index}>
                <Link href={'/search/'+item?.title} className={`p-2 flex gap-2 text-[14px] text-blue-600 items-center rounded-md cursor-pointer w-full ${category==item.title&& 'bg-blue-100'}`}>
                <Image 
                    src={item.img}
                    alt="icon"
                    width={25}
                    height={25}
                    />

                    <label>{item.title}</label>
                </Link>
            </CommandItem>

            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default CategoryList;
