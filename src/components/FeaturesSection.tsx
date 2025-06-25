
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Cpu, Cloud, Settings, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant infrastructure with end-to-end encryption and isolated Mac instances for maximum security."
  },
  {
    icon: Cpu,
    title: "High-Performance Computing",
    description: "Latest Mac hardware in the cloud with dedicated CPU, GPU, and memory resources for demanding workloads."
  },
  {
    icon: Cloud,
    title: "Global Infrastructure",
    description: "Mac instances deployed across multiple regions with low-latency access and 99.9% uptime SLA."
  },
  {
    icon: Settings,
    title: "Custom Configurations",
    description: "Pre-configured environments or custom Mac setups tailored to your development and testing needs."
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Multi-user access controls, resource allocation, and team collaboration tools for enterprise workflows."
  },
  {
    icon: Zap,
    title: "Instant Provisioning",
    description: "Spin up Mac instances in seconds with our API or dashboard. Scale up or down based on demand."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cloud Mac Infrastructure Built for Scale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade Mac cloud services for development teams, CI/CD pipelines, and production workloads
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
