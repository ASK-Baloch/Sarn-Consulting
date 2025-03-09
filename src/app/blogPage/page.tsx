"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { urlFor } from "../../../sanity.client";
import { client } from "../../../sanity.client";
import { allPostsQuery } from "../../../sanity.query";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BlogsListing = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await client.fetch(allPostsQuery);
                setPosts(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        fetchData();
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 350;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="bg-gray-100 text-black py-12 flex flex-col items-center">
            <h1 className="font-bold text-3xl text-center mb-8 text-gray-800">Recent Blogs</h1>

            <div className="relative w-full max-w-7xl flex items-center">

                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 z-10 p-3 hover:border-blue-400 bg-white shadow-md text-gray-700 rounded-full hidden lg:flex hover:scale-110 transition-transform"
                >
                    <ChevronLeft size={32} />
                </button>


                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar w-full px-12"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {posts.map((post: any) => (
                        <div
                            key={post._id}
                            className="bg-white rounded-lg shadow-lg flex-shrink-0 w-[90%] sm:w-[320px] md:w-[300px] lg:w-[280px] transition-transform hover:scale-105 overflow-hidden"
                        >

                            {post.image && (
                                <div className="w-full h-[200px]">
                                    <Image
                                        src={urlFor(post.image).url()}
                                        alt={post.title}
                                        width={350}
                                        height={200}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            )}


                            <div className="p-5">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    <Link href={`/blog/${post.slug.current}`} className="hover:text-blue-600">
                                        {post.title.length > 35 ? post.title.slice(0, 35) + "..." : post.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-600 text-sm mt-2">
                                    {post.description.length > 100 ? post.description.slice(0, 100) + "..." : post.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 z-10 p-3 bg-white shadow-md text-gray-700 rounded-full hidden lg:flex hover:scale-110 transition-transform"
                >
                    <ChevronRight size={32} />
                </button>
            </div>
        </div>
    );
};

export default BlogsListing;
