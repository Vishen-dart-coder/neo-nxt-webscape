
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Mac Cloud
                <span className="text-blue-600 block">Infrastructure</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Scale your Mac workloads in the cloud. Enterprise-grade Mac infrastructure 
                for development, testing, and production environments.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                View Pricing
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Cloud className="h-6 w-6 text-blue-600" />
                <span className="text-gray-600">Cloud Native</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-blue-600" />
                <span className="text-gray-600">Auto-Scaling</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
              <div className="bg-gray-700 rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-sm">● ONLINE</span>
                  <span className="text-gray-400 text-sm">MacEdge Cloud</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">macOS Instances</span>
                    <span className="text-blue-400">24/24 Active</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">CPU Usage</span>
                    <span className="text-green-400">78%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Auto-scaling</span>
                    <span className="text-purple-400">Enabled</span>
                  </div>
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
