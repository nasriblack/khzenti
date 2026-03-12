import { type ReactNode } from "react";

type Props = {
  darkMode: boolean;
  children: ReactNode;
};

export default function LandingWrapper({ darkMode, children }: Props) {
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
      {children}
    </div>
  );
}
