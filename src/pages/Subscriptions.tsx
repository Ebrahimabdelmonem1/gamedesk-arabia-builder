
import MainLayout from "@/components/Layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Plus, Edit, Trash2, Filter, Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Subscription {
  id: number;
  memberId: number;
  memberName: string;
  type: string;
  startDate: string;
  endDate: string;
  amount: string;
  paymentStatus: string;
  paymentMethod: string;
}

const Subscriptions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock data
  const mockSubscriptions: Subscription[] = [
    {
      id: 1,
      memberId: 1,
      memberName: "أحمد محمود",
      type: "سنوي",
      startDate: "15 فبراير 2025",
      endDate: "15 فبراير 2026",
      amount: "3600 ج.م",
      paymentStatus: "مدفوع",
      paymentMethod: "كاش"
    },
    {
      id: 2,
      memberId: 2,
      memberName: "سارة علي",
      type: "شهري",
      startDate: "20 أبريل 2025",
      endDate: "20 مايو 2025",
      amount: "400 ج.م",
      paymentStatus: "مدفوع",
      paymentMethod: "بطاقة ائتمان"
    },
    {
      id: 3,
      memberId: 3,
      memberName: "محمد خالد",
      type: "نصف سنوي",
      startDate: "5 أبريل 2025",
      endDate: "5 أكتوبر 2025",
      amount: "2000 ج.م",
      paymentStatus: "مدفوع",
      paymentMethod: "تحويل بنكي"
    },
    {
      id: 4,
      memberId: 4,
      memberName: "فاطمة حسين",
      type: "شهري",
      startDate: "10 أبريل 2025",
      endDate: "10 مايو 2025",
      amount: "400 ج.م",
      paymentStatus: "معلق",
      paymentMethod: "كاش"
    },
    {
      id: 5,
      memberId: 5,
      memberName: "عمر سليمان",
      type: "سنوي",
      startDate: "1 مارس 2024",
      endDate: "1 مارس 2025",
      amount: "3600 ج.م",
      paymentStatus: "منتهي",
      paymentMethod: "بطاقة ائتمان"
    },
  ];

  // Filter subscriptions based on search term
  const filteredSubscriptions = mockSubscriptions.filter((subscription) =>
    subscription.memberName.includes(searchTerm) || 
    subscription.type.includes(searchTerm)
  );

  return (
    <MainLayout>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold rtl">الاشتراكات</CardTitle>
          <div className="flex space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="rtl bg-gym-primary">
                  <Plus className="h-4 w-4 ml-2" />
                  إضافة اشتراك جديد
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-right rtl">إضافة اشتراك جديد</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <label htmlFor="member" className="text-right block rtl">العضو</label>
                    <select 
                      id="member" 
                      className="w-full p-2 border rounded-md rtl"
                    >
                      <option value="">اختر العضو</option>
                      <option value="1">أحمد محمود</option>
                      <option value="2">سارة علي</option>
                      <option value="3">محمد خالد</option>
                      <option value="4">فاطمة حسين</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subscriptionType" className="text-right block rtl">نوع الاشتراك</label>
                    <select 
                      id="subscriptionType" 
                      className="w-full p-2 border rounded-md rtl"
                    >
                      <option value="شهري">شهري</option>
                      <option value="3 شهور">3 شهور</option>
                      <option value="6 شهور">6 شهور</option>
                      <option value="سنوي">سنوي</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="amount" className="text-right block rtl">المبلغ</label>
                    <Input id="amount" placeholder="أدخل المبلغ" className="rtl" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="paymentMethod" className="text-right block rtl">طريقة الدفع</label>
                    <select 
                      id="paymentMethod" 
                      className="w-full p-2 border rounded-md rtl"
                    >
                      <option value="كاش">كاش</option>
                      <option value="بطاقة ائتمان">بطاقة ائتمان</option>
                      <option value="تحويل بنكي">تحويل بنكي</option>
                    </select>
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <DialogTrigger asChild>
                      <Button variant="outline" className="rtl">إلغاء</Button>
                    </DialogTrigger>
                    <Button className="bg-gym-primary rtl">حفظ</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <div className="relative w-80">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="بحث عن اشتراك..."
                className="pl-10 rtl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="rtl">
              <Filter className="h-4 w-4 ml-2" />
              تصفية
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-2 text-right rtl font-bold">العضو</th>
                  <th className="py-3 px-2 text-right rtl font-bold">نوع الاشتراك</th>
                  <th className="py-3 px-2 text-right rtl font-bold">تاريخ البدء</th>
                  <th className="py-3 px-2 text-right rtl font-bold">تاريخ الانتهاء</th>
                  <th className="py-3 px-2 text-right rtl font-bold">المبلغ</th>
                  <th className="py-3 px-2 text-right rtl font-bold">حالة الدفع</th>
                  <th className="py-3 px-2 text-right rtl font-bold">طريقة الدفع</th>
                  <th className="py-3 px-2 text-right rtl font-bold">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubscriptions.map((subscription) => (
                  <tr key={subscription.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-2 rtl">{subscription.memberName}</td>
                    <td className="py-3 px-2 rtl">{subscription.type}</td>
                    <td className="py-3 px-2 rtl">{subscription.startDate}</td>
                    <td className="py-3 px-2 rtl">{subscription.endDate}</td>
                    <td className="py-3 px-2 rtl">{subscription.amount}</td>
                    <td className="py-3 px-2">
                      <Badge 
                        className={
                          subscription.paymentStatus === "مدفوع" ? "bg-green-100 text-green-800" : 
                          subscription.paymentStatus === "معلق" ? "bg-yellow-100 text-yellow-800" :
                          "bg-red-100 text-red-800"
                        }
                      >
                        {subscription.paymentStatus}
                      </Badge>
                    </td>
                    <td className="py-3 px-2 rtl">{subscription.paymentMethod}</td>
                    <td className="py-3 px-2">
                      <div className="flex space-x-2">
                        {subscription.paymentStatus === "معلق" && (
                          <Button variant="ghost" size="icon" className="text-green-500">
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Subscriptions;
