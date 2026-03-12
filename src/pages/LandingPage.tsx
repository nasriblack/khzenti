import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import NavComponent from "../components/NavComponent";
import HeroComponent from "../components/HeroComponent";
import StoryComponent from "../components/StoryComponent";
import { FeaturesSection } from "../components/FeaturesSection";
import GuideSection from "../components/GuideSection";
import FaqSection from "../components/FaqSection";
import { FooterComponent } from "../components/FooterComponent";
import CtaComponent from "../components/CtaComponent";
import LandingWrapper from "../components/LandingWrapper";

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
    <LandingWrapper darkMode={darkMode}>
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
      <CtaComponent darkMode={darkMode} motion={motion} />

      {/* Footer */}
      <FooterComponent darkMode={darkMode} />
    </LandingWrapper>
  );
}
