import Image from "next/image";
import Link from "next/link";
import E1 from "/public/images/e1.jpg";
import E2 from "/public/images/e2.jpg";
import E3 from "/public/images/e3.jpg";

export default function page() {
  return (
    <section className="flex justify-evenly p-4">
      {/* First div - 60% width */}
      <div className="md:w-[50%] p-4 flex flex-col">
        <Image className="w-full h-fit" src={E2} alt="Event Image" />
        <p className="py-10 leading-8">
          আলহামদুলিল্লাহ! গত ৭ই সেপ্টেম্বর দারুল হিকমাহ একাডেমির ১ম, ২য় ও ৩য়
          শ্রেণীর শিক্ষার্থীদের নাজেরা ও হিফজুল কুরআনের ছবক প্রদান হাফলাহ
          অনুষ্ঠিত হয়। শিক্ষার্থীদের কুরআনুল কারিম থেকে ছবক প্রদান করেন হজরত
          মাওলানা আব্দুল কুদ্দুস সাহেব হুজুর, ইমাম, খুলনা বিশ্ববিদ্যালয়
          সেন্ট্রাল মসজিদ। অনুষ্ঠানে সভাপতিত্ব করেন একাডেমির প্রতিষ্ঠাতা সভাপতি
          প্রফেসর ডক্টর মোঃ ইমদাদুল হক, এবং বিশেষ দিক-নির্দেশনামূলক বক্তব্য
          রাখেন প্রফেসর ডক্টর শাহজাহান কবির স্যার, প্রফেসর, ইংরেজি ডিসিপ্লিন,
          খুলনা বিশ্ববিদ্যালয়। উল্লেখ্য, এই ১০ জন শিক্ষার্থী স্ব স্ব শ্রেণির ২য়
          গ্রুপ হিসেবে ছবক শুরু করেছে এবং পাশাপাশি স্কুল সেকশনেও সমানভাবে
          পরীক্ষায় অংশগ্রহণ করেছে। আল্লাহ এই সকল কুরআনের পাখিদেরকে কবুল করে নিন।
          আমীন।
        </p>
      </div>

      {/* Empty space - 20% width */}
      <div className="md:w-[30%]">
        <h1 className="text-5xl font-bold text-center p-5">Other Events</h1>
        <div className="flex flex-col items-center mt-10">
          <Link href="http://localhost:3000/e1">
            <div className="each-event flex items-center gap-5 bg-slate-50 px-4 py-8 w-[400px] hover:shadow-xl duration-300">
              <Image
                className="w-[150px] h-[100px]"
                src={E1}
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
                </div>
              </div>
            </div>
          </Link>

          <Link href="http://localhost:3000/e3">
            <div className="each-event flex items-center gap-5 mt-10 bg-slate-50 px-4 py-8 w-[400px] hover:shadow-xl duration-300">
              <Image
                className="w-[150px] h-[100px]"
                src={E3}
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
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
