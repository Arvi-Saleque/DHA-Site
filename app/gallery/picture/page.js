"use client"

import { useState } from 'react'
import notice1 from "@/public/images/events-1.jpg";
import Image from 'next/image';
import { ZoomIn } from 'lucide-react';

export default function page() {
    const [active, setActive] = useState("All");
    const [image, setImage] = useState(null);
    const categories = ["All", "Madrasa", "Classroom"];
    const imagesContent = [
        {
            id: 1,
            src: notice1,
            category: "Madrasa"
        },
        {
            id: 2,
            src: notice1,
            category: "Classroom"
        },
        {
            id: 3,
            src: notice1,
            category: "Classroom"
        },
        {
            id: 4,
            src: notice1,
            category: "Madrasa"
        },
        {
            id: 5,
            src: notice1,
            category: "Madrasa"
        },
    ]

    return (
        <section className="flex flex-col items-center w-full h-full p-4 pt-12 mt-20 gap-y-4">
            <div className="flex flex-col items-center justify-center w-full gap-2">
                <h1 className="text-3xl font-semibold">Photo Gallery</h1>
            </div>
            <div className="flex items-center justify-center mt-4 gap-x-2">
                {
                    categories.map((category) => (
                        <button key={category} onClick={() => setActive(category)} className={`px-5 border-2 border-teal-400 
                            shadow-xl rounded-md ${category == active ? "bg-teal-400 text-white" : "bg-white"}`}>{category}</button>))
                }

            </div>
            <div className="grid h-full grid-cols-1 gap-5 py-10 lg:grid-cols-4">
                {
                    imagesContent.filter((image) => active == "All" ? true : image.category == active).map((image) => (
                        <div key={image.id} className="w-full h-full">
                            <div className="relative overflow-hidden rounded-lg h-60" onClick={() => setImage(image.src)}>
                                <Image className="object-cover w-full h-full" src={image.src} alt="" />
                                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-all bg-black opacity-0 hover:opacity-60">
                                    <ZoomIn className="w-12 h-12 m-auto text-white cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                image && <ImageModal img={image} setImage={setImage} />
            }
        </section>

    )
}

function ImageModal({ img, setImage }) {
    return (
        <div onClick={() => setImage(null)} className="fixed top-0 left-0 z-[100] w-full h-full bg-black/45 flex items-center justify-center px-8">
            <div className="relative border-8 border-white h-72 lg:h-[35rem]">
                <Image className="object-cover w-full h-full" src={img} alt="Image" />
            </div>
        </div>
    )
}
