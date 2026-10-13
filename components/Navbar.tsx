"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "소개", href: "#about" },
  { label: "활동", href: "#activities" },
  { label: "경력", href: "#awards" },
  { label: "연락처", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf9f5]/95 backdrop-blur-sm shadow-sm border-b border-[#e5e3dc]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="text-[#1a1a1a] font-semibold text-lg tracking-tight hover:text-[#2d5a3d] transition-colors"
        >
          임재정
        </a>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#4b5563] hover:text-[#2d5a3d] transition-colors font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴"
        >
          <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* 모바일 드롭다운 */}
      {menuOpen && (
        <div className="md:hidden bg-[#faf9f5] border-b border-[#e5e3dc] px-6 pb-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-[#4b5563] hover:text-[#2d5a3d] font-medium py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
