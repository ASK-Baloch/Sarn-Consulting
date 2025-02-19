import aboutData from "@/data/about.json";
import { notFound } from "next/navigation";

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


interface Props {
  params: { slug?: string[] };
}

export default async function AboutPage({ params }: Props) {
    const { slug } = await params;
    const pageSlug = slug?.[0] || "who-we-are";
  const aboutContent = aboutDataTyped.content[pageSlug];

  if (!aboutContent) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900">{aboutContent.title}</h1>
      <p className="text-lg text-gray-600 mt-2">{aboutContent.description}</p>

      <div className="mt-6 space-y-4">
        {aboutContent.content.map((about, index) => {
          if (about.type === "paragraph" && about.text) {
            return <p key={index} className="text-gray-800">{about.text}</p>;
          }
          if (about.type === "bullet_points" && about.items) {
            return (
              <ul key={index} className="list-disc pl-5 text-gray-800">
                {about.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          }
          if (about.type === "quote" && about.text) {
            return (
              <blockquote
                key={index}
                className="border-l-4 border-blue-500 pl-4 italic text-gray-700"
              >
                “{about.text}”
              </blockquote>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
