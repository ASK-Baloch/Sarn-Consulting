import CardLayout from "@/components/CardLayout";

export default function USAServicesPage() {
  return (
    <CardLayout
      title="USA Services for Pakistani Companies"
      description="Expanding to the US? Keep It Simple with SARN Consulting! We make your journey smooth and hassle-free."
      blogs={[]} // Add recent blog data here if available
    >
      <div className="space-y-8 text-gray-800">
        <p className="text-lg text-center font-semibold text-[#3C73DA]">
          Because we understand your business like no one can in the US. We
          bridge the gap between local operations and U.S. compliance, offering
          personalized solutions that truly fit your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/** USA Company Formation */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-red-600">
              USA Company Formation (LLC & C Corporation/INC)
            </h3>
            <p>
              <strong>Cost:</strong> State Fee + $100
            </p>
            <p>
              <strong>Time:</strong> 3 to 5 Working Days
            </p>
            <p>
              <strong>Documents Required:</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>Proposed company name</li>
              <li>Passport or CNIC of Director(s)</li>
            </ul>
          </div>

          {/** EIN Service */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-red-600">
            <h3 className="text-xl font-bold text-blue-600">
              Employer Identification Number (EIN)
            </h3>
            <p>
              <strong>Cost:</strong> $75
            </p>
            <p>
              <strong>Time:</strong> 30 Working Days
            </p>
            <p>
              <strong>Documents Required:</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>Certificate of Organization</li>
              <li>Article of Organization</li>
            </ul>
          </div>

          {/** US Bank Account */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-red-600">
              Open A US Bank Account
            </h3>
            <p>
              <strong>Cost:</strong> $100
            </p>
            <p>
              <strong>Time:</strong> 30 Working Days
            </p>
            <p>
              <strong>Documents Required:</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>Article of Organization</li>
              <li>Certificate of Organization</li>
              <li>CNIC (English Only) / Passport of Director(s)</li>
              <li>EIN</li>
            </ul>
          </div>

          {/** USA Company Formation - Complete Package */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-red-600">
            <h3 className="text-xl font-bold text-blue-600">
              USA Company Formation - Complete Package
            </h3>
            <p>
              <strong>Cost:</strong> State Fee + $200
            </p>
            <p>
              <strong>Timeline:</strong> 40 Days
            </p>
            <p>
              <strong>Documents Required:</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>2 Suggested Names of the Company</li>
              <li>CNIC (English Only) / Passport of Director(s)</li>
            </ul>
          </div>

          {/** Tax Filing (State ) */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-red-600">
              Tax Filing - State: LLC / Inc. (C Corp)
            </h3>
            <p>
              <strong>Cost:</strong> $200
            </p>
            <p>
              <strong>Timeline:</strong> 3 Business Days
            </p>
            <p>
              <strong>Requirements:</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>Financial Statements/Bank Statements</li>
              <li>Last Year's Tax Return (if applicable)</li>
            </ul>
          </div>

          {/** Tax Filing ( Federal) */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-red-600">
            <h3 className="text-xl font-bold text-blue-600">
              Tax Filing Federal: LLC / Inc. (C Corp)
            </h3>
            <p>
              <strong>Cost:</strong> $200
            </p>
            <p>
              <strong>Timeline:</strong> 3 Business Days
            </p>
            <p>
              <strong>Requirements:</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>Financial Statements</li>
              <li>Last Year's Tax Return (if applicable)</li>
            </ul>
          </div>

          {/** ITIN - Taxpayer ID */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-red-600">
              ITIN - Taxpayer ID for Non U.S. Citizens
            </h3>
            <p>
              <strong>Cost:</strong> $200
            </p>
            <p>
              <strong>Time:</strong> 1 Month
            </p>
            <p>
              <strong>Documents Required:</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>CNIC (English Only)</li>
              <li>Passport</li>
            </ul>
          </div>

          {/** Trademark Registration */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-red-600">
            <h3 className="text-xl font-bold text-blue-600">
              Trademark Registration in USA
            </h3>
            <p>
              <strong>Cost:</strong> $750
            </p>
            <p>Call for details</p>
          </div>
        </div>

        {/** Why Choose Us Section */}
        <div className="bg-[#3C73DA] text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center">Why Choose Us?</h3>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Strong collaboration with USA CPAs and Tax Lawyers</li>
            <li>Active PTIN for authorized tax preparation</li>
            <li>Comprehensive understanding of your business needs</li>
            <li>Effective communication with the IRS</li>
            <li>Economical Fees with No Hidden Charges</li>
            <li>Highly Qualified Accountants</li>
            <li>Approachable and responsive support</li>
          </ul>
        </div>
      </div>
    </CardLayout>
  );
}
