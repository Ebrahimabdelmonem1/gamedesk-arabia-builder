
import { cn } from "@/lib/utils";
import { 
  Users, CreditCard, Home, Dumbbell, Calendar, 
  Settings, LogOut, ChevronRight, Menu 
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: Home, label: "الرئيسية", path: "/" },
    { icon: Users, label: "الأعضاء", path: "/members" },
    { icon: CreditCard, label: "الاشتراكات", path: "/subscriptions" },
    { icon: Dumbbell, label: "التمارين", path: "/workouts" },
    { icon: Calendar, label: "الجدول", path: "/schedule" },
    { icon: Settings, label: "الإعدادات", path: "/settings" },
  ];

  return (
    <div
      className={cn(
        "bg-gym-primary text-white flex flex-col h-screen transition-all duration-300",
        collapsed ? "w-20" : "w-64",
        className
      )}
    >
      <div className="p-4 flex justify-between items-center border-b border-blue-800">
        <div className={cn("flex items-center", collapsed ? "justify-center w-full" : "")}>
          <Dumbbell className="h-8 w-8 text-gym-accent" />
          {!collapsed && (
            <h1 className="text-2xl font-bold mr-2 rtl">جيم أرابيا</h1>
          )}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className={cn("text-white hover:bg-blue-800", collapsed ? "mx-auto" : "")}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex-1 py-6">
        <nav className="space-y-1 px-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center py-3 px-4 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-blue-800 text-white"
                    : "text-white/80 hover:text-white hover:bg-blue-800/50"
                )}
              >
                <item.icon className={cn("h-5 w-5", collapsed ? "mx-auto" : "ml-2")} />
                {!collapsed && <span className="rtl">{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-blue-800">
        <Button
          variant="ghost"
          className={cn(
            "w-full text-white hover:bg-blue-800 flex items-center",
            collapsed ? "justify-center" : ""
          )}
        >
          <LogOut className={cn("h-5 w-5", collapsed ? "" : "ml-2")} />
          {!collapsed && <span className="rtl">تسجيل الخروج</span>}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
