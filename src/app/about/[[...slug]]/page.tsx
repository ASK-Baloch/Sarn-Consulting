// @ts-nocheck
import aboutData from "@/data/about.json";
import { notFound } from "next/navigation";
import CardLayout from "../../../components/CardLayout";
import { alltitleQuery } from "../../../../sanity.query";
import { client } from "../../../../sanity.client";

interface ContentSection {
  type: "paragraph" | "bullet_points" | "quote";
  text?: string;
  items?: string[];
}

interface AboutContent {
  title: string;
  description: string;
  content: ContentSection[];
}

interface AboutData {
  about: { label: string; slug: string }[];
  content: Record<string, AboutContent>;
}

const aboutDataTyped = aboutData as AboutData;

// Define the type for route parameters
interface Params {
  slug?: string[];
}

// Note: We allow params to be a promise (or a plain object) to satisfy Next.js’s internal type check.
interface Props {
  params: Params | Promise<Params>;
}
export async function generateStaticParams() {
  // Get all available slugs from your about content.
  const slugs = Object.keys(aboutDataTyped.content);
  return slugs.map((slug) => ({ slug: [slug] }));
}
export default async function AboutPage({ params }: Props) {
  // Await params in case it's a promise
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || [];
  const pageSlug = slug.length > 0 ? slug[0] : "who-we-are";
  const aboutContent = aboutDataTyped.content[pageSlug];
  const recentBlogs = await client.fetch(alltitleQuery);

  if (!aboutContent) return notFound();

  return (
    <CardLayout
      title={aboutContent.title}
      description={aboutContent.description}
      blogs={recentBlogs}
    >
      <div className="max-w-3xl mx-auto p-6">
        <div className="mt-6 space-y-4">
          {aboutContent.content.map((section, index) => {
            if (section.type === "paragraph" && section.text) {
              return <p key={index} className="text-gray-800">{section.text}</p>;
            }
            if (section.type === "bullet_points" && section.items) {
              return (
                <ul key={index} className="list-disc pl-5 text-gray-800">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            }
            if (section.type === "quote" && section.text) {
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-blue-500 pl-4 italic text-gray-700"
                >
                  “{section.text}”
                </blockquote>
              );
            }
            return null;
          })}
        </div>
      </div>
    </CardLayout>
  );
}
