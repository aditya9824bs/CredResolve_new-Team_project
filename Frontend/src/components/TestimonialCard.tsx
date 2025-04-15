interface TestimonialProps {
    logo: string;
    company: string;
    feedback: string;
    name: string;
    position: string;
    image: string;
  }
  
  const TestimonialCard: React.FC<TestimonialProps> = ({ logo, company, feedback, name, position, image }) => {
    return (
      <div className="bg-[#F4F4FF] p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-2 text-lg font-semibold text-[#2D2D63]">
          <img src={logo} alt={company} className="h-6" />
        </div>
        <p className="text-base text-gray-700 mt-3">{feedback}</p>
        <div className="flex items-center mt-4">
          <img src={image} alt={name} className="h-10 w-10 rounded-full mr-3 border" />
          <div>
            <p className="text-[#6C5CE7] font-semibold">{name}</p>
            <p className="text-sm text-gray-600">{position}</p>
          </div>
        </div>
      </div>
    );
  };

  export default TestimonialCard;