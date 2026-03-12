import { motion } from "framer-motion";
import {
  Sparkles,
  Plus,
  ShoppingBag,
  TrendingUp,
  Clock,
  Sun,
  Wind,
  Shirt,
  Package,
  Footprints,
  Watch,
} from "lucide-react";

interface HomePageProps {
  onAddClothes: () => void;
}

export default function HomePage({ onAddClothes }: HomePageProps) {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            مرحبا، أمينة 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400">شوف خزانتك</p>
        </div>
        <button
          onClick={onAddClothes}
          className="p-3 bg-gradient-to-br from-amber-600 to-rose-600 text-white rounded-xl shadow-lg"
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>

      {/* Weather Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-50 dark:from-blue-900/40 dark:via-cyan-900/20 dark:to-blue-900/30 rounded-3xl p-6 shadow-lg border border-blue-200 dark:border-blue-800"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                28°C
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                الطقس الآن
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              مشمس
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              تونس، تونس
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-3 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <Wind className="w-4 h-4 text-blue-600" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                الرياح
              </span>
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              12 km/h
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">خفيف</div>
          </div>

          <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-3 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                في الليل (18:00)
              </span>
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              23°C
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              رياح متوسطة
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl border border-amber-300 dark:border-amber-800">
          <div className="flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
            <div className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-bold">تنبيه:</span> الطقس مشمس الآن، لكن
              متوقع شوية مطر في المساء. إلبس خفيف الآن و خذ جاكيت للخروج!
            </div>
          </div>
        </div>
      </motion.div>

      {/* Wardrobe Stats */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-3xl p-6 shadow-lg border border-amber-200 dark:border-amber-800"
        >
          <ShoppingBag className="w-8 h-8 text-amber-600 mb-3" />
          <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
            42
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
            قطعة في الخزانة
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-3xl p-6 shadow-lg border border-blue-200 dark:border-blue-800"
        >
          <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
          <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
            18
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
            لبسة محفوظة
          </div>
        </motion.div>
      </div>

      {/* Category Breakdown */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          حسب النوع
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            {
              icon: <Shirt className="w-5 h-5" />,
              label: "قمصان",
              count: 15,
              color: "from-purple-500 to-pink-500",
            },
            {
              icon: <Package className="w-5 h-5" />,
              label: "بناطيل",
              count: 12,
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: <Footprints className="w-5 h-5" />,
              label: "أحذية",
              count: 8,
              color: "from-green-500 to-emerald-500",
            },
            {
              icon: <Watch className="w-5 h-5" />,
              label: "إكسسوارات",
              count: 7,
              color: "from-orange-500 to-red-500",
            },
          ].map((cat, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md border border-gray-100 dark:border-gray-700 text-right"
            >
              <div
                className={`inline-flex p-2 bg-gradient-to-br ${cat.color} text-white rounded-lg mb-2`}
              >
                {cat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {cat.count}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {cat.label}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Recent Items */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            آخر الإضافات
          </h3>
          <button className="text-sm text-amber-600 font-medium">
            شوف الكل
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl shadow-md cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
