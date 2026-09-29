"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
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
          <h2 className="text-white font-extrabold text-2xl mb-3">Sign up and come in</h2>
          <p className="text-white/70 max-w-xs leading-relaxed">
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
          </p>
        </div>

        {/* Course cards mockup */}
        <div className="relative h-80">
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

          <div className="absolute left-16 top-4 w-12 h-12 border-[5px] border-[#CCFF00] rounded-full z-20" />
          <div className="absolute left-0 top-12 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-[#CCFF00]" />
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
          <p className="text-[#1B3DE8] font-semibold text-sm mb-1">Create an Account</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
            Welcome to<br />ByteSpace
          </h1>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jamie Davis"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1B3DE8] transition-colors"
              />
            </div>
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
                Continue
              </button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="text-[#1B3DE8] font-semibold hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
