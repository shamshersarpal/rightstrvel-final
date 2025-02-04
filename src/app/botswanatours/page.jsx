import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import nyc from "@/images/nyc.jpg"
import nyc2 from "@/images/nyc2.jpg"
import AppDownload from "@/components/AppDownload";
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
            <Link href="" passHref legacyBehavior>
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
      </main>
      <AppDownload />
      <Footer />
    </>
  )
}