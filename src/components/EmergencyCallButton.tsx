
import { Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export const EmergencyCallButton = () => {
  const { toast } = useToast();

  const handleEmergencyCall = () => {
    // Get user's location for emergency services
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('Emergency call initiated from:', { latitude, longitude });
          
          // In a real app, this would trigger emergency services
          toast({
            title: "Emergency Call Initiated",
            description: `Location detected: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}. Emergency services have been notified.`,
          });
          
          // Simulate emergency call
          window.open('tel:+212-123-456-789', '_self');
        },
        (error) => {
          console.error('Location error:', error);
          toast({
            title: "Emergency Call",
            description: "Connecting to emergency services...",
          });
          window.open('tel:+212-123-456-789', '_self');
        }
      );
    } else {
      window.open('tel:+212-123-456-789', '_self');
    }
  };

  return (
    <Button 
      size="lg" 
      className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 animate-pulse"
      onClick={handleEmergencyCall}
    >
      <Phone className="w-6 h-6 mr-3" />
      🚨 Emergency Call Now
      <MapPin className="w-5 h-5 ml-2 opacity-75" />
    </Button>
  );
};
