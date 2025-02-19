import Image from "next/image";

const TestimonialCard = () => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
            <p className="text-lg font-semibold text-gray-900">&quot;I will refer everyone I know.&quot;</p>
            <p className="text-gray-600 mt-2">
                Credfino has helped us in delivering CFO services from their remote
                staffing team. We have been able to scale our advisory services and
                have high margins.
            </p>
            <div className="flex items-center mt-4">
                <Image
                    src="/person-1.jpg" 
                    alt="Chiwale Gooding"
                    width={50}
                    height={150}
                    className="rounded-xl h-[4rem]  object-fill"
                />
                <div className="ml-3">
                    <p className="font-semibold text-gray-900">Chiwale Gooding</p>
                    <p className="text-gray-500 text-sm">Grey Suit Advisors</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
