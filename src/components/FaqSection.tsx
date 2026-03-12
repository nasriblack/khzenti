import React from "react";
import { FadeIn } from "../pages/LandingPage";
import { faqs } from "../data";
import { ChevronDown } from "lucide-react";

type Props = {
  darkMode: boolean;
  motion: any;
  setOpenFaq: (e: any) => void;
  openFaq: number | null;
};

export default function FaqSection({
  darkMode,
  motion,
  setOpenFaq,
  openFaq,
}: Props) {
  return (
    <section className="relative z-10 px-6 py-20 md:px-12">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
            >
              أسئلة متكررة
            </h2>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              كل شي تحب تعرفو على خزانتي
            </p>
          </div>
        </FadeIn>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i}>
              <div
                className={`rounded-2xl border overflow-hidden ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full px-6 py-5 text-right flex items-center justify-between gap-4 transition-colors ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"}`}
                >
                  <span
                    className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
                  >
                    {faq.q}
                  </span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }}>
                    <ChevronDown
                      className={`w-5 h-5 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                    />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === i ? "auto" : 0,
                    opacity: openFaq === i ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <div
                    className={`px-6 pb-5 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {faq.a}
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
