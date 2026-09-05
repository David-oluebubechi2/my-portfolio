import { type ReactNode } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-bg font-sans text-ink selection:bg-primary selection:text-white">
      <ScrollToTop />
      <Navbar />

      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative"
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}