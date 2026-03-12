import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import WardrobePage from "./pages/WardrobePage";
import GenerateOutfitPage from "./pages/GenerateOutfitPage";
import CalendarPage from "./pages/CalendarPage";
import ProfilePage from "./pages/ProfilePage";
import BottomNav from "./components/BottomNav";
import AddClothesWizard from "./components/AddClothesWizard";

type Page = "login" | "home" | "wardrobe" | "generate" | "calendar" | "profile";

export default function KhzantiApp() {
  const [currentPage, setCurrentPage] = useState<Page>("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAddWizard, setShowAddWizard] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  if (!isLoggedIn) {
    return (
      <LoginPage
        onLogin={() => {
          setIsLoggedIn(true);
          setCurrentPage("home");
        }}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    );
  }

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors"
      dir="rtl"
    >
      <main className="pb-20">
        {currentPage === "home" && (
          <HomePage onAddClothes={() => setShowAddWizard(true)} />
        )}
        {currentPage === "wardrobe" && (
          <WardrobePage onAddClothes={() => setShowAddWizard(true)} />
        )}
        {currentPage === "generate" && <GenerateOutfitPage />}
        {currentPage === "calendar" && <CalendarPage />}
        {currentPage === "profile" && (
          <ProfilePage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        )}
      </main>

      <BottomNav currentPage={currentPage} onNavigate={setCurrentPage} />
      <AddClothesWizard
        show={showAddWizard}
        onClose={() => setShowAddWizard(false)}
      />
    </div>
  );
}
