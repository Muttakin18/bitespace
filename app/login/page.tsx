"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-[#1B3DE8] grid-bg flex">
      {/* Left side */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 relative overflow-hidden">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M8 6C8 6 14 8 16 14C18 8 24 6 24 6C24 6 20 12 22 20C18 18 16 22 16 22C16 22 14 18 10 20C12 12 8 6 8 6Z" fill="#CCFF00"/>
          </svg>
        </Link>

        {/* Text */}
        <div className="relative z-10">
          <h2 className="text-white font-extrabold text-2xl mb-3">Sign in with ease</h2>
          <p className="text-white/70 max-w-xs leading-relaxed">
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>
        </div>

        {/* Course cards mockup */}
        <div className="relative h-80">
          {/* Back card */}
          <div className="absolute left-4 bottom-0 bg-white rounded-2xl shadow-xl w-52 p-4">
            <div className="w-full h-24 bg-gray-200 rounded-xl mb-3 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=300&q=80" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">17 Lessons</span>
            </div>
            <p className="font-bold text-sm">Build Digi...</p>
            <p className="text-xs text-[#1B3DE8]">by purepearl studio</p>
            <p className="text-xs text-gray-400 mt-1">Beginner</p>
            <p className="text-[#1B3DE8] font-bold text-sm mt-1">$25<span className="text-xs font-normal text-gray-400">/life...</span></p>
          </div>

          {/* Front card */}
          <div className="absolute left-24 bottom-8 bg-white rounded-2xl shadow-2xl w-60 p-4 z-10">
            <div className="w-full h-28 bg-gray-200 rounded-xl mb-3 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-1 flex-wrap mb-2">
              {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((t) => (
                <span key={t} className="text-[9px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full">{t}</span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <p className="font-bold text-sm">the Power of Big Data</p>
              <span className="text-yellow-400 text-xs">4.5 ⭐</span>
            </div>
            <p className="text-xs text-[#1B3DE8]">by purepearl studio</p>
            <p className="text-xs text-gray-400 mt-1">Beginner</p>
            <p className="text-[#1B3DE8] font-bold text-sm mt-1">$25<span className="text-xs font-normal text-gray-400">/lifetime</span></p>
          </div>

          {/* Happy students badge */}
          <div className="absolute right-0 bottom-0 bg-[#CCFF00] rounded-2xl p-3 z-20">
            <p className="font-bold text-sm text-black">Happy Students</p>
            <p className="text-xs text-black/70">4.5 (240) ⭐</p>
            <div className="flex items-center gap-1 mt-1">
              {[1,2,3,4,5].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/24?img=${i+30}`} alt="" className="w-6 h-6 rounded-full border-2 border-white -ml-1 first:ml-0" />
              ))}
              <span className="bg-black text-white text-xs font-bold px-1.5 py-0.5 rounded-full ml-1">2K+</span>
            </div>
          </div>

          {/* Lime ring decoration */}
          <div className="absolute left-16 top-4 w-12 h-12 border-[5px] border-[#CCFF00] rounded-full z-20" />
          {/* Triangle decoration */}
          <div className="absolute left-0 top-12 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-[#CCFF00]" />
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
          <p className="text-[#1B3DE8] font-semibold text-sm mb-1">Sign In</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Welcome Back</h1>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="designer@example.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1B3DE8] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1B3DE8] transition-colors"
              />
            </div>

            <div className="flex justify-end">
              <button className="bg-[#CCFF00] text-black font-bold px-8 py-3 rounded-full hover:brightness-90 transition-all text-sm">
                Sign In
              </button>
            </div>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-sm text-gray-400">or</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </button>
          </div>

          <p className="text-center text-sm text-gray-500">
            New user?{" "}
            <Link href="/register" className="text-[#1B3DE8] font-semibold hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
