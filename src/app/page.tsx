// src/app/page.tsx
export const revalidate = 30; // Revalidate this page every 30 seconds

import { client, urlFor } from "../../sanity.client";
import { allPostsQuery } from "../../sanity.query";
import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
  const posts = await client.fetch(allPostsQuery);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>My Blog</h1>
      {posts.map((post: any) => (
        <div key={post._id} style={{ marginBottom: "2rem" }}>
          <h2>
            <Link href={`/${post.slug.current}`}>{post.title}</Link>
          </h2>
          {post.image && (
            <div style={{ width: "400px", height: "auto" }}>
              <Image
                src={urlFor(post.image).width(400).url()}
                alt={post.title}
                width={400}
                height={250}
                style={{ objectFit: "cover" }}
              />
            </div>
          )}

          <p>{post.description}</p>
        </div>
      ))}
      <p>
        <Link href="/studio">Go to Studio</Link>
      </p>
    </div>
  );
}
