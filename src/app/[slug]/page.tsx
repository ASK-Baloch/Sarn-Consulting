import { client, urlFor } from '../../../sanity.client'
import { singlePostQuery } from '../../../sanity.query'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`)
  return posts.map((post: { slug: string }) => ({ slug: post.slug }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(singlePostQuery, { slug: params.slug })

  if (!post) return notFound()

  return (
    <main className="flex">
      <div className="bg-gray-200 text-black w-[70%] p-6 md:p-3">
        <h1 className="font-bold text-3xl text-center">{post.title}</h1>
        {post.image && (
          <div className="flex justify-center my-4">
            <Image
              src={urlFor(post.image).url()}
              alt={post.title}
              width={500}
              height={400}
              className="object-fit"
            />
          </div>
        )}
        <p>{post.description}</p>
        <PortableText value={post.content} />
      </div>
      <div className="bg-gray-100 w-[30%] shadow-md text-black p-5">
        <h1 className='text-3xl font-bold mb-3'>Recent Blogs</h1>
        <h1 className="hover:text-[#3C73DA] cursor-pointer transition-transform hover:scale-105">{post.title}</h1>
      </div>
    </main>
  )
}
