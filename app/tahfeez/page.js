export default function page() {
  return (
    <>
       
      {/* About Section */}
      <section>
        <div class="w-full mx-auto flex justify-center mt-5 flex-col md:w-3/5">
          <div class="curriculum p-4 w-4/5 mx-auto">
            <h1 class="pb-4 text-xl font-bold text-teal-400">
              হিফজুল কুরআন বিভাগ
            </h1>
            <p className="flex flex-col mb-5">
              <span>আসসালামু আলাইকুম ওয়া রহমাতুল্লাহ।</span>
              <span>
                দারুল হিকমাহ একডেমির হিফজ বিভাগ ৩ বছরের প্রোগ্রামে সাজানো।
              </span>
            </p>
            <ul className="flex flex-col gap-4 mt-5">
              <li className="flex gap-2">
                <i class="bi bi-caret-right-fill text-lg"></i>
                <span>
                তৃতীয় শ্রেণিতে ন্যাশনাল কারিকুলামের জন্য মাত্র ২ ঘন্টা থাকবে এবং মূলত হিফজ এর প্রতি সর্বোচ্চ গুরুত্বারোপ করা হবে। এ বছর ৮-১০ পারা হিফজ করানোর চেষ্টা থাকবে। 
                </span>
              </li>
              <li className="flex gap-2">
                <i class="bi bi-caret-right-fill text-lg"></i>
                <span>
                চতুর্থ শ্রেণিতে-ও একই রকম পদ্ধতিতে হিফজ ও স্কুলের ক্লাস চলবে। স্কুলের ক্লাস সমূহ খুবি কম প্রেশারে পড়ানো হবে এবং ১৮-২০ পারা পর্যন্ত হিফজের লক্ষ্য থাকবে।
                </span>
              </li>
              <li className="flex gap-2 md:items-center">
                <i class="bi bi-caret-right-fill text-lg"></i>
                <span>
                পঞ্চম শ্রেণিতে হিফজ সম্পন্ন করানো হবে ইনশাআল্লাহ এবং এর পাশাপাশি বার্ষিক পরীক্ষার প্রস্তুতি থাকবে। 
                </span>
              </li>
            </ul>
            <p className="flex flex-col my-5">
              <span className="font-bold">বিশেষ দ্রষ্টব্যঃ</span>
              <span>
                উপরোক্ত প্রোগ্রাম শুধুমাত্র তাদের জন্য প্রযোজ্য যারা দারুল
                হিকমাহ একাডেমিতে প্রাক-প্রাথমিক থেকে পড়াশোনা করেছে অথবা সমমানের
                অন্য কোন শিক্ষাপ্রতিষ্ঠান থেকে পড়াশোনা করে এসে আমাদের একাডেমিক
                সিস্টেমের সাথে মানিয়ে নিয়েছে।
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
