import Link from "next/link";

export default function page() {
  return (
    <section className="flex justify-evenly p-4">
      {/* First div - 60% width */}
      <div className="md:w-[50%] p-4 flex flex-col">
        <h2 className="font-semibold text-2xl text-black">
          বার্ষিক পুরষ্কার বিতরন অনুষ্ঠান- ২০২২
        </h2>
        <p className="py-10">
          আলহামদুলিল্লাহ। দক্ষিণাঞ্চলের প্রায় ১৩ টি পত্রিকায় আমাদের
          শিক্ষার্থীদের বার্ষিক পরীক্ষায় সাফল্য ও ক্রীড়া প্রতিযোগিতায়
          পারফরম্যান্স এর খবর ও ছবি প্রকাশিত হয়েছে। এর মধ্যে আছে, পূর্বাঞ্চল,
          সময়ের খবর, আজকের তথ্য, নবচেতনা, দেশ সংযোগ, দক্ষিণাঞ্চল প্রতিদিন সহ আরো
          বেশ কিছু পত্রিকা। অভিনন্দন সকল বিজয়ী শিক্ষার্থীদের। বিশেষ কৃতজ্ঞতা মোঃ
          মাহবুবুর রহমান মুন্না ভাইকে আমাদের কোমলমতি শিক্ষার্থীদের সাথে সময়
          দেয়ার জন্য।
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
              className="hover:text-teal-400 duration-300"
            >
              নাজেরা ও হিফজুল কুরআনের ছবক প্রদান হাফলাহ (২য় গ্রুপ)
            </Link>
          </li>
          <li className="flex items-center gap-3">
            <i className="bi bi-check-circle-fill text-2xl text-teal-400"></i>
            <Link
              href="http://localhost:3000/notice3"
              className="text-teal-400 duration-300"
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
