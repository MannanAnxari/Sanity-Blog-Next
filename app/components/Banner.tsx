import React from 'react'

export default function Banner() {
    return (
        <div className='flex items-center justify-between flex-col lg:flex-row lg:space-x-5 font-bold px-10 py-5 mb-10'>
            <div>
                <h1 className="text-7xl mb-2">
                    Blox Daily Blogs
                </h1>
                <h2 className="mt-5 md:mt-0 ps-1">
                    Welcome to&nbsp;
                    <span className="underline decoration-2 decoration-[#f7ab0a]">
                        Every Developer!
                    </span>&nbsp;
                    favourite blog in Dev World!
                </h2>
            </div>
            <p className='mt-5 md:mt-2 text-gray-500 max-w-sm font-normal'>
                New product features | The latest in technnology | The weekly debugging nightmares & More...
            </p>
        </div>
    )
}
