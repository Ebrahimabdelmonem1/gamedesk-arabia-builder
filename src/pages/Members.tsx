
import { useState } from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Plus, Edit, Trash2, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Member {
  id: number;
  name: string;
  phone: string;
  email: string;
  joinDate: string;
  membershipType: string;
  status: string;
  expiryDate: string;
}

const Members = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock data
  const mockMembers: Member[] = [
    {
      id: 1,
      name: "أحمد محمود",
      phone: "01012345678",
      email: "ahmed@example.com",
      joinDate: "15 فبراير 2025",
      membershipType: "سنوي",
      status: "نشط",
      expiryDate: "15 فبراير 2026"
    },
    {
      id: 2,
      name: "سارة علي",
      phone: "01123456789",
      email: "sara@example.com",
      joinDate: "20 مارس 2025",
      membershipType: "شهري",
      status: "نشط",
      expiryDate: "20 مايو 2025"
    },
    {
      id: 3,
      name: "محمد خالد",
      phone: "01234567890",
      email: "mohamed@example.com",
      joinDate: "5 أبريل 2025",
      membershipType: "نصف سنوي",
      status: "نشط",
      expiryDate: "5 أكتوبر 2025"
    },
    {
      id: 4,
      name: "فاطمة حسين",
      phone: "01098765432",
      email: "fatma@example.com",
      joinDate: "10 أبريل 2025",
      membershipType: "شهري",
      status: "نشط",
      expiryDate: "10 مايو 2025"
    },
    {
      id: 5,
      name: "عمر سليمان",
      phone: "01187654321",
      email: "omar@example.com", 
      joinDate: "1 مارس 2025",
      membershipType: "سنوي",
      status: "منتهي",
      expiryDate: "1 أبريل 2025"
    },
  ];

  // Filter members based on search term
  const filteredMembers = mockMembers.filter((member) =>
    member.name.includes(searchTerm) || 
    member.phone.includes(searchTerm) ||
    member.email.includes(searchTerm)
  );

  return (
    <MainLayout>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold rtl">الأعضاء</CardTitle>
          <div className="flex space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="rtl bg-gym-primary">
                  <Plus className="h-4 w-4 ml-2" />
                  إضافة عضو جديد
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-right rtl">إضافة عضو جديد</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-right block rtl">الاسم</label>
                    <Input id="name" placeholder="أدخل اسم العضو" className="rtl" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-right block rtl">رقم الهاتف</label>
                    <Input id="phone" placeholder="أدخل رقم الهاتف" className="rtl" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-right block rtl">البريد الإلكتروني</label>
                    <Input id="email" placeholder="أدخل البريد الإلكتروني" className="rtl" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="membership" className="text-right block rtl">نوع العضوية</label>
                    <select 
                      id="membership" 
                      className="w-full p-2 border rounded-md rtl"
                    >
                      <option value="شهري">شهري</option>
                      <option value="3 شهور">3 شهور</option>
                      <option value="6 شهور">6 شهور</option>
                      <option value="سنوي">سنوي</option>
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
                placeholder="بحث عن عضو..."
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
                  <th className="py-3 px-2 text-right rtl font-bold">الاسم</th>
                  <th className="py-3 px-2 text-right rtl font-bold">رقم الهاتف</th>
                  <th className="py-3 px-2 text-right rtl font-bold">البريد الإلكتروني</th>
                  <th className="py-3 px-2 text-right rtl font-bold">تاريخ الانضمام</th>
                  <th className="py-3 px-2 text-right rtl font-bold">نوع العضوية</th>
                  <th className="py-3 px-2 text-right rtl font-bold">الحالة</th>
                  <th className="py-3 px-2 text-right rtl font-bold">تاريخ الانتهاء</th>
                  <th className="py-3 px-2 text-right rtl font-bold">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-2 rtl">{member.name}</td>
                    <td className="py-3 px-2 rtl">{member.phone}</td>
                    <td className="py-3 px-2 ltr">{member.email}</td>
                    <td className="py-3 px-2 rtl">{member.joinDate}</td>
                    <td className="py-3 px-2 rtl">{member.membershipType}</td>
                    <td className="py-3 px-2">
                      <Badge className={member.status === "نشط" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                        {member.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-2 rtl">{member.expiryDate}</td>
                    <td className="py-3 px-2">
                      <div className="flex space-x-2">
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

export default Members;
