import { DatePicker } from "@/components/DatePicker";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "Right travel | Booking Details",
  description: "Affordable Custom Tours, Private Trips and Vacation Packages",
};

export default function LoginClient() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gray-50 login-page relative lg:pt-20 pt-40">
          <div className="absolute inset-0 bg-black opacity-60 "></div>
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-40 mx-auto max-w-7xl">
            <div className="w-full bg-white rounded-lg shadow overflow-hidden p-5">
              <section className="bg-white">
                <div className=" px-4 py-0 mx-auto lg:py-16">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">
                    Booking Details
                  </h2>
                  <form action="#">
                    <div className="bg-blue-100 text-blue-700 text-xl font-semibold p-2 px-4 mb-5">Booking</div>
                    <div className="grid gap-4 mb-4 sm:grid-cols-3 sm:gap-6 sm:mb-5">
                      <div>
                        <label
                          htmlFor="category"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Two Adults sharing room
                          Passenger 2 Adults
                        </label>
                        <select
                          id="category"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        >
                          <option selected>Number of Rooms</option>
                          <option value="TV">1</option>
                          <option value="PC">2</option>
                          <option value="GA">3</option>
                          <option value="PH">4</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="category"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          One Adult in room
                          Passenger 1 Adults
                        </label>
                        <select
                          id="category"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        >
                          <option selected>Number of Rooms</option>
                          <option value="TV">1</option>
                          <option value="PC">2</option>
                          <option value="GA">3</option>
                          <option value="PH">4</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="category"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Single Adults sharing room
                          Passenger 1 Adult
                        </label>
                        <select
                          id="category"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        >
                          <option selected>Number of Rooms</option>
                          <option value="TV">1</option>
                          <option value="PC">2</option>
                          <option value="GA">3</option>
                          <option value="PH">4</option>
                        </select>
                      </div>
                    </div>
                    <div className="bg-blue-100 text-blue-700 text-xl font-semibold p-2 px-4 mt-10 mb-5">Personal Information</div>
                    <div className="grid gap-4 mb-4 sm:grid-cols-3 sm:gap-6 sm:mb-5">
                      <div className=" ">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          defaultValue=" "
                          placeholder=" "
                          required
                        />
                      </div>
                      <div className=" ">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          defaultValue=" "
                          placeholder=" "
                          required
                        />
                      </div>
                      <div className=" ">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="name"
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          defaultValue=" "
                          placeholder=" "
                          required
                        />
                      </div>
                      <div className=" ">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Confirm Email
                        </label>
                        <input
                          type="email"
                          name="name"
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          defaultValue=" "
                          placeholder=""
                          required
                        />
                      </div>
                      <div className=" ">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Phone: (Optional)
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          defaultValue=" "
                          placeholder=" "
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="category"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Country: (Optional)
                        </label>
                        <select
                          id="category"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        >
                          <option selected>Select a countary</option>
                          <option value="TV">USA</option>
                          <option value="PC">UK</option>
                          <option value="GA">India</option>
                        </select>
                      </div>
                    </div>
                    <div className="bg-blue-100 text-blue-700 text-xl font-semibold p-2 px-4 mt-10 mb-5">Arrival and Departure Details</div>
                    <div className="flex flex-wrap items-center gap-5 mb-5">
                      <div className="flex items-center  ">
                        <input
                          id="default-radio-1"
                          type="radio"
                          defaultValue=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ms-2 text-sm font-medium text-gray-900"
                        >
                          Air & Land (from North or South America)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          defaultChecked
                          id="default-radio-2"
                          type="radio"
                          defaultValue=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ms-2 text-sm font-medium text-gray-900"
                        >
                          Land Only (I will arrange my own airfare)
                        </label>
                      </div>
                    </div>
                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                      <div>
                        <label
                          htmlFor="category"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Arrival date to your destination
                        </label>
                        <DatePicker />
                      </div>
                      <div>
                        <label
                          htmlFor="category"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Return date out of your destination:
                        </label>
                        <DatePicker />
                      </div>
                    </div>
                    <div className="bg-blue-100 text-blue-700 text-xl font-semibold p-2 px-4 mt-10 mb-5">Additional Info</div>
                    <div className="grid gap-4 mb-4 w-full sm:mb-5">
                      <div>
                        <label
                          htmlFor="category"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          How did you hear about us?
                        </label>
                        <select
                          id="category"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        >
                          <option selected>Select Additional Info</option>
                          <option value="TV">-</option>
                          <option value="PC">-</option>
                          <option value="GA">-</option>
                          <option value="PH">-</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="description"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Comments
                        </label>
                        <textarea
                          id="description"
                          rows={5}
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                          placeholder=""
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Submit</button>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}