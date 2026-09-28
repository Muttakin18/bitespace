import { Search } from "lucide-react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative bg-[#1B3DE8] min-h-[90vh] overflow-hidden grid-bg flex flex-col">
      <Navbar />

      {/* Decorative shapes */}
      <div className="absolute top-16 left-8 w-20 h-12 bg-[#CCFF00] rounded-full opacity-90 rotate-12" />
      <div className="absolute top-32 left-20 w-12 h-8 bg-white/80 rounded-full" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}} />
      <div className="absolute top-20 right-16 w-16 h-20 bg-[#CCFF00] opacity-90" style={{clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'}} />
      <div className="absolute top-40 right-8 w-24 h-16 bg-white/70 rounded-full" />
      <div className="absolute bottom-40 left-4 w-20 h-20 border-[6px] border-white rounded-full" />
      <div className="absolute bottom-20 left-16 w-14 h-10 bg-[#CCFF00]" style={{clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'}} />
      <div className="absolute top-24 left-1/4 w-10 h-10 bg-white/50 rounded-md rotate-45" />
      <div className="absolute bottom-32 right-12 w-16 h-10 bg-white/60 rounded-full" />
      <div className="absolute top-1/3 right-4 w-8 h-20 bg-[#CCFF00]/70 rounded-full" />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pt-20 pb-0 relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center max-w-4xl leading-tight mb-6">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="text-white/80 text-lg text-center max-w-xl mb-10">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search bar */}
        <div className="flex items-center bg-white rounded-full px-5 py-3 w-full max-w-lg shadow-lg gap-3 mb-16">
          <Search size={20} className="text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Course, topic, creator"
            className="flex-1 outline-none text-gray-700 text-base bg-transparent"
          />
          <button className="bg-[#CCFF00] text-black font-semibold px-6 py-2 rounded-full hover:brightness-90 transition-all whitespace-nowrap">
            Search
          </button>
        </div>

        {/* Hero image + floating cards */}
        <div className="relative w-full max-w-2xl mx-auto flex justify-center">
          {/* Green circle background */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#CCFF00] rounded-full" />

          {/* Student image */}
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
            alt="Student learning"
            className="relative z-10 h-72 object-cover object-top"
            style={{ borderRadius: '0 0 0 0' }}
          />

          {/* Floating card - UI/UX Design */}
          <div className="absolute left-0 top-16 bg-white rounded-2xl shadow-xl px-4 py-3 z-20 min-w-[180px]">
            <p className="font-bold text-sm text-gray-900">UI/UX Design</p>
            <p className="text-xs text-gray-500 mt-0.5">200 Courses &nbsp;•&nbsp; 1000+ Students</p>
          </div>

          {/* Floating card - Learning Progress */}
          <div className="absolute right-0 top-10 bg-white rounded-2xl shadow-xl px-4 py-3 z-20 min-w-[160px]">
            <p className="text-xs text-gray-500 mb-1">Learning Progress</p>
            <p className="text-3xl font-extrabold text-gray-900">55%</p>
            <div className="h-1.5 bg-gray-200 rounded-full mt-2 w-full">
              <div className="h-1.5 bg-[#CCFF00] rounded-full" style={{ width: '55%' }} />
            </div>
          </div>

          {/* Floating card - Happy Students */}
          <div className="absolute left-4 bottom-4 bg-white rounded-2xl shadow-xl px-4 py-3 z-20">
            <p className="font-bold text-sm text-gray-900 mb-1">Happy Students</p>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-xs">⭐</span>
              <span className="text-xs font-semibold">4.5</span>
              <span className="text-xs text-gray-400">(240)</span>
            </div>
            <div className="flex items-center mt-2 gap-1">
              {[
                'https://i.pravatar.cc/32?img=1',
                'https://i.pravatar.cc/32?img=2',
                'https://i.pravatar.cc/32?img=3',
                'https://i.pravatar.cc/32?img=4',
                'https://i.pravatar.cc/32?img=5',
              ].map((src, i) => (
                <img key={i} src={src} alt="" className="w-7 h-7 rounded-full border-2 border-white -ml-1 first:ml-0" />
              ))}
              <span className="bg-[#0D0D0D] text-white text-xs font-bold px-2 py-0.5 rounded-full ml-1">2K+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
