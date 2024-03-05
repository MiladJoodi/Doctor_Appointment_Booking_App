import Image from "next/image"; 

const Loading = ()=>{
    return(
        <div className="flex justify-center items-center p-12">
            <Image width={100} height={100} alt="loading" src={"/loading.svg"} />
        </div>
    );
}

export default Loading;
