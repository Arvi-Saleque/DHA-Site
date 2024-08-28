import Link from "next/link";

export default function page() {
  return (
    <section className="flex justify-evenly p-4">
      
      {/* Empty space - 20% width */}
      <div className="md:w-[30%] bg-slate-50">
        <h2 className="text-center text-2xl py-5 border-b-2">All Notice</h2>
        <ul className="text-center p-5 flex flex-col gap-5">
          <li className="flex items-center gap-3">
            <i className="bi bi-check-circle-fill text-2xl text-teal-400"></i>
            <Link
              href="/notice1"
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
      </div>
    </section>
  );
}
