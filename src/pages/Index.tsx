
import MainLayout from "@/components/Layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, CreditCard, TrendingUp, DollarSign, 
  Activity, Calendar 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  // Mock data
  const stats = [
    {
      title: "إجمالي الأعضاء",
      value: "230",
      change: "+2.5%",
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      title: "الاشتراكات النشطة",
      value: "189",
      change: "+1.2%",
      icon: CreditCard,
      color: "text-green-500",
      bgColor: "bg-green-100",
    },
    {
      title: "الإيرادات الشهرية",
      value: "35,400 ج.م",
      change: "+8.1%",
      icon: DollarSign,
      color: "text-purple-500",
      bgColor: "bg-purple-100",
    },
    {
      title: "الزيارات اليومية",
      value: "87",
      change: "+5.4%",
      icon: Activity,
      color: "text-amber-500",
      bgColor: "bg-amber-100",
    },
  ];

  // Mock recent members
  const recentMembers = [
    { id: 1, name: "أحمد محمود", date: "28 أبريل 2025", status: "نشط", subscription: "سنوي" },
    { id: 2, name: "سارة علي", date: "26 أبريل 2025", status: "نشط", subscription: "شهري" },
    { id: 3, name: "محمد خالد", date: "25 أبريل 2025", status: "نشط", subscription: "نصف سنوي" },
    { id: 4, name: "فاطمة حسين", date: "21 أبريل 2025", status: "نشط", subscription: "شهري" },
  ];

  // Mock upcoming renewals
  const upcomingRenewals = [
    { id: 1, name: "عمر محمد", expires: "30 أبريل 2025", type: "شهري", amount: "400 ج.م" },
    { id: 2, name: "ليلى أحمد", expires: "2 مايو 2025", type: "شهري", amount: "400 ج.م" },
    { id: 3, name: "حسن علي", expires: "5 مايو 2025", type: "شهري", amount: "400 ج.م" },
  ];

  return (
    <MainLayout>
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground rtl">{stat.title}</p>
                    <div className="flex items-baseline">
                      <h3 className="text-3xl font-bold">{stat.value}</h3>
                      <span className="text-xs font-medium text-green-500 ml-2">
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-bold rtl">آخر الأعضاء المنضمين</CardTitle>
              <Button variant="ghost" size="sm" className="rtl">
                عرض الكل
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gym-primary flex items-center justify-center text-white font-bold">
                        {member.name.charAt(0)}
                      </div>
                      <div className="mr-4">
                        <p className="font-medium rtl">{member.name}</p>
                        <p className="text-sm text-muted-foreground rtl">انضم: {member.date}</p>
                      </div>
                    </div>
                    <div>
                      <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs rtl">
                        {member.subscription}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-bold rtl">تجديدات قادمة</CardTitle>
              <Button variant="ghost" size="sm" className="rtl">
                عرض الكل
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingRenewals.map((renewal) => (
                  <div key={renewal.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gym-secondary flex items-center justify-center text-white font-bold">
                        {renewal.name.charAt(0)}
                      </div>
                      <div className="mr-4">
                        <p className="font-medium rtl">{renewal.name}</p>
                        <p className="text-sm text-muted-foreground rtl">
                          ينتهي: {renewal.expires}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium rtl">{renewal.amount}</p>
                      <p className="text-sm text-muted-foreground text-right rtl">{renewal.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
