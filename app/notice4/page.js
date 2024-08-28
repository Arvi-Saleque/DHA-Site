import Link from "next/link";

export default function page() {
  return (
    <section className="flex justify-evenly p-4">
      {/* First div - 60% width */}
      <div className="md:w-[50%] p-4 flex flex-col">
        <h2 className="font-semibold text-2xl text-black">
          গভঃ রেজিস্টার্ড বেসরকারি স্কুল তালিকায় অন্তর্ভুক্তি
        </h2>
        <p className="py-10">
          আলহামদুলিল্লাহ! সুস্থ ও সুন্দর পরিবেশে পাঠদানের পাশাপাশি শিক্ষার সঠিক
          গুনগত মান নিশ্চিতকরণের ফলাফল হিসাবে মাত্র এক বছরেই দারুল হিকমাহ
          একাডেমি বেসরকারি স্কুলের তালিকায় প্রাথমিক শিক্ষা অধিদপ্তর থেকে
          রেজিস্টার্ড হয়েছে। মাত্র এক বছরের মধ্যেই সরকারি বিধিমালার ৩৬টি শর্ত
          পূরণ করে দারুল হিকমাহ একাডেমি প্রাথমিক শিক্ষা অধিদপ্তরে বেসরকারি স্কুল
          হিসেবে রেজিস্ট্রার্ড হওয়ার আবেদন করে এবং আল্লাহ তায়া’লার অশেষ
          মেহেরবানীতে বিগত ফেব্রুয়ারী ২০২২ এ গভঃ রেজিস্টার্ড বেসরকারি স্কুলের
          তালিকাভুক্ত হয়। উল্লেখ্য, দারুল হিকমাহ একাডেমি খুলনা বিশ্ববিদ্যালয়
          এলাকায় অবস্থিত একটি ইসলামিক ইন্সটিটিউশন যেখানে সুস্থ ও রুচিসম্মত
          পরিবেশে হিফজুল কুরআনের পাশাপাশি NCTB সিলেবাসে প্রাথমিক স্কুল শিক্ষা
          সম্পন্ন করা হয়ে থাকে।
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
              href="http://localhost:3000/notice1"
              className="hover:text-teal-400 duration-300"
            >
              নাজেরা ও হিফজুল কুরআনের ছবক প্রদান হাফলাহ (২য় গ্রুপ)
            </Link>
          </li>
          <li className="flex items-center gap-3">
            <i className="bi bi-check-circle-fill text-2xl text-teal-400"></i>
            <Link
              href="http://localhost:3000/notice1"
              className="hover:text-teal-400 duration-300"
            >
              বার্ষিক পুরষ্কার বিতরন অনুষ্ঠান- ২০২২
            </Link>
          </li>
          <li className="flex items-center gap-3">
            <i className="bi bi-check-circle-fill text-2xl text-teal-400"></i>
            <Link
              href="http://localhost:3000/notice1"
              className="text-teal-400 duration-300"
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
