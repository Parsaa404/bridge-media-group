import React from 'react';
import { PlayCircle, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center opacity-40 scale-105 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/80 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/80 to-slate-950"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-block px-4 py-2 mb-8 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-md animate-fade-in-up shadow-[0_0_20px_rgba(59,130,246,0.3)]">
          <span className="text-blue-300 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">Global Media Leader</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Connecting Cultures <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 animate-gradient-x">
            Through Media
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Bridge Media and Entertainment Group is the powerhouse behind <span className="text-white font-semibold">Iran Bridge TV</span>, <span className="text-white font-semibold">Bridge Events</span>, and <span className="text-white font-semibold">Bridge Property</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a href="#tv" className="group relative px-8 py-4 bg-white text-slate-950 rounded-full font-bold transition-all hover:bg-blue-50 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center gap-3 overflow-hidden">
            <span className="relative z-10">Watch Showreel</span>
            <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform relative z-10" />
          </a>
          <a href="#contact" className="group px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-3 backdrop-blur-md hover:scale-105">
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow opacity-50">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;