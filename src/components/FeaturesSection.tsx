import { FadeIn } from "../pages/LandingPage";

type Props = {
  darkMode: boolean;
  motion: any;
};

export function FeaturesSection({ darkMode, motion }: Props) {
  return (
    <section className="relative z-10 px-6 py-20 md:px-12">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
            >
              علاش النساء التونسيات يحبو خزانتي
            </h2>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              مصمّم خصيصاً لأسلوب حياتك، ثقافتك، ومناخك
            </p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 - Weather */}
          <FadeIn delay={0}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative overflow-hidden p-8 rounded-3xl border shadow-lg h-full ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}
            >
              {/* Custom Weather SVG */}
              <div className="relative mb-6">
                <motion.div
                  className="w-24 h-24 mx-auto"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <svg viewBox="0 0 120 120" className="w-full h-full">
                    {/* Sun */}
                    <motion.g
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{ originX: "60px", originY: "35px" }}
                    >
                      <circle
                        cx="60"
                        cy="35"
                        r="18"
                        fill="url(#sunMainGradient)"
                      />
                      {[...Array(8)].map((_, i) => (
                        <motion.line
                          key={i}
                          x1="60"
                          y1="35"
                          x2="60"
                          y2="15"
                          stroke="#fbbf24"
                          strokeWidth="3"
                          strokeLinecap="round"
                          transform={`rotate(${i * 45} 60 35)`}
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </motion.g>

                    {/* Clouds */}
                    <motion.g
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ellipse
                        cx="40"
                        cy="70"
                        rx="18"
                        ry="12"
                        fill={darkMode ? "#4b5563" : "#e5e7eb"}
                      />
                      <ellipse
                        cx="55"
                        cy="68"
                        rx="20"
                        ry="14"
                        fill={darkMode ? "#6b7280" : "#d1d5db"}
                      />
                      <ellipse
                        cx="70"
                        cy="70"
                        rx="18"
                        ry="12"
                        fill={darkMode ? "#4b5563" : "#e5e7eb"}
                      />
                    </motion.g>

                    {/* Raindrops */}
                    {[30, 45, 60, 75].map((x, i) => (
                      <motion.line
                        key={i}
                        x1={x}
                        y1="85"
                        x2={x}
                        y2="95"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: [0, 10, 0], opacity: [0, 1, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}

                    <defs>
                      <linearGradient
                        id="sunMainGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </div>

              <h3
                className={`text-2xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                حسب الطقس
              </h3>
              <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                إقتراحات ألبسة تناسب الطقس متاع كل يوم
              </p>
            </motion.div>
          </FadeIn>

          {/* Feature 2 - Occasion */}
          <FadeIn delay={0.1}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative overflow-hidden p-8 rounded-3xl border shadow-lg h-full ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}
            >
              {/* Custom Calendar/Occasion SVG */}
              <div className="relative mb-6">
                <motion.div
                  className="w-24 h-24 mx-auto"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <svg viewBox="0 0 120 120" className="w-full h-full">
                    {/* Calendar Base */}
                    <motion.rect
                      x="25"
                      y="30"
                      width="70"
                      height="65"
                      rx="8"
                      fill="url(#calendarGradient)"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        duration: 0.6,
                        delay: 0.2,
                      }}
                    />

                    {/* Calendar Header */}
                    <rect
                      x="25"
                      y="30"
                      width="70"
                      height="20"
                      rx="8"
                      fill="#3b82f6"
                    />
                    <rect x="25" y="40" width="70" height="10" fill="#3b82f6" />

                    {/* Binding Rings */}
                    <circle
                      cx="40"
                      cy="30"
                      r="4"
                      fill={darkMode ? "#1f2937" : "#ffffff"}
                    />
                    <circle
                      cx="80"
                      cy="30"
                      r="4"
                      fill={darkMode ? "#1f2937" : "#ffffff"}
                    />

                    {/* Calendar Grid */}
                    {[0, 1, 2].map((row) =>
                      [0, 1, 2].map((col) => (
                        <motion.rect
                          key={`${row}-${col}`}
                          x={35 + col * 18}
                          y={58 + row * 16}
                          width="12"
                          height="10"
                          rx="2"
                          fill={darkMode ? "#4b5563" : "#f3f4f6"}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + (row * 3 + col) * 0.05 }}
                        />
                      )),
                    )}

                    {/* Highlighted Date */}
                    <motion.rect
                      x="53"
                      y="58"
                      width="12"
                      height="10"
                      rx="2"
                      fill="#f59e0b"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Celebration Stars */}
                    {[
                      { x: 15, y: 45 },
                      { x: 100, y: 50 },
                      { x: 20, y: 85 },
                    ].map((pos, i) => (
                      <motion.path
                        key={i}
                        d={`M ${pos.x} ${pos.y} L ${pos.x + 2} ${pos.y + 4} L ${pos.x + 6} ${pos.y + 5} L ${pos.x + 2} ${pos.y + 6} L ${pos.x} ${pos.y + 10} L ${pos.x - 2} ${pos.y + 6} L ${pos.x - 6} ${pos.y + 5} L ${pos.x - 2} ${pos.y + 4} Z`}
                        fill="#fbbf24"
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{
                          scale: [0, 1, 0],
                          rotate: [0, 180, 360],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}

                    <defs>
                      <linearGradient
                        id="calendarGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor={darkMode ? "#374151" : "#ffffff"}
                        />
                        <stop
                          offset="100%"
                          stopColor={darkMode ? "#1f2937" : "#f9fafb"}
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </div>

              <h3
                className={`text-2xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                حسب المناسبة
              </h3>
              <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                من الشغل للعراس - إقتراحات تفهم الثقافة التونسية
              </p>
            </motion.div>
          </FadeIn>

          {/* Feature 3 - Style */}
          <FadeIn delay={0.2}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative overflow-hidden p-8 rounded-3xl border shadow-lg h-full ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}
            >
              {/* Custom Style/Heart SVG */}
              <div className="relative mb-6">
                <motion.div
                  className="w-24 h-24 mx-auto"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <svg viewBox="0 0 120 120" className="w-full h-full">
                    {/* Main Heart */}
                    <motion.path
                      d="M 60 95 L 30 65 Q 20 55 20 42 Q 20 28 32 20 Q 44 12 56 20 L 60 24 L 64 20 Q 76 12 88 20 Q 100 28 100 42 Q 100 55 90 65 Z"
                      fill="url(#heartGradient)"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        duration: 0.8,
                        delay: 0.3,
                      }}
                      animate={{ scale: [1, 1.05, 1] }}
                      style={{ originX: "60px", originY: "55px" }}
                    />

                    {/* Sparkle Effects */}
                    {[
                      { x: 35, y: 30, delay: 0 },
                      { x: 85, y: 35, delay: 0.3 },
                      { x: 45, y: 80, delay: 0.6 },
                      { x: 75, y: 75, delay: 0.9 },
                    ].map((sparkle, i) => (
                      <motion.g key={i}>
                        <motion.line
                          x1={sparkle.x}
                          y1={sparkle.y - 6}
                          x2={sparkle.x}
                          y2={sparkle.y + 6}
                          stroke="#fbbf24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: sparkle.delay,
                          }}
                        />
                        <motion.line
                          x1={sparkle.x - 6}
                          y1={sparkle.y}
                          x2={sparkle.x + 6}
                          y2={sparkle.y}
                          stroke="#fbbf24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: sparkle.delay,
                          }}
                        />
                      </motion.g>
                    ))}

                    {/* Floating Hearts */}
                    {[
                      { x: 25, size: 8, delay: 0 },
                      { x: 60, size: 6, delay: 0.5 },
                      { x: 95, size: 7, delay: 1 },
                    ].map((mini, i) => (
                      <motion.path
                        key={`mini-${i}`}
                        d={`M ${mini.x} 105 L ${mini.x - mini.size * 0.8} ${105 - mini.size} Q ${mini.x - mini.size} ${105 - mini.size * 1.3} ${mini.x - mini.size} ${105 - mini.size * 1.8} Q ${mini.x - mini.size} ${105 - mini.size * 2.5} ${mini.x} ${105 - mini.size * 2.5} Q ${mini.x + mini.size} ${105 - mini.size * 2.5} ${mini.x + mini.size} ${105 - mini.size * 1.8} Q ${mini.x + mini.size} ${105 - mini.size * 1.3} ${mini.x + mini.size * 0.8} ${105 - mini.size} Z`}
                        fill="#f43f5e"
                        opacity="0.6"
                        initial={{ y: 0, opacity: 0 }}
                        animate={{
                          y: [-20, -40],
                          opacity: [0, 0.8, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: mini.delay,
                        }}
                      />
                    ))}

                    <defs>
                      <linearGradient
                        id="heartGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#f43f5e" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </div>

              <h3
                className={`text-2xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                حسب ستايلك
              </h3>
              <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                التطبيق يتعلم ستايلك ويقترح ألبسة تعجبك
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
