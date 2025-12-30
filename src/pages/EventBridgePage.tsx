import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

const EventBridgePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 font-sans text-white">
            <Navbar />
            <main className="pt-20">
                <Section
                    id="event-hero"
                    title="BRIDGE EVENT"
                    subtitle="Live Entertainment"
                    description="From massive concert halls to exclusive corporate galas, Bridge Event orchestrates experiences that captivate. We handle logistics, talent management, and production design."
                    features={[
                        "Concert Promotion & Production",
                        "Corporate Conferences",
                        "Festival Management",
                        "VIP Experience Packages"
                    ]}
                    imageSrc="https://picsum.photos/800/600?random=2"
                    colorTheme="purple"
                />
                <section className="container mx-auto px-6 py-20">
                    <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Upcoming Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[{ id: 1, title: 'Grand Concert 1', date: 'MARCH 2026' }, { id: 2, title: 'Grand Concert 2', date: 'APRIL 2026' }].map((event) => (
                            <div key={event.id} className="flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors">
                                <div className="md:w-1/3 h-48 md:h-auto relative">
                                    <img src={`https://picsum.photos/400/300?random=${event.id + 20}`} alt={`Thumbnail for ${event.title}`} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6 md:w-2/3 flex flex-col justify-center">
                                    <span className="text-purple-400 font-bold text-sm mb-2">{event.date}</span>
                                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4">Location details and ticket information.</p>
                                    <button className="self-start px-6 py-2 bg-white/10 rounded-full hover:bg-purple-600 transition-colors text-sm font-bold">Get Tickets</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default EventBridgePage;
