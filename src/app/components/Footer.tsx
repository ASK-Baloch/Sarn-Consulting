export default function Footer() {
  return (
    <footer className="bg-[#06192D] text-white py-10 px-6 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-semibold text-teal-400">Sarn Consulting</h2>
          <p className="mt-2 text-gray-400">
            Transformational growth for accounting and tax firms
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Solutions</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="#">Sole Practitioner</a></li>
            <li><a href="#">Mid Sized Firm</a></li>
            <li><a href="#">Large Firm</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="#">Accounting & Bookkeeping</a></li>
            <li><a href="#">Taxation</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Growth & Profitability</a></li>
            <li><a href="#">Business Funding</a></li>
            <li><a href="#">Government Contracting</a></li>
            <li><a href="#">Cybersecurity Services</a></li>
          </ul>
        </div>
        {/* <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><i className="fas fa-phone text-teal-400"></i>+923331283168</li>
            <li><i className="fas fa-envelope text-teal-400"></i> info@sarnconsulting.com</li>
            <li><i className="fas fa-map-marker-alt text-teal-400"></i> 6Office No 1, 3rd Floor, Al-anayat Mall, G-11 Markaz, Islamabad</li>
          </ul>
        </div> */}
      </div>
      <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-400 text-sm">
        &copy;Sarn Consulting. All Rights Reserved.
      </div>
    </footer>
  );
}
