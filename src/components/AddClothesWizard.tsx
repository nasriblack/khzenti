import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Camera,
  Image as ImageIcon,
  Sparkles,
  Shirt,
  Package,
  Footprints,
  Watch,
  Briefcase,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Category = "tops" | "bottoms" | "shoes" | "jackets" | "accessories";
type Season = "summer" | "winter" | "spring" | "fall" | "all";

interface AddClothesWizardProps {
  show: boolean;
  onClose: () => void;
}

export default function AddClothesWizard({
  show,
  onClose,
}: AddClothesWizardProps) {
  const [step, setStep] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSeason, setSelectedSeason] = useState<Season>("all");
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [useAI, setUseAI] = useState(false);

  const categories: Array<{
    id: Category;
    name: string;
    icon: React.ReactNode;
    color: string;
  }> = [
    {
      id: "tops",
      name: "قمصان",
      icon: <Shirt />,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "bottoms",
      name: "بناطيل",
      icon: <Package />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "shoes",
      name: "أحذية",
      icon: <Footprints />,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "jackets",
      name: "جواكت",
      icon: <Briefcase />,
      color: "from-orange-500 to-red-500",
    },
    {
      id: "accessories",
      name: "إكسسوارات",
      icon: <Watch />,
      color: "from-amber-500 to-yellow-500",
    },
  ];

  const colors = [
    { name: "أسود", hex: "#000000" },
    { name: "أبيض", hex: "#FFFFFF" },
    { name: "أزرق", hex: "#3B82F6" },
    { name: "أحمر", hex: "#EF4444" },
    { name: "أخضر", hex: "#10B981" },
    { name: "أصفر", hex: "#F59E0B" },
    { name: "بني", hex: "#92400E" },
    { name: "وردي", hex: "#EC4899" },
  ];

  const seasons: Array<{ id: Season; name: string }> = [
    { id: "all", name: "كل المواسم" },
    { id: "summer", name: "صيف" },
    { id: "winter", name: "شتاء" },
    { id: "spring", name: "ربيع" },
    { id: "fall", name: "خريف" },
  ];

  const styles = [
    { id: "casual", name: "كاجوال" },
    { id: "elegant", name: "أنيق" },
    { id: "sport", name: "رياضي" },
    { id: "vintage", name: "فينتاج" },
    { id: "streetwear", name: "ستريت وير" },
    { id: "minimal", name: "بسيط" },
  ];

  const resetWizard = () => {
    setStep(1);
    setSelectedImage(null);
    setSelectedCategory(null);
    setSelectedColors([]);
    setSelectedSeason("all");
    setSelectedStyles([]);
    setDescription("");
    setUseAI(false);
  };

  const handleSave = () => {
    console.log({
      selectedImage,
      selectedCategory,
      selectedColors,
      selectedSeason,
      selectedStyles,
      description,
      useAI,
    });
    onClose();
    resetWizard();
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              onClose();
              resetWizard();
            }}
            className="fixed inset-0 bg-black/60 z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg md:max-h-[90vh] bg-white dark:bg-gray-800 rounded-3xl p-6 z-50 flex flex-col max-h-[90vh]"
            dir="rtl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                إضافة ملابس
              </h2>
              <button
                onClick={() => {
                  onClose();
                  resetWizard();
                }}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Progress */}
            <div className="flex items-center justify-center gap-2 mb-6 shrink-0">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-2 rounded-full transition-all ${
                    s === step
                      ? "w-8 bg-amber-600"
                      : s < step
                        ? "w-2 bg-amber-400"
                        : "w-2 bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>

            {/* Step Content */}
            <div className="flex-1 overflow-y-auto mb-6 min-h-0">
              {/* Step 1: Photo */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    صور ملابسك
                  </h3>

                  <button
                    onClick={() => setSelectedImage("camera")}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 hover:scale-[1.02] transition-transform ${
                      selectedImage === "camera"
                        ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20"
                        : "bg-gradient-to-l from-amber-100 to-rose-100 dark:from-amber-900/30 dark:to-rose-900/30 border-amber-200 dark:border-amber-800"
                    }`}
                  >
                    <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center shrink-0">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right flex-1">
                      <div className="font-bold text-gray-900 dark:text-white">
                        التقاط صورة
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        إستخدم الكاميرا
                      </div>
                    </div>
                    {selectedImage === "camera" && (
                      <Check className="w-5 h-5 text-amber-600" />
                    )}
                  </button>

                  <button
                    onClick={() => setSelectedImage("gallery")}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 hover:scale-[1.02] transition-transform ${
                      selectedImage === "gallery"
                        ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20"
                        : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                    }`}
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <ImageIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right flex-1">
                      <div className="font-bold text-gray-900 dark:text-white">
                        من المعرض
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        إختار صورة موجودة
                      </div>
                    </div>
                    {selectedImage === "gallery" && (
                      <Check className="w-5 h-5 text-amber-600" />
                    )}
                  </button>

                  <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-2xl border-2 border-purple-200 dark:border-purple-800">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={useAI}
                        onChange={(e) => setUseAI(e.target.checked)}
                        className="mt-1 w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-purple-600" />
                          إستخدام الذكاء الإصطناعي
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          الذكاء الإصطناعي راح يحلل الصورة و يملي المعلومات
                          أوتوماتيكياً
                        </div>
                      </div>
                    </label>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Category */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    شنوة النوع؟
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`p-4 rounded-2xl border-2 transition-all ${
                          selectedCategory === cat.id
                            ? "border-amber-500 shadow-lg scale-105"
                            : "border-gray-200 dark:border-gray-700"
                        } bg-white dark:bg-gray-700`}
                      >
                        <div
                          className={`w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white`}
                        >
                          {cat.icon}
                        </div>
                        <div className="font-bold text-gray-900 dark:text-white text-sm">
                          {cat.name}
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Colors, Season, Styles */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      شنوة اللون؟
                    </h3>
                    <div className="grid grid-cols-4 gap-3">
                      {colors.map((color) => (
                        <button
                          key={color.hex}
                          onClick={() =>
                            setSelectedColors((prev) =>
                              prev.includes(color.hex)
                                ? prev.filter((c) => c !== color.hex)
                                : [...prev, color.hex],
                            )
                          }
                          className="relative"
                        >
                          <div
                            className={`w-full aspect-square rounded-xl border-2 transition-all ${
                              selectedColors.includes(color.hex)
                                ? "border-amber-500 scale-110"
                                : "border-gray-300 dark:border-gray-600"
                            }`}
                            style={{ backgroundColor: color.hex }}
                          >
                            {selectedColors.includes(color.hex) && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Check className="w-6 h-6 text-white drop-shadow-lg" />
                              </div>
                            )}
                          </div>
                          <div className="text-xs text-center mt-1 text-gray-700 dark:text-gray-300">
                            {color.name}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      الموسم
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {seasons.map((season) => (
                        <button
                          key={season.id}
                          onClick={() => setSelectedSeason(season.id)}
                          className={`px-4 py-3 rounded-xl font-medium transition-all ${
                            selectedSeason === season.id
                              ? "bg-gradient-to-l from-amber-600 to-rose-600 text-white shadow-lg"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {season.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      الستايل (يمكنك إختيار أكثر من واحد)
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {styles.map((style) => (
                        <button
                          key={style.id}
                          onClick={() =>
                            setSelectedStyles((prev) =>
                              prev.includes(style.id)
                                ? prev.filter((s) => s !== style.id)
                                : [...prev, style.id],
                            )
                          }
                          className={`px-4 py-3 rounded-xl font-medium transition-all ${
                            selectedStyles.includes(style.id)
                              ? "bg-gradient-to-l from-amber-600 to-rose-600 text-white shadow-lg"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {selectedStyles.includes(style.id) && (
                            <Check className="w-4 h-4 inline ml-2" />
                          )}
                          {style.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      وصف القطعة
                    </h3>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="pink cotton shirt with white stripes"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-amber-500 focus:ring-4 focus:ring-amber-100 dark:focus:ring-amber-900/30 transition-all resize-none"
                      rows={3}
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 4: Confirm */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    تأكيد الإضافة
                  </h3>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        النوع:
                      </span>
                      <span className="font-bold text-gray-900 dark:text-white">
                        {
                          categories.find((c) => c.id === selectedCategory)
                            ?.name
                        }
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        الألوان:
                      </span>
                      <div className="flex gap-1">
                        {selectedColors.map((color, i) => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded-full border-2 border-white"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        الموسم:
                      </span>
                      <span className="font-bold text-gray-900 dark:text-white">
                        {seasons.find((s) => s.id === selectedSeason)?.name}
                      </span>
                    </div>
                    {selectedStyles.length > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          الستايل:
                        </span>
                        <span className="font-bold text-gray-900 dark:text-white">
                          {selectedStyles
                            .map((id) => styles.find((s) => s.id === id)?.name)
                            .join(", ")}
                        </span>
                      </div>
                    )}
                    {description && (
                      <div className="flex flex-col gap-2">
                        <span className="text-gray-600 dark:text-gray-400">
                          الوصف:
                        </span>
                        <span className="text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-600 px-3 py-2 rounded-lg">
                          {description}
                        </span>
                      </div>
                    )}
                    {useAI && (
                      <div className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          تم تفعيل الذكاء الإصطناعي
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-4 text-center">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      ✨ القطعة متاعك راح تنضاف للخزانة و تكون متاحة للإستخدام
                      في توليد الألبسة
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex gap-3 shrink-0">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex-1 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl flex items-center justify-center gap-2"
                >
                  <ChevronRight className="w-5 h-5" />
                  رجوع
                </button>
              )}
              {step < 4 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={
                    (step === 1 && !selectedImage) ||
                    (step === 2 && !selectedCategory) ||
                    (step === 3 && selectedColors.length === 0)
                  }
                  className="flex-1 py-3 bg-gradient-to-l from-amber-600 to-rose-600 text-white font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  التالي
                  <ChevronLeft className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleSave}
                  className="flex-1 py-3 bg-gradient-to-l from-amber-600 to-rose-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  حفظ
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
