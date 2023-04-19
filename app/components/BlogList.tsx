
import urlFor from '@/lib/urlFor';
import Image from 'next/image';
import React from 'react'

type Props = {
    posts: Post[];
}

export default function BlogList({ posts }: Props) {
    console.log(posts);

    return (
        <div>
            <hr className="border-1 border-[#F7AB0A] mb-8" />
            <div>
                {posts.map((post) => {
                    return <div key={post._id} className='group cursor-pointer flex flex-col'>
                        <div className='relative w-3/4 h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
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
                                        <div className='bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold'>
                                            <p>{item.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 mt-5'>
                            <p className="text-lg underline font-bold">{post.title}</p>
                            <p className="text-gray-500 underline font-bold line-clamp-2">{post.description}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
