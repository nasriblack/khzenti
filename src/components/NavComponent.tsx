import { Moon, Sun } from "lucide-react";

type Props = {
  motion: any;
  setDarkMode: (arg: boolean) => void;
  darkMode: boolean;
};

export default function NavComponent({ motion, setDarkMode, darkMode }: Props) {
  return (
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
  );
}
