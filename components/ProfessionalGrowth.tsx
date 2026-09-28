import { CheckCircle } from "lucide-react";

export default function ProfessionalGrowth() {
  const stats = [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
  ];

  const features = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-lime-50">
      <div className="max-w-6xl mx-auto">
        {/* Top: text left, image right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Text */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="text-gray-500 mb-8 max-w-md leading-relaxed">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            <div className="flex gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-extrabold text-[#1B3DE8]">{s.value}</p>
                  <p className="text-sm text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image + floating cards */}
          <div className="flex-1 relative min-h-[360px] flex justify-center">
            {/* Squiggle */}
            <div className="absolute top-0 right-8 w-12 h-16 text-[#CCFF00] text-5xl font-black select-none">~</div>

            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
              alt="Learning student"
              className="rounded-3xl w-64 h-80 object-cover shadow-xl relative z-10"
            />

            {/* Course card floating */}
            <div className="absolute top-6 right-0 bg-white rounded-2xl shadow-lg p-4 w-48 z-20">
              <div className="text-xs text-gray-400 mb-1">17 Lessons &nbsp; 2 hours 16 mins</div>
              <p className="font-bold text-sm text-gray-900 mb-1">Learn Figma fr...</p>
              <p className="text-xs text-[#1B3DE8]">by purepearl studio</p>
              <div className="text-xs text-gray-400 mt-1">Beginner</div>
              <p className="text-[#1B3DE8] font-bold text-sm mt-1">$25<span className="text-xs font-normal text-gray-400">/lifetime</span></p>
            </div>

            {/* Progress card */}
            <div className="absolute bottom-8 right-0 bg-white rounded-2xl shadow-lg p-4 z-20">
              <p className="text-xs text-gray-400 mb-1">Learning Progress</p>
              <p className="text-3xl font-extrabold text-gray-900">55%</p>
              <div className="h-1.5 bg-gray-200 rounded-full mt-2 w-28">
                <div className="h-1.5 bg-[#CCFF00] rounded-full" style={{ width: '55%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: image left, text right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Text */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
              Create & Manage Courses Easily.
            </h2>
            <p className="text-gray-500 mb-8 max-w-md leading-relaxed">
              <strong>ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle size={20} className="text-[#1B3DE8] fill-[#1B3DE8] text-white flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Image + floating cards */}
          <div className="flex-1 relative min-h-[380px] flex justify-center">
            <div className="absolute top-4 right-8 w-12 h-16 text-[#CCFF00] text-5xl font-black select-none">~</div>

            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80"
              alt="Course creator"
              className="rounded-3xl w-64 h-80 object-cover shadow-xl relative z-10"
            />

            {/* Revenue card */}
            <div className="absolute top-6 left-0 bg-[#1B3DE8] text-white rounded-2xl shadow-lg p-4 w-44 z-20">
              <p className="text-xs opacity-70 mb-1">Total Revenue</p>
              <p className="text-xs opacity-60 mb-1">July 1-28</p>
              <p className="text-2xl font-extrabold">$120.29</p>
              <div className="h-1.5 bg-white/30 rounded-full mt-2 w-full">
                <div className="h-1.5 bg-[#CCFF00] rounded-full" style={{ width: '60%' }} />
              </div>
              <div className="mt-3">
                <p className="text-xs opacity-70">Year to Date 2023</p>
                <p className="text-xl font-extrabold">$1,200.38</p>
                <span className="bg-[#CCFF00] text-black text-xs font-bold px-2 py-0.5 rounded-full">+12$</span>
              </div>
            </div>

            {/* Happy Students card */}
            <div className="absolute bottom-4 left-0 bg-white rounded-2xl shadow-lg p-3 z-20">
              <p className="font-bold text-sm text-gray-900 mb-1">Happy Students</p>
              <div className="flex items-center gap-1 mb-2">
                <span className="text-yellow-400 text-xs">⭐</span>
                <span className="text-xs font-semibold">4.5</span>
                <span className="text-xs text-gray-400">(240)</span>
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/28?img=${i+20}`} alt="" className="w-6 h-6 rounded-full border-2 border-white -ml-1 first:ml-0" />
                ))}
                <span className="bg-[#0D0D0D] text-white text-xs font-bold px-1.5 py-0.5 rounded-full ml-1">2K+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
