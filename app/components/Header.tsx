import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className='flex items-center justify-between space-x-2 font-bold py-5 px-10'>

            <div className='flex items-center space-x-2'>
                <Link href='/'>
                    <Image
                        width={40}
                        height={40}
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflr8jQugiNYk5TARmNrS3cTMAr7MmfPQb8yfEp5B4pXZvGJOraLFpeax7Onf1k6QFDH0&usqp=CAU'}
                        className='rounded-full'
                        alt="as"
                    />
                </Link>
                <h1>The Blox</h1>
            </div>
            <div>
                <Link href={''} className='md:px-10 px-6 py-2 text-sm md:text-base bg-gray-900 text-[#f7ab0a] hover:scale-105 active:scale-95 hover:bg-gray-700 active:bg-gray-800 transition-all flex items-center rounded-full text-center'>
                    Sign up to the Blox
                </Link>
            </div>
        </header>
    )
}
