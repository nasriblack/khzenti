import { Sun, Moon, User, ChevronLeft } from "lucide-react";

interface ProfilePageProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function ProfilePage({
  darkMode,
  toggleDarkMode,
}: ProfilePageProps) {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        الملف الشخصي
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-rose-600 rounded-full mx-auto mb-4 flex items-center justify-center">
          <User className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          أمينة بن علي
        </h2>
        <p className="text-gray-600 dark:text-gray-400">amina@example.com</p>
      </div>

      <div className="space-y-3">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md border border-gray-100 dark:border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {darkMode ? (
              <Moon className="w-5 h-5 text-amber-400" />
            ) : (
              <Sun className="w-5 h-5 text-amber-600" />
            )}
            <span className="font-semibold text-gray-900 dark:text-white">
              الوضع الليلي
            </span>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`w-12 h-6 rounded-full transition-colors ${darkMode ? "bg-amber-600" : "bg-gray-300"} relative`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${darkMode ? "left-0.5" : "right-0.5"}`}
            />
          </button>
        </div>

        {["الستايلات المفضلة", "الإشعارات", "الخصوصية", "المساعدة"].map(
          (item, i) => (
            <button
              key={i}
              className="w-full bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md border border-gray-100 dark:border-gray-700 flex items-center justify-between text-right"
            >
              <span className="font-semibold text-gray-900 dark:text-white">
                {item}
              </span>
              <ChevronLeft className="w-5 h-5 text-gray-400 rotate-180" />
            </button>
          ),
        )}
      </div>
    </div>
  );
}
