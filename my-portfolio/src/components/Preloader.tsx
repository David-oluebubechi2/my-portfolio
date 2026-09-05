import { motion } from "framer-motion";
import { LogoMark } from "./icons";

export default function Preloader() {
  return (
    <div className="preloader" aria-hidden="true">
      <div className="track" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <LogoMark className="text-4xl" />
        <p className="eyebrow mt-4">loading portfolio…</p>
      </motion.div>
    </div>
  );
}