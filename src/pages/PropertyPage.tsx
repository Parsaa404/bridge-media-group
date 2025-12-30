import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

const PropertyPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 font-sans text-white">
            <Navbar />
            <main className="pt-20">
                <Section
                    id="property-hero"
                    title="BRIDGE PROPERTY"
                    subtitle="Real Estate Assets"
                    description="Bridge Property manages a prestigious portfolio of commercial and entertainment venues. We specialize in acquiring and developing spaces that serve the media and arts sectors."
                    features={[
                        "Commercial Asset Management",
                        "Studio Space Leasing",
                        "Venue Development",
                        "International Real Estate Investment"
                    ]}
                    imageSrc="/assets/images/property-hero.jpg" colorTheme="gold"
                />
                <section className="container mx-auto px-6 py-20">
                    <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Featured Properties</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer">
                                <img src={`https://picsum.photos/400/500?random=${item + 30}`} alt={`Luxury Studio ${item} - Downtown property with modern amenities`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                                    <h3 className="text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Luxury Studio {item}</h3>
                                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mt-2">1200 sq.ft • Downtown</p>
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

export default PropertyPage;
