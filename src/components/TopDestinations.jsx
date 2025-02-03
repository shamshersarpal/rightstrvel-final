import Image from "next/image"
import c1 from "@/images/c1.jpg"
export default function TopDestinations(){
    return(
        <>
            <div className=" ">
            <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 m-2">
            <Image className="w-full h-72 object-cover scale-125 group-hover:scale-100 duration-500" src={c1} alt=""/>
   
  <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
  <div className="absolute p-4 bottom-0 start-0">
    <a
      href=""
      className="text-lg font-medium text-white hover:text-blue duration-500 ease-in-out"
    >
      Africa tours
    </a>
  </div>
</div>

            </div>
        </>
    )
}