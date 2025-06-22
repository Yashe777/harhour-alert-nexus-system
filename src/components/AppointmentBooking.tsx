
import { useState } from 'react';
import { X, Calendar, Clock, User, Phone, FileText, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface AppointmentBookingProps {
  onClose: () => void;
  language: string;
}

export const AppointmentBooking = ({ onClose, language }: AppointmentBookingProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    idNumber: '',
    reason: '',
    medicalHistory: ''
  });
  const { toast } = useToast();

  const services = [
    'Emergency Care',
    'Ambulance Service', 
    'General Consultation',
    'Follow-up Visit',
    'Medical Check-up',
    'Vaccination'
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate appointment booking
    toast({
      title: "Appointment Booked Successfully!",
      description: `Your appointment for ${formData.service} on ${formData.date} at ${formData.time} has been confirmed. You will receive a confirmation SMS shortly.`,
    });
    
    console.log('Appointment booked:', formData);
    onClose();
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Book Appointment</CardTitle>
            <CardDescription>Step {currentStep} of 3</CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Service & Time Selection */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                  Select Service & Time
                </h3>
                
                <div>
                  <Label htmlFor="service">Medical Service</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your service..." />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>{service}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input 
                      id="date"
                      type="date" 
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select value={formData.time} onValueChange={(value) => setFormData({...formData, time: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time..." />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Personal Information */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-500" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+212 XXX XXX XXX"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="idNumber">ID/Passport Number</Label>
                    <Input 
                      id="idNumber"
                      value={formData.idNumber}
                      onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
                      placeholder="National ID or Passport"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Medical Information */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-500" />
                  Medical Information
                </h3>
                
                <div>
                  <Label htmlFor="reason">Reason for Visit</Label>
                  <Textarea 
                    id="reason"
                    value={formData.reason}
                    onChange={(e) => setFormData({...formData, reason: e.target.value})}
                    placeholder="Please describe your symptoms or reason for visit..."
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="medicalHistory">Medical History (Optional)</Label>
                  <Textarea 
                    id="medicalHistory"
                    value={formData.medicalHistory}
                    onChange={(e) => setFormData({...formData, medicalHistory: e.target.value})}
                    placeholder="Any relevant medical history, allergies, or current medications..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label>Upload Medical Documents (Optional)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">
                      Drag and drop files or click to browse
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Supported: JPG, PNG, PDF (Max 5MB)
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              {currentStep > 1 && (
                <Button type="button" variant="outline" onClick={prevStep}>
                  Previous
                </Button>
              )}
              
              <div className="ml-auto">
                {currentStep < 3 ? (
                  <Button 
                    type="button" 
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && (!formData.service || !formData.date || !formData.time)) ||
                      (currentStep === 2 && (!formData.name || !formData.phone || !formData.idNumber))
                    }
                  >
                    Next
                  </Button>
                ) : (
                  <Button 
                    type="submit"
                    className="bg-green-600 hover:bg-green-700"
                    disabled={!formData.reason}
                  >
                    Book Appointment
                  </Button>
                )}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
