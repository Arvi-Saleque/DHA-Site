export default function page() {
  return (
    <>
       
      {/* About Section */}
      <section>
        <div class="w-full mx-auto flex justify-center mt-5 flex-col md:w-3/5">
          <div class="curriculum p-4 w-4/5 mx-auto">
            <h1 class="pb-4 text-xl font-bold text-teal-400">নাজেরা বিভাগ</h1>
            <p className="flex flex-col mb-5">
              <span>আসসালামু আলাইকুম ওয়া রহমাতুল্লাহ।</span>
              <span>
                দারুল হিকমাহ একডেমির নাজেরা (কুরআন দেখে পড়া) বিভাগ তিন শ্রেণিতে
                বিভক্ত।
              </span>
            </p>
            <ul className="flex flex-col gap-4 mt-5">
              <li className="flex gap-2">
                <i class="bi bi-caret-right-fill text-lg"></i>
                <span>
                  শিশু শ্রেণিতে ন্যাশনাল কারিকুলামের পাশাপাশি কায়দা (লাল কায়দা)
                  পড়ানো হবে।
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <i class="bi bi-caret-right-fill text-lg"></i>
                <span>
                  প্রথম শ্রেণিতে ন্যাশনাল কারিকুলামের পাশাপাশি আমপারা কমপ্লিট
                  করানো হবে।
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <i class="bi bi-caret-right-fill text-lg"></i>
                <span>
                  দ্বিতীয় শ্রেণিতে ন্যাশনাল কারিকুলামের পাশাপাশি সর্বনিম্ন ৮
                  পারা সহ মেধা অনুযায়ী সম্পূর্ণ নাজেরা সম্পন্ন করানো হবে।
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
