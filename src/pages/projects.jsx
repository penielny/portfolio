import React, { useState } from 'react'
import { PROJECTS } from '../data'
import ImagePreview from '../components/ImagePreview'
import { Link } from 'react-router-dom';

export default function Projects() {
    const [slectedProject, setSlectedProject] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="flex flex-col flex-1 overflow-hidden">
            <div className="border-b flex items-center h-20 border-[#023047] px-5 space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-[#023047]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} className="bg-transparent text-[#023047] placeholder:text-[#023047] flex-1 border-none outline-none" placeholder="Search projects ..." />
            </div>
            <div className="flex-1 flex-col space-y-10 p-10 overflow-y-auto">
                {PROJECTS.filter(({title,description,stacks})=>title.toLowerCase().includes(searchTerm.toLowerCase()) || description.toLowerCase().includes(searchTerm.toLowerCase()) || stacks.some((stack)=>stack.toLowerCase().includes(searchTerm.toLowerCase()))).map((project, index) => <div key={`project-${index}`} className="flex flex-col space-y-10">
                    <div className="flex flex-row items-start">
                        <div className="md:w-4/6 flex flex-row gap-10">
                          
                            <div className="flex flex-col space-y-2">
                                <Link target="_blank" to={project.link} className='font-semibold text-lg uppercase'>{project.title}<span className="md:hidden text-[11px] p-1 px-2 ml-3 capitalize bg-[#8ecae6] rounded-full">{project.type}</span> </Link>
                                <p className="text-base font-normal leading-relaxed text-[#8ecae6]">{project.stacks.join(" . ")}</p>
                                <p className="text-base font-normal leading-relaxed text-[#00171f] text-pretty">{project.description}</p>
                            </div>
                        </div>
                        <div className="hidden w-1/6 md:flex items-center justify-center">
                            <p>{project.date.getMonth()}, {project.date.getFullYear()}</p>
                        </div>
                        <div className="hidden w-1/6 md:flex items-center justify-center">
                            <p className="capitalize">{project.type}</p>
                        </div>
                        <Link target="_blank" to={project.link} className="bg-[#023047] p-4 hidden md:flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </Link>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <p className="font-medium text-sm">Screenshots ({project.shoots.length})</p>
                        <div className=" flex flex-row space-x-5 overflow-x-auto pb-5">
                            {
                                project.shoots.map((shoot, index) => (
                                    <div onClick={() => setSlectedProject({project,index})} key={`shoot-${index}`} className="max-w-80 h-48 bg-[#023047] rounded-md p-1 shrink-0 cursor-pointer shadow-md">
                                        <img className="h-full w-fit rounded-sm overflow-hidden" src={shoot} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                </div>)}
            </div>
            
            {slectedProject && <ImagePreview project={slectedProject} onClose={() => setSlectedProject(null)} />}

        </div>
    )
}
