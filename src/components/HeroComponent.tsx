import { Check, CircleAlert, Sparkles } from "lucide-react";
import { AnimatePresence } from "framer-motion";

type Props = {
  motion: any;
  heroOpacity: any;
  darkMode: boolean;
  submitted: boolean;
  handleSubmit: (e: any) => void;
  email: string;
  setEmail: (email: string) => void;
  isLoading: boolean;
  isError: boolean;
};

function HeroComponent({
  motion,
  heroOpacity,
  darkMode,
  submitted,
  handleSubmit,
  email,
  setEmail,
  isLoading,
  isError,
}: Props) {
  return (
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
          ماعادش تضيّع وقت في التفكير شنوة تلبس. خزانتي يساعدك باش تكتشف ملابسك
          من جديد وتختار اللبسة المثالية لكل مناسبة.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-md mx-auto pt-4"
        >
          <form onSubmit={handleSubmit} className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="px-8 py-4 bg-gradient-to-l from-amber-600 to-rose-600 text-white font-bold rounded-2xl shadow-lg inline-flex items-center"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isLoading ? (
                  <motion.svg
                    key="spinner"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, rotate: 360 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.2 },
                      rotate: {
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="rotate-180 ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </motion.svg>
                )}
              </AnimatePresence>
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

          {submitted && !isError && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl mt-3"
            >
              <span className="text-green-700 font-bold">
                🎉 ثانكس ، تو يوصلك ايميل
              </span>
              <Check className="w-5 h-5 text-green-600" />
            </motion.div>
          )}

          {isError && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl mt-3"
            >
              <span className="text-red-700 font-bold">أوووبس، فما مشكلة</span>
              <CircleAlert className="w-5 h-5 text-red-700" />
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroComponent;
