import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  } from "@/components/ui/carousel";
  import TourOne from "@/images/c1.jpg";
  import TourTwo from "@/images/c2.jpg";
  import TourThree from "@/images/c3.jpg";
  import TourFour from "@/images/c4.jpg";
  import TourFive from "@/images/c5.jpg"; 
  import Image from "next/image"; 
  export default function TourSlider() {
  return (
  <>
  <div className="container py-20 px-4">
     <div className="max-w-screen-xl   mx-auto">
        <div className="flex flex-wrap items-center justify-between">
        </div>
        <Carousel
        className="max-w-screen-xl mx-auto "
        opts={{
        align: "start",
        }}
        >
        <div className="pb-10 pt-10 text-center">
           <h2 className="  md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Top Destinations</h2>
           <p className="text-slate-400 my-5 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
        </div>
        <CarouselContent>
           <CarouselItem   className="md:basis-1/2 lg:basis-1/5">
              <div className=" ">
                 <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 m-2">
                    <Image src={TourOne} className="w-full h-72 object-cover scale-125 group-hover:scale-100 duration-500"  alt=""/>
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
           </CarouselItem>
           <CarouselItem   className="md:basis-1/2 lg:basis-1/5">
              <div className=" ">
                 <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 m-2">
                    <Image src={TourTwo} className="w-full h-72 object-cover scale-125 group-hover:scale-100 duration-500"  alt=""/>
                    <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                    <div className="absolute p-4 bottom-0 start-0">
                       <a
                          href=""
                          className="text-lg font-medium text-white hover:text-blue duration-500 ease-in-out"
                          >
                       Europe tours
                       </a>
                    </div>
                 </div>
              </div>
           </CarouselItem>
           <CarouselItem   className="md:basis-1/2 lg:basis-1/5">
              <div className=" ">
                 <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 m-2">
                    <Image src={TourThree} className="w-full h-72 object-cover scale-125 group-hover:scale-100 duration-500"  alt=""/>
                    <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                    <div className="absolute p-4 bottom-0 start-0">
                       <a
                          href=""
                          className="text-lg font-medium text-white hover:text-blue duration-500 ease-in-out"
                          >
                       Europe tours
                       </a>
                    </div>
                 </div>
              </div>
           </CarouselItem>
           <CarouselItem   className="md:basis-1/2 lg:basis-1/5">
              <div className=" ">
                 <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 m-2">
                    <Image src={TourFour} className="w-full h-72 object-cover scale-125 group-hover:scale-100 duration-500"  alt=""/>
                    <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                    <div className="absolute p-4 bottom-0 start-0">
                       <a
                          href=""
                          className="text-lg font-medium text-white hover:text-blue duration-500 ease-in-out"
                          >
                       Middle East tours
                       </a>
                    </div>
                 </div>
              </div>
           </CarouselItem>
           <CarouselItem   className="md:basis-1/2 lg:basis-1/5">
              <div className=" ">
                 <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 m-2">
                    <Image src={TourFive} className="w-full h-72 object-cover scale-125 group-hover:scale-100 duration-500"  alt=""/>
                    <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                    <div className="absolute p-4 bottom-0 start-0">
                       <a
                          href=""
                          className="text-lg font-medium text-white hover:text-blue duration-500 ease-in-out"
                          >
                       America tours
                       </a>
                    </div>
                 </div>
              </div>
           </CarouselItem>
        </CarouselContent>
        <div className="block lg:hidden">
           <CarouselPrevious className=""  />
           <CarouselNext />
        </div>
        </Carousel>
     </div>
  </div>
  </>
  );
  }