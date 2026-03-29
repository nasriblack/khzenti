import React from "react";
import { FadeIn } from "../pages/LandingPage";
import { Sparkles } from "lucide-react";

type Props = {
  darkMode: boolean;
  motion: any;
};

export default function CtaComponent({ darkMode, motion }: Props) {
  return (
    <section className="relative z-10 px-6 py-20 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2
            className={`text-4xl md:text-6xl font-bold h-35  mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            مستعد باش تبدّل
            <span className="block h-[inherit] bg-gradient-to-l from-amber-600 to-rose-600 bg-clip-text text-transparent">
              روتين الصباح متاعك؟
            </span>
          </h2>
          <p
            className={`text-xl mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            إنضم للقائمة وكون من الأوائل
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-l from-amber-600 to-rose-600 text-white text-lg font-bold rounded-2xl shadow-2xl"
          >
            <Sparkles className="w-6 h-6" />
            إنضم للقائمة
          </motion.button>
        </FadeIn>
      </div>
    </section>
  );
}
