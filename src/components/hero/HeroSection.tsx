import HeroSectionCard from "./HeroSectionCard"

const HeroSection = () => {
    return (
        <div className="bg-gray-100  w-full p-10 md:p-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
                    Growth   ≠  More Cost
                </h1>
                <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
                    Power your growth through remote staffing based savings, leverage dedicated growth teams
                    to get new business and get more revenue per existing client
                </p>
            </div>
            <div className="flex justify-center md:flex sm:flex flex-wrap">
                <HeroSectionCard
                    image={{
                        src: "/icons/card-1.png",
                        alt: "card 1",
                        width: 25,
                        height: 25,

                    }}
                    Content={{
                        title: "Compony Incorporation",
                        description: "is the legal process of forming a corporate entity or company. This process involves registering a business with a government agency, typically a state or federal office, to establish it as a separate legal entity from its owners.",
                    }}
                />
                <HeroSectionCard
                    image={{
                        src: "/icons/card.svg",
                        alt: "card 1",
                        width: 25,
                        height: 25,

                    }}
                    Content={{
                        title: "Tax Consultant",
                        description: "is a professional who specializes in tax law and offers expert advice to individuals and businesses. Their primary role is to help clients navigate the complex world of taxation, ensuring they comply with all relevant laws and regulations while minimizing their tax liability.",
                    }}
                />
                <HeroSectionCard
                    image={{
                        src: "/icons/card-3.svg",
                        alt: "card 1",
                        width: 25,
                        height: 25,

                    }}
                    Content={{
                        title: "Business Advisor",
                        description: "is a seasoned professional who provides expert guidance and strategies to help businesses navigate challenges, improve efficiency, and achieve their goals.maximize growth, optimize performance, enhance productivity innovation,  boost profitability.",
                    }}
                />
            </div>


        </div>

    )
}

export default HeroSection
