import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../../sanity.client";
import { client } from "../../sanity.client";
import { allPostsQuery } from "../../sanity.query";

const BlogsListing = async () => {
  const posts = await client.fetch(allPostsQuery);
  return (
    <div className="bg-gray-100 text-black overflow-hidden p-8 flex flex-col items-center">
      <h1 className="font-bold text-2xl sm:text-3xl text-center my-12">Recent Blogs</h1>
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-6xl ">
        {posts.map((post: any) => (
          <div
            key={post._id}
            className="border border-[#3C73DA] shadow-md rounded-lg bg-white flex flex-col  w-[90%] sm:w-[300px] md:w-[260px] lg:w-[240px] h-auto transition-transform hover:scale-105"
          >
            {post.image && (
              <div className="w-full h-[180px] flex justify-center">
                <Image
                  src={urlFor(post.image).url()}
                  alt={post.title}
                  width={250}
                  height={180}
                  className="rounded-md object-fit"
                />
              </div>
            )}
            <h2 className="font-medium text-lg mt-3 mx-3">
              <Link href={`/blog/${post.slug.current}`} className="hover:text-[#3C73DA]">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-700 text-sm mt-1 mx-3 ">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsListing;
