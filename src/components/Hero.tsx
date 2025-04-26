
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-slate-900/20 z-0" />
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/a6f9e817-c267-41bc-bdc0-704fd39f5e5f.png" 
              alt="Galaxy ITT Logo" 
              className="h-20 animate-fade-in"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6 animate-fade-in">
            Welcome to Galaxy-ITT Starter Kit
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            Build powerful applications with our professional development toolkit. Get started in minutes.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
