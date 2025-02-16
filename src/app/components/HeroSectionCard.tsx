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
const HeroSectionCard : React.FC<HeroSectionCardProps> = ({ image ,Content}) => {
    return (
        <div className="flex justify-center ">
            <div className="bg-gray-200 w-full  sm:w-80 p-8 m-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-orange-500">
            <Image
                src={image.src}  
                alt={image.alt}
                width={image.width ?? 50}  
                height={image.height ?? 50}
                className="object-cover bg-blue-500 invert rounded-full shadow-lg h-12 w-12"
            />

                <h4 className="text-xl font-semibold text-gray-800 mb-2">{Content.title}</h4>
                <p className="text-gray-800 font-medium">{Content.description}</p>
        </div>
        </div>
    )
}

export default HeroSectionCard
