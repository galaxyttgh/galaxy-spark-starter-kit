
import { Layout, ArrowRight, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Quick Setup",
      description: "Get your development environment ready in minutes with our streamlined setup process.",
      icon: ArrowRight,
    },
    {
      title: "Modern Stack",
      description: "Built with the latest technologies to ensure your application stays future-proof.",
      icon: Layout,
    },
    {
      title: "Full Customization",
      description: "Easily customize and extend the starter kit to match your project requirements.",
      icon: Settings,
    },
  ];

  return (
    <div className="py-16 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-slate-800/50 border-slate-700 hover:border-blue-500 transition-colors duration-300"
            >
              <feature.icon className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
