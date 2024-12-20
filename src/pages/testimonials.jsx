import React from 'react'
import { TESTIMONIALS } from '../data'

export default function Testimonials() {
    return (
        <div className="flex flex-1 flex-row overflow-hidden">
            <div className="flex-1 flex flex-col space-y-8 py-20 px-5 md:p-20 overflow-y-auto">
                <div className="flex flex-col space-y-5">
                    <p className="text-6xl">❝</p>
                    <h3 className="text-4xl font-bold">Testimonials</h3>
                </div>
                <p className="leading-loose md:w-2/4">Dont take my word for it. Listen to what my clients, associates and others have to say about me.</p>
                <div className="flex flex-row items-center space-x-5">
                    <div className="flex flex-row relative items-center">
                        {
                            TESTIMONIALS.slice(0, 3).map((testimonial, i) => <div key={`testimonial-${i}-image-4`} className={`${i == 1 ? "-translate-x-2" : i == 2 ? "-translate-x-4" : ""} h-10 w-10 rounded-full border-2 bg-[#023047] border-[#8ecae6] flex items-center justify-center`}>
                                <p className="text-sm font-medium text-[#8ecae6]">{testimonial.name.split(" ")[0][0]}{testimonial.name.split(" ")[1][0]}</p>
                            </div>)
                        }
                    </div>
                    <div className="flex flex-row relative space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <p className=" text-base font-semibold">5.0 Ratings</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-10 md:-mx-10">
                    {
                        TESTIMONIALS.map((testimonial, i) => <div key={`testimonial-${i}`} className="bg-[#023047]/50 backdrop-blur-sm text-[#023047] p-5 flex flex-col space-y-3 rounded-lg flex-1 h-full">
                            <p className="font-medium text-lg">{testimonial.title}</p>
                            <p className="text-sm leading-relaxed">{testimonial.description}</p>
                            <div className="flex-1" />
                            <div className="flex flex-row gap-3 border-t border-[#023047]  pt-3">
                                <div  className={`h-10 w-10 rounded-full border-2 bg-[#023047] border-[#8ecae6] flex items-center justify-center`}>
                                    <p className="text-sm font-medium text-[#8ecae6]">{testimonial.name.split(" ")[0][0]}{testimonial.name.split(" ")[1][0]}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium">{testimonial.name}</p>
                                    <p className="text-xs">@{testimonial.project}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

            </div>

        </div>
    )
}
