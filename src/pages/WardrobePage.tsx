import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface WardrobePageProps {
  onAddClothes: () => void;
}

export default function WardrobePage({ onAddClothes }: WardrobePageProps) {
  const [filter, setFilter] = useState<string>("الكل");
  const categories = ["الكل", "قمصان", "بناطيل", "أحذية", "جواكت", "إكسسوارات"];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          خزانتي
        </h1>
        <button
          onClick={onAddClothes}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-l from-amber-600 to-rose-600 text-white font-semibold rounded-xl shadow-lg"
        >
          <Plus className="w-5 h-5" />
          إضافة
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all ${
              filter === cat
                ? "bg-gradient-to-l from-amber-600 to-rose-600 text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-2xl shadow-md cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
