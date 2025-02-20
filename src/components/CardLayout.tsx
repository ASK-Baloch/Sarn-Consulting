import React from "react";

interface CardLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  blogs?: { title: string; slug: string }[];
}

export default function CardLayout({ title, description, children, blogs }: CardLayoutProps) {
  return (
    <main className="flex flex-col md:flex-row max-w-6xl mx-auto px-6 py-10 gap-6">
      {/* Main Content */}
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full md:w-[70%]">
        <h1 className="text-3xl font-bold text-gray-900 text-center">{title}</h1>
        {description && <p className="text-lg text-gray-600 mt-2 text-center">{description}</p>}
        <div className="mt-6">{children}</div>
      </div>

      {/* Sidebar for Blogs */}
      <aside className="bg-gray-100 shadow-md rounded-lg p-5 w-full md:w-[30%]">
        <h2 className="text-2xl font-bold mb-4 text-center">Recent Blogs</h2>
        <div className="space-y-2">
          {blogs && blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <a
                key={index}
                href={`/blog/${blog.slug}`}
                className="block bg-white shadow-md p-3 rounded-lg hover:bg-gray-200 transition duration-200"
              >
                {blog.title}
              </a>
            ))
          ) : (
            <p className="text-gray-500 text-center">No blogs available.</p>
          )}
        </div>
      </aside>
    </main>
  );
}
