import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { LogoMark } from "./icons";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/work" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-base transition-colors hover:text-paper ${
      isActive ? "text-paper" : "text-[#676767]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-[1170px] items-center justify-between px-5">
        <Link to="/" className="z-[16]" aria-label="David Oluebubechi — Home">
          <LogoMark />
        </Link>

        <nav className="hidden items-center lg:flex">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} className={linkClass}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/contact" className="theme-btn hidden lg:inline-block">
          Let&apos;s talk
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className={`flex h-[18px] w-[25px] flex-col justify-between lg:hidden ${
            open ? "z-[16]" : ""
          }`}
        >
          <span
            className={`block h-px w-full bg-paper transition-transform duration-300 ${
              open ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-full bg-paper transition-all duration-300 ${
              open ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-full bg-paper transition-transform duration-300 ${
              open ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, scaleY: 0.4, y: -30 }}
          animate={{ opacity: 1, scaleY: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute inset-x-0 top-20 origin-top bg-bg lg:hidden"
        >
          <div className="flex flex-col items-center gap-6 px-6 pb-10 pt-6">
            <ul className="flex w-full flex-col items-center gap-6">
              {links.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={linkClass}
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="theme-btn mt-2"
              onClick={() => setOpen(false)}
            >
              Let&apos;s talk
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
}