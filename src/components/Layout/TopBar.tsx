
import { Button } from "@/components/ui/button";
import { Bell, User } from "lucide-react";

const TopBar = () => {
  return (
    <header className="bg-white border-b border-gray-200 flex justify-between items-center py-4 px-6">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gym-dark">لوحة التحكم</h1>
      </div>
      <div className="flex items-center space-x-4 rtl">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-gym-secondary rounded-full"></span>
        </Button>
        <div className="flex items-center space-x-3">
          <div className="text-right ml-3">
            <p className="text-sm font-medium text-gym-dark">محمد أحمد</p>
            <p className="text-xs text-gym-gray">المدير</p>
          </div>
          <Button variant="outline" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
