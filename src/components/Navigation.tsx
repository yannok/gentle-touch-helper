import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-10 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold text-accent">
            Wellness Kinesiology
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-foreground hover:text-accent transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;