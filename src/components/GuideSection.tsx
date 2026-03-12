import React from "react";
import { FadeIn } from "../pages/LandingPage";

type Props = {
  darkMode: boolean;
  motion: any;
};

export default function GuideSection({ darkMode, motion }: Props) {
  return (
    <section
      className={`relative z-10 px-6 py-20 md:px-12 ${darkMode ? "bg-gray-800/30" : "bg-gradient-to-br from-amber-100/40 to-blue-100/40"}`}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
            >
              كيفاش يخدم؟
            </h2>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              سهل وبسيط في 3 خطوات
            </p>
          </div>
        </FadeIn>
        <div className="relative grid md:grid-cols-3 gap-12">
          {/* Connecting Lines - Desktop Only */}
          <svg
            className="absolute top-24 left-0 w-full h-48 pointer-events-none hidden md:block"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="lineGradient1"
                x1="100%"
                y1="0%"
                x2="50%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient
                id="lineGradient2"
                x1="50%"
                y1="0%"
                x2="0%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
            </defs>
            {/* Line 1 to 2 - Right to Middle */}
            <motion.path
              d="M 750 100 Q 625 80 500 100"
              stroke="url(#lineGradient1)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="8 8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
            />
            {/* Arrow 1 - Pointing Left */}
            <motion.path
              d="M 500 100 L 510 95 M 500 100 L 510 105"
              stroke="#3b82f6"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1.6, ease: "easeOut" }}
            />
            {/* Line 2 to 3 - Middle to Left */}
            <motion.path
              d="M 500 100 Q 375 120 250 100"
              stroke="url(#lineGradient2)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="8 8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
            />
            {/* Arrow 2 - Pointing Left */}
            <motion.path
              d="M 250 100 L 260 95 M 250 100 L 260 105"
              stroke="#f43f5e"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 2, ease: "easeOut" }}
            />
            {/* Animated dots */}
            <motion.circle
              cx="0"
              cy="0"
              r="4"
              fill="#f59e0b"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                offsetDistance: ["0%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 2,
                ease: "linear",
              }}
            >
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                begin="2s"
                path="M 750 100 Q 625 80 500 100"
              />
            </motion.circle>
            <motion.circle
              cx="0"
              cy="0"
              r="4"
              fill="#3b82f6"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                offsetDistance: ["0%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 3,
                ease: "linear",
              }}
            >
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                begin="3s"
                path="M 500 100 Q 375 120 250 100"
              />
            </motion.circle>
          </svg>

          {/* Step 1 - Camera */}
          <FadeIn delay={0}>
            <div className="text-center">
              <motion.div
                className="relative w-48 h-48 mx-auto mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background circle */}
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="90"
                    className={darkMode ? "fill-gray-700/50" : "fill-white"}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  />
                  {/* Camera body */}
                  <motion.rect
                    x="60"
                    y="80"
                    width="80"
                    height="60"
                    rx="12"
                    className="fill-gradient-to-br from-amber-500 to-rose-500"
                    fill="url(#cameraGradient)"
                    initial={{ scale: 0, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                  {/* Camera lens */}
                  <motion.circle
                    cx="100"
                    cy="105"
                    r="18"
                    className={darkMode ? "fill-gray-900" : "fill-gray-800"}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  />
                  <motion.circle
                    cx="100"
                    cy="105"
                    r="12"
                    className={darkMode ? "fill-gray-700" : "fill-gray-600"}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Flash */}
                  <motion.rect
                    x="120"
                    y="85"
                    width="12"
                    height="8"
                    rx="2"
                    fill="#fbbf24"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                  {/* Shutter button */}
                  <motion.circle
                    cx="125"
                    cy="70"
                    r="4"
                    fill="#f59e0b"
                    whileInView={{ scale: [1, 0.8, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  />
                  {/* T-shirt outline */}
                  <motion.path
                    d="M 70 140 Q 70 145 75 145 L 85 145 L 85 165 Q 85 170 90 170 L 110 170 Q 115 170 115 165 L 115 145 L 125 145 Q 130 145 130 140 L 130 130 L 125 125 L 120 130 L 100 130 L 80 130 L 75 125 L 70 130 Z"
                    className={
                      darkMode ? "stroke-amber-400" : "stroke-amber-600"
                    }
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient
                      id="cameraGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#f43f5e" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Number badge */}
                <motion.div
                  className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-amber-600 to-rose-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.6, delay: 0.3 }}
                >
                  1
                </motion.div>
              </motion.div>
              <h3
                className={`text-2xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                صوّر ملابسك
              </h3>
              <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                صوّر الملابس متاعك. الذكاء الإصطناعي يصنّفهم أوتوماتيكياً.
              </p>
            </div>
          </FadeIn>

          {/* Step 2 - Style Selection */}
          <FadeIn delay={0.1}>
            <div className="text-center">
              <motion.div
                className="relative w-48 h-48 mx-auto mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background circle */}
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="90"
                    className={darkMode ? "fill-gray-700/50" : "fill-white"}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  />
                  {/* Paint palette */}
                  <motion.path
                    d="M 100 60 Q 70 60 55 75 Q 40 90 40 110 Q 40 130 55 145 Q 65 155 80 155 Q 85 155 85 150 Q 85 145 88 142 Q 95 135 105 135 Q 115 135 122 142 Q 125 145 125 150 Q 125 155 130 155 Q 145 155 155 145 Q 170 130 170 110 Q 170 85 150 72 Q 130 60 100 60 Z"
                    fill="url(#paletteGradient)"
                    initial={{ scale: 0, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
                  {/* Color dots */}
                  <motion.circle
                    cx="75"
                    cy="95"
                    r="8"
                    fill="#f59e0b"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    style={{ animationDelay: "0s" }}
                  />
                  <motion.circle
                    cx="100"
                    cy="85"
                    r="8"
                    fill="#3b82f6"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    style={{ animationDelay: "0.3s" }}
                  />
                  <motion.circle
                    cx="125"
                    cy="95"
                    r="8"
                    fill="#f43f5e"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    style={{ animationDelay: "0.6s" }}
                  />
                  <motion.circle
                    cx="90"
                    cy="115"
                    r="8"
                    fill="#8b5cf6"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    style={{ animationDelay: "0.9s" }}
                  />
                  {/* Sparkles */}
                  <motion.path
                    d="M 145 75 L 147 80 L 152 82 L 147 84 L 145 89 L 143 84 L 138 82 L 143 80 Z"
                    fill="#fbbf24"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.path
                    d="M 60 130 L 62 135 L 67 137 L 62 139 L 60 144 L 58 139 L 53 137 L 58 135 Z"
                    fill="#f59e0b"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, -180, -360],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  <defs>
                    <linearGradient
                      id="paletteGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#e0e7ff" />
                      <stop offset="100%" stopColor="#fce7f3" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Number badge */}
                <motion.div
                  className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.6, delay: 0.4 }}
                >
                  2
                </motion.div>
              </motion.div>
              <h3
                className={`text-2xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                إختار ستايلك
              </h3>
              <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                قلنا شنية تحب: كاجوال، إليغان، سبور. التطبيق يتعلم ذوقك.
              </p>
            </div>
          </FadeIn>

          {/* Step 3 - Notifications */}
          <FadeIn delay={0.2}>
            <div className="text-center">
              <motion.div
                className="relative w-48 h-48 mx-auto mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background circle */}
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="90"
                    className={darkMode ? "fill-gray-700/50" : "fill-white"}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  />
                  {/* Phone */}
                  <motion.rect
                    x="70"
                    y="50"
                    width="60"
                    height="100"
                    rx="8"
                    fill="url(#phoneGradient)"
                    stroke={darkMode ? "#374151" : "#e5e7eb"}
                    strokeWidth="2"
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 50, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  />
                  {/* Screen */}
                  <motion.rect
                    x="75"
                    y="58"
                    width="50"
                    height="84"
                    rx="4"
                    className={darkMode ? "fill-gray-800" : "fill-gray-100"}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  />
                  {/* Notification card */}
                  <motion.rect
                    x="80"
                    y="70"
                    width="40"
                    height="28"
                    rx="4"
                    fill="url(#notifGradient)"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 70, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", duration: 0.6, delay: 0.6 }}
                  />
                  {/* Notification lines */}
                  <motion.line
                    x1="85"
                    y1="78"
                    x2="105"
                    y2="78"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  />
                  <motion.line
                    x1="85"
                    y1="85"
                    x2="115"
                    y2="85"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                  />
                  <motion.line
                    x1="85"
                    y1="92"
                    x2="110"
                    y2="92"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1 }}
                  />
                  {/* Heart icon */}
                  <motion.path
                    d="M 100 120 L 95 115 Q 92 112 92 108 Q 92 104 95 101 Q 98 98 100 98 Q 102 98 105 101 Q 108 104 108 108 Q 108 112 105 115 Z"
                    fill="#f43f5e"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", duration: 0.5, delay: 1.1 }}
                    animate={{ scale: [1, 1.3, 1] }}
                  />
                  {/* Bell waves */}
                  <motion.path
                    d="M 140 70 Q 145 70 148 67"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.path
                    d="M 140 80 Q 148 80 153 77"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                  />
                  <defs>
                    <linearGradient
                      id="phoneGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient
                      id="notifGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#f43f5e" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Number badge */}
                <motion.div
                  className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-rose-600 to-pink-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.6, delay: 0.5 }}
                >
                  3
                </motion.div>
              </motion.div>
              <h3
                className={`text-2xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                إستقبل إقتراحات
              </h3>
              <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                كل صباح، إقتراحات جاهزة تناسبك. أعجبك؟ إحفظها.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
