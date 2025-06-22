
import { Bell, AlertTriangle, Calendar, FileText, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Notification {
  id: number;
  type: string;
  title: string;
  message: string;
  time: string;
  urgent: boolean;
}

interface NotificationPanelProps {
  notifications: Notification[];
}

export const NotificationPanel = ({ notifications }: NotificationPanelProps) => {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'emergency': return AlertTriangle;
      case 'appointment': return Calendar;
      case 'lab': return FileText;
      default: return Bell;
    }
  };

  const getNotificationColor = (type: string, urgent: boolean) => {
    if (urgent) return 'border-red-200 bg-red-50';
    switch (type) {
      case 'emergency': return 'border-red-200 bg-red-50';
      case 'appointment': return 'border-blue-200 bg-blue-50';
      case 'lab': return 'border-green-200 bg-green-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bell className="w-5 h-5 mr-2" />
          Real-time Notifications
        </CardTitle>
        <CardDescription>
          Stay updated with patient alerts and system notifications
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => {
            const NotificationIcon = getNotificationIcon(notification.type);
            return (
              <div 
                key={notification.id} 
                className={`border rounded-lg p-4 ${getNotificationColor(notification.type, notification.urgent)}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      notification.urgent ? 'bg-red-200' : 'bg-blue-200'
                    }`}>
                      <NotificationIcon className={`w-4 h-4 ${
                        notification.urgent ? 'text-red-600' : 'text-blue-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-gray-900">{notification.title}</h4>
                        {notification.urgent && (
                          <Badge variant="destructive" className="text-xs">URGENT</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {notification.time}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      Dismiss
                    </Button>
                    {notification.urgent && (
                      <Button size="sm" variant="destructive">
                        Respond
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
