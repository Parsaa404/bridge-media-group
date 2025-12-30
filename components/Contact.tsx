import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting Bridge Media. We will respond shortly.');
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl font-black text-white mb-6">Start a Conversation</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Whether you want to broadcast on Iran Bridge, plan an event, or discuss property opportunities, we are here to bridge the gap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Card */}
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/50 backdrop-blur-xl p-10 rounded-3xl border border-white/5 flex flex-col justify-between reveal delay-100 hover:border-blue-500/20 transition-colors duration-500">
            <div>
              <h3 className="text-2xl font-bold text-white mb-10">Contact Information</h3>
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 text-lg">Headquarters</h4>
                    <p className="text-gray-400 leading-relaxed">123 Media District Blvd<br/>Los Angeles, CA 90028<br/>USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 text-lg">Phone</h4>
                    <p className="text-gray-400 leading-relaxed">+1 (555) 123-4567<br/>Mon-Fri, 9am - 6pm PST</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-400 shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 text-lg">Email</h4>
                    <p className="text-gray-400 leading-relaxed">info@bridgemedia.com<br/>events@bridgemedia.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-white/5 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
               <p className="text-base text-gray-300 italic font-medium relative z-10">"Building bridges between cultures through the power of media."</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white text-slate-900 rounded-3xl p-10 shadow-2xl reveal delay-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
            
            <h3 className="text-3xl font-black mb-8 text-slate-900 relative z-10">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Department</label>
                <div className="relative">
                  <select className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium appearance-none">
                    <option>General Inquiry</option>
                    <option>Iran Bridge TV</option>
                    <option>Bridge Event</option>
                    <option>Bridge Property</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none font-medium"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl hover:-translate-y-1 group"
              >
                Send Message
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;