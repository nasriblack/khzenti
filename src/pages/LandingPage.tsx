import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Sparkles,
  Calendar,
  Heart,
  ArrowRight,
  Check,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";

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
  const FadeIn = ({
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

  const faqs = [
    {
      q: "شنوة خزانتي؟",
      a: "خزانتي هي تطبيق يساعدك باش تقرر شنوة تلبس بإستخدام ملابسك إلي عندك. مانزيدوش نقلقوك بالإشهارات ولّا إقتراحات شراء. الهدف متاعنا هو مساعدتك باش تستغل ملابسك الموجودة بأحسن طريقة.",
    },
    {
      q: "كيفاش يخدم التطبيق؟",
      a: "التطبيق يستخدم الذكاء الإصطناعي باش يقترح عليك ألبسة مناسبة حسب الطقس، المناسبة، وستايل إلي تحبه. كل صباح، التطبيق يعطيك إقتراحات جاهزة مع شرح ليه هاذي الألبسة تناسبك.",
    },
    {
      q: "واش خزانتي موقع بيع؟",
      a: "لا، خزانتي ماهيش موقع بيع. احنا نركزو على مساعدتك باش تستخدم الملابس إلي عندك بطريقة أحسن. في المستقبل، نخططو باش نتعاونو مع محلات تونسية باش نقترحو قطع تكمّل ملابسك الموجودة - فقط كيف يكون ضروري حقيقة ويناسب ستايلك.",
    },
    {
      q: "التطبيق مجاني؟",
      a: "أيه، التطبيق الأساسي راح يكون مجاني تماماً. في المستقبل، راح نوفرو ميزات إضافية للناس إلي يحبو يستثمرو أكثر في تنظيم خزانتهم.",
    },
    {
      q: "كيفاش التطبيق يحمي معلوماتي؟",
      a: "خصوصيتك مهمة برشة عندنا. صور ملابسك يتخزنو بطريقة آمنة، وماعمرنا نشاركو معلوماتك الشخصية مع أي جهة أخرى. البيانات متاعك تبقى ملك إلك فقط.",
    },
    {
      q: "وقتاش راح يتلانسى التطبيق؟",
      a: "نخططو نلانسيو النسخة التجريبية في مارس 2026. إنضم للقائمة متاع الإنتظار باش تكون من الأوائل إلي يجربو التطبيق ويعطيونا رأيهم.",
    },
  ];

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
      <nav className="relative z-50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 rounded-xl transition-all duration-300 ${darkMode ? "bg-gray-800 text-amber-400" : "bg-white text-amber-600 shadow-md"}`}
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </motion.button>
          <div className="flex items-center gap-3">
            <img
              src={darkMode ? "/logo_dark.png" : "/logo.png"}
              alt="خزانتي Logo"
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <motion.section
        style={{ opacity: heroOpacity }}
        className="relative z-10 px-6 pb-24 md:px-12  md:pb-32"
      >
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-5 py-2.5 backdrop-blur-sm border rounded-full ${darkMode ? "bg-gray-800/80 border-amber-800 text-gray-200" : "bg-white/80 border-amber-200 text-gray-700"}`}
          >
            <span className="text-sm font-semibold">
              مساعدك الشخصي في الموضة بالذكاء الإصطناعي
            </span>
            <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className={darkMode ? "text-white" : "text-gray-900"}>
              خزانتك،
            </span>
            <span className="block bg-gradient-to-l from-amber-600 via-rose-600 to-blue-600 bg-clip-text text-transparent">
              بطريقة جديدة
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`text-lg md:text-xl max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            ماعادش تضيّع وقت في التفكير شنوة تلبس. خزانتي يساعدك باش تكتشف
            ملابسك من جديد وتختار اللبسة المثالية لكل مناسبة.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-md mx-auto pt-4"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-l from-amber-600 to-rose-600 text-white font-bold rounded-2xl shadow-lg"
                >
                  <ArrowRight className="w-5 h-5 rotate-180 inline ml-2" />
                  إنضم للقائمة
                </motion.button>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="البريد الإلكتروني"
                  required
                  className={`flex-1 px-6 py-4 border-2 rounded-2xl text-right ${darkMode ? "bg-gray-800 border-gray-700 text-white placeholder:text-gray-400" : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-500"} focus:outline-none focus:border-amber-500`}
                />
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-green-50 border-2 border-green-200 rounded-2xl"
              >
                <span className="text-green-700 font-bold">
                  🎉 مرحى! راك في القائمة
                </span>
                <Check className="w-5 h-5 text-green-600" />
              </motion.div>
            )}
            <p
              className={`mt-3 text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              إنضم لأكثر من 500 مرأة تونسية
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Story */}
      <section
        className={`relative z-10 px-6 py-20 md:px-12 ${darkMode ? "bg-gray-800/30" : "bg-gradient-to-br from-amber-100/40 to-blue-100/40"}`}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className={`backdrop-blur-sm rounded-3xl p-8 md:p-12 border shadow-xl ${darkMode ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-amber-100"}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-amber-600 mb-1">
                  من وين جات الفكرة
                </h3>
                <h2
                  className={`text-2xl md:text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
                >
                  مؤسس خزانتي
                </h2>
              </div>
            </div>
            <div
              className={`space-y-4 text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              <p
                className={`text-xl md:text-2xl font-medium border-r-4 border-amber-500 pr-4 ${darkMode ? "text-gray-200" : "text-gray-800"}`}
              >
                "كل صباح، مرتي تسألني على الطقس متاع غدوة... والأهم من هذا كلّه:
                'شنوة نلبس؟'"
              </p>
              <p>
                كل يوم نفس السؤال. كل يوم نفس التوتر. خزانة مليانة بالملابس، أما
                دايماً "ماعندي شي نلبسو".
              </p>
              <p>
                من هنا جات الفكرة: واش ماينجمش يكون عندنا مساعد ذكي يعرف الطقس،
                يعرف المناسبة، ويعرف شنية الملابس إلي عندنا؟
              </p>
              <p
                className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                خزانتي هو الحل. ماهوش مجرد تطبيق، هو صديقك إلي يفهمك ويساعدك كل
                صباح.
              </p>
            </div>
            <div
              className={`mt-8 pt-6 border-t ${darkMode ? "border-gray-700" : "border-gray-200"}`}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full" />
                <div>
                  <p
                    className={`font-bold text-lg ${darkMode ? "text-white" : "text-gray-900"}`}
                  >
                    أحمد بن سالم
                  </p>
                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    مؤسس ومدير تنفيذي
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
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
                      <rect
                        x="25"
                        y="40"
                        width="70"
                        height="10"
                        fill="#3b82f6"
                      />

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

      {/* How it works */}
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

      {/* FAQ */}
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
      <footer
        className={`relative z-10 px-6 py-12 md:px-12 border-t ${darkMode ? "bg-gray-800/50 border-gray-700" : "bg-white/50 border-gray-200"}`}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src={darkMode ? "/logo_dark.png" : "/logo.png"}
              alt="خزانتي Logo"
              className="w-24 h-24 object-contain"
            />
          </div>
          <p
            className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            صُنع بـ ❤️ في تونس • © 2026
          </p>
          <div
            className={`flex gap-6 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            <a href="#" className="hover:text-amber-600 transition-colors">
              الخصوصية
            </a>
            <a href="#" className="hover:text-amber-600 transition-colors">
              الشروط
            </a>
            <a href="#" className="hover:text-amber-600 transition-colors">
              إتصل بنا
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
