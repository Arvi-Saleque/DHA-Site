import React from "react";

export default function page() {
  return (
    <>
       
      {/* About Section */}
      <section>
        <div className="w-4/5 mx-auto mt-10 ">
          <h1 className="text-center text-5xl mt-5">Section of <span className="font-bold text-teal-400">Tahfeez & Islamic Shariya'h</span></h1>
          <div className="flex flex-col justify-evenly mt-10 md:flex-row">
            <div className="mt-5 each-factuly w-fit md:mt-0">
              <img className="w-[350px] h-[400px]" src="/images/man.jpg" alt="" />
              <h2 className="mt-4 text-lg font-bold flex flex-col">
                <span>হজরত মাওঃ মুফতি মাহমুদ হাসান</span> 
                <span>(Sheikh Mahmud Hasan)</span>
                </h2>
              <p className="pb-2 text-sm border-b-2 font-extralight flex flex-col">
                <span>(সিনিয়র মুহাদ্দিস, মাদানি নগর মাদরাসা, খুলনা)</span> 
                <span>(Senior Muhaddith, Madani Nagar Islamic Institution, Khulna)</span>  
              </p>
            </div>
            <div className="mt-5 each-factuly w-fit md:mt-0">
              <img className="w-[350px] h-[400px]" src="/images/man.jpg" alt="" />
              <h2 className="mt-4 text-lg font-bold flex flex-col">
                <span>হজরত মাওঃ মুফতি মীজানুর রশিদ</span> 
                <span>(Sheikh Mijanur Rashid)</span>
                </h2>
              <p className="pb-2 text-sm border-b-2 font-extralight flex flex-col">
                <span>(সিনিয়র মুহাদ্দিস, মোহাম্মাদনগর মাদরাসা, খুলনা)</span> 
                <span>(Senior Muhaddith, Mohammad Nagar Islamic Institution, Khulna)</span>  
              </p>
            </div>
            <div className="mt-5 each-factuly w-fit md:mt-0">
              <img className="w-[350px] h-[400px]" src="/images/man.jpg" alt="" />
              <h2 className="mt-4 text-lg font-bold flex flex-col">
                <span>হজরত মাওঃ মুফতি আব্দুল কুদ্দুস</span> 
                <span>(Sheikh Abdul Quddus)</span>
                </h2>
              <p className="pb-2 text-sm border-b-2 font-extralight flex flex-col">
                <span>(ইমাম ও খতীব, খুলনা বিশ্ববিদ্যালয় সেন্ট্রাল মসজিদ)</span> 
                <span>(Imam and Khatib, Khulna University Central Mosque)</span>  
              </p>
            </div>
          </div>
          <h1 className="text-center text-5xl mt-5">Section of <span className="font-bold text-teal-400">School & College</span></h1>
          <div className="flex flex-col justify-evenly mt-10 md:flex-row">
            <div className="mt-5 each-factuly w-fit md:mt-0">
              <img className="w-[350px] h-[400px]" src="/images/man.jpg" alt="" />
              <h2 className="mt-4 text-lg font-bold flex flex-col">
                <span>ডঃ মোঃ ইমদাদুল হক</span> 
                <span>(Dr. MD. Emdadul Huq)</span>
                </h2>
              <p className="pb-2 text-sm border-b-2 font-extralight flex flex-col">
                <span>(প্রফেসর, ইংরেজি ডিসিপ্লিন, খুলনা বিশ্ববিদ্যালয়)</span> 
                <span>(Professor, English Discipline, Khulna University)</span>  
              </p>
            </div>
            <div className="mt-5 each-factuly w-fit md:mt-0">
              <img className="w-[350px] h-[400px]" src="/images/man.jpg" alt="" />
              <h2 className="mt-4 text-lg font-bold flex flex-col">
                <span>ডঃ মোঃ ইউসুফ আলী</span> 
                <span>(Dr. MD. Yusuf Ali)</span>
                </h2>
              <p className="pb-2 text-sm border-b-2 font-extralight flex flex-col">
                <span>(প্রফেসর, এফএমআরটি ডিসিপ্লিন, খুলনা বিশ্ববিদ্যালয়)</span> 
                <span>(Professor, FMRT Discipline, Khulna University)</span>  
              </p>
            </div>
            <div className="mt-5 each-factuly w-fit md:mt-0">
              <img className="w-[350px] h-[400px]" src="/images/man.jpg" alt="" />
              <h2 className="mt-4 text-lg font-bold flex flex-col">
                <span>ডঃ মোঃ শাহজাহান কবির</span> 
                <span>(Dr. MD. Shahjahan Kabir)</span>
                </h2>
              <p className="pb-2 text-sm border-b-2 font-extralight flex flex-col">
                <span>(প্রফেসর, ইংরেজি ডিসিপ্লিন, খুলনা বিশ্ববিদ্যালয়)</span> 
                <span>(Professor, English Discipline, Khulna University)</span>  
              </p>
            </div>
            <div className="mt-5 each-factuly w-fit md:mt-0">
              <img className="w-[350px] h-[400px]" src="/images/man.jpg" alt="" />
              <h2 className="mt-4 text-lg font-bold flex flex-col">
                <span>মোহাম্মাদ নাজমুল হুদা</span> 
                <span>(Mohammad Nazmul Huda)</span>
                </h2>
              <p className="pb-2 text-sm border-b-2 font-extralight flex flex-col">
                <span>(অধ্যক্ষ, সামিট স্কুল, বসুপাড়া, খুলনা)</span> 
                <span> (Principal, Summit School, Basupara, Khulna)</span>  
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
