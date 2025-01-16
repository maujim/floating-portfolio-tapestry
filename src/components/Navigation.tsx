import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold text-white [transform-style:preserve-3d] inline-block animate-[spin_1.6s_linear_infinite]"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          Yousef Abdel Rahman
        </Link>
        <div className="space-x-8">
          <Link to="/" className="text-white hover:text-gray-300 transition-colors">
            WORK
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300 transition-colors">
            ABOUT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;