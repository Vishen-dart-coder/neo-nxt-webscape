
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Cpu, Cloud, Settings, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Enterprise-grade security features to protect your data and privacy with military-grade encryption."
  },
  {
    icon: Cpu,
    title: "Performance Optimization",
    description: "Intelligent system optimization that learns from your usage patterns to boost Mac performance."
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamlessly sync across all your Apple devices with our intelligent cloud synchronization."
  },
  {
    icon: Settings,
    title: "System Customization",
    description: "Deep system customization options that Apple doesn't provide out of the box."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built-in collaboration tools designed specifically for Mac-based teams and workflows."
  },
  {
    icon: Zap,
    title: "Instant Actions",
    description: "Lightning-fast automation and shortcuts that save hours of your valuable time."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Mac Users
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the tools and features that make MacEdge the ultimate companion for your Mac
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
