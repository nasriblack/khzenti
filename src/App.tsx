import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import WardrobePage from "./pages/WardrobePage";
import GenerateOutfitPage from "./pages/GenerateOutfitPage";
import CalendarPage from "./pages/CalendarPage";
import ProfilePage from "./pages/ProfilePage";
import BottomNav from "./components/BottomNav";
import AddClothesWizard from "./components/AddClothesWizard";

type Page = "home" | "wardrobe" | "generate" | "calendar" | "profile";

export default function KhzantiApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("accessToken"),
  );
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [showAddWizard, setShowAddWizard] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage("home");
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <LoginPage
        onLogin={handleLogin}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    );
  }

  const pages: Record<Page, React.JSX.Element> = {
    home: <HomePage onAddClothes={() => setShowAddWizard(true)} />,
    wardrobe: <WardrobePage onAddClothes={() => setShowAddWizard(true)} />,
    generate: <GenerateOutfitPage />,
    calendar: <CalendarPage />,
    profile: (
      <ProfilePage
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        onLogout={handleLogout}
      />
    ),
  };

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors"
      dir="rtl"
    >
      <main className="pb-20">{pages[currentPage]}</main>
      <BottomNav currentPage={currentPage} onNavigate={setCurrentPage} />
      <AddClothesWizard
        show={showAddWizard}
        onClose={() => setShowAddWizard(false)}
      />
    </div>
  );
}
