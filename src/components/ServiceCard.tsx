
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  urgent: boolean;
}

interface ServiceCardProps {
  service: Service;
  onBook: () => void;
}

export const ServiceCard = ({ service, onBook }: ServiceCardProps) => {
  const { icon: Icon, title, description, color, urgent } = service;

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border-2 hover:border-blue-200">
      <CardHeader className="text-center">
        <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="flex items-center justify-center gap-2 mb-2">
          <CardTitle className="text-lg">{title}</CardTitle>
          {urgent && <Badge variant="destructive" className="text-xs">URGENT</Badge>}
        </div>
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          className="w-full"
          variant={urgent ? "default" : "outline"}
          onClick={onBook}
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};
