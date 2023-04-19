import { groq } from "next-sanity"
import client from '../../sanity-client/client'
import BlogList from "../components/BlogList";

const query = groq
  `
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`
export default async function Home() {

  const posts = await client.fetch(query); 

  return (
    <BlogList posts={posts} />
  )
}
