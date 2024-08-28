import Image from "next/image";
import notice1 from "@/public/images/notice-1.jpg";
import notice2 from "@/public/images/notice-2.jpg";
import EventImage1 from "@/public/images/e1.jpg";
import EventImage2 from "@/public/images/e2.jpg";
import EventImage3 from "@/public/images/e3.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

export default function Home() {
  const content = [
    <>
      <span>
        Combined curricula of NCTB and Tahfidh ul Quran (Check "Combined
        Curriculum" for details)
      </span>
      <span>
        NCTB ন্যাশনাল কারিকুলাম এবং হিফজুল কুরআনের একটি সমন্বিত শিক্ষাব্যবস্থা
        (বিস্তারিত জানতে "Combined Curriculum" অপশনে ক্লিক করুন)
      </span>
    </>,
    <>
      <span>
        Proper Islamic manners and thoughts will be taught and practiced.
      </span>
      <span>আদর্শ ইসলামী মূল্যবোধ শিক্ষা দেওয়া ও তা বাস্তবায়ন করা হবে।</span>
    </>,
    <>
      <span>Own Academic building, Play Ground and an adjoined Mosque.</span>
      <span>নিজস্ব একাডেমিক ভবন, খেলার মাঠ এবং একটি সংলগ্ন মসজিদ</span>
    </>,
    <>
      <span>
        24/7 CCTV facilities covering all ClasclassNamerooms, Play Ground and
        Roadside
      </span>
      <span>
        সকল শ্রেণিকক্ষ, খেলার মাঠ এবং একাডেমি সংলগ্ন রাস্তা সার্বক্ষণিক
        সিসিটিভির আওতাভুক্ত
      </span>
    </>,
    <>
      <span>
        The advisory board of School & College section consisting of Teachers
        from Khulna University, KUET and Medical College
      </span>
      <span>
        স্কুল ও কলেজ সেকশনের উপদেষ্টা পরিষদে আছেন খুলনা বিশ্ববিদ্যালয়, কুয়েট এবং
        মেডিক্যাল কলেজের শিক্ষকবৃন্দ
      </span>
    </>,
    <>
      <span>
        The advisory board of Hifz and Shariaya'h section consisting of
        honourable Islamic Scholars and Khatibs from Khulna city
      </span>
      <span>
        হিফজ ও শরীয়াহ সেকশনের উপদেষ্টা পরিষদে আছেন সম্মানিত ইসলামিক স্কলারগণ ও
        খুলনা শহরের একাধিক খতীবগণ{" "}
      </span>
    </>,
  ];

  return (
    <>
      {/* About Section */}
      <section>
        <div className="w-4/5 mx-auto flex justify-between mt-5 flex-wrap xl:flex-nowrap">
          <div className="why-dha p-4 w-fit">
            <h1 className="text-5xl text-center">
              Why <span className="text-teal-400">DHA</span>
            </h1>
            <ul className="py-4 mt-5 flex flex-col md:gap-3 gap-5">
              <li className="flex">
                <i className="bi bi-check-circle-fill text-2xl text-teal-400"></i>
                <p className="px-4 flex flex-col">
                  <span>
                    Combined curricula of NCTB and Tahfidh ul Quran (Check
                    "Combined Curriculum" for details)
                  </span>
                  <span>
                    NCTB ন্যাশনাল কারিকুলাম এবং হিফজুল কুরআনের একটি সমন্বিত
                    শিক্ষাব্যবস্থা (বিস্তারিত জানতে "Combined Curriculum" অপশনে
                    ক্লিক করুন)
                  </span>
                </p>
              </li>
              <li className="flex">
                <i className="bi bi-check-circle-fill text-2xl text-teal-400"></i>
                <p className="px-4 flex flex-col">
                  <span>
                    Proper Islamic manners and thoughts will be taught and
                    practiced.
                  </span>
                  <span>
                    আদর্শ ইসলামী মূল্যবোধ শিক্ষা দেওয়া ও তা বাস্তবায়ন করা হবে।
                  </span>
                </p>
              </li>
              <li className="flex">
                <i className="bi bi-check-circle-fill text-2xl text-teal-400"></i>
                <p className="px-4 flex flex-col">
                  <span>
                    Own Academic building, Play Ground and an adjoined Mosque.
                  </span>
                  <span>
                    নিজস্ব একাডেমিক ভবন, খেলার মাঠ এবং একটি সংলগ্ন মসজিদ
                  </span>
                </p>
              </li>
              <li className="flex">
                <i className="bi bi-check-circle-fill text-2xl text-teal-400"></i>
                <p className="px-4 flex flex-col">
                  <span>
                    24/7 CCTV facilities covering all ClasclassNamerooms, Play
                    Ground and Roadside.
                  </span>
                  <span>
                    সকল শ্রেণিকক্ষ, খেলার মাঠ এবং একাডেমি সংলগ্ন রাস্তা
                    সার্বক্ষণিক সিসিটিভির আওতাভুক্ত
                  </span>
                </p>
              </li>
              <li className="flex">
                <i className="bi bi-check-circle-fill text-2xl text-teal-400"></i>
                <p className="px-4 flex flex-col">
                  <span>
                    The advisory board of School & College section consisting of
                    Teachers from Khulna University, KUET and Medical College.
                  </span>
                  <span>
                    স্কুল ও কলেজ সেকশনের উপদেষ্টা পরিষদে আছেন খুলনা
                    বিশ্ববিদ্যালয়, কুয়েট এবং মেডিক্যাল কলেজের শিক্ষকবৃন্দ
                  </span>
                </p>
              </li>
              <li className="flex mt-5">
                <i className="bi bi-check-circle-fill text-2xl text-teal-400"></i>
                <p className="px-4 flex flex-col">
                  <span>
                    The advisory board of Hifz and Shariaya'h section consisting
                    of honourable Islamic Scholars and Khatibs from Khulna city.
                  </span>
                  <span>
                    হিফজ ও শরীয়াহ সেকশনের উপদেষ্টা পরিষদে আছেন সম্মানিত ইসলামিক
                    স্কলারগণ ও খুলনা শহরের একাধিক খতীবগণ
                  </span>
                </p>
              </li>
            </ul>
            <div className="w-full flex justify-center">
              <Link href="http://localhost:3000/mission">
              <button
                className="bg-teal-400 text-white px-4 py-2 rounded-xl hover:bg-black hover:text-white duration-500"
                type="submit"
              >
                Explore
              </button>
              </Link>
            </div>
          </div>
          <div className="notice-board w-full mx-auto mt-10 md:mt-0">
            <h2 className="text-center font-bold text-3xl px-2 py-4">
              Notice Board
            </h2>
            <Link href="http://localhost:3000/notice1">
              <div className="each-notice flex flex-col shadow-sm p-10 gap-10 md:flex-row hover:shadow-lg duration-300">
                <div>
                  <Image src={notice1} width={350} height={300} />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-lg">
                  দারুল হিকমাহ একাডেমির ২০২৩-২০২৪ শিক্ষাবর্ষের ভর্তি কার্যক্রম শুরু
                  </p>
                  <div className="flex mt-3">
                    <i className="fa-duotone fa-solid fa-calendar-days text-lg text-teal-400"></i>
                    <p>October 15, 2024</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="http://localhost:3000/notice2">
              <div className="each-notice flex flex-col shadow-sm p-10 gap-10 md:flex-row mt-5 hover:shadow-lg duration-300">
                <div>
                  <Image src={notice2} width={350} height={300} />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-lg">
                    নাজেরা ও হিফজুল কুরআনের ছবক প্রদান হাফলাহ (২য় গ্রুপ)
                  </p>
                  <div className="flex mt-3">
                    <i className="fa-duotone fa-solid fa-calendar-days text-lg text-teal-400"></i>
                    <p>October 15, 2024</p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="w-full flex justify-center mt-5">
              <Link href="http://localhost:3000/allnotice">
              <button
                className="bg-teal-400 text-white px-4 py-2 rounded-xl hover:bg-black hover:text-white duration-500"
                type="submit"
              >
                More Notices
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Events Section */}
      <section>
        <div className="w-4/5 mx-auto mt-10">
          <h1 className="text-5xl font-bold text-center">Highlighed Events</h1>
          <div className="flex flex-col mt-10 main-div xl:flex-row xl:justify-around ">
            <Link href="http://localhost:3000/e1">
            <div className="each-event bg-slate-50 p-10 w-[400px] hover:shadow-xl duration-300">
              <Image
                className="w-[350px] h-[250px]"
                src={EventImage1}
                alt="Event Image"
              />
              <div className="flex mt-5">
                <div className="mr-4 date">
                  <h1 className="font-bold">
                    <span className="text-4xl text-teal-400">24</span> <br />
                    JAN
                  </h1>
                </div>
                <div className="event-content">
                  <h2 className="pl-4 font-bold border-l-2 border-teal-400">
                    বার্ষিক পুরষ্কার বিতরন অনুষ্ঠান- ২০২২ 
                  </h2>
                  <div className="flex items-center mt-3">
                    <i className="text-lg text-teal-400 fa-duotone fa-solid fa-calendar-days" />
                    <p className="ml-3">12:00 PM - 02:00 PM</p>
                  </div>
                  <div className="flex items-center mt-3">
                    <i className="text-lg text-teal-400 fa-solid fa-location" />
                    <p className="ml-3">
                      Darul Hikmah Academ <br />
                      KHULNA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </Link>
            <Link href="http://localhost:3000/e2">
            <div className="each-event bg-slate-50 p-10 w-[400px] hover:shadow-xl duration-300">
              <Image
                className="w-[350px] h-[250px]"
                src={EventImage2}
                alt="Event Image"
              />
              <div className="flex mt-5">
                <div className="mr-4 date">
                  <h1 className="font-bold">
                    <span className="text-4xl text-teal-400">24</span> <br />
                    JAN
                  </h1>
                </div>
                <div className="event-content">
                  <h2 className="pl-4 font-bold border-l-2 border-teal-400">
                  নাজেরা ও হিফজুল কুরআনের ছবক প্রদান হাফলাহ (২য় গ্রুপ) 
                  </h2>
                  <div className="flex items-center mt-3">
                    <i className="text-lg text-teal-400 fa-duotone fa-solid fa-calendar-days" />
                    <p className="ml-3">12:00 PM - 02:00 PM</p>
                  </div>
                  <div className="flex items-center mt-3">
                    <i className="text-lg text-teal-400 fa-solid fa-location" />
                    <p className="ml-3">
                      Darul Hikmah Academ <br />
                      KHULNA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </Link>
            <Link href="http://localhost:3000/e3">
            <div className="each-event bg-slate-50 p-10 w-[400px] hover:shadow-xl duration-300">
              <Image
                className="w-[350px] h-[250px]"
                src={EventImage3}
                alt="Event Image"
              />
              <div className="flex mt-5">
                <div className="mr-4 date">
                  <h1 className="font-bold">
                    <span className="text-4xl text-teal-400">24</span> <br />
                    JAN
                  </h1>
                </div>
                <div className="event-content">
                  <h2 className="pl-4 font-bold border-l-2 border-teal-400">
                    Book Distribution 
                  </h2>
                  <div className="flex items-center mt-3">
                    <i className="text-lg text-teal-400 fa-duotone fa-solid fa-calendar-days" />
                    <p className="ml-3">12:00 PM - 02:00 PM</p>
                  </div>
                  <div className="flex items-center mt-3">
                    <i className="text-lg text-teal-400 fa-solid fa-location" />
                    <p className="ml-3">
                      Darul Hikmah Academ <br />
                      KHULNA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
