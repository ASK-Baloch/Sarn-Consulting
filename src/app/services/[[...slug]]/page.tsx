import servicesData from "@/data/service.json";
import { notFound } from "next/navigation";
import CardLayout from "../../../components/CardLayout";
import { alltitleQuery } from "../../../../sanity.query";
import { client } from "../../../../sanity.client";

interface ContentItem {
  type: "paragraph" | "bullet_points" | "section" | "nested";
  text?: string;
  items?: string[];
  heading?: string;
  content?: ContentItem[]; // For nested sections
}

interface ServiceContent {
  title: string;
  description: string;
  content: ContentItem[];
}

interface ServiceData {
  services: { label: string; slug: string }[];
  content: Record<string, ServiceContent>;
}

const serviceDataTyped = servicesData as ServiceData;

interface Props {
  params: { slug?: string[] };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const pageSlug = slug?.[0] || "business-registration";
  const serviceContent = serviceDataTyped.content[pageSlug];
  const recentBlogs = await client.fetch(alltitleQuery);

  if (!serviceContent) return notFound();

  const renderContent = (content: ContentItem[], keyPrefix = "") => {
    return content.map((section, index) => {
      const key = `${keyPrefix}-${index}`;

      if (section.type === "paragraph" && section.text) {
        return <p key={key} className="text-gray-800 mb-4">{section.text}</p>;
      }

      if (section.type === "bullet_points" && section.items) {
        return (
          <ul key={key} className="list-disc pl-5 text-gray-800 mb-4">
            {section.items.map((item, i) => (
              <li key={`${key}-${i}`}>{item}</li>
            ))}
          </ul>
        );
      }

      if (section.type === "section" && section.heading && section.content) {
        return (
          <div key={key} className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{section.heading}</h2>
            {renderContent(section.content, key)}
          </div>
        );
      }

      if (section.type === "nested" && section.heading && section.items) {
        return (
          <div key={key} className="ml-4 mb-4">
            <h3 className="text-lg font-medium text-gray-800">{section.heading}</h3>
            <ul className="list-disc pl-5 text-gray-800">
              {section.items.map((item, i) => (
                <li key={`${key}-${i}`}>{item}</li>
              ))}
            </ul>
          </div>
        );
      }

      return null;
    });
  };

  return (
    <CardLayout title={serviceContent.title} description={serviceContent.description} blogs={recentBlogs}>
      <div className="max-w-3xl mx-auto p-6">
        {renderContent(serviceContent.content)}
      </div>
    </CardLayout>
  );
}
