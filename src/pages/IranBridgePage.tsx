import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

const IranBridgePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 font-sans text-white">
            <Navbar />
            <main className="pt-20">
                <Section
                    id="iran-hero"
                    title="IRAN BRIDGE"
                    subtitle="Connecting Cultures"
                    description="The heart of our operations, connecting local heritage with global opportunities. Fostering dialogue and understanding through cultural exchange and media initiatives." features={[
                        "Cultural Exchange Programs",
                        "Business Networking",
                        "Media Production Hub",
                        "Community Support Initiatives"
                    ]}
                    imageSrc="https://picsum.photos/800/600?random=4"
                    colorTheme="blue"
                />
                <section className="container mx-auto px-6 py-20">
                    <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                        <h2 className="text-3xl font-bold mb-6">Join Our Global Network</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-8">We are building bridges between communities. Connect with us to learn more about our initiatives and how you can participate.</p>
                        <button onClick={() => alert('Contact form implementation pending')} className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30">Contact Us Today</button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default IranBridgePage;
