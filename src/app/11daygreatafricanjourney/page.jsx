import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import a1 from "@/images/a1.jpg"
import a2 from "@/images/a2.jpg" 
import a3 from "@/images/a3.jpg" 
import a4 from "@/images/a4.jpg" 
import AppDownload from "@/components/AppDownload";
import { DatePicker } from "@/components/DatePicker";
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

                <section className="max-w-screen-xl mx-auto ">
                <section className="relative md:py-24 py-16">
  <div className="container relative">
    <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
      <div className="lg:col-span-8 md:col-span-7">
        <div className="grid grid-cols-12 gap-4">
          <div className="md:col-span-8 col-span-7 ">
            <div className="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
              <Image src={a1}
                className="w-full lg:h-60 md:h-44 h-48 object-cover"
                alt=""
              />
              <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out" />
              <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                <a
                  href="g"
                  className="inline-flex justify-center items-center size-9 bg-blue-500 text-white rounded-full lightbox"
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
                    className="feather feather-camera size-4 align-middle"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx={12} cy={13} r={4} />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-5">
            <div className="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
            <Image src={a2} 
                className="w-full lg:h-60 md:h-44 h-48 object-cover"
                alt=""
              />
              <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out" />
              <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                <a
                  href=""
                  className="inline-flex justify-center items-center size-9 bg-blue-500 text-white rounded-full lightbox"
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
                    className="feather feather-camera size-4 align-middle"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx={12} cy={13} r={4} />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-5">
            <div className="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
            <Image src={a3} 
                className="w-full lg:h-60 md:h-44 h-48 object-cover"
                alt=""
              />
              <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out" />
              <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                <a
                  href=""
                  className="inline-flex justify-center items-center size-9 bg-blue-500 text-white rounded-full lightbox"
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
                    className="feather feather-camera size-4 align-middle"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx={12} cy={13} r={4} />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 col-span-7">
            <div className="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
            <Image src={a4} 
                className="w-full lg:h-60 md:h-44 h-48 object-cover"
                alt=""
              />
              <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out" />
              <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                <a
                  href=""
                  className="inline-flex justify-center items-center size-9 bg-blue-500 text-white rounded-full lightbox"
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
                    className="feather feather-camera size-4 align-middle"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx={12} cy={13} r={4} />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <h5 className="text-2xl font-semibold mt-5">
        11 Day Great African Journey
        </h5>
        <p className="flex items-center text-slate-400 font-medium mt-2">
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
          </svg>{" "}
          Africa
        </p>
        
        
        
      </div>
      <div className="lg:col-span-4 md:col-span-5">
        <div className="p-4 rounded-md shadow dark:shadow-gray-700 sticky top-20">
          <div style={{ position: "relative" }}>
            <label className="font-semibold">Date:</label>
            <DatePicker/>
             
          </div>
          <div className="mt-4">
            <div className="md:flex">
              <div className="md:w-1/3">
                <span className="font-medium">Adult:</span>
              </div>
              <div className="md:w-2/3 mt-4 md:mt-0">
                <form>
                  <div className="form-icon relative">
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
                      className="feather feather-user w-4 h-4 absolute top-3 start-4"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                    <input
                      type="number"
                      className="w-full ps-12 py-2 px-3 h-10  rounded outline-none border border-gray-100  focus:ring-0 bg-gray-100"
                      placeholder="No. of person"
                      id="Noperson"
                      name="number"
                      required=""
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="md:flex mt-4">
              <div className="md:w-1/3">
                <span className="font-medium">Child:</span>
              </div>
              <div className="md:w-2/3 mt-4 md:mt-0">
                <form>
                  <div className="form-icon relative">
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
                      className="feather feather-users w-4 h-4 absolute top-3 start-4"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx={9} cy={7} r={4} />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <input
                      type="number"
                      className="w-full ps-12 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-100 bg-slate-100 focus:ring-0"
                      placeholder="No. of children"
                      id="Nochildren"
                      name="number"
                      required=""
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-blue-700 text-white rounded-md w-full">
              Search Now
            </button>
          </div>
          <div className="mt-6">
            <h5 className="text-lg font-medium">Tour Map</h5>
            <div className="mt-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                style={{ border: 0 }}
                className="w-full h-[300px] rounded-full"
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*end container*/}
</section>

                </section>
            </main>
            <AppDownload/>
            <Footer />
        </>
    )
}