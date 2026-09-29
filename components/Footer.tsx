"use client";
import { useState } from "react";
import Link from "next/link";

const col1 = ["Featured Courses", "Featured Categories", "Business", "IT", "Design"];
const col2 = ["Development", "Marketing", "Photography", "Finance", "Sport"];
const col3 = ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-white pt-16 pb-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 mb-10">
          {/* Brand + newsletter */}
          <div className="lg:w-80">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M8 6C8 6 14 8 16 14C18 8 24 6 24 6C24 6 20 12 22 20C18 18 16 22 16 22C16 22 14 18 10 20C12 12 8 6 8 6Z" fill="#CCFF00"/>
                </svg>
              </div>
              <span className="font-bold text-xl text-gray-900">ByteSpace</span>
            </Link>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 border border-gray-200 rounded-full px-4 py-3 text-sm outline-none focus:border-[#1B3DE8] transition-colors"
              />
              <button className="bg-[#CCFF00] text-black font-bold px-5 py-3 rounded-full text-sm hover:brightness-90 transition-all whitespace-nowrap">
                Search
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              {col1.map((link) => (
                <Link key={link} href="#" className="block text-sm text-gray-700 hover:text-[#1B3DE8] transition-colors">
                  {link}
                </Link>
              ))}
            </div>
            <div className="space-y-3">
              {col2.map((link) => (
                <Link key={link} href="#" className="block text-sm text-gray-700 hover:text-[#1B3DE8] transition-colors">
                  {link}
                </Link>
              ))}
            </div>
            <div className="space-y-3">
              {col3.map((link) => (
                <Link key={link} href="#" className="block text-sm text-gray-700 hover:text-[#1B3DE8] transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">Terms of Service</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
