// Export generateStaticParams so Next.js knows what paths to generate.
export async function generateStaticParams() {
  return [{index: [] }];
}

// Import and render the client component
import ClientStudio from "./ClientStudio";

export default function StudioPage() {
  return <ClientStudio />;
}
