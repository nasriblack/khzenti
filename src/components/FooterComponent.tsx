type Props = {
  darkMode: boolean;
};

export const FooterComponent = ({ darkMode }: Props) => {
  return (
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
  );
};
