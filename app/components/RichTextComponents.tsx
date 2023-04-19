import urlFor from '@/lib/urlFor'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div>
                    <Image src={urlFor(value).url()} alt="Blog Post Image" fill />
                </div>
            )
        }
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="ml-10 marker:text-[#E2815A] py-5 list-disc space-y-5">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="mt-lg list-decimal">{children}</ol>
        )
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className="text-5xl py-10 font-bold">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-4xl py-10 font-bold">{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="text-3xl py-10 font-bold">{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="text-2xl py-10 font-bold">{children}</h4>
        ),
        p: ({ children }: any) => (
            <p className="text-sm py-10 font-bold line-clamp-2">{children}</p>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-[#E2815A] border-l-4 pl-5 py-5 my-5">{children}</blockquote>
        ),
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
            return (
                <Link href={value.href} rel={rel} className='underline decoration-[#E2815A] hover:decoration-black'>
                    {children}
                </Link>
            )
        },
    }
}
