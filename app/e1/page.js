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
        <Image className="w-full h-fit" src={E1} alt="Event Image" />
        <p className="py-10 leading-8">
          আলহামদুলিল্লাহ! দারুল হিকমাহ একাডেমি কর্তৃক আয়োজিত বার্ষিক পুরষ্কার
          বিতরন অনুষ্ঠান- ২০২২ এর মধ্য দিয়ে সফল ভাবে শেষ হলো ২০২২ শিক্ষাবর্ষের
          শিশু থেকে ২য় শ্রেণির সকল শিক্ষা ও সহশিক্ষা কার্যক্রম। এ অনুষ্ঠানে
          বার্ষিক পরীক্ষার ফলাফল ঘোষনা ও পুরষ্কার প্রদান এবং ক্রীড়া ও সাংস্কৃতিক
          প্রতিযোগিতার পুরষ্কার প্রদান করা হয়। এছাড়াও সম্মানিত অতিথিবৃন্দ
          একাডেমির শিক্ষক, অভিভাবক ও শিক্ষার্থীদের উদ্দেশ্যে মূল্যবান বক্তব্য
          রাখেন। অনুষ্ঠানে সভাপতিত্ব করেন একাডেমির প্রতিষ্ঠাতা সভাপতি প্রফেসর ড.
          ইমদাদুল হক (ইংরেজি ডিসিপ্লিন, খুলনা বিশ্ববিদ্যালয়)। প্রধান অতিথি
          হিসেবে ছিলেন হাফেজ মাওলানা আব্দুল কুদ্দুস সাহেব হুজুর (পেশ ঈমাম, খুলনা
          বিশ্ববিদ্যালয় সেন্ট্রাল মসজিদ)। বিশেষ অতিথি হিসেবে উপস্থিত ছিলেন
          প্রফেসর মোঃ সামিউল হক (ইংরেজি ডিসিপ্লিন, খুলনা বিশ্ববিদ্যালয়)। এছাড়াও
          সম্মানিত অতিথি হিসেবে উপস্থিত ছিলেন খুলনা বিশ্ববিদ্যালয়ের সম্মানিত
          প্রফেসর আব্দুল্লাহ আল- হারুন স্যার ও খুলনা প্রেসক্লাবের জয়েন্ট
          সেক্রেটারি মোঃ মাহবুবুর রহমান মুন্না সাহেব। সাংস্কৃতিক প্রতিযোগিতায়
          মোট ৩ টি গ্রুপে ৮ টা বিভাগে শিক্ষার্থীরা অংশগ্রহণ করে। ক্রীড়া
          প্রতিযোগিতায় মোট ৭ টা ভিন্ন ভিন্ন গ্রুপে ১৪ টা খেলায় শিক্ষার্থীরা
          অংশগ্রহণ করে।
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
