import React from 'react'
import { Link } from 'react-router-dom'
import penielLogo from './../assets/peniel.png'
import { PROJECTS } from '../data'

export default function Landing() {
    return (
        <div className="flex flex-1 flex-col overflow-y-auto md:overflow-y-hidden md:flex-row">
            <div className="flex-1 flex flex-col">
                <div className="flex-1 p-5 py-20 md:p-20 flex flex-col justify-center space-y-10">
                    <div className="flex flex-col space-y-5">
                        <h1 className="text-xl font-bold">Software Engineer</h1>
                        <p className="text-6xl font-bold">Peniel Nyinaku</p>
                    </div>
                    <div className="flex flex-col space-y-8">
                        <p className="leading-relaxed text-sm md:text-base">I am a fullstack developer (Backend Heavy) with a decade of expertise in building secured and feature-rich applications. Proficient in morden technologies like React, Node Js, Python, Git and Docker. With a proven track record in Software development, tutoring and mentoring.</p>
                        <div className="flex flex-row items-center space-x-5">
                            <button className="bg-[#023047] text-[#8ecae6] px-10 py-3 text-sm font-semibold">
                                Hire Me
                            </button>
                            <Link className="flex flex-row items-center gap-3 text-sm font-semibold" to={"/projects"}>
                                Projects
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="md:h-2/6 py-10 md:py-0 px-5 flex md:items-center flex-col md:flex-row shrink-0 border-t border-[#023047] md:px-20 space-y-8 md:space-y-0">
                    <div className="md:w-1/3 text-lg flex flex-col space-y-5">
                        <div className="flex flex-col space-y-1">
                            <p >Recent <span className="inline-block md:hidden">Project</span> </p>
                            <p className='hidden md:flex'>Project {new Date().getFullYear()}</p>
                        </div>
                        <Link className="hidden md:flex flex-row  items-center gap-3 text-sm font-semibold" to={"/projects"}>
                            <p className="underline"> More projects</p>
                        </Link>
                    </div>
                    <div className="flex-1 flex flex-col space-y-5">
                        {PROJECTS.slice(0, 3).map((data, index) => <a key={`project-${index}`} className="flex flex-row items-center justify-between text-sm w-full border-b border-[#023047] pb-3" rel="noopener noreferrer" target='_blank' href={data.link}>
                            <p>{data.title}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>)}
                        <Link className="md:hidden flex flex-row  items-center gap-3 text-sm font-semibold" to={"/projects"}>
                            <p className="underline"> More projects</p>
                        </Link>
                    </div>

                </div>
            </div>
            <div className=" hidden md:w-2/6  border-l border-[#023047] overflow-hidden md:flex relative">
                <img className="h-full w-full object-cover" src={penielLogo} />
                <div className="absolute hidden md:flex bottom-10 left-10 right-10 bg-[#219ebc] h-fit  items-center justify-between p-1">
                    <p className="px-3 underline">Subscribe to my channel</p>
                    <a target='_blank' href="https://www.youtube.com/@devcon3977" className="bg-[#023047] p-4 flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
