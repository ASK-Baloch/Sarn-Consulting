import Link from "next/link";
import aboutData from "@/data/about.json";
import servicesData from "@/data/service.json";

export default function Footer() {
  return (
    <footer className="bg-[#06192D] text-white py-10 px-6 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link href="/">
            <h2 className="text-lg font-semibold text-teal-400">Sarn Consulting</h2>
          </Link>
          <p className="mt-2 text-gray-400">
            Transformational growth for accounting and tax firms
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>
              <Link href="/contact" className="hover:text-[#3C73DA] hover:scale-110">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blogPage" className="hover:text-[#3C73DA] hover:scale-110">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">About</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            {aboutData.about.map((about) => (
              <li key={about.slug}>
                <Link
                  href={`/about/${about.slug}`}
                  className="hover:text-[#3C73DA] hover:scale-110"
                >
                  {about.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            {servicesData.services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-[#3C73DA] hover:scale-110"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Sarn Consulting. All Rights Reserved.
      </div>
    </footer>
  );
}
