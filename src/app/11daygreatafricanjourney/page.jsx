"use client";
import Link from 'next/link';
import HeaderTwo from '@/components/HeaderTwo'; 
import AppDownload from '@/components/AppDownload';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery'; 
import Image from 'next/image';
import Accordions from '@/components/Accordions';


export default function africaTours() {
return (
<>
<HeaderTwo />      
<main>
            <div className="text-center font-[700] lg:text-3xl text-2xl text-gray-950 lg:mt-0 mt-10 mb-10">11 Day Great African Journey</div>
   <div className="text-center max-w-screen-xl mx-auto  border shadow-sm border-gray-300 py-4 mt-4 w-full sticky top-[0px] bg-gray-100 z-40 ">
         <div className="flex items-center justify-center lg:gap-10 gap-3 lg:px-0 px-4">
             
              <a  href="#summary">  <div className='font-[500] lg:text-[16px] text-[15px] cursor-pointer hover:text-blue-700 uppercase'>
               Summary
               </div>
                  </a>

                  <a  href="#PriceIncludes">  <div className='font-[500] lg:text-[16px] text-[15px] cursor-pointer hover:text-blue-700 uppercase'>
               Price Includes
               </div>
                  </a>
                  <a  href="#SpecialFeatures">
                      <div className='font-[500] lg:text-[16px] text-[15px] cursor-pointer hover:text-blue-700 uppercase'>
                        Special Features
                        </div>
                        </a>
                        <a  href="#DayItinerary">
                           <div className='font-[500] lg:text-[16px] text-[15px] cursor-pointer hover:text-blue-700 uppercase'>
                              Day Itinerary
                              </div>
                              </a>
                
         </div>
      </div>
   <section className="max-w-screen-xl mx-auto">
    
     
      <section className="relative md:py-16 py-16 ">
         <div className="container relative">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-6 ">
               <div className="lg:col-span-8 md:col-span-7 lg:order-1 order-2">
                  <Gallery/>
                  <h5 className="text-2xl font-semibold mt-5 lg:px-0 px-4">
                     11 Day Great African Journey
                  </h5>
                  <p className="flex items-center text-slate-400 font-medium mt-2 lg:px-0 px-4">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-map-pin size-4 me-1"
                        >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx={12} cy={10} r={3} />
                     </svg>
                     {" "}
                     South Africa Private Tours
                  </p>

                  <div className='mt-6'>
                  <h3 className='px-6 py-3 mb-5 text-xl text-white uppercase font-semibold bg-gray-950'>
                        Summary
                     </h3>

                     <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 lg:px-0 px-4' id='summary'>
                        <div className="border border-gray-400">
                        <span className="flex gap-2 items-center p-2 border-b  border-gray-400">
                        <div className="bg-gray-700 text-white px-1 py-1 text-[12px] rounded-sm">
                        Day 1
                        </div> 
                        <h2 className="text-[15px] text-gray-900 font-[500]">
                        Departure from USA 
                        </h2>
                        </span>

                        <span className="flex gap-2 items-center p-2 border-b  border-gray-400">
                        <div className="bg-gray-700 text-white px-1 py-1 text-[12px] rounded-sm">
                        Day 2
                        </div> 
                        <h2 className="text-[15px] text-gray-900 font-[500]">
                        Connect in Dubai  
                        </h2>
                        </span>

                        <span className="flex gap-2 items-center p-2 border-b  border-gray-400">
                        <div className="bg-gray-700 text-white px-1 py-1 text-[12px] rounded-sm">
                        Day 3
                        </div> 
                        <h2 className="text-[15px] text-gray-900 font-[500]">
                        Arrival to Cape Town  
                        </h2>
                        </span>

                        <span className="flex gap-2 items-center p-2 border-b  border-gray-400">
                        <div className="bg-gray-700 text-white px-1 py-1 text-[12px] rounded-sm">
                        Day 4
                        </div> 
                        <h2 className="text-[15px] text-gray-900 font-[500]">
                        Cape Town, Experience the City  
                        </h2>
                        </span>

                        <span className="flex gap-2 items-center p-2 border-b  border-gray-400">
                        <div className="bg-gray-700 text-white px-1 py-1 text-[12px] rounded-sm">
                        Day 5
                        </div> 
                        <h2 className="text-[15px] text-gray-900 font-[500]">
                        Cape Town, Explore the Cape of Good Hope 
                        </h2>
                        </span>

                        <span className="flex gap-2 items-center p-2    border-gray-400">
                        <div className="bg-gray-700 text-white px-1 py-1 text-[12px] rounded-sm">
                        Day 6
                        </div> 
                        <h2 className="text-[15px] text-gray-900 font-[500]">
                        Cape Town - Winelands Tour  
                        </h2>
                        </span>

                        </div>
                        <div className="border border-gray-400">
                        <span className="flex gap-2 items-center p-2 border-b  border-gray-400">
                        <div className="bg-gray-700 text-white px-1 py-1 text-[12px] rounded-sm">
                        Day 7
                        </div> 
                        <h2 className="text-[15px] text-gray-900 font-[500]">
                        Cape Town, Victoria Falls   
                        </h2>
                        </span>

                        <span className="flex gap-2 items-center p-2 border-b  border-gray-400">
                        <div className="bg-gray-700 text-white px-1 py-1 text-[12px] rounded-sm">
                        Day 8
                        </div> 
                        <h2 className="text-[15px] text-gray-900 font-[500]">
                        Guided Tour of Victoria Falls  
                        </h2>
                        </span>

                        <span className="flex gap-2 items-center p-2 border-b  border-gray-400">
                        <div className="bg-gray-700 text-white px-1 py-1 text-[12px] rounded-sm">
                        Day 9
                        </div> 
                        <h2 className="text-[15px] text-gray-900 font-[500]">
                        Chobe National Park, Botswana   
                        </h2>
                        </span>

                        <span className="flex gap-2 items-center p-2 border-b  border-gray-400">
                        <div className="bg-gray-700 text-white px-1 py-1 text-[12px] rounded-sm">
                        Day 10
                        </div> 
                        <h2 className="text-[15px] text-gray-900 font-[500]">
                        Victoria Falls  
                        </h2>
                        </span>

                        <span className="flex gap-2 items-center p-2 border-b  border-gray-400">
                        <div className="bg-gray-700 text-white px-1 py-1 text-[12px] rounded-sm">
                        Day 11
                        </div> 
                        <h2 className="text-[15px] text-gray-900 font-[500]">
                        Arrival to USA  
                        </h2>
                        </span>

                        

                        </div>
                     </div>
                  </div>
                  <div className="relative bg-gray-50  mt-10"  id='PriceIncludes'>
                  <h3 className='px-6 py-3 text-xl text-white uppercase font-semibold bg-gray-950'>
                        Price Includes
                     </h3>
                     <div className='px-6 py-4 font-medium text-gray-900 border-b'>
                        <div className='flex items-start gap-4'>
                           <div>
                              <svg
                                 className="w-6 h-6 text-gray-700"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={24}
                                 height={24}
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 >
                                 <path
                                    fillRule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                                    clipRule="evenodd"
                                    />
                              </svg>
                           </div>
                           <div>
                              7 nights accommodations in the following order
                           </div>
                        </div>
                     </div>
                     <div className='px-6 py-4 font-medium text-gray-900 border-b'>
                        <div className='flex items-start gap-4'>
                           <div>
                              <svg
                                  className="w-6 h-6 text-gray-700"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={24}
                                 height={24}
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 >
                                 <path
                                    fillRule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                                    clipRule="evenodd"
                                    />
                              </svg>
                           </div>
                           <div>
                              4 nights at the [Radisson Blu Waterfront] or [The Westin Hotel], Cape Town, Standard Room with Buffet Breakfast
                           </div>
                        </div>
                     </div>
                     <div className='px-6 py-4 font-medium text-gray-900 border-b'>
                        <div className='flex items-start gap-4'>
                           <div>
                              <svg
                                   className="w-6 h-6 text-gray-700"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={24}
                                 height={24}
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 >
                                 <path
                                    fillRule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                                    clipRule="evenodd"
                                    />
                              </svg>
                           </div>
                           <div>
                              3 nights at the [Victoria Falls Safari Lodge], Victoria Falls, Standard Room with Buffet Breakfast
                           </div>
                        </div>
                     </div>
                     <div className='px-6 py-4 font-medium text-gray-900 border-b'>
                        <div className='flex items-start gap-4'>
                           <div>
                              <svg
                                 className="w-6 h-6 text-gray-700"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={24}
                                 height={24}
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 >
                                 <path
                                    fillRule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                                    clipRule="evenodd"
                                    />
                              </svg>
                           </div>
                           <div>
                              11 Meals: 7 Breakfast, 4 Lunch
                           </div>
                        </div>
                     </div>
                     <div className='px-6 py-4 font-medium text-gray-900 border-b'>
                        <div className='flex items-start gap-4'>
                           <div>
                              <svg
                                  className="w-6 h-6 text-gray-700"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={24}
                                 height={24}
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 >
                                 <path
                                    fillRule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                                    clipRule="evenodd"
                                    />
                              </svg>
                           </div>
                           <div>
                              All transfers
                           </div>
                        </div>
                     </div>
                     <div className='px-6 py-4 font-medium text-gray-900 border-b'>
                        <div className='flex items-start gap-4'>
                           <div>
                              <svg
                                  className="w-6 h-6 text-gray-700"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={24}
                                 height={24}
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 >
                                 <path
                                    fillRule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                                    clipRule="evenodd"
                                    />
                              </svg>
                           </div>
                           <div>
                              Domestic air CPT/VFA/JNB included in our land only rate
                           </div>
                        </div>
                     </div>
                     <div className='px-6 py-4 font-medium text-gray-900 border-b'>
                        <div className='flex items-start gap-4'>
                           <div>
                              <svg
                                   className="w-6 h-6 text-gray-700"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={24}
                                 height={24}
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 >
                                 <path
                                    fillRule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                                    clipRule="evenodd"
                                    />
                              </svg>
                           </div>
                           <div>
                              Sightseeing as specified
                           </div>
                        </div>
                     </div>
                     <div className='px-6 py-4 font-medium text-gray-900 border-b'>
                        <div className='flex items-start gap-4'>
                           <div>
                              <svg
                                   className="w-6 h-6 text-gray-700"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={24}
                                 height={24}
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 >
                                 <path
                                    fillRule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                                    clipRule="evenodd"
                                    />
                              </svg>
                           </div>
                           <div>
                              Service of English Speaking Local Tour hosts
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="relative bg-gray-50  mt-10" id='SpecialFeatures'>
                     <h3 className='px-6 py-3 text-xl text-white uppercase font-semibold bg-gray-950'>
                        Special Features
                     </h3>
                     <div className='px-6 py-4 font-medium text-gray-900 border-b'>
                        <div className='flex items-start gap-4'>
                           <div>
                              <svg
                                  className="w-6 h-6 text-gray-700"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={24}
                                 height={24}
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 >
                                 <path
                                    fillRule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                                    clipRule="evenodd"
                                    />
                              </svg>
                           </div>
                           <div>
                              Cape Town, Visit brightly coloured Bo Kaap Malay Quarter to hear about the interesting history of this area
                           </div>
                        </div>
                     </div>
                     <div className='px-6 py-4 font-medium text-gray-900 border-b'>
                        <div className='flex items-start gap-4'>
                           <div>
                              <svg
                                   className="w-6 h-6 text-gray-700"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={24}
                                 height={24}
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 >
                                 <path
                                    fillRule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                                    clipRule="evenodd"
                                    />
                              </svg>
                           </div>
                           <div>
                              Visit Seal Island (weather permitting) or shop for souvenirs at the craft market at the harbour
                           </div>
                        </div>
                     </div>
                     <div className='px-6 py-4 font-medium text-gray-900 border-b'>
                        <div className='flex items-start gap-4'>
                           <div>
                              <svg
                                   className="w-6 h-6 text-gray-700"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={24}
                                 height={24}
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 >
                                 <path
                                    fillRule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                                    clipRule="evenodd"
                                    />
                              </svg>
                           </div>
                           <div>
                              journey over the Helshoogte Mountains, offering breathtaking panoramic views
                           </div>
                        </div>
                     </div>
                     <div className='px-6 py-4 font-medium text-gray-900 border-b'>
                        <div className='flex items-start gap-4'>
                           <div>
                              <svg
                                   className="w-6 h-6 text-gray-700"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={24}
                                 height={24}
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 >
                                 <path
                                    fillRule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                                    clipRule="evenodd"
                                    />
                              </svg>
                           </div>
                           <div>
                              journey over the Helshoogte Mountains, offering breathtaking panoramic views
                           </div>
                        </div>
                     </div>
                     <div className='px-6 py-4 font-medium text-gray-900 border-b'>
                        <div className='flex items-start gap-4'>
                           <div>
                              <svg
                                   className="w-6 h-6 text-gray-700"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={24}
                                 height={24}
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 >
                                 <path
                                    fillRule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                                    clipRule="evenodd"
                                    />
                              </svg>
                           </div>
                           <div>
                              You will experience the mighty Zambezi River as you board t for a Sundancer Standard Sunset Cruise
                           </div>
                        </div>
                     </div>
                     <div className='px-6 py-4 font-medium text-gray-900 border-b'>
                        <div className='flex items-start gap-4'>
                           <div>
                              <svg
                                   className="w-6 h-6 text-gray-700"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={24}
                                 height={24}
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 >
                                 <path
                                    fillRule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                                    clipRule="evenodd"
                                    />
                              </svg>
                           </div>
                           <div>
                              visit Boulders Beach to see the African penguins before arriving at the naval base of Simonstown
                           </div>
                        </div>
                     </div>
                     <div className='px-6 py-4 font-medium text-gray-900 border-b'>
                        <div className='flex items-start gap-4'>
                           <div>
                              <svg
                                   className="w-6 h-6 text-gray-700"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={24}
                                 height={24}
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 >
                                 <path
                                    fillRule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                                    clipRule="evenodd"
                                    />
                              </svg>
                           </div>
                           <div>
                              Cellar tour and wine tasting at Fair View Winery
                           </div>
                        </div>
                     </div>
                     <div className='px-6 py-4 font-medium text-gray-900 border-b'>
                        <div className='flex items-start gap-4'>
                           <div>
                              <svg
                                   className="w-6 h-6 text-gray-700"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={24}
                                 height={24}
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 >
                                 <path
                                    fillRule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                                    clipRule="evenodd"
                                    />
                              </svg>
                           </div>
                           <div>
                              Helshoogte Mountains, offering breathtaking panoramic views
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="relative bg-gray-50  mt-10" id='DayItinerary'>
                     <h3 className='px-6 py-3 text-xl text-white uppercase font-semibold bg-gray-950'>
                        Day By Day Itinerary
                     </h3>
                     <div className='px-6 py-4 '>

                        <Accordions/>
                        



                     
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-4 md:col-span-5 lg:order-2 order-1 lg:px-0 px-4">
                  <div className="p-4 rounded-md shadow border sticky top-20">
                     <h2 className='text-xl font-semibold'>
                        Departure date to book online
                     </h2>
                     <div className="mt-4">
                        <div className="md:flex mb-4">
                           <div className="md:w-1/3">
                              <span className="font-medium">Date:</span>
                           </div>
                           <div className="md:w-2/3 mt-4 md:mt-0">
                              <form>
                                 <div className="form-icon relative">
                                    <select
                                       id="region"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                                       >
                                       <option value="" selected="">
                                          {" "}
                                          Select Departure Date
                                       </option>
                                       <option value="US">Jan 01-Mar 31</option>
                                       <option value="CA">Apr 01-Jun 30</option>
                                       <option value="FR">Jul 01-Sep 30</option>
                                       <option value="DE">Oct 01-Dec 31</option>
                                    </select>
                                 </div>
                              </form>
                           </div>
                        </div>
                        <div className="md:flex">
                           <div className="md:w-1/3">
                              <span className="font-medium">Passengers:</span>
                           </div>
                           <div className="md:w-2/3 mt-4 md:mt-0">
                              <form>
                                 <div className="form-icon relative">
                                    <select
                                       id="region"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                                       >
                                       <option value="" selected="">
                                          {" "}
                                          Select Person 
                                       </option>
                                       <option value="US">2 Passengers</option>
                                       <option value="CA">4 Passengers</option>
                                       <option value="FR">6 Passengers</option>
                                       <option value="DE">8 Passengers</option>
                                    </select>
                                 </div>
                              </form>
                           </div>
                        </div>
                        <div className="md:flex mt-4">
                           <div className="md:w-1/3">
                              <span className="font-medium">Go with:</span>
                           </div>
                           <div className="md:w-2/3 mt-4 md:mt-0">
                              <form>
                                 <div className="form-icon relative">
                                    <div className="flex justify-between border-b pb-4">
                                       <div className="flex items-center ">
                                          <input
                                             id="default-radio-1"
                                             type="radio"
                                             defaultValue=""
                                             name="default-radio"
                                             className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                                             />
                                          <label
                                             htmlFor="default-radio-1"
                                             className="ms-2 text-sm font-medium text-gray-900 cursor-pointer"
                                             >
                                          Air & Land
                                          </label>
                                       </div>
                                       <p><b>$___</b></p>
                                    </div>
                                    <div className="flex justify-between pt-4">
                                       <div className="flex items-center">
                                          <input
                                             defaultChecked=""
                                             id="default-radio-2"
                                             type="radio"
                                             defaultValue=""
                                             name="default-radio"
                                             className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                                             />
                                          <label
                                             htmlFor="default-radio-2"
                                             className="ms-2 text-sm font-medium text-gray-900 cursor-pointer"
                                             >
                                          Land Only
                                          </label>
                                       </div>
                                       <p><b>$___</b></p>
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                     <div className="mt-4">
                        <Link href="/bookingdetails" passHref legacyBehavior>
                        <button className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-blue-700 text-white rounded-md w-full">
                        Book Now
                        </button>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/*end container*/}
      </section>
   </section>
</main>
<AppDownload />
<Footer />
</>
);
}