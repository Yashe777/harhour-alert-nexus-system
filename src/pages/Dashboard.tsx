
import { useState, useEffect } from 'react';
import { Bell, Calendar, Clock, User, Phone, FileText, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DoctorLogin } from '@/components/DoctorLogin';
import { AppointmentList } from '@/components/AppointmentList';
import { NotificationPanel } from '@/components/NotificationPanel';

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'emergency',
      title: 'Emergency Call - Chest Pain',
      message: 'Patient: Ahmed Ben Ali, Location: Rabat Downtown',
      time: '5 minutes ago',
      urgent: true
    },
    {
      id: 2,
      type: 'appointment',
      title: 'New Appointment Booked',
      message: 'Sara Alami - General Consultation at 14:30',
      time: '15 minutes ago',
      urgent: false
    },
    {
      id: 3,
      type: 'lab',
      title: 'Lab Results Available',
      message: 'Blood test results for Mohamed Kadiri',
      time: '1 hour ago',
      urgent: false
    }
  ]);

  const [appointments] = useState([
    {
      id: 1,
      patientName: 'Ahmed Ben Ali',
      time: '09:00',
      service: 'Emergency Care',
      status: 'confirmed',
      phone: '+212-123-456-789',
      reason: 'Chest pain and shortness of breath'
    },
    {
      id: 2,
      patientName: 'Sara Alami',
      time: '14:30',
      service: 'General Consultation',
      status: 'confirmed',
      phone: '+212-987-654-321',
      reason: 'Routine check-up'
    },
    {
      id: 3,
      patientName: 'Mohamed Kadiri',
      time: '16:00',
      service: 'Follow-up Visit',
      status: 'pending',
      phone: '+212-555-123-456',
      reason: 'Diabetes follow-up'
    }
  ]);

  if (!isAuthenticated) {
    return <DoctorLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Harhour Emergency Dashboard</h1>
              <p className="text-gray-600">Welcome back, Dr. Hassan</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications ({notifications.length})
              </Button>
              <Button variant="outline" size="sm" onClick={() => setIsAuthenticated(false)}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Today's Appointments</p>
                  <p className="text-2xl font-bold text-blue-600">12</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Emergency Calls</p>
                  <p className="text-2xl font-bold text-red-600">3</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed Today</p>
                  <p className="text-2xl font-bold text-green-600">8</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Reviews</p>
                  <p className="text-2xl font-bold text-orange-600">5</p>
                </div>
                <FileText className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="appointments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="patients">Patient Records</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments">
            <AppointmentList appointments={appointments} />
          </TabsContent>

          <TabsContent value="notifications">
            <NotificationPanel notifications={notifications} />
          </TabsContent>

          <TabsContent value="patients">
            <Card>
              <CardHeader>
                <CardTitle>Patient Records</CardTitle>
                <CardDescription>
                  Access patient information and medical history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Patient records management coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
