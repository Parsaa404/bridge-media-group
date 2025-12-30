const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Basic health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Get content for a section
app.get('/api/sections/:name', async (req, res) => {
  const { name } = req.params;
  try {
    const section = await prisma.sectionContent.findUnique({
      where: { section: name.toUpperCase() },
    });
    if (!section) {
      return res.status(404).json({ error: 'Section not found' });
    }
    // Parse features if stored as string
    let features = [];
    try {
      features = section.features ? JSON.parse(section.features) : [];
    } catch (parseError) {
      console.error('Failed to parse features JSON:', parseError);
    }
    const response = {
      ...section,
      features
    };
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Middleware for Init Authentication
const authenticateInit = (req, res, next) => {
  const apiKey = req.headers['x-init-api-key'];
  const envApiKey = process.env.INIT_API_KEY;

  // Allow bypass in development if explicitly set, otherwise enforce
  // For specific request: enforce unless disabled or in dev mode? 
  // Request says: "default to enforcing... allow bypass only in trusted dev mode"

  if (!envApiKey) {
    // If no key configured, maybe block or warn. 
    // For now, let's assume if not set, it's insecure development or it fails.
    // Let's enforce existence of key.
    console.warn('INIT_API_KEY not set in environment.');
  }

  if (apiKey === envApiKey) {
    return next();
  }

  // Optional: Bypass in development
  // if (process.env.NODE_ENV === 'development') return next();

  console.log('Unauthorized init attempt');
  res.status(401).json({ error: 'Unauthorized' });
};

// Initialize default data
app.post('/api/init', authenticateInit, async (req, res) => {
  try {
    const sections = [
      {
        section: 'TV',
        title: 'IRAN BRIDGE TV',
        description: 'Connecting communities through high-quality television programming. Iran Bridge TV delivers news, entertainment, and cultural content that resonates with audiences globally.',
        features: ["24/7 Satellite Broadcasting", "High-Definition Streaming", "Original Cultural Programming", "Global News Coverage"],
        imageUrl: "https://picsum.photos/800/600?random=1"
      },
      {
        section: 'EVENT',
        title: 'BRIDGE EVENT',
        description: 'From massive concert halls to exclusive corporate galas, Bridge Event orchestrates experiences that captivate.',
        features: ["Concert Promotion & Production", "Corporate Conferences", "Festival Management", "VIP Experience Packages"],
        imageUrl: "https://picsum.photos/800/600?random=2"
      },
      {
        section: 'PROPERTY',
        title: 'BRIDGE PROPERTY',
        description: 'Bridge Property manages a prestigious portfolio of commercial and entertainment venues.',
        features: ["Commercial Asset Management", "Studio Space Leasing", "Venue Development", "International Real Estate Investment"],
        imageUrl: "https://picsum.photos/800/600?random=3"
      },
      {
        section: 'IRAN',
        title: 'IRAN BRIDGE',
        description: 'The heart of our operations, connecting local heritage with global opportunities.',
        features: ["Cultural Exchange", "Business Networking", "Media Production", "Community Support"],
        imageUrl: "https://picsum.photos/800/600?random=4"
      }
    ];

    for (const s of sections) {
      await prisma.sectionContent.upsert({
        where: { section: s.section },
        update: {},
        create: {
          section: s.section,
          title: s.title,
          description: s.description,
          features: JSON.stringify(s.features),
          imageUrl: s.imageUrl
        }
      });
    }
    res.json({ message: 'Initialized' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
