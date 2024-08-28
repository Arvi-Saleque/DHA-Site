import Link from "next/link";

export default function page() {
  return (
    <section className="flex justify-evenly p-4">
      {/* First div - 60% width */}
      <div className="md:w-[50%] p-4 flex flex-col">
        <h2 className="font-semibold text-2xl text-black">
          দারুল হিকমাহ একাডেমির ২০২৩-২০২৪ শিক্ষাবর্ষের ভর্তি কার্যক্রম শুরু
        </h2>
        <p className="py-10">
          দারুল হিকমাহ একাডেমির ২০২৩-২০২৪ শিক্ষাবর্ষের ভর্তি কার্যক্রম
          সেপ্টেম্বর ২০২৩ থেকে শুরু হয়েছে আলহামদুলিল্লাহ। প্রতি শ্রেণিতে একটা
          নির্দিষ্ট সংখ্যক শিক্ষার্থী ভর্তি করানো হবে বিধায় ২০২৪ সালের প্রায় ৪
          মাস বাকী থাকতেই এ কার্যক্রম শুরু করার সিদ্ধান্ত নেয়া হয়েছে। উল্লেখ্য,
          ২০২৪ সাল দারুল হিকমাহ একাডেমির পথ চলার ৪র্থ বছর হবে আল্লাহ চাইলে এবং
          বর্তমান শিক্ষার্থীদের প্রায় সকলেই আমাদের সাথে থাকার ব্যপারে আগ্রহী।
          সুতরাং, নতুন বছরে স্বল্প সংখ্যক কিছু আসনে শিক্ষার্থী ভর্তি করা হবে
          ইনশাআল্লাহ্‌।
        </p>
        <ul className="flex flex-col gap-4 list-disc">
          <li>শিশু-২য় শ্রেণিঃ বালক ও বালিকা কো-এড (৩৫ জন সর্বোচ্চ)</li>
          <li>
            হিফজুল কুরআন সহ ৩য় শ্রেণি- ৫ম শ্রেণিঃ পৃথক বালক শাখা (২২ জন
            সর্বোচ্চ)
          </li>
          <li>হিফজুল কুরআন সহ ৩য় শ্রেণিঃ পৃথক বালিকা শাখা (২২ জন সর্বোচ্চ) </li>
        </ul>
      </div>

      {/* Empty space - 20% width */}
      <div className="md:w-[30%] bg-slate-50">
      <h2 className="text-center text-2xl py-5 border-b-2">Other Notice</h2>
        <ul className="text-center p-5 flex flex-col gap-5">
          <li className="flex items-center gap-3">
            <i className="bi bi-check-circle-fill text-2xl text-teal-400"></i>
            <Link href="http://localhost:3000/notice1"
              className="text-teal-400 duration-300"
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
