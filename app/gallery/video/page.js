"use client"

import { useState } from 'react'
import notice1 from "@/public/images/events-1.jpg";
import { ZoomIn } from 'lucide-react';
import Image from 'next/image';

export default function page() {
    const [active, setActive] = useState("All");
    const [video, setVideo] = useState(null);
    const categories = ["All", "Madrasa", "Classroom"];
    const videosContent = [
        {
            id: 1,
            src: "https://youtu.be/pwc8fbFoIWA",
            thumbnail: notice1,
            category: "Madrasa"
        },
        {
            id: 2,
            src: "https://youtu.be/pwc8fbFoIWA",
            thumbnail: notice1,
            category: "Classroom"
        },
        {
            id: 3,
            src: "https://youtu.be/pwc8fbFoIWA",
            thumbnail: notice1,
            category: "Classroom"
        },
        {
            id: 4,
            src: "https://youtu.be/pwc8fbFoIWA",
            thumbnail: notice1,
            category: "Madrasa"
        },
        {
            id: 5,
            src: "https://youtu.be/pwc8fbFoIWA",
            thumbnail: notice1,
            category: "Madrasa"
        },
    ]

    return (
        <section className="flex flex-col items-center w-full h-full p-4 pt-12 mt-20 gap-y-4">
            <div className="flex flex-col items-center justify-center w-full gap-2">
                <h1 className="text-3xl font-semibold">Video Gallery</h1>
                <p className="w-2/4 mx-auto text-lg text-center text-slate-500">Eligendi placeat ipsum rem beatae totam provident deleniti!</p>
            </div>
            <div className="flex items-center justify-center mt-4 gap-x-2">
                {
                    categories.map((category) => (
                        <button key={category} onClick={() => setActive(category)} className={`px-5 border-2 border-teal-400 rounded-full ${category == active ? "bg-teal-400 text-white" : "bg-white"}`}>{category}</button>))
                }

            </div>
            <div className="grid h-full grid-cols-1 gap-5 py-10 lg:grid-cols-4">
                {
                    videosContent.filter((video) => active == "All" ? true : video.category == active).map((video) => (
                        <div key={video.id} className="w-full h-full">
                            <div className="relative overflow-hidden rounded-lg h-60" onClick={() => setVideo(video.src)}>
                                <Image className="object-cover w-full h-full" src={video.thumbnail} alt="Thumbnail" />
                                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-all bg-black opacity-0 hover:opacity-60">
                                    <ZoomIn className="w-12 h-12 m-auto text-white cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                video && <VideoModal video={video} setVideo={setVideo} />
            }
        </section>

    )
}

function VideoModal({ video, setVideo }) {
    return (
        <div onClick={() => setVideo(null)} className="fixed top-0 left-0 z-[100] w-full h-full bg-black/45 flex items-center justify-center px-8">
            <div className="relative border-8 border-white w-full lg:w-2/4 h-72 lg:h-[35rem]">
                <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${getYouTubeVideoId(video)}?amp;controls=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    )
}


function getYouTubeVideoId(url) {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}