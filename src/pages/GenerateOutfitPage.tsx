import { useState } from "react";
import { motion } from "framer-motion";
import { Shirt, Star, Zap, TrendingUp, Clock, Wind, Check } from "lucide-react";

type Style =
  | "casual"
  | "elegant"
  | "sport"
  | "streetwear"
  | "vintage"
  | "minimal";

export default function GenerateOutfitPage() {
  const [selectedStyle, setSelectedStyle] = useState<Style | null>(null);
  const [generated, setGenerated] = useState(false);

  const styles: Array<{
    id: Style;
    name: string;
    icon: React.ReactNode;
    color: string;
    description: string;
  }> = [
    {
      id: "casual",
      name: "كاجوال",
      icon: <Shirt />,
      color: "from-blue-500 to-cyan-500",
      description: "مريح وعملي لليوم العادي",
    },
    {
      id: "elegant",
      name: "إليغان",
      icon: <Star />,
      color: "from-purple-500 to-pink-500",
      description: "راقي للمناسبات الرسمية",
    },
    {
      id: "sport",
      name: "سبور",
      icon: <Zap />,
      color: "from-green-500 to-emerald-500",
      description: "نشيط للرياضة والحركة",
    },
    {
      id: "streetwear",
      name: "ستريت وير",
      icon: <TrendingUp />,
      color: "from-orange-500 to-red-500",
      description: "عصري وجريء",
    },
    {
      id: "vintage",
      name: "فينتاج",
      icon: <Clock />,
      color: "from-amber-500 to-yellow-500",
      description: "كلاسيكي بلمسة عتيقة",
    },
    {
      id: "minimal",
      name: "مينيمال",
      icon: <Wind />,
      color: "from-gray-500 to-slate-500",
      description: "بسيط وأنيق",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        توليد لبسة
      </h1>

      {!generated ? (
        <>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              إختار الستايل
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {styles.map((style) => (
                <motion.button
                  key={style.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedStyle(style.id)}
                  className={`relative p-4 rounded-3xl border-2 transition-all ${
                    selectedStyle === style.id
                      ? "border-amber-500 shadow-xl"
                      : "border-gray-200 dark:border-gray-700"
                  } bg-white dark:bg-gray-800 text-right overflow-hidden`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${style.color} flex items-center justify-center text-white`}
                    >
                      {style.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                        {style.name}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {style.description}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl p-3">
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-2 font-medium text-right">
                      أمثلة:
                    </div>
                    <div className="flex gap-2 justify-center">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-500 shadow-sm"
                        />
                      ))}
                    </div>
                  </div>

                  {selectedStyle === style.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-3 left-3 w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center shadow-lg z-10"
                    >
                      <Check className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setGenerated(true)}
            disabled={!selectedStyle}
            className="w-full py-4 bg-gradient-to-l from-amber-600 to-rose-600 text-white font-bold rounded-2xl shadow-lg disabled:opacity-50"
          >
            توليد لبسة
          </button>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="bg-gradient-to-br from-amber-100 to-rose-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-6 shadow-lg mb-4">
            <div className="grid grid-cols-3 gap-4 mb-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-white dark:bg-gray-600 rounded-2xl shadow-md"
                />
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-4">
              لبسة كاجوال مريحة تناسب الطقس
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setGenerated(false)}
                className="flex-1 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl"
              >
                توليد أخرى
              </button>
              <button className="flex-1 py-3 bg-gradient-to-l from-amber-600 to-rose-600 text-white font-semibold rounded-xl shadow-lg">
                حفظ
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
