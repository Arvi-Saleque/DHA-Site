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
        <Image className="w-full h-fit" src={E3} alt="Event Image" />
        <p className="py-10 leading-8">
          আলহামদুলিল্লাহি রব্বিল আ'লামিন! এক ঝাঁক নতুন স্বপ্নদের সাথে নিয়ে দারুল
          হিকমাহ একাডেমির পথচলা শুরু হয়ে গিয়েছে। গত শনিবার সকল শিক্ষার্থীদের
          পাঠ্যবই ও আনুষঙ্গিক আরো কিছু বই ও খাতা প্রদানের অনুষ্ঠান ছিলো এবং
          প্রায় সকল অভিভাবকবৃন্দ তাদের সন্তানদের নিয়ে উপস্থিত ছিলেন। আনুষ্ঠানিক
          ভাবে আগামী শনিবার থেকে ইনশাআল্লাহ আমাদের ক্লাস শুরু হবে।
        </p>
      </div>

      {/* Empty space - 20% width */}
      <div className="md:w-[30%]">
        <h1 className="text-5xl font-bold text-center p-5">Other Events</h1>
        <div className="flex flex-col items-center mt-10">
          <Link href="http://localhost:3000/e2">
            <div className="each-event flex items-center gap-5 bg-slate-50 px-4 py-8 w-[400px] hover:shadow-xl duration-300">
              <Image
                className="w-[150px] h-[100px]"
                src={E2}
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
                </div>
              </div>
            </div>
          </Link>

          <Link href="http://localhost:3000/e1">
            <div className="each-event flex items-center gap-5 mt-10 bg-slate-50 px-4 py-8 w-[400px] hover:shadow-xl duration-300">
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
        </div>
      </div>
    </section>
  );
}
