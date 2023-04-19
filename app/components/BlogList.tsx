
import urlFor from '@/lib/urlFor';
import Image from 'next/image';
import React from 'react'
import ClientSideRoute from './ClientSideRoute';

type Props = {
    posts: Post[];
}

export default function BlogList({ posts }: Props) {

    return (
        <div>
            <hr className="border-1 border-[#E2815A] mb-8" />
            <div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24'>
                {posts.map((post) => {
                    return <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
                        <div className="group cursor-pointer flex flex-col">
                            <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
                                <Image
                                    src={urlFor(post.mainImage).url()}
                                    className='object-cover object-left lg:object-center'
                                    alt={post.author.name}
                                    fill
                                />
                                <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
                                    <div>
                                        <p className='font-bold capitalize'>
                                            {post.title}
                                        </p>
                                        <p>
                                            {new Date(post._createdAt).toLocaleDateString("en-US", {
                                                day: "numeric",
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
                                        {post.categories.map(item => (
                                            <div className='bg-[#E2815A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold'>
                                                <p>{item.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 mt-5'>
                                <p className="text-lg group-hover:underline font-bold line-clamp-1 capitalize">{post.title}</p>
                                <p className="text-gray-500 line-clamp-2">{post.description}</p>
                            </div>
                            <p className='mt-5 font-bold flex items-center group-hover:underline'>
                                Read Post <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-7 ml-4 h-7'><g data-name="Circle Up Right"><circle className='transition-all fill-none group-hover:fill-[#ffdecfd3]' cx="12" cy="12" r="10" /><path d="M16 7h-4a1 1 0 0 0 0 2h1.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L15 10.414V12a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z" style={{ fill: '#E2815A' }} /></g></svg>
                            </p>
                        </div>
                    </ClientSideRoute>
                })}
            </div>
        </div>
    )
}
