import React, { useEffect, useRef } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageSrc: string;
  reversed?: boolean;
  colorTheme: 'blue' | 'purple' | 'gold';
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  description,
  features,
  imageSrc,
  reversed = false,
  colorTheme
}) => {
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
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const themeColors = {
    blue: { main: "from-blue-600 to-cyan-400", glow: "shadow-blue-500/20", icon: "text-blue-400" },
    purple: { main: "from-purple-600 to-pink-500", glow: "shadow-purple-500/20", icon: "text-purple-400" },
    gold: { main: "from-amber-400 to-orange-500", glow: "shadow-amber-500/20", icon: "text-amber-400" }
  };

  const theme = themeColors[colorTheme];

  return (
    <section id={id} ref={sectionRef} className="py-32 bg-slate-900 overflow-hidden relative group border-t border-white/5">
      {/* Abstract Background Element */}
      <div className={`absolute -inset-10 opacity-20 blur-3xl rounded-full w-[600px] h-[600px] pointer-events-none transition-all duration-1000 bg-gradient-to-r ${theme.main} ${reversed ? 'right-0 top-0 translate-x-1/2' : 'left-0 bottom-0 -translate-x-1/2'}`}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col md:flex-row items-center gap-20 ${reversed ? 'md:flex-row-reverse' : ''}`}>

          {/* Image Side */}
          <div className="w-full md:w-1/2 reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <div className={`relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-700`}>
              <div className={`absolute inset-0 bg-gradient-to-tr ${theme.main} opacity-10 mix-blend-overlay z-10`}></div>
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-[400px] md:h-[600px] object-cover hover:scale-110 transition-transform duration-[2s]"
              />

              {/* Floating Badge */}
              <div className={`absolute bottom-8 ${reversed ? 'right-8' : 'left-8'} z-20 bg-slate-950/60 backdrop-blur-xl px-8 py-4 rounded-2xl border border-white/10 shadow-xl`}>
                <span className="text-white font-bold tracking-widest uppercase text-sm">{subtitle}</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200">
            <div className={`flex items-center gap-3 mb-6 ${reversed ? 'md:justify-end' : ''}`}>
              <span className={`h-1 w-16 rounded-full bg-gradient-to-r ${theme.main}`}></span>
              <span className={`uppercase tracking-[0.2em] text-sm font-bold bg-gradient-to-r ${theme.main} bg-clip-text text-transparent`}>{subtitle}</span>
            </div>

            <h2 className={`text-5xl md:text-7xl font-black text-white mb-8 leading-none tracking-tight ${reversed ? 'md:text-right' : ''}`}>
              {title}
            </h2>

            <p className={`text-gray-400 text-lg md:text-xl leading-relaxed mb-12 font-light ${reversed ? 'md:text-right' : ''}`}>
              {description}
            </p>

            <ul className={`space-y-6 ${reversed ? 'items-end flex flex-col' : ''}`}>
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4 text-gray-300 group/item">
                  {!reversed && (
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover/item:bg-gradient-to-r ${theme.main} transition-all duration-300`}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                  )}
                  <span className="font-medium text-lg tracking-wide group-hover/item:text-white transition-colors">{feature}</span>
                  {reversed && (
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover/item:bg-gradient-to-r ${theme.main} transition-all duration-300`}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className={`mt-14 ${reversed ? 'flex justify-end' : ''}`}>
              <a
                href={(() => {
                  const safeId = encodeURIComponent(id.toLowerCase());
                  // In production, use a configurable base domain. For now, localhost relative protocol.
                  // Fallback to # if id is empty to prevent issues
                  if (!safeId) return '#';
                  return `http://${safeId}.localhost:3000`;
                })()}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative px-10 py-4 rounded-xl font-bold text-white transition-all overflow-hidden group/btn inline-flex items-center gap-2`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${theme.main} opacity-90 transition-all group-hover/btn:opacity-100`}></div>
                <div className={`absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300`}></div>
                <span className="relative flex items-center gap-2">
                  Explore {title.split(' ')[0] || 'More'}
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section;