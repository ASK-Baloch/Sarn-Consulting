import Image from "next/image";

interface image {
    src: string;
    alt: string;
    width?: number;
    height?: number;

}
interface Content {
    title: string;
    description: string;
}
interface HeroSectionCardProps {
    image: image;
    Content: Content;
}
const HeroSectionCard: React.FC<HeroSectionCardProps> = ({ image, Content }) => {
    return (
        <div className="flex justify-center  mb-16">
            <div className="bg-gray-50 w-full  sm:w-80 p-8 m-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border hover:border-orange-500 justify-center flex flex-col items-center">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width }
                    height={image.height }
                    className="object-cover bg-blue-500 invert rounded-full shadow-lg h-12 w-12 mx-auto"
                />

                <h4 className="text-xl font-semibold text-gray-800 mb-2 mx-auto">{Content.title}</h4>
                <p className="text-gray-800 font-medium mx-a">{Content.description}</p>
            </div>
        </div>
    )
}

export default HeroSectionCard
