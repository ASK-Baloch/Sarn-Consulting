import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../../../sanity.client";
import { client } from "../../../sanity.client";
import { allPostsQuery } from "../../../sanity.query";

const BlogsListing = async () => {
  const posts = await client.fetch(allPostsQuery);
  return (
    <div style={{ padding: "2rem" }} >
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
};

export default BlogsListing;
