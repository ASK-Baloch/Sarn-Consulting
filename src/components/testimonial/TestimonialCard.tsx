import Image from "next/image"

interface testimonial{
    quote: string
    name:string
    heading:string
    imagesrc:string 
   specialization?:string
}
const TestimonialCard:React.FC<testimonial> = ({quote, name,heading,imagesrc,specialization}) => {
  return (

    
    <div className="bg-gray-100 h-auto rounded-xl p-11 max-w-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl hover:border hover:border-[#3C73DA] text-black m-9 drop-shadow-lg ">
          <h3 className="text-lg font-semibold">{heading}</h3>
      <p className="mb-4 text-gray-600 mt-5 ">{quote}</p>
      <div className="flex items-center mt-4">
          <Image
          src={imagesrc} 
          width={50}
          height={100}
          alt="person1"
          className="rounded-xl h-[4rem]  object-fill mr-4"
          />
          <div>
          <p className="font-semibold text-gray-900 ">{name}</p>
          <p className="text-gray-500 text-sm">{specialization}</p>
          </div>
        </div>


       
    </div>
  )
}

export default TestimonialCard
