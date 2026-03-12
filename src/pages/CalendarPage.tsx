import { Heart } from "lucide-react";

export default function CalendarPage() {
  const days = ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        التقويم
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            فيفري 2026
          </h2>
        </div>
        <div className="grid grid-cols-7 gap-2 mb-2">
          {days.map((day) => (
            <div
              key={day}
              className="text-center text-sm font-semibold text-gray-600 dark:text-gray-400"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {[...Array(28)].map((_, i) => {
            const hasOutfit = [2, 5, 8, 11, 14, 17, 20, 23].includes(i);
            return (
              <button
                key={i}
                className={`aspect-square rounded-xl flex items-center justify-center relative ${
                  hasOutfit
                    ? "bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-400 font-bold"
                    : "bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                {i + 1}
                {hasOutfit && (
                  <div className="absolute bottom-1 w-1 h-1 bg-amber-600 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          الألبسة المحفوظة
        </h3>
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md border border-gray-100 dark:border-gray-700 flex items-center gap-4"
            >
              <div className="flex gap-2">
                {[1, 2, 3].map((j) => (
                  <div
                    key={j}
                    className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg"
                  />
                ))}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 dark:text-white">
                  لبسة كاجوال
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {i === 1 ? "اليوم" : "أمس"}
                </div>
              </div>
              <Heart className="w-5 h-5 text-rose-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
