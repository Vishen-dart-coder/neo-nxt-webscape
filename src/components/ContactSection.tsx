
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Apple } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600">
            Ready to supercharge your Mac? Contact us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Apple className="h-6 w-6 text-blue-600" />
                  <span>MacEdge Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">support@macedge.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">San Francisco, CA</span>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Download MacEdge Today</h3>
              <p className="mb-6 text-blue-100">
                Join thousands of Mac users who have already transformed their workflow.
              </p>
              <Button size="lg" variant="secondary" className="w-full">
                Start Free Trial
              </Button>
            </div>
          </div>

          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" rows={5} />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="mt-20 border-t border-gray-200 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Apple className="h-6 w-6 text-gray-600" />
              <span className="text-xl font-bold text-gray-800">MacEdge</span>
            </div>
            <p className="text-gray-600">
              © 2024 MacEdge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
