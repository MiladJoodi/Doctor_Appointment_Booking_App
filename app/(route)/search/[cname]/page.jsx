"use client"
import { useEffect } from "react";

const Search = ({params}) => {

    useEffect(()=>{
        console.log(params.cname)
    }, [])

    return (
        <div>
            search
        </div>
    );
}

export default Search;