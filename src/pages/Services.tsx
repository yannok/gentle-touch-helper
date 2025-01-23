import Navigation from "@/components/Navigation";

const Services = () => {
  const services = [
    {
      title: "Analyse du Mouvement",
      description: "Analyse complète de vos schémas de mouvement pour identifier les déséquilibres et les zones à améliorer.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    },
    {
      title: "Exercices Thérapeutiques",
      description: "Programmes d'exercices personnalisés conçus pour renforcer et équilibrer les mouvements naturels de votre corps.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    },
    {
      title: "Rééducation",
      description: "Techniques de rééducation spécialisées pour vous aider à récupérer après une blessure et prévenir les problèmes futurs.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-center mb-12">Nos Services</h1>
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