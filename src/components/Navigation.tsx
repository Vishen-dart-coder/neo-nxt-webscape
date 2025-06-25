
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Cloud } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">MacEdge</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">Features</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
              Start Free Trial
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-gray-900">Home</a>
              <a href="#features" className="block text-gray-700 hover:text-gray-900">Features</a>
              <a href="#about" className="block text-gray-700 hover:text-gray-900">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-gray-900">Contact</a>
              <Button variant="default" className="w-full bg-blue-600 hover:bg-blue-700">
                Start Free Trial
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
