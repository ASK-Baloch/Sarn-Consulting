import { client, urlFor } from "../../../../sanity.client";
import { alltitleQuery, singlePostQuery } from "../../../../sanity.query";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import CardLayout from "../../../components/CardLayout";

export async function generateStaticParams() {
  const posts = await client.fetch(
    `*[_type == "post"]{ "slug": slug.current }`
  );
  return posts.map((post: { slug: string }) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
//   const { slug } = params;
//   const post = await client.fetch(singlePostQuery, { slug });
const post = await client.fetch(singlePostQuery, { slug: params.slug });
const recentBlogs = await client.fetch(alltitleQuery);

  if (!post) return notFound();

  return (
    <section className="lg:ml-12 lg:w-[80%] px-4 sm:px-8 mt-4">
  <p className="text-sm text-gray-500 sm:mx-8 mx-4 lg:ml-12">
        <a href="/" className="text-gray-700 font-semibold">Home</a> /
        <a href="/blogPage" className="text-gray-700 font-semibold pl-1">Blog</a> /
        <a className="text-[#3C73DA] font-semibold pl-1">{post.title}</a>
      </p>
      <CardLayout
        title={post.title}
        description={post.description}
        blogs={recentBlogs}
      >
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
              width={800} // Wider width
              height={500} // Adjusted height for squarer shape
              className="rounded-lg object-cover"
            />
          </div>
        )}
        <PortableText value={post.content} />
      </CardLayout>
    </section>
  );
}

// export const revalidate = 30;

// import Image from "next/image";
// import { allPostsQuery, singlePostQuery } from "../../../sanity.query";
// import { client, urlFor } from "../../../sanity.client";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { PortableText } from '@portabletext/react';

// export default async function PostPage({ params }: { params: { slug: string } }) {
//   const post = await client.fetch(singlePostQuery, { slug: params.slug });

//   if (!post) return notFound();

//   // 🔥 Fetch all recent posts here
//   const posts = await client.fetch(allPostsQuery);

//   return (

//     <main className="max-w-6xl mx-auto px-4 grid grid-cols-1 xl:grid-cols-[3fr_1fr] gap-6 mt-8 overflow-visible">
//       <section className="ml-12 w-[80%]">
//         <p className="text-sm text-gray-500 py-4">
//           <span className="text-gray-700 font-semibold">Home</span> / <span className="text-gray-700 font-semibold">Blog</span> / <span className="text-red-500">{post.title}</span>
//         </p>

//         <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>

//         <div className="flex justify-start items-center text-gray-600 mt-2 gap-3">
//           <Image src="/icons/person-icon.svg" height={25} width={25} alt="person icon" />
//           <p className="text-lg">Sarn Consulting</p>
//         </div>

//         {post.image && (
//           <div className="flex my-6">
//             <Image
//               src={urlFor(post.image).url()}
//               alt={post.title}
//               width={800}
//               height={400}
//               className="rounded-lg shadow-lg object-cover h-[20rem]"
//             />
//           </div>
//         )}

//         <div className="text-lg text-gray-800 leading-relaxed">
//           <PortableText value={post.content} />
//         </div>
//       </section>

//       <aside className="hidden xl:block sticky top-4 p-5 bg-gray-200 shadow-md rounded-lg h-[100vh] overflow-y-auto">
//         <h2 className="text-2xl font-bold mb-4 items-center justify-center">Recent Blogs</h2>

//         <ul>
//           {posts && Array.isArray(posts) && posts.length > 0 ? (
//             posts.map((recentPost: { _id: string; slug: { current: string }; title: string; description: string }) => (
//               <div key={recentPost._id}>
//                 <h2 className="font-medium text-sm mt-3 mx-2">
//                   <Link href={`/${recentPost.slug.current}`} className="hover:text-[#3C73DA]">
//                     {recentPost.title}
//                   </Link>
//                 </h2>

//               </div>
//             ))
//           ) : (
//             <li className="text-gray-500">No recent blogs available</li>
//           )}
//         </ul>
//       </aside>
//     </main>
//   );
// }
