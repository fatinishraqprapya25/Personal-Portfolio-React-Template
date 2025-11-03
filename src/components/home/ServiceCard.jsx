const ServiceCard = ({ Icon, title, description }) => (
    <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-1">
            <Icon className="w-8 h-8 flex-shrink-0 text-white" />
            <h3 className="text-xl font-semibold text-white leading-5">
                {title}
            </h3>
        </div>
        <p className="text-gray-300 leading-relaxed text-sm">
            {description}
        </p>
    </div>
);

export default ServiceCard;