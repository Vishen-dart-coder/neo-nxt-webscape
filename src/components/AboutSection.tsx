
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Increase productivity by up to 40%",
  "Reduce system crashes and freezes",
  "Seamless integration with macOS",
  "Regular updates and new features",
  "24/7 customer support",
  "30-day money-back guarantee"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose MacEdge?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              MacEdge has been trusted by over 100,000 Mac users worldwide. Our mission is to 
              unlock the full potential of your Mac with professional-grade tools and features 
              that Apple doesn't provide.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Learn More About MacEdge
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Trusted by Professionals</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">100K+</div>
                    <div className="text-blue-100">Active Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">4.9★</div>
                    <div className="text-blue-100">App Store Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-blue-100">Countries</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">5 Years</div>
                    <div className="text-blue-100">In Business</div>
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

export default AboutSection;
