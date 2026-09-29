export default function CTABanner() {
  return (
    <section className="relative bg-[#1B3DE8] py-20 px-4 overflow-hidden grid-bg">
      {/* Decorative shapes */}
      <div className="absolute top-6 left-8 w-16 h-10 bg-[#CCFF00] rounded-full" />
      <div className="absolute top-12 left-4 w-10 h-14 bg-white/70" style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }} />
      <div className="absolute top-4 left-1/4 w-12 h-16 bg-white/60 rounded-full" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      <div className="absolute top-4 right-8 w-14 h-14 bg-[#CCFF00]" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
      <div className="absolute top-4 right-1/4 w-10 h-12 bg-white/60 rounded-full" />
      <div className="absolute bottom-6 left-1/3 w-12 h-10 bg-[#CCFF00] rounded-full" />
      <div className="absolute bottom-4 right-1/3 w-14 h-12 bg-white/50 rounded-full" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      <div className="absolute bottom-8 left-8 w-16 h-10 bg-[#CCFF00]/80 rounded-full" />
      <div className="absolute bottom-4 right-8 w-10 h-12 bg-white/70 rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <button className="bg-[#CCFF00] text-black font-bold px-10 py-4 rounded-full text-base hover:brightness-90 transition-all">
          Join as Creator
        </button>
      </div>
    </section>
  );
}
