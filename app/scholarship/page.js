export default function page() {
  return (
    <>
       
      {/* About Section */}
      <section>
        <div class="w-full mx-auto flex justify-center mt-5 flex-col md:w-3/5">
          <div class="curriculum p-4 w-4/5 mx-auto">
            <h1 class="pb-4">
              দারুল হিকমাহ একাডেমিতে শুধুমাত্র মেধাবী ও প্রমিজিং শিক্ষার্থীদেরকে
              তৃতীয় শ্রেণী থেকে একটা বিশেষ স্কলারশিপের আওতাভুক্ত করা হবে। তবে
              সেক্ষেত্রে বেশ কিছু{" "}
              <span className="font-bold text-2xl text-teal-400">শর্তাবলী</span>{" "}
              প্রযোজ্য হবে।{" "}
            </h1>
            <ul className="flex flex-col gap-4 mt-5">
              <li className="flex gap-2">
                <i class="bi bi-caret-right-fill text-lg"></i>
                <span>
                  শিশু থেকে দ্বিতীয় শ্রেণী পর্যন্ত একজন শিক্ষার্থীকে পাঠদানের
                  পাশাপাশি নিবিড় পর্যবেক্ষনে রাখা হবে। শিক্ষার্থী ও অভিভাবককে
                  প্রমান করতে হবে যে, তাঁরা একাডেমির সকল নিয়ম মেনে চলতে প্রস্তুত
                  ও শিক্ষার্থী স্টুডিয়াস।
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <i class="bi bi-caret-right-fill text-lg"></i>
                <span>
                  তৃতীয় শ্রেণীর ভর্তি পরীক্ষায় ৮০% মার্ক অর্জন করতে হবে।
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <i class="bi bi-caret-right-fill text-lg"></i>
                <span>
                  শিক্ষার্থী এতিম বা শিক্ষার্থীর অভিভাবক আর্থিকভাবে সহায়তার
                  মুখাপেক্ষী।
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <i class="bi bi-caret-right-fill text-lg"></i>
                <span>
                  অবস্থা বিবেচনায় ৩০% স্কলারশিপ থেকে শুরু করে ১০০% পর্যন্ত
                  স্কলারশিপ দেওয়া হবে।
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <i class="bi bi-caret-right-fill text-lg"></i>
                <span>
                  প্রতি শ্রেণিতে নির্দিষ্ট সংখ্যক কিছু শিক্ষার্থী এই স্কলারশিপ
                  এর আওতাভুক্ত হবে।
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
