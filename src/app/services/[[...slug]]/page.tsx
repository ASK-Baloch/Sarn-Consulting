import servicesData from "@/data/service.json";
import { notFound } from "next/navigation";
import CardLayout from "../../../components/CardLayout";
import { alltitleQuery } from "../../../../sanity.query";
import { client } from "../../../../sanity.client";
interface ContentSection {
  type: "paragraph" | "bullet_points";
  text?: string;
  items?: string[];
}

interface ServiceContent {
  title: string;
  description: string;
  content: ContentSection[];
}

interface ServiceData {
  services: { label: string; slug: string }[];
  content: Record<string, ServiceContent>;
}

const serviceDataTyped = servicesData as ServiceData ;

interface Props {
  params: { slug?: string[] };
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const pageSlug = slug?.[0] || "business-registration";
    const serviceContent = serviceDataTyped.content[pageSlug];
    const recentBlogs = await client.fetch(alltitleQuery); 

  if (!serviceContent) return notFound();

  return (
    <CardLayout title={serviceContent.title} description={serviceContent.description} blogs={recentBlogs}>
    <div className="max-w-3xl mx-auto p-6">
      {/* <h1 className="text-3xl font-bold text-gray-900">{serviceContent.title}</h1>
      <p className="text-lg text-gray-600 mt-2">{serviceContent.description}</p> */}

      <div className="mt-6 space-y-4">
        {serviceContent.content.map((section, index) => {
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
          return null;
        })}
      </div>
    </div>
    </CardLayout>
  );
}
