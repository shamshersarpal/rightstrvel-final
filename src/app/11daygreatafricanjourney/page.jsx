"use client";
import Link from 'next/link';
import Header from '@/components/Header'; 
import AppDownload from '@/components/AppDownload';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery'; 
import Image from 'next/image';
export default function africaTours() {
return (
<>
<Header />
<main>
   <section className="bg-center bg-no-repeat botswanaours relative">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 pt-56 relative">
         <h1 className="font-bold text-white text-4xl lg:text-6xl mb-6 mt-5">
            11 Day Great African Journey
         </h1>
         <p className="text-white text-4xl">
            South Africa Private Tours
         </p>
      </div>
   </section>
   <section className="max-w-screen-xl mx-auto">
      <section className="relative md:py-24 py-16">
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
                     Africa
                  </p>
                  <div className="relative bg-blue-50  mt-10">
                     <h3 className='px-6 py-3 text-xl text-white uppercase font-semibold bg-blue-700'>
                        Price Includes
                     </h3>
                     <div className='px-6 py-4 font-medium text-gray-900 border-b'>
                        <div className='flex items-start gap-4'>
                           <div>
                              <svg
                                 className="w-6 h-6 text-blue-700"
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
                                 className="w-6 h-6 text-blue-700"
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
                                 className="w-6 h-6 text-blue-700"
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
                                 className="w-6 h-6 text-blue-700"
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
                                 className="w-6 h-6 text-blue-700"
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
                                 className="w-6 h-6 text-blue-700"
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
                                 className="w-6 h-6 text-blue-700"
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
                                 className="w-6 h-6 text-blue-700"
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
                  <div className="relative bg-blue-50  mt-10">
                     <h3 className='px-6 py-3 text-xl text-white uppercase font-semibold bg-blue-700'>
                        Special Features
                     </h3>
                     <div className='px-6 py-4 font-medium text-gray-900 border-b'>
                        <div className='flex items-start gap-4'>
                           <div>
                              <svg
                                 className="w-6 h-6 text-blue-700"
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
                                 className="w-6 h-6 text-blue-700"
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
                                 className="w-6 h-6 text-blue-700"
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
                                 className="w-6 h-6 text-blue-700"
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
                                 className="w-6 h-6 text-blue-700"
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
                                 className="w-6 h-6 text-blue-700"
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
                                 className="w-6 h-6 text-blue-700"
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
                                 className="w-6 h-6 text-blue-700"
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
                  <div className="relative bg-blue-50  mt-10">
                     <h3 className='px-6 py-3 text-xl text-white uppercase font-semibold bg-blue-700'>
                        Day By Day Itinerary
                     </h3>
                     <div className='px-6 py-4 '>
                        <ol className="relative border-s border-blue-700">
                           <li className="mb-10 ms-6">
                              <span className="absolute text-blue-700 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-4 ring-blue-700 ">
                              1
                              </span>
                              <time className="block w-fit p-1 rounded-md px-2 font-semibold mb-2 text-sm   leading-none text-black bg-yellow-500">
                              Day 1
                              </time>
                              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
                                 Departure from USA
                              </h3>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 Depart the USA to Cape Town. Your flight includes meals, drinks and in-flight entertainment.
                              </p>
                           </li>
                           <li className="mb-10 ms-6">
                              <span className="absolute text-blue-700 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-4 ring-blue-700 ">
                              2
                              </span>
                              <time className="block w-fit p-1 rounded-md px-2 font-semibold mb-2 text-sm   leading-none text-black bg-yellow-500">
                              Day 2
                              </time>
                              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                 Connect in Dubai
                              </h3>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 Arrival to Dubai and change plane to Cape Town.
                              </p>
                           </li>
                           <li className="mb-10 ms-6">
                              <span className="absolute text-blue-700 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-4 ring-blue-700 ">
                              3
                              </span>
                              <time className="block w-fit p-1 rounded-md px-2 font-semibold mb-2 text-sm   leading-none text-black bg-yellow-500">
                              Day 3
                              </time>
                              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                 Arrival to Cape Town
                              </h3>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 Upon arriving in Cape Town, South Africa Mother City you will be warmly welcomed and transferred to your luxurious hotel. The rest of your day is at your leisure to begin exploring one of the most beautiful cities in the world
                              </p>
                           </li>
                           <li className="mb-10 ms-6">
                              <span className="absolute text-blue-700 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-4 ring-blue-700 ">
                              4
                              </span>
                              <time className="block w-fit p-1 rounded-md px-2 font-semibold mb-2 text-sm   leading-none text-black bg-yellow-500">
                              Day 4
                              </time>
                              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                 Cape Town, Experience the City
                              </h3>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 07:30 AM, Breakfast at our hotel
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 08:30 AM, Experience one of the most beautiful cities in the world. After departing the hotel, we have a coastal drive through Camps Bay, Clifton, and Sea Point. Drive past Cape Town Stadium and through the V & A Waterfront. See the City Centre and Greenmarket Square. Walk through the Company Gardens. Drive past Houses of Parliament, City Hall, the Castle, and Slave Lodge.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 10:00 AM, Ascend Signal Hill and witness the firing of the Noon gun (except Sundays and Public Holidays). Apart from the excitement of hearing and seeing the cannon fired, you will find out why this cannon is here and what it is used for, while enjoying spectacular views of the city, Cape Town Stadium and the whole of Table Bay. This is a great photo opportunity.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 11:30 AM, We continue to Table Mountain cable station. Table Mountain is one of the New 7 Wonders of Nature. You have the option of admiring the views from the lower cable station or you can purchase your ticket (own account to reach the summit (weather permitting +/- 23 USD). A variety of food and refreshment options are available for purchase, both at the lower cable station and on top of the mountain. 
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 12:30 PM, Stop for lunch at local restaurant.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 02:30 PM Visit brightly coloured Bo Kaap Malay Quarter to hear about the interesting history of this area. Join the fascinating Diamond and Tanzanite experience at the Diamond Work Shop. Discover the secrets of Diamonds, Tanzanite, and other authentic African Treasures. You will be dazzled by the diamond tour where we learn about the history of these sparkling gems.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 06:00 PM return to our hotel.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 <b>Meals: Breakfast, Lunch</b>
                              </p>
                           </li>
                           <li className="mb-10 ms-6">
                              <span className="absolute text-blue-700 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-4 ring-blue-700 ">
                              5
                              </span>
                              <time className="block w-fit p-1 rounded-md px-2 font-semibold mb-2 text-sm   leading-none text-black bg-yellow-500">
                              Day 5
                              </time>
                              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                 Cape Town, Explore the Cape of Good Hope
                              </h3>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 07:30 AM, Breakfast at our hotel.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 08:30 AM Our journey to Cape Point takes us along the scenic Atlantic seaboard coastal road. We pass the pristine beaches of Clifton and Camps Bay with their soft white sand and assure blue water. The formidable 12 Apostles Peaks rise above the road on one side, while sheer cliffs and incredible rock formations into the icy Atlantic Ocean on the other side. There is no doubt the coast of the Cape peninsula offers magnificent scenery with its great biodiversity. We arrive at the quaint fishing village of Hout Bay with its imposing Sentinel.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 10:30 AM, Visit Seal Island (weather permitting) or shop for souvenirs at the craft market at the harbour. 
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 11:30 AM Our tour continues over Chapmans Peak, which offers amazing photo opportunities, and onto the Cape of Good Hope Nature Reserve. This area is home to magnificent fynbos, many different species of buck and birds, the Cape Mountain Zebra, and mischievous baboons. These creatures entertain guests enjoying lunch (own account) at the restaurant which has splendid views of False Bay. Take the funicular (weather permitting) to the lighthouse for an even better vantage point.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 01:00 PM, After a fantastic drive, we will make a stop for lunch and enjoy the famous Cape cuisine.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 02:30 PM, We visit Boulders Beach to see the African penguins before arriving at the naval base of Simonstown, and then heading to Cape Town for a relaxing evening in the Mother City.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 <b>Meals: Breakfast, Lunch</b>
                              </p>
                           </li>
                           <li className="mb-10 ms-6">
                              <span className="absolute text-blue-700 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-4 ring-blue-700 ">
                              6
                              </span>
                              <time className="block w-fit p-1 rounded-md px-2 font-semibold mb-2 text-sm   leading-none text-black bg-yellow-500">
                              Day 6
                              </time>
                              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                 Cape Town - Winelands Tour
                              </h3>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 07:30 AM, Breakfast at our hotel.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 08:30 AM, We head north to Paarl. 
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 10:00 AM, Start the day with a cellar tour and wine tasting at Fair View Winery. 
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 12:00 PM, A delectable lunch at Goatshed Restaurant.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 02:00 PM Continue the journey over the Helshoogte Mountains, offering breathtaking panoramic views. Make a photo stop at the Groot Drakenstein Prison, a poignant reminder of Nelson Mandela`s historic release.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 04:30 PM, we will be back at our hotel
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 <b>Meals: Breakfast, Lunch</b>
                              </p>
                           </li>
                           <li className="mb-10 ms-6">
                              <span className="absolute text-blue-700 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-4 ring-blue-700 ">
                              7
                              </span>
                              <time className="block w-fit p-1 rounded-md px-2 font-semibold mb-2 text-sm   leading-none text-black bg-yellow-500">
                              Day 7
                              </time>
                              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                 Cape Town, Victoria Falls
                              </h3>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 With a couple of short flights, you will be warmly welcomed and transferred to your luxurious hotel, nestled close to the majestic Victoria Falls.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 In the afternoon you will experience the mighty Zambezi River as you board for a Sundancer Standard Sunset Cruise.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 Enjoy the best, the magnificent views of the Zambezi River. Experience this "river based"game & sunset Cruise" on this mighty African river. There is a chance to spot many different types of animals in the water and along the banks. You will have unlimited local drinks and some tasty snacks as you watch the sun set in one of the most beautiful scenes in Africa.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 <b>Meals: Breakfast, Lunch</b>
                              </p>
                           </li>
                           <li className="mb-10 ms-6">
                              <span className="absolute text-blue-700 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-4 ring-blue-700 ">
                              8
                              </span>
                              <time className="block w-fit p-1 rounded-md px-2 font-semibold mb-2 text-sm   leading-none text-black bg-yellow-500">
                              Day 8
                              </time>
                              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                 Guided Tour of Victoria Falls
                              </h3>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 Duration: 2 - 2.5 
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 Victoria Falls is one of the most compelling sites in the world, this cascading column of sheer energy powers its way down a 100m chasm, taking your breath away, as you gaze in awe mesmerized by its strength and incredible beauty. As you captivate this famous wonder you will be completely enthralled to see and feel "The Smoke that Thunders".
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 The Tour Guides will ensure that the best photographic opportunities are indicated, whilst mesmerizing the clients with historical and current information, as well as details on the flora, fauna, bird & wildlife and other related issues on this World Heritage Site. Raincoats are provided when needed.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 <b>Meals: Breakfast, Lunch</b>
                              </p>
                           </li>
                           <li className="mb-10 ms-6">
                              <span className="absolute text-blue-700 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-4 ring-blue-700 ">
                              9
                              </span>
                              <time className="block w-fit p-1 rounded-md px-2 font-semibold mb-2 text-sm   leading-none text-black bg-yellow-500">
                              Day 9
                              </time>
                              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                 Chobe National Park, Botswana
                              </h3>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 This day trip is divided into two parts: in the morning we have a game viewing boat cruise on the Chobe River, and in the afternoon we embark on a game drive through the National Park. Each activity is 3 hours and in-between you&rsquoll enjoy a buffet lunch at a local hotel.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 By the way, the Chobe River is one of the only rivers in the world that flows in two directions. In the dry season the river flows East, but in the rainy season, the Zambezi River pushes upstream to reverse the flow of the river towards the West.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 <b>Meals: Breakfast, Lunch</b>
                              </p>
                           </li>
                           <li className="mb-10 ms-6">
                              <span className="absolute text-blue-700 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-4 ring-blue-700 ">
                              10
                              </span>
                              <time className="block w-fit p-1 rounded-md px-2 font-semibold mb-2 text-sm   leading-none text-black bg-yellow-500">
                              Day 10
                              </time> 
                              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                 Victoria Falls
                              </h3>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 After breakfast transfer to Victoria Falls Airport for afternoon flight to Johannesburg to connect with your international evening flight.
                              </p>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 <b>Meals: Breakfast, Lunch</b>
                              </p>
                           </li>
                           <li className="mb-10 ms-6">
                              <span className="absolute text-blue-700 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-4 ring-blue-700 ">
                              11
                              </span>
                              <time className="block w-fit p-1 rounded-md px-2 font-semibold mb-2 text-sm   leading-none text-black bg-yellow-500">
                              Day 11
                              </time> 
                              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                 Arrival to USA
                              </h3>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                 Arrival to USA.
                              </p>
                           </li>
                        </ol>
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-4 md:col-span-5 lg:order-2 order-1 lg:px-0 px-4">
                  <div className="p-4 rounded-md shadow border sticky top-60">
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