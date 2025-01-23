import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <Navigation />
      <div className="container mx-auto px-4 pt-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-fadeIn">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Retrouvez l'Équilibre par le Mouvement
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Découvrez le pouvoir thérapeutique de la kinésiologie professionnelle. 
              Restaurez l'équilibre naturel de votre corps et libérez tout votre potentiel.
            </p>
          </div>
          <div className="lg:w-1/2 animate-fadeIn">
            <img
              src="https://images.unsplash.com/photo-1591343395082-e120087004b4"
              alt="Séance de Kinésiologie"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;