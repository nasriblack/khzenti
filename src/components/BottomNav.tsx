import {
  Home,
  Calendar as CalendarIcon,
  Sparkles,
  ShoppingBag,
  User,
} from "lucide-react";

type Page = "login" | "home" | "wardrobe" | "generate" | "calendar" | "profile";

interface BottomNavProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  const navItems = [
    {
      id: "home" as Page,
      icon: <Home className="w-6 h-6" />,
      label: "الرئيسية",
    },
    {
      id: "wardrobe" as Page,
      icon: <ShoppingBag className="w-6 h-6" />,
      label: "الخزانة",
    },
    {
      id: "generate" as Page,
      icon: <Sparkles className="w-6 h-6" />,
      label: "توليد",
    },
    {
      id: "calendar" as Page,
      icon: <CalendarIcon className="w-6 h-6" />,
      label: "التقويم",
    },
    {
      id: "profile" as Page,
      icon: <User className="w-6 h-6" />,
      label: "الملف",
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-3 z-30">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              currentPage === item.id
                ? "text-amber-600"
                : "text-gray-400 dark:text-gray-500"
            }`}
          >
            {item.icon}
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
