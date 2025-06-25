
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const benefits = [
  "99.9% uptime SLA with 24/7 monitoring",
  "Scale from 1 to 1000+ Mac instances instantly",
  "SOC 2 Type II certified infrastructure",
  "Global edge locations for low latency",
  "Pay-per-use pricing with no commitments",
  "Enterprise support and dedicated account management"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose MacEdge Cloud?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Trusted by Fortune 500 companies and fast-growing startups. MacEdge provides 
              the most reliable and scalable Mac cloud infrastructure for modern development teams.
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
              View Enterprise Solutions
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Enterprise Ready</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-blue-100">Enterprise Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">99.9%</div>
                    <div className="text-blue-100">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-blue-100">Global Regions</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-blue-100">Support</div>
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
