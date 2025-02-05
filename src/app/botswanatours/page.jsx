import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import nyc from "@/images/nyc.jpg"
import nyc2 from "@/images/nyc2.jpg"
import AppDownload from "@/components/AppDownload";
import Testimonials from "@/components/Testimonials"
import h1 from "@/images/h1.jpg"
import h2 from "@/images/h2.jpg"
import h3 from "@/images/h3.jpg"
import h4 from "@/images/h4.jpg"
import h5 from "@/images/h5.jpg"
import h6 from "@/images/h6.jpg"
import h7 from "@/images/h7.jpg"
import h8 from "@/images/h8.jpg"

export const metadata = {
  title: "Right travel | Botswana Tours",
  description: "Affordable Custom Tours, Private Trips and Vacation Packages",
};

export default function africaTours() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-center bg-no-repeat botswanaours relative">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 pt-56 relative">
            <h1 className="font-bold text-white text-4xl lg:text-6xl mb-6 mt-5">
              Botswana Tours
            </h1>
            <p className="text-white text-4xl">
              South Africa Private Tours
            </p>

          </div>
        </section>

        <section className="max-w-screen-xl mx-auto ">
          <div className="grid lg:grid-cols-2 grid-cols-1 px-4 lg:px-0 my-10 lg:gap-5 gap-5">
            <Link href="/11daygreatafricanjourney" passHref legacyBehavior>
              <a

                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row w-full hover:bg-gray-100 "
              >
                <Image
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={nyc}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <p className="  text-blue-700 rounded-sm   mb-2"><small>Private Tour Operated by Private car and local guides</small> </p>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    11 Day Great African Journey
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Round trip airfare from NYC, 7 nights accommodation, all transfers, most meals and sightseeing
                  </p>
                  <div className="flex flex-wrap gap-2 items-center bg-yellow-300 max-w-fit px-2 py-1 rounded-md">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                      />
                    </svg>
                    <p>Feb 2025 - Dec 2025</p>

                  </div>
                </div>
              </a>
            </Link>





            <Link href="" passHref legacyBehavior>
              <a

                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row w-full hover:bg-gray-100 "
              >
                <Image
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={nyc2}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <p className="  text-blue-700 rounded-sm   mb-2"><small>5 Nights Cape Town, 3 Nights Victoria Falls</small> </p>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    12 Day Great African Journey
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Round trip airfare from NYC, 8 nights accommodation, all transfers, most meals and sightseeing
                  </p>
                  <div className="flex flex-wrap gap-2 items-center bg-yellow-300 max-w-fit px-2 py-1 rounded-md">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                      />
                    </svg>
                    <p>Feb 2025 - Dec 2025</p>

                  </div>
                </div>
              </a>
            </Link>



          </div>
        </section>

        <section>
          <div className="max-w-screen-xl mx-auto ">
            <h2 className="text-4xl font-bold text-center pt-6 ">Botswana Clients Review</h2>
            <div className="h-2 max-w-16 w-full bg-blue-700 rounded-xl mx-auto mb-10 mt-2"></div>
            <Testimonials />

          </div>
        </section>


        <section>
          <div className="max-w-screen-xl mx-auto ">
            <h2 className="text-4xl font-bold text-center pt-20 ">Botswana Hotels</h2>
            <div className="h-2 max-w-16 w-full bg-blue-700 rounded-xl mx-auto mb-10 mt-2"></div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-0">
              <Link href="#" passHref legacyBehavior>
                <div className="p-2 cursor-pointer">
                  <div className="rounded-xl border border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 border-none shadow-none">
                    <div className="p-0 relative">
                      <Image src={h1} className="w-full rounded-xl" alt="" />
                    </div>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-3">
                      Elite Paradise Hotel
                    </h5>
                    <p className="text-sm text-muted-foreground text-gray-500">
                      London, United Kingdom
                    </p>
                    <div className="flex items-center mt-2.5 mb-5">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">☆</span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                        4.5
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="#" passHref legacyBehavior>
                <div className="p-2 cursor-pointer">
                  <div className="rounded-xl border border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 border-none shadow-none">
                    <div className="p-0 relative">
                      <Image src={h2} className="w-full rounded-xl" alt="" />
                    </div>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-3">
                      Urban Escape Lodge
                    </h5>
                    <p className="text-sm text-muted-foreground text-gray-500">
                      Tokyo, Japan
                    </p>
                    <div className="flex items-center mt-2.5 mb-5">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                        4.0
                      </span>
                    </div>
                  </div>
                </div>
              </Link>


              <Link href="#" passHref legacyBehavior>
                <div className="p-2 cursor-pointer">
                  <div className="rounded-xl border border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 border-none shadow-none">
                    <div className="p-0 relative">
                      <Image src={h3} className="w-full rounded-xl" alt="" />
                    </div>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-3">
                      Oceanview Villas
                    </h5>
                    <p className="text-sm text-muted-foreground text-gray-500">
                      Sydney, Australia
                    </p>
                    <div className="flex items-center mt-2.5 mb-5">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">☆</span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                        4.8
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="#" passHref legacyBehavior>
                <div className="p-2 cursor-pointer">
                  <div className="rounded-xl border border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 border-none shadow-none">
                    <div className="p-0 relative">
                      <Image src={h4} className="w-full rounded-xl" alt="" />
                    </div>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-3">
                      Alpine Serenity Resort
                    </h5>
                    <p className="text-sm text-muted-foreground text-gray-500">
                      Zermatt, Switzerland
                    </p>
                    <div className="flex items-center mt-2.5 mb-5">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">☆</span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                        4.7
                      </span>
                    </div>
                  </div>
                </div>
              </Link>



              <Link href="#" passHref legacyBehavior>
                <div className="p-2 cursor-pointer">
                  <div className="rounded-xl border border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 border-none shadow-none">
                    <div className="p-0 relative">
                      <Image src={h5} className="w-full rounded-xl" alt="" />
                    </div>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-3">
                      Majestic Sands Resort
                    </h5>
                    <p className="text-sm text-muted-foreground text-gray-500">Dubai, UAE</p>
                    <div className="flex items-center mt-2.5 mb-5">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">☆</span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                        4.6
                      </span>
                    </div>
                  </div>
                </div>
              </Link>


              <Link href="#" passHref legacyBehavior>
                <div className="p-2 cursor-pointer">
                  <div className="rounded-xl border border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 border-none shadow-none">
                    <div className="p-0 relative">
                      <Image src={h6} className="w-full rounded-xl" alt="" />
                    </div>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-3">
                      The Metropolitan Inn
                    </h5>
                    <p className="text-sm text-muted-foreground text-gray-500">
                      Los Angeles, USA
                    </p>
                    <div className="flex items-center mt-2.5 mb-5">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">☆</span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                        4.2
                      </span>
                    </div>
                  </div>
                </div>
              </Link>


              <Link href="#" passHref legacyBehavior>
                <div className="p-2 cursor-pointer">
                  <div className="rounded-xl border border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 border-none shadow-none">
                    <div className="p-0 relative">
                      <Image src={h7} className="w-full rounded-xl" alt="" />
                    </div>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-3">
                      Tropical Paradise Retreat
                    </h5>
                    <p className="text-sm text-muted-foreground text-gray-500">
                      Bora Bora, French Polynesia
                    </p>
                    <div className="flex items-center mt-2.5 mb-5">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">☆</span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                        4.9
                      </span>
                    </div>
                  </div>
                </div>
              </Link>


              <Link href="#" passHref legacyBehavior>
                <div className="p-2 cursor-pointer">
                  <div className="rounded-xl border border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 border-none shadow-none">
                    <div className="p-0 relative">
                      <Image src={h8} className="w-full rounded-xl" alt="" />
                    </div>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-3">
                      Lakeside Haven Resort
                    </h5>
                    <p className="text-sm text-muted-foreground text-gray-500">
                      Queenstown, New Zealand
                    </p>
                    <div className="flex items-center mt-2.5 mb-5">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-500">☆</span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                        4.3
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-cente flex justify-center py-5 mb-10">
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">View more Hotels </button>

            </div>

          </div>
        </section>
      </main>
      <AppDownload />
      <Footer />
    </>
  )
}