import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";
import { faqs } from "../data";
import NavComponent from "../components/NavComponent";
import HeroComponent from "../components/HeroComponent";
import StoryComponent from "../components/StoryComponent";
import { FeaturesSection } from "../components/FeaturesSection";
import GuideSection from "../components/GuideSection";
import FaqSection from "../components/FaqSection";
import { FooterComponent } from "../components/FooterComponent";

export const FadeIn = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.3,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function KhzantiLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  // Optimized animation component

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ${darkMode ? "bg-gray-900" : "bg-gradient-to-b from-amber-50 via-white to-blue-50"}`}
      dir="rtl"
    >
      {/* Background blobs - simplified for performance */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-50">
        <div
          className={`absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl ${darkMode ? "bg-amber-900/20" : "bg-amber-200/40"}`}
        />
        <div
          className={`absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl ${darkMode ? "bg-blue-900/10" : "bg-blue-200/30"}`}
        />
      </div>

      {/* Nav */}
      <NavComponent
        darkMode={darkMode}
        motion={motion}
        setDarkMode={setDarkMode}
      />

      {/* Hero */}
      <HeroComponent
        darkMode={darkMode}
        email={email}
        handleSubmit={handleSubmit}
        heroOpacity={heroOpacity}
        motion={motion}
        setEmail={setEmail}
        submitted={submitted}
      />

      {/* Story */}
      <StoryComponent darkMode={darkMode} />

      {/* Features */}

      <FeaturesSection darkMode={darkMode} motion={motion} />

      {/* How it works */}
      <GuideSection darkMode={darkMode} motion={motion} />

      {/* FAQ */}
      <FaqSection
        darkMode={darkMode}
        motion={motion}
        openFaq={openFaq}
        setOpenFaq={setOpenFaq}
      />

      {/* Final CTA */}
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
            <p
              className={`text-sm mt-6 ${darkMode ? "text-gray-500" : "text-gray-500"}`}
            >
              الإطلاق في مارس 2026
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <FooterComponent darkMode={darkMode} />
    </div>
  );
}
