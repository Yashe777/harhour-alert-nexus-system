
import { useState } from 'react';
import { Phone, Calendar, Clock, MapPin, Users, FileText, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EmergencyCallButton } from '@/components/EmergencyCallButton';
import { AppointmentBooking } from '@/components/AppointmentBooking';
import { LanguageSelector } from '@/components/LanguageSelector';
import { ServiceCard } from '@/components/ServiceCard';

const Index = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const services = [
    {
      icon: AlertTriangle,
      title: 'Emergency Care',
      description: 'Immediate medical attention for critical conditions',
      color: 'bg-red-500',
      urgent: true
    },
    {
      icon: Phone,
      title: 'Ambulance Service',
      description: 'Emergency transport with medical support',
      color: 'bg-orange-500',
      urgent: true
    },
    {
      icon: Users,
      title: 'General Consultation',
      description: 'Routine check-ups and medical consultations',
      color: 'bg-blue-500',
      urgent: false
    },
    {
      icon: FileText,
      title: 'Follow-up Visit',
      description: 'Post-treatment check-ups and monitoring',
      color: 'bg-green-500',
      urgent: false
    }
  ];

  const translations = {
    en: {
      title: 'Harhour Emergency',
      subtitle: 'Your Health, Our Priority',
      emergencyCall: 'Emergency Call Now',
      bookAppointment: 'Book Appointment',
      ourServices: 'Our Services',
      whyChooseUs: 'Why Choose Harhour Emergency',
      feature1: '24/7 Emergency Care',
      feature1Desc: 'Round-the-clock medical services for all emergencies',
      feature2: 'Expert Medical Team',
      feature2Desc: 'Qualified doctors and nurses with extensive experience',
      feature3: 'Modern Equipment',
      feature3Desc: 'State-of-the-art medical technology and facilities',
      feature4: 'Quick Response',
      feature4Desc: 'Fast ambulance service and immediate medical attention'
    },
    ar: {
      title: 'هارهور الطوارئ',
      subtitle: 'صحتك، أولويتنا',
      emergencyCall: 'اتصال طوارئ الآن',
      bookAppointment: 'حجز موعد',
      ourServices: 'خدماتنا',
      whyChooseUs: 'لماذا تختار هارهور الطوارئ',
      feature1: 'رعاية طوارئ 24/7',
      feature1Desc: 'خدمات طبية على مدار الساعة لجميع الحالات الطارئة',
      feature2: 'فريق طبي خبير',
      feature2Desc: 'أطباء وممرضات مؤهلون ذوو خبرة واسعة',
      feature3: 'معدات حديثة',
      feature3Desc: 'تكنولوجيا طبية ومرافق متطورة',
      feature4: 'استجابة سريعة',
      feature4Desc: 'خدمة إسعاف سريعة وعناية طبية فورية'
    },
    fr: {
      title: 'Harhour Urgences',
      subtitle: 'Votre Santé, Notre Priorité',
      emergencyCall: "Appel d'Urgence",
      bookAppointment: 'Prendre Rendez-vous',
      ourServices: 'Nos Services',
      whyChooseUs: 'Pourquoi Choisir Harhour Urgences',
      feature1: "Soins d'Urgence 24/7",
      feature1Desc: 'Services médicaux 24h/24 pour toutes les urgences',
      feature2: 'Équipe Médicale Expert',
      feature2Desc: 'Médecins et infirmières qualifiés avec une vaste expérience',
      feature3: 'Équipement Moderne',
      feature3Desc: 'Technologie médicale et installations de pointe',
      feature4: 'Réponse Rapide',
      feature4Desc: "Service d'ambulance rapide et attention médicale immédiate"
    }
  };

  const t = translations[selectedLanguage as keyof typeof translations];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{t.title}</h1>
                <p className="text-sm text-gray-600">{t.subtitle}</p>
              </div>
            </div>
            <LanguageSelector 
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.subtitle} - Professional emergency medical services available 24/7
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <EmergencyCallButton />
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => setShowBooking(true)}
                className="px-8 py-3 text-lg hover:bg-blue-50"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t.bookAppointment}
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-red-500">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Care</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-blue-500">&lt; 5min</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-green-500">15+</div>
                  <div className="text-sm text-gray-600">Expert Doctors</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-purple-500">1000+</div>
                  <div className="text-sm text-gray-600">Patients Served</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{t.ourServices}</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive medical services designed to meet your healthcare needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service}
                onBook={() => setShowBooking(true)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{t.whyChooseUs}</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Excellence in emergency medical care with patient-focused approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-500" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{t.feature1}</h4>
              <p className="text-gray-600">{t.feature1Desc}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{t.feature2}</h4>
              <p className="text-gray-600">{t.feature2Desc}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{t.feature3}</h4>
              <p className="text-gray-600">{t.feature3Desc}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-500" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{t.feature4}</h4>
              <p className="text-gray-600">{t.feature4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Modal */}
      {showBooking && (
        <AppointmentBooking 
          onClose={() => setShowBooking(false)}
          language={selectedLanguage}
        />
      )}
    </div>
  );
};

export default Index;
