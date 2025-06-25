
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The Ultimate
                <span className="text-blue-600 block">Mac Experience</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Unlock your Mac's full potential with MacEdge. Professional tools, 
                seamless workflows, and cutting-edge features designed for power users.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Download Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Monitor className="h-6 w-6 text-blue-600" />
                <span className="text-gray-600">macOS Compatible</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-blue-600" />
                <span className="text-gray-600">Lightning Fast</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
              <div className="bg-gray-700 rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-blue-500 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-500 rounded w-1/2"></div>
                  <div className="h-4 bg-green-500 rounded w-2/3"></div>
                  <div className="h-4 bg-purple-500 rounded w-1/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
