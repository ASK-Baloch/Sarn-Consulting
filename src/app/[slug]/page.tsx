// src/app/[slug].tsx
import { client, urlFor } from '../../../sanity.client'
import { singlePostQuery } from '../../../sanity.query'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`)
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(singlePostQuery, { slug: params.slug })

  if (!post) {
    return notFound()
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{post.title}</h1>
      {post.image && (
        <div style={{ width: '600px', height: 'auto' }}>
          <Image
            src={urlFor(post.image).width(800).url()}
            alt={post.title}
            width={600}
            height={400}
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <p>{post.description}</p>
      <PortableText value={post.content} />
    </div>
  )
}
