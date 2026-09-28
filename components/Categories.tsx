const categories = [
  {
    name: "Design",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
        <circle cx="12" cy="12" r="3"/>
        <path d="M3.5 18.49l6-6.01 4 4L17 8.5l4.5 11.01H3.5z" opacity="0"/>
        <path d="M7.86 10.07l3.14 3.97 2.98-3.6L18 18H6z" opacity="0"/>
      </svg>
    ),
    iconAlt: "✏",
  },
  { name: "Development", iconAlt: "⟨/⟩" },
  { name: "IT & Software", iconAlt: "💻" },
  { name: "Business", iconAlt: "🏢" },
  { name: "Marketing", iconAlt: "📣" },
  { name: "Photography", iconAlt: "📷" },
];

export default function Categories() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="flex flex-col items-center gap-4 p-5 rounded-2xl border border-gray-200 hover:border-[#CCFF00] hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-[#CCFF00] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                <span className="text-xl">{cat.iconAlt}</span>
              </div>
              <span className="text-sm font-medium text-gray-800">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
