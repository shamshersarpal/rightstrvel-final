import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import a1 from "@/images/a1.jpg"
import a2 from "@/images/a2.jpg"
import a3 from "@/images/a3.jpg"
import a4 from "@/images/a4.jpg"
import a5 from "@/images/a5.jpg"
import AppDownload from "@/components/AppDownload";
export default function africaTours() {
    return (
        <>
            <Header />
            <main>
                <section className="bg-center bg-no-repeat login-page relative">
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 pt-56 relative">
                        <h1 className="font-bold text-white text-4xl lg:text-6xl mb-2 mt-5">
                            Africa Tours
                        </h1>
                        <p className="text-white lg:text-3xl text-xl">
                        Choose From the Following Countries
                        </p>

                    </div>
                </section>

                <section className="max-w-screen-xl mx-auto ">
                    <div className="grid lg:grid-cols-3 grid-cols-2 my-10 lg:gap-2 gap-0">
                        <div className=" ">
                            <Link href="/botswanatours" passHref legacyBehavior>
                                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 m-2 cursor-pointer">
                                    <Image className="w-full h-72 object-cover scale-125 group-hover:scale-100 duration-500" src={a1} alt="" />

                                    <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                                    <div className="absolute p-4 bottom-0 start-0">
                                        <a

                                            className="text-lg font-medium text-black hover:text-blue duration-500 ease-in-out bg-gray-300 px-2 py-1 rounded-md"
                                        >
                                            Botswana
                                        </a>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className=" ">
                            <Link href="" passHref legacyBehavior>
                                <div className="cursor-pointer group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 m-2">
                                    <Image className="w-full h-72 object-cover scale-125 group-hover:scale-100 duration-500" src={a2} alt="" />

                                    <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                                    <div className="absolute p-4 bottom-0 start-0">
                                        <a

                                            className="text-lg font-medium text-black hover:text-blue duration-500 ease-in-out bg-gray-300 px-2 py-1 rounded-md"
                                        >
                                            Egypt
                                        </a>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className=" ">
                            <Link href="" passHref legacyBehavior>
                                <div className="cursor-pointer group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 m-2">
                                    <Image className="w-full h-72 object-cover scale-125 group-hover:scale-100 duration-500" src={a3} alt="" />

                                    <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                                    <div className="absolute p-4 bottom-0 start-0">
                                        <a

                                            className="text-lg font-medium text-black hover:text-blue duration-500 ease-in-out bg-gray-300 px-2 py-1 rounded-md"
                                        >
                                            Ghana
                                        </a>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className=" ">
                            <Link href="" passHref legacyBehavior>
                                <div className="cursor-pointer group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 m-2">
                                    <Image className="w-full h-72 object-cover scale-125 group-hover:scale-100 duration-500" src={a4} alt="" />

                                    <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                                    <div className="absolute p-4 bottom-0 start-0">
                                        <a

                                            className="text-lg font-medium text-black hover:text-blue duration-500 ease-in-out bg-gray-300 px-2 py-1 rounded-md"
                                        >
                                            Morocco
                                        </a>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className=" ">
                            <Link href="" passHref legacyBehavior>
                                <div className="cursor-pointer group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 m-2">
                                    <Image className="w-full h-72 object-cover scale-125 group-hover:scale-100 duration-500" src={a5} alt="" />

                                    <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                                    <div className="absolute p-4 bottom-0 start-0">
                                        <a
                                            href=""
                                            className="text-lg font-medium text-black hover:text-blue duration-500 ease-in-out bg-gray-300 px-2 py-1 rounded-md"
                                        >
                                            South-Africa
                                        </a>
                                    </div>
                                </div>
                            </Link>
                        </div>



                    </div>
                </section>
            </main>
            <AppDownload/>
            <Footer />
        </>
    )
}