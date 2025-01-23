import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <Navigation />
      <div className="container mx-auto px-4 pt-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-fadeIn">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Restore Balance Through Movement
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Experience the healing power of professional kinesiology therapy. 
              Restore your body's natural balance and unlock your full potential.
            </p>
          </div>
          <div className="lg:w-1/2 animate-fadeIn">
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
              alt="Professional Massage Therapy"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;