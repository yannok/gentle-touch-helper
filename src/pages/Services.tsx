import Navigation from "@/components/Navigation";

const Services = () => {
  const services = [
    {
      title: "Movement Analysis",
      description: "Comprehensive analysis of your movement patterns to identify imbalances and areas for improvement.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    },
    {
      title: "Therapeutic Exercise",
      description: "Customized exercise programs designed to strengthen and balance your body's natural movements.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    },
    {
      title: "Rehabilitation",
      description: "Specialized rehabilitation techniques to help you recover from injuries and prevent future problems.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-lg overflow-hidden animate-fadeIn">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;