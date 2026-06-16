import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, AlertCircle } from "lucide-react";
import { useLogin, useRegistre } from "../hooks/api_hooks/useUser";

interface LoginPageProps {
  onLogin: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// ─── helper: parse server error array into a field → messages map ────────────
// Server sends: ["email is Invalid email address", "password is Password must..."]
function parseServerErrors(errors: string[]): Record<string, string[]> {
  const map: Record<string, string[]> = {};
  for (const err of errors) {
    const spaceIdx = err.indexOf(" is ");
    if (spaceIdx !== -1) {
      const field = err.slice(0, spaceIdx); // "email" | "password"
      const message = err.slice(spaceIdx + 4); // "Invalid email address"
      if (!map[field]) map[field] = [];
      map[field].push(message);
    } else {
      // fallback: bucket unknown errors under "general"
      if (!map["general"]) map["general"] = [];
      map["general"].push(err);
    }
  }
  return map;
}

// ─── small reusable field-error list ─────────────────────────────────────────
function FieldErrors({ messages }: { messages?: string[] }) {
  if (!messages?.length) return null;
  return (
    <AnimatePresence>
      <motion.ul
        key="field-errors"
        initial={{ opacity: 0, y: -6, height: 0 }}
        animate={{ opacity: 1, y: 0, height: "auto" }}
        exit={{ opacity: 0, y: -6, height: 0 }}
        transition={{ duration: 0.2 }}
        className="mt-1.5 space-y-0.5"
      >
        {messages.map((msg, i) => (
          <li
            key={i}
            className="flex items-start gap-1.5 text-xs text-red-600 dark:text-red-400"
          >
            <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
            <span>{msg}</span>
          </li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
}

export default function LoginPage({
  onLogin,
  darkMode,
  toggleDarkMode,
}: LoginPageProps) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // fieldErrors holds the parsed server validation map
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  // generalError is for login failures (wrong credentials, network, etc.)
  const [generalError, setGeneralError] = useState<string | null>(null);

  const { mutateAsync } = useLogin(onLogin);
  const { mutateAsync: registerMutation } = useRegistre(onLogin);

  const clearErrors = () => {
    setFieldErrors({});
    setGeneralError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearErrors();

    if (!isSignup) {
      // ── LOGIN ──────────────────────────────────────────────────────────────
      try {
        await mutateAsync({ payload: { email, password } });
      } catch (err: any) {
        setGeneralError("البريد الإلكتروني أو كلمة السر غير صحيحة");
      }
    } else {
      // ── REGISTER ──────────────────────────────────────────────────────────
      try {
        await registerMutation({ payload: { email, password } });
      } catch (err: any) {
        const serverData = err?.response?.data ?? err;

        if (
          serverData?.success === false &&
          Array.isArray(serverData?.error) &&
          serverData.error.length > 0
        ) {
          setFieldErrors(parseServerErrors(serverData.error));
        } else {
          // Unexpected error (network, 500, etc.)
          setGeneralError("حدث خطأ غير متوقع، يرجى المحاولة مجدداً");
        }
      }
    }
  };

  const handleTabSwitch = () => {
    setIsSignup((prev) => !prev);
    clearErrors(); // ← prevents stale errors from one mode leaking into the other
    setEmail("");
    setPassword("");
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
            {/* ── EMAIL ── */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  clearErrors();
                }}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all
                  focus:ring-4 focus:ring-amber-100 dark:focus:ring-amber-900/30
                  ${
                    fieldErrors.email?.length
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-200 dark:border-gray-600 focus:border-amber-500"
                  }`}
                placeholder="email@example.com"
                required
              />
              {/* inline field errors for email */}
              <FieldErrors messages={fieldErrors.email} />
            </div>

            {/* ── PASSWORD ── */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                كلمة السر
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  clearErrors();
                }}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all
                  focus:ring-4 focus:ring-amber-100 dark:focus:ring-amber-900/30
                  ${
                    fieldErrors.password?.length
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-200 dark:border-gray-600 focus:border-amber-500"
                  }`}
                placeholder="••••••••"
                required
              />
              {/* inline field errors for password */}
              <FieldErrors messages={fieldErrors.password} />
            </div>

            {/* ── GENERAL ERROR (login failure / unexpected register error) ── */}
            <AnimatePresence>
              {generalError && (
                <motion.div
                  key="general-error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300"
                >
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{generalError}</span>
                </motion.div>
              )}
            </AnimatePresence>

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
            onClick={handleTabSwitch}
            className="w-full mt-4 text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 transition-colors"
          >
            {isSignup ? "عندك حساب؟ سجل دخول" : "ماعندكش حساب؟ سجل"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
