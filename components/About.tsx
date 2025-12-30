import React, { useEffect, useRef } from 'react';
import { Layers, Users, Globe2 } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: string }> = ({ icon, title, description, delay }) => (
  <div className={`reveal p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)]`} style={{ transitionDelay: delay }}>
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:text-white group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-500">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm md:text-base">{description}</p>
  </div>
);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-20">
          
          <div className="w-full md:w-1/2 reveal">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-12 h-[2px] bg-blue-500"></span>
              <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm">Our Philosophy</h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              The Architect of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Modern Media</span>
            </h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed border-l-4 border-blue-500/20 pl-6">
              Bridge Media and Entertainment Group serves as the umbrella organization for a diverse portfolio of brands. We are not just a media company; we are a cultural bridge connecting audiences through broadcast, live experiences, and premium real estate.
            </p>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed pl-6">
              From the broadcast centers of Iran Bridge TV to the grand stages of Bridge Events and the luxury portfolio of Bridge Property, we deliver excellence in every vertical we touch.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pl-6">
              {['Global Reach', 'Premium Content', 'Live Experiences', 'Luxury Assets'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-1 gap-6">
            <FeatureCard 
              icon={<Globe2 size={28} />}
              title="Media Network"
              description="Connecting millions of viewers worldwide through high-quality television and digital content."
              delay="0ms"
            />
            <FeatureCard 
              icon={<Users size={28} />}
              title="Event Management"
              description="Curating unforgettable concerts, festivals, and corporate gatherings that leave a lasting impact."
              delay="150ms"
            />
            <FeatureCard 
              icon={<Layers size={28} />}
              title="Strategic Assets"
              description="Managing a portfolio of premium properties that support our entertainment ecosystem."
              delay="300ms"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;