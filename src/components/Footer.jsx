import Image from 'next/image';
import Link from "next/link";
import logo from "@/images/logo.png";
import trustpilot from "@/images/trustpilot.png";
import iatanlogo from "@/images/iatan_logo.png";
import clialogo from "@/images/clia_logo.png";
import astalogo from "@/images/asta_logo.png";
import anniversarylogo from "@/images/anniversary_logo2025.png";

export default function Footer() {
    return (
        <>
            <section className="footer bg-white">
                <div className="container mx-auto ">
                    <>
   
  <footer className="relative z-10   text-black  pt-10 pb-4   px-4  ">
    <div className="container mx-auto">
    <div className="grid grid-cols-12 max-w-screen-xl mx-auto">
  <div className="col-span-12">
    <div className="py-[10px] px-0">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
        <div className="lg:col-span-3 md:col-span-12">
          
          <p className="mt-6 text-black ">
            When you think about taking a tour to any destination, each
            passenger has their own thoughts and desires about their trip.
          </p>
          <ul className="list-none mt-6">
            <li className="inline me-1">
              <a
                href=" "
                target="_blank"
                className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800   rounded-md hover:bg-blue text-black "
              >
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
                  className="feather feather-linkedin size-4 align-middle"
                  title="Linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x={2} y={9} width={4} height={12} />
                  <circle cx={4} cy={4} r={2} />
                </svg>
              </a>
            </li>
            <li className="inline me-1">
              <a
                href=" "
                target="_blank"
                className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800   rounded-md hover:bg-blue text-black "
              >
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
                  className="feather feather-facebook size-4 align-middle"
                  title="facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </li>
            <li className="inline me-1">
              <a
                href=" "
                target="_blank"
                className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800   rounded-md hover:bg-blue text-black "
              >
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
                  className="feather feather-instagram size-4 align-middle"
                  title="instagram"
                >
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </li>
            <li className="inline me-1">
              <a
                href=" "
                target="_blank"
                className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800   rounded-md hover:bg-blue text-black "
              >
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
                  className="feather feather-twitter size-4 align-middle"
                  title="twitter"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
            </li>
            <li className="inline me-1">
              <a
                href=" "
                target="_blank"
                className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800   rounded-md hover:bg-blue text-black "
              >
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
                  className="feather feather-mail size-4 align-middle"
                  title="email"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-3 md:col-span-4">
          <div className="lg:ms-8">
            <h5 className="tracking-[1px] text-blue-700 font-semibold">
              Office
            </h5>
            <h5 className="tracking-[1px] text-black  mt-6">Right Travel</h5>
            <div className="flex mt-4">
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
                className="feather feather-map-pin size-4 text-blue-700 me-2 mt-1"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx={12} cy={10} r={3} />
              </svg>
              <div className="">
                <h6 className="text-black ">
                  P.O. Box # 322 <br /> 5 Sicomac Rd, Suite 6
                  <br />
                  North Haledon, NJ 07508
                </h6>
              </div>
            </div>
            <div className="flex mt-4">
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
                className="feather feather-mail size-4 text-blue-700 me-2 mt-1"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <div className="">
                <a
                  href="mailto:sales@right-travel.com"
                  className="text-black  hover:text-slate-400 duration-500 ease-in-out"
                >
                  sales@right-travel.com
                </a>
              </div>
            </div>
            <div className="flex mt-4">
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
                className="feather feather-phone size-4 text-blue-700 me-2 mt-1"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div className="">
                <a
                  href="tel:(973) 636-6660"
                  className="text-black  hover:text-slate-400 duration-500 ease-in-out"
                >
                  +1 (973) 636-6660
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-4">
          <div className="lg:ms-8">
            <h5 className="tracking-[1px] text-blue-700 font-semibold">
              Company
            </h5>
            <ul className="list-none footer-list mt-6">
              <li>
              <Link href="/login" passHref legacyBehavior>
                <a
                 
                  className="text-black  hover:text-gray-400 duration-500 ease-in-out"
                >
                  <i className="mdi mdi-chevron-right" /> My Account
                </a>
                </Link>
              </li>
              <li className="mt-[10px]">
              <Link href="/" passHref legacyBehavior>
                <a
                  
                  className="text-black  hover:text-gray-400 duration-500 ease-in-out"
                >
                  <i className="mdi mdi-chevron-right" /> Travel Agents
                </a>
                </Link>
              </li>
              <li className="mt-[10px]">
              <Link href="/" passHref legacyBehavior>
                <a
                  
                  className="text-black  hover:text-gray-400 duration-500 ease-in-out"
                >
                  <i className="mdi mdi-chevron-right" /> Tours
                </a>
                </Link>
              </li>
              <li className="mt-[10px]">
              <Link href="/" passHref legacyBehavior>
                <a
                  
                  className="text-black  hover:text-gray-400 duration-500 ease-in-out"
                >
                  <i className="mdi mdi-chevron-right" /> Travel Insurance
                </a>
                </Link>
              </li>
              <li className="mt-[10px]">
              <Link href="/" passHref legacyBehavior>
                <a
                  
                  className="text-black  hover:text-gray-400 duration-500 ease-in-out"
                >
                  <i className="mdi mdi-chevron-right" /> Reviews
                </a>
                </Link>
              </li>
              <li className="mt-[10px]">
              <Link href="/" passHref legacyBehavior>
                <a
                   
                  className="text-black  hover:text-gray-400 duration-500 ease-in-out"
                >
                  <i className="mdi mdi-chevron-right" /> Contact
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-4">
          <h5 className="tracking-[1px] text-blue-700 font-semibold">
            Newsletter
          </h5>
          <p className="mt-6">Sign up and receive the latest tips via email.</p>
          <form>
            <div className="grid grid-cols-1">
              <div className="my-3">
                <label className="form-label">
                  Write your email <span className="text-red-600">*</span>
                </label>
                <div className="form-icon relative mt-2">
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
                    className="feather feather-mail size-4 absolute top-3 start-4"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <input
                    type="email"
                    className="ps-12 rounded w-full py-2 px-3 h-10 bg-gray-500 border-0 text-black  focus:shadow-none focus:ring-0 placeholder:text-gray-200 outline-none"
                    placeholder="Email"
                    name="email"
                    required=""
                  />
                </div>
              </div>
              <button
                type="submit"
                id="submitsubscribe"
                name="send"
                className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-blue-700 text-white rounded-md"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

 
                           

<div className="flex mt-5  items-center gap-3 justify-center">
  <Image src={iatanlogo} alt='' width={80}/>
  <Image src={astalogo} alt='' width={80}/>
  <Image src={anniversarylogo} alt='' width={80}/> 
  <Image src={clialogo} alt='' width={80}/> 
  <Image src={trustpilot} alt='' width={80}/> 
</div>

<div className="  pt-4 border-t  border-gray-700 mt-10">
<div className="text-center text-sm text-black ">
                        <p>© 2003-2025 Right Travel LLC. All rights reserved.</p>
                    </div>
            </div>



    </div>

    
    <div>

    


        
       
    </div>
  </footer>
  
</>

                </div>
                
            </section>
           
            
        </>
    );
}
