import React from 'react'

export default function page() {
    return (
        <>
            {/* Slider Section */}
            <section className="w-full bg-slate-300 h-[600px]" />
            {/* About Section */}
            <section>
                <div className="w-4/5 mx-auto mt-10 ">
                    <h1 className="text-5xl font-bold text-center">Our Teams</h1>
                    <div className="flex flex-col justify-around mt-10 md:flex-row">
                        <div className="mt-5 each-factuly w-fit md:mt-0">
                            <img className="w-[350px]" src="/images/director-2.jpg" alt="" />
                            <h2 className="mt-4 text-lg font-bold">Abdullah USAMA</h2>
                            <p className="pb-2 text-sm border-b-2 font-extralight">
                                Principal, DHA
                            </p>
                            <div className="flex items-center mt-4">
                                <i className="mr-4 text-teal-400 fa-solid fa-message" />
                                <p>hellosupport@gmail.com</p>
                            </div>
                            <div className="flex items-center mt-4">
                                <i className="mr-4 text-teal-400 fa-solid fa-message" />
                                <p>+8801988-468065</p>
                            </div>
                        </div>
                        <div className="mt-5 each-factuly w-fit md:mt-0">
                            <img className="w-[350px]" src="/images/director-2.jpg" alt="" />
                            <h2 className="mt-4 text-lg font-bold">Abdullah USAMA</h2>
                            <p className="pb-2 text-sm border-b-2 font-extralight">
                                Principal, DHA
                            </p>
                            <div className="flex items-center mt-4">
                                <i className="mr-4 text-teal-400 fa-solid fa-message" />
                                <p>hellosupport@gmail.com</p>
                            </div>
                            <div className="flex items-center mt-4">
                                <i className="mr-4 text-teal-400 fa-solid fa-message" />
                                <p>+8801988-468065</p>
                            </div>
                        </div>
                        <div className="mt-5 each-factuly w-fit md:mt-0">
                            <img className="w-[350px]" src="/images/director-2.jpg" alt="" />
                            <h2 className="mt-4 text-lg font-bold">Abdullah USAMA</h2>
                            <p className="pb-2 text-sm border-b-2 font-extralight">
                                Principal, DHA
                            </p>
                            <div className="flex items-center mt-4">
                                <i className="mr-4 text-teal-400 fa-solid fa-message" />
                                <p>hellosupport@gmail.com</p>
                            </div>
                            <div className="flex items-center mt-4">
                                <i className="mr-4 text-teal-400 fa-solid fa-message" />
                                <p>+8801988-468065</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
