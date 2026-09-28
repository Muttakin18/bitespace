"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M8 6C8 6 14 8 16 14C18 8 24 6 24 6C24 6 20 12 22 20C18 18 16 22 16 22C16 22 14 18 10 20C12 12 8 6 8 6Z" fill="#CCFF00"/>
          </svg>
        </div>
        <span className="text-white font-bold text-xl">ByteSpace</span>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-white font-medium hover:text-[#CCFF00] transition-colors">Home</Link>
        <Link href="#courses" className="text-white/80 hover:text-white transition-colors">Courses</Link>
        <Link href="#creators" className="text-white/80 hover:text-white transition-colors">Creators</Link>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <Link href="/login" className="text-white hover:text-[#CCFF00] transition-colors font-medium">Sign In</Link>
        <Link href="/register" className="text-white hover:text-[#CCFF00] transition-colors font-medium">Join Us</Link>
        <button className="text-white hover:text-[#CCFF00] transition-colors">
          <ShoppingCart size={20} />
        </button>
      </div>
    </nav>
  );
}
