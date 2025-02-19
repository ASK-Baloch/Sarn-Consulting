import { client, urlFor } from '../../../../sanity.client'
import { alltitleQuery, singlePostQuery } from '../../../../sanity.query'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import CardLayout from '../../components/CardLayout'

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`)
  return posts.map((post: { slug: string }) => ({ slug: post.slug }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(singlePostQuery, { slug: params.slug })
  const recentBlogs = await client.fetch(alltitleQuery); 

  if (!post) return notFound()

  return (
    <CardLayout title={post.title} description={post.description} blogs={recentBlogs}>
    {/* <main className="flex">
      <div className=" text-black ">
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
        </main> */}
      {post.image && (
        <div className="flex justify-center my-4">
          <Image
            src={urlFor(post.image).url()}
            alt={post.title}
            width={800}  // Wider width
            height={500} // Adjusted height for squarer shape
            className="rounded-lg object-cover"
          />
        </div>
    )}
    <PortableText value={post.content} />
    </CardLayout>
  )
}
