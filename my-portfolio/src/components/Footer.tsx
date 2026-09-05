import { Link } from "react-router-dom";
import { LogoMark } from "./icons";

const menu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/work" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="pb-14 pt-20">
      <div className="container mx-auto max-w-[1170px] px-5 text-center">
        <Link to="/" aria-label="David Oluebubechi — Home">
          <LogoMark className="text-2xl" />
        </Link>

        <ul className="mt-8 mb-9 flex flex-wrap items-center justify-center gap-6">
          {menu.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="text-xs font-semibold uppercase tracking-[0.1px] text-[#676767] transition-colors hover:text-paper"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-sm font-medium text-[#727272]">
          © 2026 All rights reserved by{" "}
          <span className="text-primary">David Oluebubechi</span>
        </p>
      </div>
    </footer>
  );
}