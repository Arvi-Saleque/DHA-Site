import Link from "next/link";

export default function page() {
  return (
    <section className="flex justify-evenly p-4">
      {/* First div - 60% width */}
      <div className="md:w-[50%] p-4 flex flex-col">
        <h2 className="font-semibold text-2xl text-black">
          নাজেরা ও হিফজুল কুরআনের ছবক প্রদান হাফলাহ (২য় গ্রুপ)
        </h2>
        <p className="py-10">
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
      <div className="md:w-[30%] bg-slate-50">
      <h2 className="text-center text-2xl py-5 border-b-2">Other Notice</h2>
        <ul className="text-center p-5 flex flex-col gap-5">
          <li className="flex items-center gap-3">
            <i className="bi bi-check-circle-fill text-2xl text-teal-400"></i>
            <Link
              href="http://localhost:3000/notice1"
              className="hover:text-teal-400 duration-300"
            >
              দারুল হিকমাহ একাডেমির ২০২৩-২০২৪ শিক্ষাবর্ষের ভর্তি কার্যক্রম শুরু
            </Link>
          </li>
          <li className="flex items-center gap-3">
            <i className="bi bi-check-circle-fill text-2xl text-teal-400"></i>
            <Link
              href="http://localhost:3000/notice2"
              className="text-teal-400 duration-300"
            >
              নাজেরা ও হিফজুল কুরআনের ছবক প্রদান হাফলাহ (২য় গ্রুপ)
            </Link>
          </li>
          <li className="flex items-center gap-3">
            <i className="bi bi-check-circle-fill text-2xl text-teal-400"></i>
            <Link
              href="http://localhost:3000/notice3"
              className="hover:text-teal-400 duration-300"
            >
              বার্ষিক পুরষ্কার বিতরন অনুষ্ঠান- ২০২২
            </Link>
          </li>
          <li className="flex items-center gap-3">
            <i className="bi bi-check-circle-fill text-2xl text-teal-400"></i>
            <Link
              href="http://localhost:3000/notice4"
              className="hover:text-teal-400 duration-300"
            >
              গভঃ রেজিস্টার্ড বেসরকারি স্কুল তালিকায় অন্তর্ভুক্তি
            </Link>
          </li>
        </ul>
            <div className="w-full flex justify-center m-5">
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
    </section>
  );
}
