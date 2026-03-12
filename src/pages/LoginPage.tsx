import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface LoginPageProps {
  onLogin: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function LoginPage({
  onLogin,
  darkMode,
  toggleDarkMode,
}: LoginPageProps) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-blue-50 dark:bg-gray-900 flex items-center justify-center p-6"
      dir="rtl"
    >
      <button
        onClick={toggleDarkMode}
        className="absolute top-6 left-6 p-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-amber-400" />
        ) : (
          <Moon className="w-5 h-5 text-gray-600" />
        )}
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <img
              src={darkMode ? "/logo_dark.png" : "/logo.png"}
              alt="خزانتي Logo"
              className="w-40 h-40 object-contain"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            مساعدك الشخصي في الموضة
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {isSignup ? "إنشاء حساب" : "تسجيل الدخول"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-amber-500 focus:ring-4 focus:ring-amber-100 dark:focus:ring-amber-900/30 transition-all"
                placeholder="email@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                كلمة السر
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-amber-500 focus:ring-4 focus:ring-amber-100 dark:focus:ring-amber-900/30 transition-all"
                placeholder="••••••••"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-l from-amber-600 to-rose-600 text-white font-bold rounded-xl shadow-lg"
            >
              {isSignup ? "إنشاء حساب" : "تسجيل الدخول"}
            </motion.button>
          </form>

          <button
            onClick={() => setIsSignup(!isSignup)}
            className="w-full mt-4 text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 transition-colors"
          >
            {isSignup ? "عندك حساب؟ سجل دخول" : "ماعندكش حساب؟ سجل"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
