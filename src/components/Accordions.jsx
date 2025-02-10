import { useState } from 'react';

export default function Accordions() {
  const [openAccordion, setOpenAccordion] = useState(1);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (

    <div id="accordion-collapse" data-accordion="collapse">

   <div className="mb-2">
   <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between   w-full p-5 font-medium rtl:text-right bg-gray-200 text-gray-900 border border-b-0 gap-3"
          onClick={() => toggleAccordion(1)}
          aria-expanded={openAccordion === 1}
          aria-controls="accordion-collapse-body-1"
        >
          <span className='flex gap-2 items-center'> <div className="bg-gray-900 text-white px-3 py-1 text-sm rounded-sm">Day 1</div> <h2 className='text-xl text-gray-900 font-semibold'>Departure from USA </h2>  </span>
          <svg
            data-accordion-icon=""
            className={`w-3 h-3 ${openAccordion === 1 ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={`${openAccordion === 1 ? '' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-5 border border-b-0 border-gray-200  ">
          <ol className="relative border-s border-gray-500 border-dotted  ">
            <li className="mb-4 ms-4 ">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>

              
              <p className="relative -top-1  text-base font-normal text-gray-500  ">
                Depart the USA to Cape Town. Your flight includes meals, drinks and in-flight entertainment.
              </p>

            </li>
          </ol>
        </div>
      </div>
   </div>

   <div className="mb-2">
   <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className="flex items-center justify-between   w-full p-5 font-medium rtl:text-right bg-gray-200 text-gray-900 border border-b-0 gap-3"
          onClick={() => toggleAccordion(2)}
          aria-expanded={openAccordion === 2}
          aria-controls="accordion-collapse-body-2"
        >
          <span className='flex gap-2 items-center'> <div className="bg-gray-900 text-white px-3 py-1 text-sm rounded-sm">Day 2</div> <h2 className='text-xl text-gray-900 font-semibold'>Connect in Dubai</h2>  </span>
          <svg
            data-accordion-icon=""
            className={`w-3 h-3 ${openAccordion === 2 ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        className={`${openAccordion === 2 ? '' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
        <ol className="relative border-s border-gray-500 border-dotted  ">
            <li className="mb-4 ms-4 ">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>

              
              <p className="relative -top-1  text-base font-normal text-gray-500  ">
              Arrival to Dubai and change plane to Cape Town.
              </p>

            </li>
          </ol>
        </div>
      </div>
   </div>
     

   <div className="mb-2">
      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          className="flex items-center justify-between   w-full p-5 font-medium rtl:text-right bg-gray-200 text-gray-900 border border-b-0 gap-3"
          onClick={() => toggleAccordion(3)}
          aria-expanded={openAccordion === 3}
          aria-controls="accordion-collapse-body-3"
        >
          <span className='flex gap-2 items-center'> <div className="bg-gray-900 text-white px-3 py-1 text-sm rounded-sm">Day 3</div> <h2 className='text-xl text-gray-900 font-semibold'>Arrival to Cape Town </h2>  </span>
          <svg
            data-accordion-icon=""
            className={`w-3 h-3 ${openAccordion === 3 ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        className={`${openAccordion === 3 ? '' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
        <ol className="relative border-s border-gray-500 border-dotted  ">
            <li className="mb-4 ms-4 ">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>

              
              <p className="relative -top-1  text-base font-normal text-gray-500  ">
              Upon arriving in Cape Town, South Africa Mother City you will be warmly welcomed and transferred to your luxurious hotel. The rest of your day is at your leisure to begin exploring one of the most beautiful cities in the world
              </p>

            </li>
          </ol>
        </div>
        </div>
      </div>



      <div className="mb-2">
      <h2 id="accordion-collapse-heading-4">
        <button
          type="button"
          className="flex items-center justify-between   w-full p-5 font-medium rtl:text-right bg-gray-200 text-gray-900 border border-b-0 gap-3"
          onClick={() => toggleAccordion(4)}
          aria-expanded={openAccordion === 4}
          aria-controls="accordion-collapse-body-4"
        >
          <span className='flex gap-2 items-center'> 
            <div className="bg-gray-900 text-white px-3 py-1 text-sm rounded-sm">Day 4</div> 
            <h2 className='text-xl text-gray-900 font-semibold'>Cape Town, Experience the City </h2>  </span>
          <svg
            data-accordion-icon=""
            className={`w-3 h-3 ${openAccordion === 4 ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-4"
        className={`${openAccordion === 4 ? '' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
        <ol className="relative border-s border-gray-500 border-dotted  ">
            <li className="mb-4 ms-4 ">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>

              
              <p className="relative -top-1 mb-2 text-base font-normal text-gray-500  ">
              07:30 AM, Breakfast at our hotel
              </p>

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              08:30 AM, Experience one of the most beautiful cities in the world. After departing the hotel, we have a coastal drive through Camps Bay, Clifton, and Sea Point. Drive past Cape Town Stadium and through the V & A Waterfront. See the City Centre and Greenmarket Square. Walk through the Company Gardens. Drive past Houses of Parliament, City Hall, the Castle, and Slave Lodge.
              </p>

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              10:00 AM, Ascend Signal Hill and witness the firing of the Noon gun (except Sundays and Public Holidays). Apart from the excitement of hearing and seeing the cannon fired, you will find out why this cannon is here and what it is used for, while enjoying spectacular views of the city, Cape Town Stadium and the whole of Table Bay. This is a great photo opportunity.
              </p>

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              11:30 AM, We continue to Table Mountain cable station. Table Mountain is one of the New 7 Wonders of Nature. You have the option of admiring the views from the lower cable station or you can purchase your ticket (own account to reach the summit (weather permitting +/- 23 USD). A variety of food and refreshment options are available for purchase, both at the lower cable station and on top of the mountain.
              </p>

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              12:30 PM, Stop for lunch at local restaurant.
              </p>

              <p className=" mb-2 text-base font-normal text-gray-500  ">
              02:30 PM Visit brightly coloured Bo Kaap Malay Quarter to hear about the interesting history of this area. Join the fascinating Diamond and Tanzanite experience at the Diamond Work Shop. Discover the secrets of Diamonds, Tanzanite, and other authentic African Treasures. You will be dazzled by the diamond tour where we learn about the history of these sparkling gems.
              </p>

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              06:00 PM return to our hotel.
              </p>

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              <b>
              Meals: Breakfast, Lunch
              </b>
              </p>

            </li>
          </ol>
        </div>
        </div>
      </div>

    <div className="mb-2">
      <h2 id="accordion-collapse-heading-5">
        <button
          type="button"
          className="flex items-center justify-between   w-full p-5 font-medium rtl:text-right bg-gray-200 text-gray-900 border border-b-0 gap-3"
          onClick={() => toggleAccordion(5)}
          aria-expanded={openAccordion === 5}
          aria-controls="accordion-collapse-body-5"
        >
          <span className='flex gap-2 items-center'> 
            <div className="bg-gray-900 text-white px-3 py-1 text-sm rounded-sm">Day 5</div> 
            <h2 className='text-xl text-gray-900 font-semibold'>Cape Town, Explore the Cape of Good Hope</h2>  </span>
          <svg
            data-accordion-icon=""
            className={`w-3 h-3 ${openAccordion === 5 ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-5"
        className={`${openAccordion === 5 ? '' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
        <ol className="relative border-s border-gray-500 border-dotted  ">
            <li className="mb-4 ms-4 ">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>

              
              <p className="relative -top-1 mb-2 text-base font-normal text-gray-500  ">
              07:30 AM, Breakfast at our hotel.
              </p>

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              08:30 AM Our journey to Cape Point takes us along the scenic Atlantic seaboard coastal road. We pass the pristine beaches of Clifton and Camps Bay with their soft white sand and assure blue water. The formidable 12 Apostles Peaks rise above the road on one side, while sheer cliffs and incredible rock formations into the icy Atlantic Ocean on the other side. There is no doubt the coast of the Cape peninsula offers magnificent scenery with its great biodiversity. We arrive at the quaint fishing village of Hout Bay with its imposing Sentinel.
              </p>

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              10:30 AM, Visit Seal Island (weather permitting) or shop for souvenirs at the craft market at the harbour.
              </p>

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              11:30 AM Our tour continues over Chapmans Peak, which offers amazing photo opportunities, and onto the Cape of Good Hope Nature Reserve. This area is home to magnificent fynbos, many different species of buck and birds, the Cape Mountain Zebra, and mischievous baboons. These creatures entertain guests enjoying lunch (own account) at the restaurant which has splendid views of False Bay. Take the funicular (weather permitting) to the lighthouse for an even better vantage point.
              </p>

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              01:00 PM, After a fantastic drive, we will make a stop for lunch and enjoy the famous Cape cuisine.
              </p>

              <p className=" mb-2 text-base font-normal text-gray-500  ">
              02:30 PM, We visit Boulders Beach to see the African penguins before arriving at the naval base of Simonstown, and then heading to Cape Town for a relaxing evening in the Mother City.
              </p> 

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              <b>
              Meals: Breakfast, Lunch
              </b>
              </p>

            </li>
          </ol>
        </div>
        </div>
      </div>


      <div className="mb-2">
      <h2 id="accordion-collapse-heading-6">
        <button
          type="button"
          className="flex items-center justify-between   w-full p-5 font-medium rtl:text-right bg-gray-200 text-gray-900 border border-b-0 gap-3"
          onClick={() => toggleAccordion(6)}
          aria-expanded={openAccordion === 6}
          aria-controls="accordion-collapse-body-6"
        >
          <span className='flex gap-2 items-center'> 
            <div className="bg-gray-900 text-white px-3 py-1 text-sm rounded-sm">Day 6</div> 
            <h2 className='text-xl text-gray-900 font-semibold'>Cape Town - Winelands Tour</h2>  </span>
          <svg
            data-accordion-icon=""
            className={`w-3 h-3 ${openAccordion === 6 ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-6"
        className={`${openAccordion === 6 ? '' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
        <ol className="relative border-s border-gray-500 border-dotted  ">
            <li className="mb-4 ms-4 ">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>

              
              <p className="relative -top-1 mb-2 text-base font-normal text-gray-500  ">
              07:30 AM, Breakfast at our hotel.
              </p>

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              08:30 AM, We head north to Paarl.
              </p>

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              10:00 AM, Start the day with a cellar tour and wine tasting at Fair View Winery.
              </p>

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              12:00 PM, A delectable lunch at Goatshed Restaurant.
              </p>

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              02:00 PM Continue the journey over the Helshoogte Mountains, offering breathtaking panoramic views. Make a photo stop at the Groot Drakenstein Prison, a poignant reminder of Nelson Mandela`s historic release.
              </p>

              <p className=" mb-2 text-base font-normal text-gray-500  ">
              04:30 PM, we will be back at our hotel
              </p> 

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              <b>
              Meals: Breakfast, Lunch
              </b>
              </p>

            </li>
          </ol>
        </div>
        </div>
      </div>


      <div className="mb-2">
      <h2 id="accordion-collapse-heading-7">
        <button
          type="button"
          className="flex items-center justify-between   w-full p-5 font-medium rtl:text-right bg-gray-200 text-gray-900 border border-b-0 gap-3"
          onClick={() => toggleAccordion(7)}
          aria-expanded={openAccordion === 7}
          aria-controls="accordion-collapse-body-7"
        >
          <span className='flex gap-2 items-center'> 
            <div className="bg-gray-900 text-white px-3 py-1 text-sm rounded-sm">Day 7</div> 
            <h2 className='text-xl text-gray-900 font-semibold'>Cape Town, Victoria Falls</h2>  </span>
          <svg
            data-accordion-icon=""
            className={`w-3 h-3 ${openAccordion === 7 ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-7"
        className={`${openAccordion === 7 ? '' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
        <ol className="relative border-s border-gray-500 border-dotted  ">
            <li className="mb-4 ms-4 ">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>

              
              <p className="relative -top-1 mb-2 text-base font-normal text-gray-500  ">
              With a couple of short flights, you will be warmly welcomed and transferred to your luxurious hotel, nestled close to the majestic Victoria Falls.
              </p>

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              In the afternoon you will experience the mighty Zambezi River as you board for a Sundancer Standard Sunset Cruise.
              </p>

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              Enjoy the best, the magnificent views of the Zambezi River. Experience this "river based"game & sunset Cruise" on this mighty African river. There is a chance to spot many different types of animals in the water and along the banks. You will have unlimited local drinks and some tasty snacks as you watch the sun set in one of the most beautiful scenes in Africa.
              </p>
 

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              <b>
              Meals: Breakfast, Lunch
              </b>
              </p>

            </li>
          </ol>
        </div>
        </div>
      </div>




      <div className="mb-2">
      <h2 id="accordion-collapse-heading-8">
        <button
          type="button"
          className="flex items-center justify-between   w-full p-5 font-medium rtl:text-right bg-gray-200 text-gray-900 border border-b-0 gap-3"
          onClick={() => toggleAccordion(8)}
          aria-expanded={openAccordion === 8}
          aria-controls="accordion-collapse-body-8"
        >
          <span className='flex gap-2 items-center'> 
            <div className="bg-gray-900 text-white px-3 py-1 text-sm rounded-sm">Day 8</div> 
            <h2 className='text-xl text-gray-900 font-semibold'>Guided Tour of Victoria Falls</h2>  </span>
          <svg
            data-accordion-icon=""
            className={`w-3 h-3 ${openAccordion === 8 ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-8"
        className={`${openAccordion === 8 ? '' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
        <ol className="relative border-s border-gray-500 border-dotted  ">
            <li className="mb-4 ms-4 ">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>

              
              <p className="relative -top-1 mb-2 text-base font-normal text-gray-500  ">
              Duration: 2 - 2.5
              </p>

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              Victoria Falls is one of the most compelling sites in the world, this cascading column of sheer energy powers its way down a 100m chasm, taking your breath away, as you gaze in awe mesmerized by its strength and incredible beauty. As you captivate this famous wonder you will be completely enthralled to see and feel "The Smoke that Thunders".
              </p>

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              The Tour Guides will ensure that the best photographic opportunities are indicated, whilst mesmerizing the clients with historical and current information, as well as details on the flora, fauna, bird & wildlife and other related issues on this World Heritage Site. Raincoats are provided when needed.
              </p>
 

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              <b>
              Meals: Breakfast, Lunch
              </b>
              </p>

            </li>
          </ol>
        </div>
        </div>
      </div>





      <div className="mb-2">
      <h2 id="accordion-collapse-heading-9">
        <button
          type="button"
          className="flex items-center justify-between   w-full p-5 font-medium rtl:text-right bg-gray-200 text-gray-900 border border-b-0 gap-3"
          onClick={() => toggleAccordion(9)}
          aria-expanded={openAccordion === 9}
          aria-controls="accordion-collapse-body-9"
        >
          <span className='flex gap-2 items-center'> 
            <div className="bg-gray-900 text-white px-3 py-1 text-sm rounded-sm">Day 9</div> 
            <h2 className='text-xl text-gray-900 font-semibold'>Chobe National Park, Botswana</h2>  </span>
          <svg
            data-accordion-icon=""
            className={`w-3 h-3 ${openAccordion === 9 ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-9"
        className={`${openAccordion === 9 ? '' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
        <ol className="relative border-s border-gray-500 border-dotted  ">
            <li className="mb-4 ms-4 ">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>

              
              <p className="mb-2 text-base font-normal text-gray-500  ">
              This day trip is divided into two parts: in the morning we have a game viewing boat cruise on the Chobe River, and in the afternoon we embark on a game drive through the National Park. Each activity is 3 hours and in-between you&rsquoll enjoy a buffet lunch at a local hotel.
              </p>

              <p className="  mb-2 text-base font-normal text-gray-500  ">
              By the way, the Chobe River is one of the only rivers in the world that flows in two directions. In the dry season the river flows East, but in the rainy season, the Zambezi River pushes upstream to reverse the flow of the river towards the West.
              </p> 
              <p className="  mb-2 text-base font-normal text-gray-500  ">
              <b>
              Meals: Breakfast, Lunch
              </b>
              </p>

            </li>
          </ol>
        </div>
        </div>
      </div>


      <div className="mb-2">
      <h2 id="accordion-collapse-heading-10">
        <button
          type="button"
          className="flex items-center justify-between   w-full p-5 font-medium rtl:text-right bg-gray-200 text-gray-900 border border-b-0 gap-3"
          onClick={() => toggleAccordion(10)}
          aria-expanded={openAccordion === 10}
          aria-controls="accordion-collapse-body-10"
        >
          <span className='flex gap-2 items-center'> 
            <div className="bg-gray-900 text-white px-3 py-1 text-sm rounded-sm">Day 10</div> 
            <h2 className='text-xl text-gray-900 font-semibold'>Victoria Falls</h2>  </span>
          <svg
            data-accordion-icon=""
            className={`w-3 h-3 ${openAccordion === 10 ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-10"
        className={`${openAccordion === 10 ? '' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
        <ol className="relative border-s border-gray-500 border-dotted  ">
            <li className="mb-4 ms-4 ">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>

              
              <p className="mb-2 text-base font-normal text-gray-500  ">
              After breakfast transfer to Victoria Falls Airport for afternoon flight to Johannesburg to connect with your international evening flight.
              </p>  
              <p className="  mb-2 text-base font-normal text-gray-500  ">
              <b>
              Meals: Breakfast, Lunch
              </b>
              </p>

            </li>
          </ol>
        </div>
        </div>
      </div>


      <div className="mb-2">
      <h2 id="accordion-collapse-heading-11">
        <button
          type="button"
          className="flex items-center justify-between   w-full p-5 font-medium rtl:text-right bg-gray-200 text-gray-900 border border-b-0 gap-3"
          onClick={() => toggleAccordion(11)}
          aria-expanded={openAccordion === 11}
          aria-controls="accordion-collapse-body-11"
        >
          <span className='flex gap-2 items-center'> 
            <div className="bg-gray-900 text-white px-3 py-1 text-sm rounded-sm">Day 11</div> 
            <h2 className='text-xl text-gray-900 font-semibold'>Arrival to USA</h2>  </span>
          <svg
            data-accordion-icon=""
            className={`w-3 h-3 ${openAccordion === 11 ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-11"
        className={`${openAccordion === 11 ? '' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
        <ol className="relative border-s border-gray-500 border-dotted  ">
            <li className="mb-4 ms-4 ">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>

              
              <p className="mb-2 text-base font-normal text-gray-500  ">
              Arrival to USA.
              </p>  

            </li>
          </ol>
        </div>
        </div>
      </div>

    </div>
  );
}