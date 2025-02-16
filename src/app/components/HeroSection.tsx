import HeroSectionCard from "./HeroSectionCard"

const HeroSection = () => {
    return (
        <div className="bg-gray-50 min-h-screen w-full p-6 md:p-12">
            <div className="flex ">
                <span className=" bg-gray-500 text-blue-400 border border-blue-400 px-5 py-1 rounded-full shadow-lg mt-5 mx-auto md:mx-12 font-medium text-lg flex items-center justify-center w-fit">
                    Our Services
                </span>
            </div>

            <div className="flex flex-col md:flex-row mx-4 md:mx-16 gap-6 md:gap-10 mt-6 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl text-gray-800 font-bold flex-1">
                    We are professionals who provide expert advice and guidance on financial matters
                </h3>
                <p className="text-gray-800 font-medium flex-1">
                    Our accounting services provide essential financial information to businesses and individuals. They help track income and expenses, prepare financial statements, and ensure compliance with tax regulations. By understanding financial situations, clients can make informed decisions and manage their resources effectively.
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
                    description: "is a seasoned professional who provides expert guidance and strategies to help businesses navigate challenges, improve efficiency, and achieve their goals.",
                }}
            />
            </div>
                 
           
        </div>

    )
}

export default HeroSection
