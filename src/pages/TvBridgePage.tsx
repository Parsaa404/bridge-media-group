import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

const TvBridgePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 font-sans text-white">
            <Navbar />
            <main className="pt-20">
                <Section
                    id="tv-hero"
                    title="IRAN BRIDGE TV"
                    subtitle="Broadcasting Excellence"
                    description="Connecting communities through high-quality television programming. Iran Bridge TV delivers news, entertainment, and cultural content that resonates with audiences globally."
                    features={[
                        "24/7 Satellite Broadcasting",
                        "High-Definition Streaming",
                        "Original Cultural Programming",
                        "Global News Coverage"
                    ]}
                    imageSrc="https://picsum.photos/800/600?random=1"
                    colorTheme="blue"
                />
                <section className="container mx-auto px-6 py-20">
                    <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Latest Programs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <button
                                key={item}
                                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 text-left w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label={`View details for Program Title ${item}`}
                            >
                                <div className="h-48 bg-slate-800 relative">
                                    <img src={`https://picsum.photos/400/300?random=${item + 10}`} alt={`Program Title ${item} thumbnail`} className="w-full h-full object-cover" />                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">Program Title {item}</h3>
                                    <p className="text-gray-400 text-sm">A brief description of the program content goes here.</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default TvBridgePage;
