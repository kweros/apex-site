import { motion, useInView, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon: LucideIcon;
  description?: string;
}

export const MetricCard = ({ value, prefix = "", suffix = "", label, icon: Icon, description }: MetricCardProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          setDisplayValue(latest);
        },
      });
      return () => controls.stop();
    }
  }, [value, isInView]);

  const formattedValue = displayValue.toLocaleString("pt-BR", {
    maximumFractionDigits: displayValue % 1 === 0 ? 0 : 1,
  });

  return (
    <Card ref={ref} className="border-none bg-apex-blue-50/50 shadow-none hover:bg-apex-blue-50 transition-colors duration-300 rounded-2xl overflow-hidden group">
      <CardContent className="p-8">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white text-apex-orange-500 shadow-sm transition-transform group-hover:scale-110 duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h3 className="text-4xl font-bold text-apex-blue-900 leading-none">
            {prefix}{formattedValue}{suffix}
          </h3>
          <p className="text-sm font-bold text-apex-neutral-700 uppercase tracking-wider">{label}</p>
          {description && <p className="text-sm text-apex-neutral-500 leading-relaxed">{description}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  features?: string[];
}

export const ServiceCard = ({ title, description, image, tags, features }: ServiceCardProps) => {
  return (
    <Card className="apex-card-hover border border-apex-blue-100 overflow-hidden rounded-2xl bg-white shadow-sm flex flex-col h-full">
      {image && (
        <div className="relative h-64 w-full overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          {tags && (
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-apex-blue-900/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
      <CardContent className="p-8 flex flex-col flex-grow">
        <h4 className="text-2xl font-bold text-apex-blue-900 mb-4">{title}</h4>
        <p className="text-apex-neutral-700 leading-relaxed mb-6">{description}</p>
        
        {features && (
          <ul className="space-y-3 mt-auto pt-6 border-t border-apex-blue-50">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-apex-neutral-600">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-apex-orange-500 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};
