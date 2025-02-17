interface testimonial{
    quote: string
    name:string
    heading:string
}
const TestimonialCard:React.FC<testimonial> = ({quote, name,heading}) => {
  return (
      <div className="bg-gray-100 h-auto rounded-xl p-11 max-w-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl hover:border hover:border-orange-500 text-black m-9 drop-shadow-lg ">
          <h3 className="text-lg font-semibold">{heading}</h3>
        <p className="mb-4">{quote}</p>
          <div className="font-semibold  text-orange-600">{name}</div>
    </div>
  )
}

export default TestimonialCard
