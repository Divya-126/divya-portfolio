import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/layout/Navbar";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import JourneySection from "./sections/JourneySection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import Footer from "./sections/Footer/Footer";

import ProjectsPage from "./pages/ProjectsPage";

import Loader from "./components/ui/Loader/Loader";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <JourneySection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

function App() {
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/projects"
            element={<ProjectsPage key={location.key} />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
