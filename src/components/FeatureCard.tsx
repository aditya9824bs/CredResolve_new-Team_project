interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  bgColor,
  borderColor,
}) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md ${bgColor} hover:border ${borderColor} flex flex-col gap-3 cursor-pointer`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center space-x-3 text-5xl font-semibold text-[#2D2D63]">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-blue-950">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default FeatureCard;
