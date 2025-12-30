import React, { useState, useEffect } from 'react';
import psl from 'psl';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Section from './components/Section';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Pages
import TvBridgePage from './src/pages/TvBridgePage';
import EventBridgePage from './src/pages/EventBridgePage';
import PropertyPage from './src/pages/PropertyPage';
import IranBridgePage from './src/pages/IranBridgePage';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white">
      <Navbar />

      <main>
        <Hero />

        <About />

        <Section
          id="tv"
          title="IRAN BRIDGE TV"
          subtitle="Broadcasting"
          description="Connecting communities through high-quality television programming. Iran Bridge TV delivers news, entertainment, and cultural content that resonates with audiences globally. We utilize state-of-the-art broadcasting technology to bring clarity and creativity to every screen."
          features={[
            "24/7 Satellite Broadcasting",
            "High-Definition Streaming",
            "Original Cultural Programming",
            "Global News Coverage"
          ]}
          imageSrc="https://picsum.photos/800/600?random=1"
          colorTheme="blue"
        />

        <Section
          id="event"
          title="BRIDGE EVENT"
          subtitle="Live Entertainment"
          description="From massive concert halls to exclusive corporate galas, Bridge Event orchestrates experiences that captivate. We handle logistics, talent management, and production design to create moments that become memories."
          features={[
            "Concert Promotion & Production",
            "Corporate Conferences",
            "Festival Management",
            "VIP Experience Packages"
          ]}
          imageSrc="https://picsum.photos/800/600?random=2"
          reversed={true}
          colorTheme="purple"
        />

        <Section
          id="property"
          title="BRIDGE PROPERTY"
          subtitle="Real Estate Assets"
          description="Bridge Property manages a prestigious portfolio of commercial and entertainment venues. We specialize in acquiring and developing spaces that serve the media and arts sectors, ensuring our physical footprint matches our digital reach."
          features={[
            "Commercial Asset Management",
            "Studio Space Leasing",
            "Venue Development",
            "International Real Estate Investment"
          ]}
          imageSrc="https://picsum.photos/800/600?random=3"
          colorTheme="gold"
        />

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  const [subdomain, setSubdomain] = useState<string>('');

  useEffect(() => {
    const host = window.location.hostname;
    // Handle localhost specially or dev domains
    if (host.includes('localhost')) {
      const parts = host.split('.');
      // e.g. tv.localhost -> parts[0] is subdomain
      if (parts.length > 1 && parts[0] !== 'www') {
        setSubdomain(parts[0]);
        return;
      }
    }

    // Use PSL for production domains
    const parsed = psl.parse(host);

    // Check if parsed is not an error
    if (parsed && !('error' in parsed)) {
      // Explicitly cast to ParsedDomain to satisfy TypeScript if inference fails
      const domainData = parsed as psl.ParsedDomain;
      if (domainData.subdomain) {
        setSubdomain(domainData.subdomain);
      } else {
        setSubdomain('');
      }
    } else {
      setSubdomain('');
    }
  }, []);

  // Simple Router based on subdomain
  if (subdomain === 'tv') return <TvBridgePage />;
  if (subdomain === 'event') return <EventBridgePage />;
  if (subdomain === 'property') return <PropertyPage />;
  if (subdomain === 'iran') return <IranBridgePage />;

  // Default to Landing Page
  return <LandingPage />;
};

export default App;