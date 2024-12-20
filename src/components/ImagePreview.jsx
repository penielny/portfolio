import React from 'react'

export default function ImagePreview({onClose , project  }) {
    
    return (
        <div className="absolute top-0 flex flex-col bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm overflow-hidden">
            <div className="h-[10vh]  flex flex-row items-center justify-end px-10">
                <button onClick={onClose} className="bg-[#023047] p-4 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center">
                    <div className="h-full flex p-1 bg-[#8ecae6] rounded">
                    <img className="h-full" src={project.project.shoots[project.index]} />
                    </div>
            </div>
            <div className="h-[10vh] shrink-0 flex flex-row items-center">

            </div>
        </div>
    )
}
