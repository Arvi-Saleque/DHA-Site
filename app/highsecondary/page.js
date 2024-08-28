import React from "react";

export default function page() {
  return (
    <>
       
      {/* Fee Section */}
      <section className="mt-10">
        <div className="w-4/5 mx-auto shadow-lg bg-slate-50">
          <h2 className="py-4 text-3xl font-bold text-center border-b-2">
            Syllabus of Class 11 to Class 12
          </h2>

          <div class="relative overflow-x-auto rounded-lg p-10">
            <h1 className="font-bold text-center">Upcoming</h1>
            <table class="w-4/5 mx-auto text-sm text-black text-center shadow-lg hidden">
              <thead class="text-xs text-gray-700 uppercase bg-slate-50 border-b-2 border-teal-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Class
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Download Link
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b-2">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    Pre One
                  </th>
                  <td class="px-6 py-4">
                    <button type="submit" className="hover:text-teal-400 duration-300">Download</button>
                  </td>
                </tr>
                <tr class="border-b-2">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    One
                  </th>
                  <td class="px-6 py-4">
                    <button type="submit" className="hover:text-teal-400 duration-300">Download</button>
                  </td>
                </tr>
                <tr class="border-b-2">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    Two
                  </th>
                  <td class="px-6 py-4">
                    <button type="submit" className="hover:text-teal-400 duration-300">Download</button>
                  </td>
                </tr>
                <tr class="border-b-2">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    Three
                  </th>
                  <td class="px-6 py-4">
                    <button type="submit" className="hover:text-teal-400 duration-300">Download</button>
                  </td>
                </tr>
                <tr class="border-b-2">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    Four
                  </th>
                  <td class="px-6 py-4">
                    <button type="submit" className="hover:text-teal-400 duration-300">Download</button>
                  </td>
                </tr>
                <tr class="border-b-2">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    Five
                  </th>
                  <td class="px-6 py-4">
                    <button type="submit" className="hover:text-teal-400 duration-300">Download</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
