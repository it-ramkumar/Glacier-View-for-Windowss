"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Sun, Maximize, 
  Thermometer, CheckCircle2, ArrowRight, 
  Menu, X, Layers, Droplets, Wind,
  ShoppingCart, Truck, Shield, RotateCcw,
  ChevronLeft, ChevronRight, Play, Pause,
  CreditCard, Mail, Phone, Instagram,
  Twitter, Facebook, Youtube, Linkedin,
  MapPin, HelpCircle, FileText, CreditCard as Card,
  Truck as Shipping, Package, Users, BookOpen,
  Mountain, Snowflake, Waves, IceCream,
  Cloud, CloudSnow, WindIcon, ThermometerSun,
  Star, Zap, Compass, Globe, Cpu, Activity,
  Waves as WaterWaves, Wind as Wind2, 
  ChevronDown, Sparkles, Scissors, Ruler,
  Droplet, Shield as ShieldIcon, RefreshCw,
  AlertCircle, Info, Check, XCircle,
  Lock, Unlock, Eye, EyeOff, Settings,
  Bluetooth, Wifi, Radio, Satellite,
  Database, HardDrive, Cpu as Chip,
  Network, Server, Terminal, Code,
  CloudRain, CloudLightning, CloudDrizzle,
  CloudFog, Sunset, Sunrise, Moon,
  ThermometerIcon, Droplets as WaterDrops,
  Home, Building, Factory, Warehouse,
  Truck as TruckIcon, Package as PackageIcon,
  Users as UsersIcon, Briefcase, Award,
  Target, PieChart, BarChart, TrendingUp,
  Clock, Calendar, Watch, Timer,
  Battery, BatteryCharging, Power,
  Zap as ZapIcon, Flashlight, Sun as SunIcon,
  Moon as MoonIcon, Cloud as CloudIcon,
  Star as StarIcon, Heart, HeartHandshake,
  ThumbsUp, MessageCircle, PhoneCall,
  Video, Image, Camera, Mic,
  Music, Headphones, Volume2,
  Film, Tv, Monitor, Smartphone,
  Tablet, Laptop, Printer, Scanner,
  Keyboard, Mouse, HardDrive as HDD,
  Cpu as CPU, MemoryStick, Router,
  Wifi as WifiIcon, Bluetooth as BluetoothIcon,
  Navigation, Map, Compass as CompassIcon,
  Globe as GlobeIcon, MapPin as MapPinIcon,
  Navigation2, Anchor, Ship, Car,
  Bike, Bus, Train, Plane,
  Rocket, Satellite as SatelliteIcon,
  Astronaut, Planet, Galaxy, Telescope,
  Microscope, Atom, FlaskRound, Beaker,
  TestTube, Dropper, Thermometer as Thermometer2,
  Scale, Weight, Calculator, Abacus,
  Book, BookOpen as BookOpenIcon, PenTool,
  Edit3, Type, Hash, Hash as HashIcon,
  Percent, DollarSign, Euro, Pound,
  Bitcoin, CreditCard as CreditCardIcon,
  Wallet, Banknote, Coins, Gem,
  Crown, Trophy, Medal, Flag,
  Shield as Shield2, Sword, Armor, Helmet,
  Castle, Fortress, Tower, Bridge,
  Tree, Flower, Leaf, Sprout,
  Mountain as MountainIcon, Volcano,
  Island, Beach, PalmTree, Tent,
  Campfire, Backpack, Compass as Compass2,
  Binoculars, Telescope as Telescope2,
  Camera as Camera2, Video as Video2,
  Mic as Mic2, Headphones as Headphones2,
  Radio as Radio2, Tv as Tv2,
  Computer, Server as Server2,
  Database as Database2, Cloud as Cloud2,
  Cpu as Cpu2, HardDrive as HardDrive2,
  MemoryStick as MemoryStick2, Router as Router2,
  Wifi as Wifi2, Bluetooth as Bluetooth2,
  Battery as Battery2, Power as Power2,
  Zap as Zap2, Sun as Sun2,
  Moon as Moon2, Star as Star2,
  Heart as Heart2, ThumbsUp as ThumbsUp2,
  MessageCircle as MessageCircle2,
  PhoneCall as PhoneCall2, Video as Video3,
  Image as Image2, Camera as Camera3,
  Mic as Mic3, Music as Music2,
  Headphones as Headphones3, Film as Film2,
  Monitor as Monitor2, Smartphone as Smartphone2,
  Tablet as Tablet2, Laptop as Laptop2,
  Printer as Printer2, Scanner as Scanner2,
  Keyboard as Keyboard2, Mouse as Mouse2
} from 'lucide-react';

// Flat window images - all 11 images as specified
const flatImagePaths = [
  '/images/flat-1.jpg', '/images/flat-2.jpg', '/images/flat-3.jpg', 
  '/images/flat-4.jpg', '/images/flat-5.jpg', '/images/flat-6.jpg',
  '/images/flat-7.jpg', '/images/flat-8.jpg', '/images/flat-9.jpg',
  '/images/flat-10.jpg', '/images/flat-11.jpg'
];

// Bubble window images - all 5 images as specified
const bubbleImagePaths = [
  '/images/bubble-1.jpeg', '/images/bubble-2.jpeg', '/images/bubble-3.jpeg',
  '/images/bubble-4.png', '/images/bubble-5.jpg'
];

// Installation videos
const installationVideos = [
  { 
    id: 1, 
    title: "Glacier View Window Video Guide", 
    src: "https://drive.google.com/file/d/1QZNi1mxtuyjSCmOXte3DGECoGZ64ptTY/preview",
    Icon: Layers
  },
  { 
    id: 2, 
    title: "Glacier View Window Video Guide", 
    src: "https://drive.google.com/file/d/1ZvveWdJKpHKAGm1N28h2wn5qnqmoDO4P/preview",
    Icon: Maximize
  },
  { 
    id: 3, 
    title: "Glacier View Window Video Guide", 
    src: "https://drive.google.com/file/d/1DydurvWPt2v3EEo9-U3AL9rHxFcaFqeo/preview",
    Icon: Droplets
  },
  { 
    id: 4, 
    title: "Glacier View Window Video Guide", 
    src: "https://drive.google.com/file/d/1utAXJr1Ve9kCg65TUr3fzRqKjpy4WdaQ/preview",
    Icon: ShieldCheck
  }
];

// External URLs
const EXTERNAL_URLS = {
  shopAll: "https://vankea.com/collections/windows",
  contact: "https://vankea.com/pages/contact",
  flatAddToCart: "https://vankea.com/products/flat-awning-style-windows",
  bubbleAddToCart: "https://vankea.com/products/bubble-awning-style-window",
  flatBuyNow: "https://shop.app/checkout/62131929169/cn/hWN6GVubQRSM2wQgS257y3hU/en-us/shoppay_login?_cs=3.AMPS&_r=AQABlT4Le4xO1A6bViAACc8Bfjgjq4QjHBHeNUIqxAyiwbo&redirect_source=direct_checkout_product&tracking_unique=89b4428d-cc1d-4567-98d1-e753b28cb5dd&tracking_visit=b55e41ce-bb4e-40c0-8e1a-37be78b5484a",
  bubbleBuyNow: "https://shop.app/checkout/62131929169/cn/hWN6GW9ynlLHhK3PIO3GaJgC/en-us/shoppay_login?_cs=3.AMPS&_r=AQABE-94C1pJjHke-iXhXFUDxkAkGGLoZPeQhaO2h8bW4Zc&redirect_source=direct_checkout_product&tracking_unique=89b4428d-cc1d-4567-98d1-e753b28cb5dd&tracking_visit=b55e41ce-bb4e-40c0-8e1a-37be78b5484a",
  aboutUs: "https://vankea.com/pages/about-us",
  faq: "https://vankea.com/pages/faq",
  blog: "https://vankea.com/blogs/news",
  terms: "https://vankea.com/pages/terms-of-service",
  privacy: "https://vankea.com/pages/privacy-policy",
  returnPolicy: "https://vankea.com/pages/return-policy",
  pickupPolicy: "https://vankea.com/pages/pick-up-in-store"
};

// --- UPDATED PRODUCT DATA TO MATCH YOUR CONTENT ---
const products = {
  flat: {
    title: "Glacier View Flat Awning Van Window",
    subtitle: "Low-profile flush design for modern stealth campers",
    description: "The Glacier View Flat Awning Van Window features a low-profile, flat design that sits cleanly against your van wall, while the top-hinged awning opening allows fresh air to flow in even during rain.",
    fullDescription: "This RV window features tinted glass for privacy, a strong aluminum frame, and a secure multi-point latch system. Our camper windows for sale are perfect for bed/bunk areas, kitchen installs, or anywhere you need rainproof ventilation.",
    features: [
      "Flat, low-profile awning windows",
      "Opens outward from the top for ventilation in all weather",
      "Automotive-grade tinted safety glass",
      "Durable aluminum frame",
      "Smooth, quiet hinge system",
      "Secure multi-point latches",
      "Easy DIY or professional installation"
    ],
    sizes: [
      { 
        id: "flat-small", 
        name: "27.6 x 11.8 in", 
        dimCm: "70 x 30 cm", 
        dimIn: "27.6 x 11.8 in", 
        use: "Side panels / Flares",
        price: "$625.00",
        regularPrice: "$625.00 USD",
        monthly: "From $104.17/mo at 0% APR",
        images: flatImagePaths,
        description: "Glacier View Flat Awning Window",
        availability: "available"
      },
      { 
        id: "flat-medium", 
        name: "19.7 x 19.7 in", 
        dimCm: "50 x 50 cm", 
        dimIn: "19.7 x 19.7 in", 
        use: "Rear doors / Square openings",
        price: "$525.00",
        regularPrice: "$525.00 USD",
        monthly: "From $87.50/mo at 0% APR",
        images: flatImagePaths,
        description: "Glacier View Flat Awning Window - 19.7'x19.7'",
        availability: "available"
      },
      { 
        id: "flat-large", 
        name: "43 3/16 x 15 5/8 in", 
        dimCm: "110 x 45 cm", 
        dimIn: "43 3/16 x 15 5/8 in", 
        use: "Universal Fit / Standard size",
        price: "$495.00",
        regularPrice: "$495.00 USD",
        monthly: "From $82.50/mo at 0% APR",
        images: flatImagePaths,
        description: "Glacier View Flat Awning Window 43 3/16 x 15 5/8 inches",
        availability: "sold-out"
      }
    ],
    keyFeatures: [
      "Well-tinted camper windows for privacy",
      "Insulated double-glazed RV windows",
      "Flat glass look that aligns well with automotive awning-style windows",
      "Ventilation locked mode for rainy weather",
      "Swings open to a full, unobstructed 90-degree angle",
      "Integrated blackout shades and mosquito nets"
    ],
    whyChoose: [
      "Well-tinted camper windows for privacy.",
      "Insulated double-glazed RV windows.",
      "Have a flat glass look that aligns well with automotive awning-style windows; they don't look like bubbles (usual RV windows).",
      "Have a ventilation locked mode, when the windows can stay slightly cranked even in rainy weather and let the fresh air come in; the window will be fully locked as well.",
      "Swings open to a full, unobstructed 90-degree angle.",
      "Integrated blackout shades and mosquito nets."
    ],
    regularPrice: "$495.00 USD",
    idealFor: "Our van windows are ideal for bunks, living areas, and van conversion builds."
  },
  bubble: {
    title: "Glacier View 21\" Curved Bubble Awning Van Window",
    subtitle: "Insulated Double-Pane RV Window",
    description: "The Glacier View Bubble Awning Van Window features a curved bubble profile with an awning-style opening. The bubble design of our camper windows offers extra interior space and a panoramic feel, while the top-hinged opening provides ventilation even in wet weather.",
    fullDescription: "Made with automotive-grade tinted safety glass and a reinforced frame, this RV window is ideal for RVs, campervans, trailers, etc. Installed our RV windows for sale in sleeping areas, lounges, or any wall that benefits from a curved outward view. These upgraded awning windows also feature a built-in blackout screen for privacy and a mosquito net to keep bugs out.",
    features: [
      "Bubble / curved outward profile",
      "Awning-style opening for ventilation in the rain",
      "Automotive-grade tinted safety glass",
      "Strong, corrosion-resistant frame",
      "Increased interior elbow/shoulder room",
      "Smooth open/close mechanism",
      "Secure multi-point locking",
      "Acrylic glass double-pane camper windows for sale provide enough insulation"
    ],
    sizes: [
      { 
        id: "bubble-standard", 
        name: "21 1/4 x 21 1/4 in", 
        dimCm: "54 x 54 cm", 
        dimIn: "21 1/4 x 21 1/4 in", 
        use: "Sleeping areas / Living spaces / Sidewalls",
        price: "$525.00",
        regularPrice: "$525.00 USD",
        monthly: "From $87.50/mo at 0% APR",
        images: bubbleImagePaths,
        description: "Glacier View 21\" Curved Bubble Awning Van Window – Insulated Double-Pane RV Window",
        availability: "available",
        greatFor: "Great for bunks, living spaces, and sidewalls."
      }
    ],
    keyFeatures: [
      "Bubble/curved outward profile",
      "Awning-style opening for rain ventilation",
      "Automotive-grade tinted safety glass",
      "Strong, corrosion-resistant frame",
      "Increased interior elbow/shoulder room",
      "Smooth open/close mechanism",
      "Acrylic glass double-pane insulation"
    ],
    regularPrice: "$525.00 USD",
    dimensions: "21 1/4 x 21 1/4 inches"
  }
};

const advantages = [
  { 
    title: "Double Glazed Insulation", 
    desc: "Superior thermal efficiency and sound dampening. Keeps you cooler in summer and warmer in winter.",
    icon: <Snowflake className="w-5 h-5" />,
    color: "text-cyan-300",
    bgColor: "from-cyan-900/20 to-blue-900/10"
  },
  { 
    title: "Rain-Proof Ventilation", 
    desc: "Our 'Ventilation Locked Mode' allows continuous fresh air flow even during heavy downpours.",
    icon: <CloudSnow className="w-5 h-5" />,
    color: "text-blue-300",
    bgColor: "from-blue-900/20 to-cyan-900/10"
  },
  { 
    title: "Privacy & Protection", 
    desc: "Integrated blackout shades for total privacy and fine-mesh mosquito nets to keep pests out.",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "text-white",
    bgColor: "from-gray-900/20 to-slate-900/10"
  },
  { 
    title: "90° Full Opening", 
    desc: "Unlike standard RV windows, our awning system swings open to a full 90 degrees for maximum airflow.",
    icon: <WindIcon className="w-5 h-5" />,
    color: "text-sky-300",
    bgColor: "from-sky-900/20 to-teal-900/10"
  },
  { 
    title: "Automotive Flush Look", 
    desc: "Aligns perfectly with your van's metal body, avoiding the bulky 'RV trailer' appearance.",
    icon: <Mountain className="w-5 h-5" />,
    color: "text-blue-200",
    bgColor: "from-indigo-900/20 to-blue-900/10"
  },
  { 
    title: "UV Privacy Tint", 
    desc: "83% Dark Smoke tint reduces glare and UV exposure while preventing visibility from outside.",
    icon: <ThermometerSun className="w-5 h-5" />,
    color: "text-amber-300",
    bgColor: "from-amber-900/20 to-yellow-900/10"
  }
];

const technicalSpecs = [
  { label: "Frame Material", value: "Anodized High-Strength Aluminum" },
  { label: "Glass Type", value: "Tempered Automotive Safety Glass" },
  { label: "Glass Glazing", value: "Insulated Double-Glazed" },
  { label: "Mounting Type", value: "Flat, Flush Surface Mount (Clamp Ring)" },
  { label: "Glass Tint Level", value: "83% Privacy Tint (Dark Smoke)" },
  { label: "Maximum Opening Angle", value: "90 Degrees" },
  { label: "Waterproof Rating", value: "IPX6 (High-pressure water jets)" },
  { label: "Locking System", value: "Secure Multi-point Latch" },
  { label: "Installation", value: "DIY or Professional" },
  { label: "Compatibility", value: "Sprinter, Transit, ProMaster, NV3500" }
];

// --- ULTIMATE GLACIER ANIMATION SYSTEM ---
const createUltimateGlacierAnimations = () => {
  return {
    // Ice crystal matrix formation
    iceCrystalMatrix: {
      hidden: { scale: 0, opacity: 0 },
      visible: (i) => ({
        scale: [0, Math.random() * 0.7 + 0.3, 0],
        opacity: [0, Math.random() * 0.08 + 0.02, 0],
        rotate: [0, 720],
        x: [0, Math.sin(i) * 30, 0],
        transition: {
          duration: Math.random() * 40 + 30,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "easeInOut"
        }
      })
    },

    // Aurora flow
    auroraFlow: {
      hidden: { opacity: 0 },
      visible: {
        opacity: [0.03, 0.1, 0.03],
        backgroundPosition: ['0% 0%', '250% 250%', '0% 0%'],
        transition: {
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }
      }
    },

    // Ice sheet movement
    iceSheetMovement: {
      hidden: { x: 0 },
      visible: (i) => ({
        x: [0, Math.sin(i * 2) * 30, 0],
        y: [0, Math.cos(i) * 15, 0],
        rotate: [0, Math.random() * 2 - 1, 0],
        transition: {
          duration: Math.random() * 35 + 25,
          repeat: Infinity,
          ease: "easeInOut"
        }
      })
    },

    // Snow particles
    snowParticles: {
      hidden: { y: -150, opacity: 0 },
      visible: (i) => ({
        y: ["0%", "100%"],
        opacity: [0, Math.random() * 0.06 + 0.01, 0],
        x: [0, Math.cos(i) * 50, 0],
        rotate: [0, Math.random() * 180],
        transition: {
          duration: Math.random() * 70 + 60,
          repeat: Infinity,
          delay: i * 0.2,
          ease: "linear"
        }
      })
    },

    // Ice crack formation
    iceCrackFormation: {
      hidden: { scaleX: 0, opacity: 0 },
      visible: (i) => ({
        scaleX: [0, Math.random() * 0.9 + 0.5, 0],
        opacity: [0, Math.random() * 0.18 + 0.06, 0],
        transition: {
          duration: Math.random() * 20 + 15,
          repeat: Infinity,
          delay: i * 2.5,
          ease: "easeInOut"
        }
      })
    },

    // Crystal precipitation
    crystalPrecipitation: {
      hidden: { y: -100, opacity: 0 },
      visible: (i) => ({
        y: ["0%", "100%"],
        opacity: [0, Math.random() * 0.14 + 0.04, 0],
        x: [0, Math.random() * 60 - 30, 0],
        rotate: [0, Math.random() * 1200],
        scale: [0.3, 1, 0.3],
        transition: {
          duration: Math.random() * 40 + 32,
          repeat: Infinity,
          delay: i * 0.15,
          ease: "easeInOut"
        }
      })
    },

    // Glacier vibration
    glacierVibration: {
      hidden: { scale: 1 },
      visible: {
        scale: [1, 1.002, 1],
        transition: {
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },

    // Ice shimmer
    iceShimmer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: [0, Math.random() * 0.25 + 0.12, 0],
        scale: [1, 1.12, 1],
        transition: {
          duration: Math.random() * 30 + 22,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },

    // Frost formation
    frostFormation: {
      hidden: { opacity: 0, scale: 0 },
      visible: (i) => ({
        opacity: [0, Math.random() * 0.26 + 0.1, 0],
        scale: [0, Math.random() * 1.3 + 0.5, 0],
        transition: {
          duration: Math.random() * 18 + 15,
          repeat: Infinity,
          delay: i * 0.25,
          ease: "easeInOut"
        }
      })
    },

    // Geometric ice crystals
    geometricIceCrystals: {
      hidden: { rotate: 0, opacity: 0 },
      visible: (i) => ({
        rotate: [0, 900],
        opacity: [0, Math.random() * 0.1 + 0.03, 0],
        scale: [0.3, 1, 0.3],
        transition: {
          duration: Math.random() * 45 + 35,
          repeat: Infinity,
          delay: i * 0.7,
          ease: "linear"
        }
      })
    },

    // Ice wave patterns
    iceWavePatterns: {
      hidden: { x: -120, opacity: 0 },
      visible: (i) => ({
        x: ["0%", "100%"],
        opacity: [0, Math.random() * 0.09 + 0.04, 0],
        y: [0, Math.sin(i) * 35, 0],
        transition: {
          duration: Math.random() * 50 + 40,
          repeat: Infinity,
          delay: i * 0.8,
          ease: "linear"
        }
      })
    },

    // Crystal lattice
    crystalLattice: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: (i) => ({
        opacity: [0, Math.random() * 0.07 + 0.03, 0],
        scale: [0.5, 1.1, 0.5],
        rotate: [0, 450],
        transition: {
          duration: Math.random() * 55 + 45,
          repeat: Infinity,
          delay: i * 1.1,
          ease: "linear"
        }
      })
    },

    // Ice pillar formation
    icePillarFormation: {
      hidden: { scaleY: 0, opacity: 0 },
      visible: (i) => ({
        scaleY: [0, Math.random() * 0.8 + 0.4, 0],
        opacity: [0, Math.random() * 0.12 + 0.05, 0],
        transition: {
          duration: Math.random() * 25 + 20,
          repeat: Infinity,
          delay: i * 1.8,
          ease: "easeInOut"
        }
      })
    },

    // Ice fractal growth
    iceFractalGrowth: {
      hidden: { scale: 0, opacity: 0 },
      visible: (i) => ({
        scale: [0, Math.random() * 0.6 + 0.3, 0],
        opacity: [0, Math.random() * 0.09 + 0.03, 0],
        rotate: [0, Math.random() * 360],
        transition: {
          duration: Math.random() * 22 + 18,
          repeat: Infinity,
          delay: i * 0.4,
          ease: "easeInOut"
        }
      })
    }
  };
};

const glacierAnimations = createUltimateGlacierAnimations();

// Component variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function GlacierViewPage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeTab, setActiveTab] = useState('flat');
  const [activeSize, setActiveSize] = useState(products.flat.sizes[1]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showPurchasingPower, setShowPurchasingPower] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [time, setTime] = useState(0);
  
  const currentProduct = products[activeTab];
  const currentImages = activeSize.images;

  // Update activeSize when switching tabs
  useEffect(() => {
    const availableSizes = products[activeTab].sizes.filter(size => size.availability !== "sold-out");
    if (availableSizes.length > 0) {
      setActiveSize(availableSizes[0]);
    } else {
      setActiveSize(products[activeTab].sizes[0]);
    }
    setCurrentImageIndex(0);
    setImageError(false);
  }, [activeTab]);

  // Auto-play image slider
  useEffect(() => {
    if (!isAutoPlaying || currentImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentImages.length]);

  // Mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll progress for dynamic animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      setScrollProgress(scrollPercent);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Time-based animations
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t + 0.016); // 60fps
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  const handleSizeChange = (size) => {
    if (size.availability === "sold-out") return;
    setActiveSize(size);
    setCurrentImageIndex(0);
    setImageError(false);
  };

  const handleExternalLink = (url) => {
    window.open(url, '_blank');
  };

  const handlePurchasingPower = () => {
    setShowPurchasingPower(!showPurchasingPower);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setEmailSubmitted(true);
      setEmail('');
      setTimeout(() => setEmailSubmitted(false), 3000);
    }
  };

  const handleNavClick = (section) => {
    setActiveNavLink(section);
    if (section === 'flat' || section === 'bubble') {
      setActiveTab(section);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const getHeroImage = () => {
    if (activeTab === 'flat') {
      return '/images/flatstyle.webp';
    } else {
      return '/images/bubblestyle1.jpg';
    }
  };

  // Generate ultimate glacier animation elements
  const renderUltimateGlacierAnimations = () => (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Aurora Background */}
      <motion.div 
        className="absolute inset-0"
        variants={glacierAnimations.auroraFlow}
        initial="hidden"
        animate="visible"
        style={{
          background: 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.06) 20%, rgba(147,51,234,0.04) 40%, rgba(236,72,153,0.03) 60%, rgba(6,182,212,0.05) 80%, rgba(59,130,246,0.06) 100%)',
          backgroundSize: '400% 400%',
          maskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 85%)',
          filter: 'blur(1.2px)'
        }}
      />
      
      {/* Hexagonal Ice Grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.015]"
        animate={{
          opacity: [0.01, 0.03, 0.01],
          backgroundPosition: ['0% 0%', '150% 150%', '0% 0%']
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0L104 30V90L60 120L16 90V30L60 0Z' fill='none' stroke='rgba(6,182,212,0.06)' stroke-width='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
        }}
      />
      
      {/* Floating Ice Crystals */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`ice-crystal-${i}`}
          className="absolute text-cyan-400/6"
          custom={i}
          variants={glacierAnimations.iceCrystalMatrix}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: `${Math.random() * 35 + 25}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: 'blur(1.2px)'
          }}
        >
          {Math.random() > 0.5 ? '❄' : '✦'}
        </motion.div>
      ))}
      
      {/* Snow Particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={`snow-particle-${i}`}
          className="absolute text-white/3"
          custom={i}
          variants={glacierAnimations.snowParticles}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: `${Math.random() * 14 + 10}px`,
            top: `${Math.random() * 100}%`,
          }}
        >
          ·
        </motion.div>
      ))}
      
      {/* Crystal Precipitation */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`crystal-precip-${i}`}
          className="absolute font-mono text-cyan-400/4"
          custom={i}
          variants={glacierAnimations.crystalPrecipitation}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: `${Math.random() * 18 + 12}px`,
            left: `${Math.random() * 100}%`,
          }}
        >
          {Math.random() > 0.5 ? '◇' : '✧'}
        </motion.div>
      ))}
      
      {/* Ice Crack Lines */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`ice-crack-${i}`}
          className="absolute h-px"
          custom={i}
          variants={glacierAnimations.iceCrackFormation}
          initial="hidden"
          animate="visible"
          style={{
            width: `${Math.random() * 250 + 120}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
            transformOrigin: 'left center',
            filter: 'blur(0.8px)'
          }}
        />
      ))}
      
      {/* Frost Formations */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`frost-formation-${i}`}
          className="absolute rounded-full"
          custom={i}
          variants={glacierAnimations.frostFormation}
          initial="hidden"
          animate="visible"
          style={{
            width: `${Math.random() * 140 + 80}px`,
            height: `${Math.random() * 140 + 80}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'radial-gradient(circle, rgba(186,230,253,0.1) 0%, transparent 70%)',
          }}
        />
      ))}
      
      {/* Geometric Ice Crystals */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`geometric-crystal-${i}`}
          className="absolute text-blue-300/4"
          custom={i}
          variants={glacierAnimations.geometricIceCrystals}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: `${Math.random() * 32 + 25}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          ❅
        </motion.div>
      ))}
      
      {/* Ice Wave Patterns */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={`ice-wave-${i}`}
          className="absolute text-cyan-300/5"
          custom={i}
          variants={glacierAnimations.iceWavePatterns}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: `${Math.random() * 40 + 30}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(0.7px)'
          }}
        >
          ≈
        </motion.div>
      ))}
      
      {/* Crystal Lattice */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`crystal-lattice-${i}`}
          className="absolute text-cyan-200/4"
          custom={i}
          variants={glacierAnimations.crystalLattice}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: `${Math.random() * 28 + 22}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          ✧
        </motion.div>
      ))}
      
      {/* Ice Pillar Formations */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`ice-pillar-${i}`}
          className="absolute w-px"
          custom={i}
          variants={glacierAnimations.icePillarFormation}
          initial="hidden"
          animate="visible"
          style={{
            height: `${Math.random() * 200 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.15), transparent)',
            filter: 'blur(0.5px)'
          }}
        />
      ))}
      
      {/* Ice Fractal Growth */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`ice-fractal-${i}`}
          className="absolute text-cyan-400/5"
          custom={i}
          variants={glacierAnimations.iceFractalGrowth}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: `${Math.random() * 25 + 18}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          ✦
        </motion.div>
      ))}
      
      {/* Ice Shimmer Effects */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`ice-shimmer-${i}`}
          className="absolute rounded-full"
          variants={glacierAnimations.iceShimmer}
          initial="hidden"
          animate="visible"
          style={{
            width: `${Math.random() * 320 + 220}px`,
            height: `${Math.random() * 320 + 220}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
          }}
        />
      ))}
      
      {/* Glacier Base with Multiple Layers */}
      {[1, 2, 3, 4, 5, 6].map((layer) => (
        <motion.div 
          key={`glacier-base-${layer}`}
          className="absolute bottom-0"
          custom={layer}
          variants={glacierAnimations.iceSheetMovement}
          initial="hidden"
          animate="visible"
          style={{
            height: layer === 1 ? '70px' : layer === 2 ? '52px' : layer === 3 ? '40px' : layer === 4 ? '30px' : layer === 5 ? '22px' : '16px',
            width: '100%',
            background: `linear-gradient(180deg, transparent 0%, rgba(${layer === 1 ? '186,230,253' : layer === 2 ? '224,242,254' : layer === 3 ? '255,255,255' : layer === 4 ? '240,249,255' : layer === 5 ? '255,255,255' : '240,249,255'},${layer === 1 ? 0.16 : layer === 2 ? 0.12 : layer === 3 ? 0.09 : layer === 4 ? 0.07 : layer === 5 ? 0.05 : 0.03}) 100%)`,
            clipPath: 'polygon(0% 100%, 1% 95%, 3% 97%, 6% 93%, 9% 95%, 12% 91%, 15% 93%, 18% 89%, 21% 91%, 24% 87%, 27% 89%, 30% 85%, 33% 87%, 36% 83%, 39% 85%, 42% 81%, 45% 83%, 48% 79%, 51% 81%, 54% 77%, 57% 79%, 60% 75%, 63% 77%, 66% 73%, 69% 75%, 72% 71%, 75% 73%, 78% 69%, 81% 71%, 84% 67%, 87% 69%, 90% 65%, 93% 67%, 96% 63%, 99% 65%, 100% 100%)',
            opacity: layer === 1 ? 0.85 : layer === 2 ? 0.7 : layer === 3 ? 0.55 : layer === 4 ? 0.45 : layer === 5 ? 0.35 : 0.25,
            filter: 'blur(0.6px)'
          }}
        />
      ))}
      
      {/* Interactive Mouse Parallax Field */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          backgroundPosition: [
            `${mousePosition.x * 50 + Math.sin(time) * 15}px ${mousePosition.y * 50 + Math.cos(time) * 15}px`,
            `${-mousePosition.x * 50 - Math.sin(time) * 15}px ${-mousePosition.y * 50 - Math.cos(time) * 15}px`
          ]
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.05) 0%, transparent 70%)',
          backgroundSize: '700px 700px',
        }}
      />
      
      {/* Scroll Depth Effect */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          opacity: 0.04 + scrollProgress * 0.06
        }}
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(34,211,238,0.15) 100%)',
          maskImage: 'linear-gradient(180deg, transparent 0%, black 30%, black 70%, transparent 100%)'
        }}
      />
      
      {/* Crystal Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        {Array.from({ length: 35 }).map((_, i) => (
          <motion.div
            key={`crystal-grid-${i}`}
            className="absolute flex justify-center"
            style={{
              top: `${i * 3}%`,
              left: '0%',
              width: '100%',
            }}
            animate={{
              x: [0, 40, 0],
              opacity: [0.02, 0.01, 0.02]
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              delay: i * 2.5,
              ease: "easeInOut"
            }}
          >
            {Array.from({ length: 50 }).map((_, j) => (
              <div
                key={`crystal-cell-${i}-${j}`}
                className="mx-0.5 w-5 h-5 border border-cyan-500/5 rotate-45"
              />
            ))}
          </motion.div>
        ))}
      </div>
      
      {/* Ice Shard Light Effects */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`ice-shard-${i}`}
          className="absolute bottom-0 h-64 w-px"
          initial={{ 
            x: `${Math.random() * 100}%`,
            opacity: 0,
            scaleY: 0
          }}
          animate={{
            opacity: [0, 0.12, 0],
            scaleY: [0, Math.random() * 0.4 + 0.25, 0]
          }}
          transition={{
            duration: Math.random() * 18 + 15,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut"
          }}
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.9), transparent)',
            filter: 'blur(1.2px)'
          }}
        />
      ))}
      
      {/* Ice Reflection Line */}
      <motion.div 
        className="absolute bottom-56 left-0 right-0 h-px opacity-35"
        animate={{ 
          scaleX: [0.5, 1.6, 0.5],
          opacity: [0.08, 0.4, 0.08]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
          filter: 'blur(0.9px)'
        }}
      />
      
      {/* Iceberg Forms */}
      {[1, 2, 3, 4, 5].map((layer) => (
        <motion.div 
          key={`iceberg-${layer}`}
          className="absolute bottom-0"
          animate={{ 
            x: layer === 1 ? [0, 18, 0] : 
                layer === 2 ? [0, -12, 0] : 
                layer === 3 ? [0, 25, 0] : 
                layer === 4 ? [0, -10, 0] : 
                [0, 15, 0],
            y: layer === 1 ? [0, 5, 0] : 
                layer === 2 ? [0, 4, 0] : 
                layer === 3 ? [0, 6, 0] : 
                layer === 4 ? [0, 3, 0] : 
                [0, 4, 0],
            rotate: [0, layer % 2 === 0 ? 1.2 : -1.2, 0]
          }}
          transition={{ 
            duration: layer === 1 ? 32 : layer === 2 ? 28 : layer === 3 ? 36 : layer === 4 ? 24 : 30, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{
            height: layer === 1 ? '60px' : layer === 2 ? '45px' : layer === 3 ? '35px' : layer === 4 ? '28px' : '22px',
            width: `${layer === 1 ? '250px' : layer === 2 ? '190px' : layer === 3 ? '150px' : layer === 4 ? '110px' : '85px'}`,
            left: layer === 1 ? '10%' : layer === 2 ? '55%' : layer === 3 ? '75%' : layer === 4 ? '30%' : '85%',
            background: `linear-gradient(180deg, transparent 0%, rgba(${layer === 1 ? '186,230,253' : layer === 2 ? '224,242,254' : layer === 3 ? '255,255,255' : layer === 4 ? '240,249,255' : '255,255,255'},${layer === 1 ? 0.13 : layer === 2 ? 0.10 : layer === 3 ? 0.08 : layer === 4 ? 0.06 : 0.05}) 100%)`,
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)',
            filter: 'blur(0.5px)'
          }}
        />
      ))}
      
      {/* Micro Ice Particles */}
      {Array.from({ length: 70 }).map((_, i) => (
        <motion.div
          key={`ice-particle-${i}`}
          className="absolute w-1.5 h-1.5 bg-white/2 rounded-full"
          initial={{ 
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            opacity: 0
          }}
          animate={{
            y: [null, Math.random() * 100 + '%'],
            x: [null, Math.random() * 100 + '%'],
            opacity: [0, Math.random() * 0.04 + 0.015, 0],
            scale: [0, Math.random() * 0.7 + 0.4, 0]
          }}
          transition={{
            duration: Math.random() * 45 + 35,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.6
          }}
        />
      ))}
      
      {/* Energy Wave Lines */}
      {[1, 2, 3, 4, 5, 6, 7].map((line) => (
        <motion.div 
          key={`energy-wave-${line}`}
          className="absolute left-0 right-0 h-px"
          initial={{ y: -140 + line * 15, opacity: 0 }}
          animate={{ 
            y: [null, 200],
            opacity: [0, 0.18, 0]
          }}
          transition={{ 
            duration: 2.8 + line * 0.12,
            repeat: Infinity,
            ease: "linear",
            delay: line * 0.08
          }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.35), transparent)',
            filter: 'blur(0.8px)',
            boxShadow: '0 0 18px rgba(34,211,238,0.25)'
          }}
        />
      ))}
      
      {/* Time-based Crystal Rotation */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-40 h-40 opacity-6"
        animate={{
          rotate: time * 12,
          scale: [1, 1.15, 1]
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{
          background: 'conic-gradient(from 0deg, transparent, rgba(6,182,212,0.12), transparent)',
          filter: 'blur(2.5px)'
        }}
      />
      
      {/* Interactive Glow Points */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`glow-point-${i}`}
          className="absolute w-5 h-5 rounded-full"
          animate={{
            x: Math.sin(time + i) * 25,
            y: Math.cos(time + i) * 25,
            opacity: [0.12, 0.35, 0.12],
            scale: [0.7, 1.3, 0.7]
          }}
          transition={{
            duration: 3.5 + i * 0.6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${12 + i * 11}%`,
            top: `${15 + i * 10}%`,
            background: 'radial-gradient(circle, rgba(6,182,212,0.35) 0%, transparent 70%)',
            filter: 'blur(1.2px)'
          }}
        />
      ))}
      
      {/* Ice Stream Lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`ice-stream-${i}`}
          className="absolute top-0 h-1 w-32"
          initial={{ 
            x: Math.random() * 100 + '%',
            y: -100,
            opacity: 0
          }}
          animate={{
            y: [null, 800],
            opacity: [0, 0.2, 0],
            rotate: [0, Math.random() * 360]
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.3
          }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)',
            filter: 'blur(1px)'
          }}
        />
      ))}
      
      {/* Glacier Pulse Effect */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-96"
        variants={glacierAnimations.glacierVibration}
        initial="hidden"
        animate="visible"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(34,211,238,0.04) 20%, rgba(59,130,246,0.05) 100%)',
          clipPath: 'polygon(0% 100%, 5% 85%, 10% 92%, 15% 83%, 20% 89%, 25% 80%, 30% 86%, 35% 77%, 40% 83%, 45% 75%, 50% 81%, 55% 73%, 60% 79%, 65% 71%, 70% 77%, 75% 69%, 80% 75%, 85% 67%, 90% 73%, 95% 65%, 100% 100%)',
          filter: 'blur(1.5px)'
        }}
      />
      
      {/* Ice Fog Layer */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          opacity: [0.02, 0.06, 0.02]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 80%)',
          filter: 'blur(3px)'
        }}
      />
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-gray-950 via-blue-950 to-black text-white font-sans selection:bg-cyan-600/30 selection:text-white overflow-x-hidden">
      
      {/* Ultimate Glacier Animation System */}
      {renderUltimateGlacierAnimations()}

      {/* Premium Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 25 }}
        className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-6 py-3 backdrop-blur-2xl bg-gray-900/70 border-b border-cyan-500/20"
      >
        <div className="flex items-center gap-2">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative"
          >
            <Snowflake className="w-5 h-5 text-cyan-400" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg font-bold tracking-tighter glacier-text" 
            style={{
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: '0.1em',
            }}>
            GLACIER VIEW
          </motion.h1>
        </div>
        
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {['flat', 'bubble'].map((tab, index) => (
            <motion.button 
              key={tab}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              onClick={() => { setActiveTab(tab); setActiveNavLink(tab); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className={`relative pb-2 text-sm transition-colors ${
                activeTab === tab ? 'text-white font-semibold' : 'text-cyan-100/80 hover:text-white'
              }`}
            >
              {tab === 'flat' ? 'FLAT SERIES' : 'BUBBLE SERIES'}
              {activeTab === tab && (
                <motion.div 
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
          {['features', 'install', 'specs'].map((link, index) => (
            <motion.button 
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 2) }}
              onClick={() => handleNavClick(link)} 
              className={`relative pb-2 text-sm transition-colors ${
                activeNavLink === link ? 'text-white font-semibold' : 'text-cyan-100/80 hover:text-white'
              }`}
            >
              {link === 'install' ? 'INSTALLATION' : link.toUpperCase()}
              {activeNavLink === link && (
                <motion.div 
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleExternalLink(EXTERNAL_URLS.shopAll)}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-cyan-600/90 to-blue-500/90 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-all border border-cyan-500/30 backdrop-blur-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>SHOP NOW</span>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 rounded-lg bg-blue-900/40 border border-cyan-500/30 backdrop-blur-sm"
          >
            {isMenuOpen ? <X className="w-5 h-5 text-cyan-300" /> : <Menu className="w-5 h-5 text-cyan-300" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-2xl border-b border-cyan-500/30 p-4 md:hidden"
            >
              <div className="flex flex-col gap-2">
                {['flat', 'bubble'].map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => handleNavClick(item)}
                    className={`text-sm py-3 px-4 text-left rounded-lg transition-colors ${
                      activeTab === item 
                        ? 'text-white font-semibold bg-cyan-900/30 border border-cyan-500/40' 
                        : 'text-cyan-100/80 hover:text-white hover:bg-cyan-900/20'
                    }`}
                  >
                    {item === 'flat' ? 'FLAT SERIES' : 'BUBBLE SERIES'}
                  </motion.button>
                ))}
                {['features', 'install', 'specs'].map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (index + 2) }}
                    onClick={() => handleNavClick(item)}
                    className={`text-sm py-3 px-4 text-left rounded-lg transition-colors ${
                      activeNavLink === item 
                        ? 'text-white font-semibold bg-cyan-900/30 border border-cyan-500/40' 
                        : 'text-cyan-100/80 hover:text-white hover:bg-cyan-900/20'
                    }`}
                  >
                    {item === 'install' ? 'INSTALLATION' : item.toUpperCase()}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => { handleExternalLink(EXTERNAL_URLS.shopAll); setIsMenuOpen(false); }}
                  className="bg-gradient-to-r from-cyan-600/90 to-blue-500/90 text-white py-3 rounded-lg font-semibold mt-2 text-sm border border-cyan-500/30 hover:opacity-90"
                >
                  SHOP ALL WINDOWS
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section with Glacier Effects */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src={getHeroImage()}
              alt={`Glacier View ${activeTab === 'flat' ? 'Flat' : 'Bubble'} Van Window`}
              className="w-full h-full object-cover"
              style={{ 
                opacity: 0.9,
                objectPosition: 'center',
                filter: 'brightness(0.7) contrast(1.1) saturate(1.1)'
              }}
              loading="eager"
              onError={handleImageError}
              key={`hero-${activeTab}`}
            />
            
            {imageError && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Mountain className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white mb-2">GLACIER VIEW WINDOWS</h2>
                  <p className="text-cyan-300">Premium Alpine-Grade Van Windows</p>
                </div>
              </div>
            )}
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
          
          {/* Hero Ice Particles */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`hero-ice-particle-${i}`}
              className="absolute w-5 h-5 bg-cyan-400/25 rounded-full"
              initial={{ 
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                opacity: 0
              }}
              animate={{
                y: [null, Math.random() * 100 + '%'],
                x: [null, Math.random() * 100 + '%'],
                opacity: [0, 0.3, 0],
                scale: [0, 1.2, 0]
              }}
              transition={{
                duration: Math.random() * 32 + 25,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.2
              }}
            />
          ))}
        </div>

        <motion.div 
          initial="hidden" 
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/40 border border-cyan-500/30 text-cyan-300 font-semibold tracking-wider text-sm uppercase mb-6 backdrop-blur-md"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Snowflake className="w-4 h-4" />
            </motion.div>
            ALPINE-GRADE WINDOWS
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Snowflake className="w-4 h-4" />
            </motion.div>
          </motion.span>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120, damping: 20 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 px-2 glacier-text">
              GLACIER VIEW
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-4"
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-cyan-100/90 mb-8 max-w-2xl mx-auto leading-relaxed px-2 font-light"
          >
            Experience superior insulation, rain-proof ventilation, and automotive-grade aesthetics in extreme environments.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-2">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34,211,238,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-600/90 to-blue-500/90 text-white px-8 py-3 rounded-xl text-base font-semibold hover:opacity-90 transition-all w-full sm:w-auto border border-cyan-500/40 backdrop-blur-sm"
            >
              EXPLORE COLLECTION
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(6,182,212,0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleExternalLink(EXTERNAL_URLS.contact)}
              className="bg-white/10 border border-cyan-500/30 text-white px-8 py-3 rounded-xl text-base font-semibold hover:bg-cyan-900/30 transition-all w-full sm:w-auto backdrop-blur-sm"
            >
              CONTACT SALES
            </motion.button>
          </div>
        </motion.div>
        
        {/* Hero Scan Lines */}
        {[1, 2, 3, 4, 5, 6].map((line) => (
          <motion.div 
            key={`hero-scan-line-${line}`}
            className="absolute left-0 right-0 h-px z-10"
            initial={{ y: -200 + line * 25, opacity: 0 }}
            animate={{ 
              y: [null, 250],
              opacity: [0, 0.18, 0]
            }}
            transition={{ 
              duration: 2.2 + line * 0.1,
              repeat: Infinity,
              ease: "linear",
              delay: line * 0.1
            }}
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.35), transparent)',
              filter: 'blur(0.8px)',
              boxShadow: '0 0 20px rgba(34,211,238,0.2)'
            }}
          />
        ))}
      </section>

      {/* Product Showcase */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto" id="products">
        <div className="flex justify-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative inline-flex bg-gray-900/40 p-1 rounded-xl border border-cyan-500/30 w-full max-w-md backdrop-blur-sm"
          >
            {['flat', 'bubble'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => { setActiveTab(tab); }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === tab 
                    ? 'bg-gray-800/60 text-white shadow-lg' 
                    : 'text-cyan-100/80 hover:text-white'
                }`}
              >
                {tab === 'flat' ? 'FLAT SERIES' : 'BUBBLE SERIES'}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Image Gallery */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full space-y-4"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 rounded-2xl overflow-hidden border-2 border-cyan-500/30 group glacier-glass">
                <AnimatePresence mode="wait">
                  {!imageError ? (
                    <motion.img 
                      key={`${activeTab}-${currentImageIndex}`}
                      src={currentImages[currentImageIndex]}
                      alt={`${currentProduct.title} - ${activeSize.name}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      loading="lazy"
                      onError={handleImageError}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center p-8">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <Mountain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                        </motion.div>
                        <p className="text-cyan-300 text-lg">Loading Glacier View...</p>
                      </div>
                    </div>
                  )}
                </AnimatePresence>
                
                {currentImages.length > 1 && (
                  <>
                    <motion.button 
                      onClick={prevImage}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(6,182,212,0.3)" }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900/90 backdrop-blur-sm border border-cyan-500/40 flex items-center justify-center hover:bg-cyan-900/50 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-cyan-300" />
                    </motion.button>
                    
                    <motion.button 
                      onClick={nextImage}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(6,182,212,0.3)" }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900/90 backdrop-blur-sm border border-cyan-500/40 flex items-center justify-center hover:bg-cyan-900/50 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-cyan-300" />
                    </motion.button>
                  </>
                )}
                
                <div className="absolute bottom-4 left-4 bg-gray-900/90 backdrop-blur-sm px-3 py-2 rounded-xl border border-cyan-500/40">
                  <p className="text-sm text-cyan-300/90 font-medium">{activeSize.dimIn}</p>
                </div>
                
                {/* Image count indicator */}
                {currentImages.length > 1 && (
                  <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm px-3 py-2 rounded-xl border border-cyan-500/40">
                    <p className="text-sm text-cyan-300/90 font-medium">
                      {currentImageIndex + 1}/{currentImages.length}
                    </p>
                  </div>
                )}
                
                {/* Auto-play toggle */}
                {currentImages.length > 1 && (
                  <motion.button 
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm p-2 rounded-xl border border-cyan-500/40"
                  >
                    {isAutoPlaying ? (
                      <Pause className="w-4 h-4 text-cyan-300" />
                    ) : (
                      <Play className="w-4 h-4 text-cyan-300" />
                    )}
                  </motion.button>
                )}
              </div>

              {currentImages.length > 1 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
                >
                  {currentImages.slice(0, 5).map((img, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 ${
                        index === currentImageIndex 
                          ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' 
                          : 'border-cyan-500/20 hover:border-cyan-400/50'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </motion.button>
                  ))}
                  {currentImages.length > 5 && (
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl border-2 border-cyan-500/20 flex items-center justify-center bg-gray-900/30">
                      <span className="text-sm text-cyan-300/60 font-medium">+{currentImages.length - 5}</span>
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>

            {/* Product Details */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full space-y-6"
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-gray-400 text-base line-through">
                    Regular price {activeSize.regularPrice}
                  </span>
                  <motion.span 
                    className="text-cyan-400 text-sm font-semibold px-3 py-1 bg-cyan-900/40 rounded-full border border-cyan-500/40"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    GLACIER SALE
                  </motion.span>
                </div>
                <div className="text-cyan-300/90 text-base mb-2">
                  Shipping calculated at checkout.
                </div>
                <div className="text-cyan-400 text-base font-medium">
                  {activeSize.monthly}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-6"
              >
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {activeSize.description}
                </h2>
                {activeTab === 'bubble' && (
                  <p className="text-base text-cyan-300/90 mb-4 font-medium">
                    Dimensions: {products.bubble.dimensions}
                  </p>
                )}
                <p className="text-cyan-100/90 text-base leading-relaxed mb-6 font-light">
                  {currentProduct.fullDescription}
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-6"
              >
                <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Mountain className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                  SELECT SIZE
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {currentProduct.sizes.map((size) => (
                    <motion.button
                      key={size.id}
                      onClick={() => handleSizeChange(size)}
                      whileHover={{ scale: 1.02, y: -2, boxShadow: "0 10px 30px rgba(6,182,212,0.1)" }}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        activeSize.id === size.id
                          ? 'border-cyan-500 bg-cyan-900/40 shadow-lg shadow-cyan-500/10'
                          : size.availability === "sold-out"
                          ? 'border-red-500/30 bg-red-900/10 opacity-60'
                          : 'border-cyan-500/20 bg-gray-900/30 hover:border-cyan-400/50'
                      }`}
                      disabled={size.availability === "sold-out"}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1 mr-4">
                          <div className="font-bold text-white text-base mb-1">
                            {size.name}
                            {size.availability === "sold-out" && (
                              <span className="text-xs bg-red-900/50 px-2 py-1 rounded ml-2">
                                SOLD OUT
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-cyan-300/80 mb-1">{size.dimIn} ({size.dimCm})</div>
                          <div className="text-sm text-cyan-400/70">{size.use}</div>
                        </div>
                        <div className="font-bold text-white text-base">
                          {size.price}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-6"
              >
                <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Snowflake className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                  KEY FEATURES
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentProduct.features.slice(0, 6).map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.03, x: 3, backgroundColor: "rgba(6,182,212,0.1)" }}
                      className="flex items-start gap-3 p-3 rounded-xl bg-gray-900/30 border border-cyan-500/20"
                    >
                      <motion.div 
                        className="w-2 h-2 mt-2 rounded-full bg-cyan-400 flex-shrink-0"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                      <span className="text-cyan-100/90 text-sm font-light">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="space-y-4"
              >
                <motion.div 
                  className="flex items-center justify-between p-4 bg-gray-900/40 rounded-xl border border-cyan-500/30"
                  whileHover={{ scale: 1.01, boxShadow: "0 10px 30px rgba(6,182,212,0.05)" }}
                >
                  <div>
                    <div className="text-sm text-cyan-300/90 mb-2 font-medium">QUANTITY</div>
                    <div className="flex items-center gap-2 bg-gray-900/50 rounded-lg p-1 border border-cyan-500/30">
                      <motion.button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(6,182,212,0.3)" }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-cyan-900/40 text-cyan-300"
                      >
                        <span className="text-base">-</span>
                      </motion.button>
                      <motion.span 
                        className="w-8 text-center font-bold text-base"
                        key={quantity}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring" }}
                      >
                        {quantity}
                      </motion.span>
                      <motion.button 
                        onClick={() => setQuantity(quantity + 1)}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(6,182,212,0.3)" }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-cyan-900/40 text-cyan-300"
                      >
                        <span className="text-base">+</span>
                      </motion.button>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-cyan-300/90 font-medium">TOTAL PRICE</div>
                    <div className="text-xl font-bold text-white">
                      ${(parseFloat(activeSize.price.replace('$', '').replace(',', '')) * quantity).toFixed(2)}
                    </div>
                  </div>
                </motion.div>

                <motion.button 
                  onClick={handlePurchasingPower}
                  whileHover={{ scale: 1.05, color: "#67e8f9" }}
                  className="w-full text-center text-cyan-400 hover:text-cyan-300 text-sm transition-colors font-medium"
                >
                  {showPurchasingPower ? "HIDE PURCHASING POWER" : "CHECK PURCHASING POWER"}
                </motion.button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34,211,238,0.3)" }}
                    whileTap={{ scale: 0.97 }}
                    disabled={activeSize.availability === "sold-out"}
                    onClick={() => activeSize.availability !== "sold-out" && handleExternalLink(
                      activeTab === 'flat' ? EXTERNAL_URLS.flatAddToCart : EXTERNAL_URLS.bubbleAddToCart
                    )}
                    className={`text-white py-3 rounded-xl text-base font-bold transition-all ${
                      activeSize.availability === "sold-out"
                        ? 'bg-gray-700 cursor-not-allowed'
                        : 'bg-gradient-to-r from-cyan-600/90 to-blue-500/90 hover:opacity-90 border border-cyan-500/40'
                    }`}
                  >
                    {activeSize.availability === "sold-out" ? "SOLD OUT" : "ADD TO CART"}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(6,182,212,0.3)" }}
                    whileTap={{ scale: 0.97 }}
                    disabled={activeSize.availability === "sold-out"}
                    onClick={() => activeSize.availability !== "sold-out" && handleExternalLink(
                      activeTab === 'flat' ? EXTERNAL_URLS.flatBuyNow : EXTERNAL_URLS.bubbleBuyNow
                    )}
                    className={`backdrop-blur-sm border-2 py-3 rounded-xl text-base font-bold transition-all ${
                      activeSize.availability === "sold-out"
                        ? 'border-gray-600 text-gray-400 cursor-not-allowed'
                        : 'border-cyan-500/40 text-white hover:bg-cyan-900/30'
                    }`}
                  >
                    BUY NOW
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Video Gallery */}
      <section className="py-16 px-4 md:px-6" id="install">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <motion.div 
              className="inline-flex items-center gap-4 mb-6"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Snowflake className="w-6 h-6 text-cyan-400" />
              </motion.div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              INSTALLATION GUIDES
            </h2>
            <p className="text-base text-cyan-100/90 max-w-2xl mx-auto font-light">
              Watch step-by-step installation videos to install your Glacier View windows like a professional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {installationVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative overflow-hidden rounded-2xl border-2 border-cyan-500/30 bg-gray-900/40 backdrop-blur-sm glacier-glass"
              >
              <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden">
                  {activeVideo === video.id ? (
                    <iframe
                      src={video.src}
                      className="absolute inset-0 w-full h-full object-cover"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      title={video.title}
                      style={{ border: 'none' }}
                    ></iframe>
                  ) : (
                    <motion.button 
                      onClick={() => setActiveVideo(video.id)}
                      className="absolute inset-0 w-full h-full cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                          className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-lg border-2 border-cyan-400/30 flex items-center justify-center"
                          whileHover={{ scale: 1.15 }}
                          animate={{ 
                            scale: [1, 1.08, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          <Play className="w-8 h-8 text-white/90" />
                        </motion.div>
                      </div>
                    </motion.button>
                  )}
                </div>
                
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <video.Icon className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-base font-bold text-white line-clamp-1">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-gray-950/80 via-blue-950/80 to-cyan-950/80" id="features">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <motion.div 
              className="inline-flex items-center gap-4 mb-6"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Snowflake className="w-6 h-6 text-cyan-400" />
              </motion.div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              PERFORMANCE FEATURES
            </h2>
            <p className="text-base text-cyan-100/90 max-w-2xl mx-auto font-light">
              Superior windows that combine alpine-grade aesthetics, extreme functionality, and military-grade durability.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.03, boxShadow: "0 20px 40px rgba(6,182,212,0.1)" }}
                className="group p-5 rounded-xl bg-gray-900/40 border-2 border-cyan-500/20 hover:border-cyan-500/40 transition-all backdrop-blur-sm glacier-glass"
              >
                <motion.div 
                  className={`mb-4 p-3 rounded-xl bg-gray-900/60 w-fit border border-cyan-500/30 ${advantage.color}`}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.4 }}
                >
                  {advantage.icon}
                </motion.div>
                
                <h3 className="text-lg font-bold mb-3 text-white">
                  {advantage.title}
                </h3>
                <p className="text-sm text-cyan-100/90 leading-relaxed font-light">
                  {advantage.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 px-4 md:px-6" id="specs">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              TECHNICAL SPECIFICATIONS
            </h2>
            <p className="text-base text-cyan-100/90 font-light">
              Built with premium materials and engineered for lasting performance in extreme conditions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border-2 border-cyan-500/30 bg-gray-900/40 backdrop-blur-sm glacier-glass"
          >
            {technicalSpecs.map((spec, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: index % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-start md:items-center p-4 ${
                  index !== technicalSpecs.length - 1 ? 'border-b border-cyan-500/20' : ''
                }`}
              >
                <div className="md:w-2/5 p-3 font-bold text-cyan-300/90 text-sm">
                  {spec.label}
                </div>
                <div className="md:w-3/5 p-3 font-semibold text-white text-sm">
                  {spec.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Shipping & Warranty */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Truck className="w-6 h-6" />,
                title: "FREE SHIPPING",
                description: "Free shipping on orders over $500. Fast and secure delivery across North America.",
                color: "text-cyan-400",
                delay: 0.1,
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "5-YEAR WARRANTY",
                description: "Comprehensive warranty covering materials and workmanship. Peace of mind guaranteed.",
                color: "text-blue-400",
                delay: 0.2,
              },
              {
                icon: <RotateCcw className="w-6 h-6" />,
                title: "30-DAY RETURNS",
                description: "Hassle-free returns within 30 days. No questions asked, full refund guaranteed.",
                color: "text-cyan-300",
                delay: 0.3,
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="p-6 rounded-2xl bg-gray-900/40 border-2 border-cyan-500/20 text-center backdrop-blur-sm glacier-glass"
              >
                <motion.div 
                  className={`${item.color} mb-5 inline-block p-4 rounded-xl bg-gray-900/60 border-2 border-cyan-500/30`}
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: index * 0.8 }}
                >
                  {item.icon}
                </motion.div>
                
                <h3 className="text-lg font-bold mb-3 text-white">
                  {item.title}
                </h3>
                
                <p className="text-sm text-cyan-100/90 font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Mountain className="w-8 h-8 text-cyan-400" />
            </motion.div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </motion.div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            READY TO SUMMIT WITH GLACIER VIEW?
          </h2>
          
          <p className="text-base text-cyan-100/90 mb-8 max-w-lg mx-auto leading-relaxed font-light">
            Join thousands of van lifers and adventure seekers who trust Glacier View for superior alpine-grade windows.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(34,211,238,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleExternalLink(EXTERNAL_URLS.shopAll)}
              className="bg-gradient-to-r from-cyan-600/90 to-blue-500/90 text-white px-8 py-4 rounded-xl text-base font-bold hover:opacity-90 transition-all border-2 border-cyan-500/40 backdrop-blur-sm"
            >
              SHOP ALL WINDOWS
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(6,182,212,0.3)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleExternalLink(EXTERNAL_URLS.contact)}
              className="bg-gray-900/60 border-2 border-cyan-500/30 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-cyan-900/40 transition-all backdrop-blur-sm"
            >
              CONTACT SALES
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 text-white pt-12 pb-8 border-t-2 border-cyan-500/30 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Snowflake className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                  <h2 className="text-xl font-bold glacier-text"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      letterSpacing: '0.1em',
                    }}
                  >
                    GLACIER VIEW
                  </h2>
                </div>
                <p className="text-cyan-100/90 text-sm leading-relaxed font-light">
                  Premium alpine-grade windows for van conversions, engineered for extreme adventure and built to withstand the harshest conditions.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold mb-4 text-white flex items-center gap-3"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                QUICK LINKS
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "About Us", url: EXTERNAL_URLS.aboutUs },
                  { label: "Van Components", url: EXTERNAL_URLS.shopAll },
                  { label: "FAQ", url: EXTERNAL_URLS.faq },
                  { label: "Blog", url: EXTERNAL_URLS.blog },
                  { label: "Contact Us", url: EXTERNAL_URLS.contact }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      onClick={(e) => { e.preventDefault(); handleExternalLink(link.url); }}
                      className="text-cyan-100/90 hover:text-white transition-colors text-sm flex items-center gap-3 font-light"
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 rounded-full bg-cyan-500/60"
                        whileHover={{ scale: 1.5 }}
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold mb-4 text-white flex items-center gap-3"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                SUPPORT
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: <FileText className="w-4 h-4" />, label: "Terms of Service", url: EXTERNAL_URLS.terms },
                  { icon: <RotateCcw className="w-4 h-4" />, label: "Return Policy", url: EXTERNAL_URLS.returnPolicy },
                  { icon: <Shield className="w-4 h-4" />, label: "Privacy Policy", url: EXTERNAL_URLS.privacy }
                ].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.url} 
                      onClick={(e) => { e.preventDefault(); handleExternalLink(item.url); }}
                      className="text-cyan-100/90 hover:text-white transition-colors text-sm flex items-center gap-3 font-light"
                    >
                      <div className="text-cyan-400/70">
                        {item.icon}
                      </div>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold mb-4 text-white flex items-center gap-3"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                CONTACT
              </h3>
              <div className="space-y-3">
                <div>
                  <a 
                    href="https://maps.app.goo.gl/EWdpTc99DdqgWbLc8" 
                    onClick={(e) => { e.preventDefault(); handleExternalLink('https://maps.app.goo.gl/EWdpTc99DdqgWbLc8'); }}
                    className="text-cyan-100/90 hover:text-white transition-colors text-sm flex items-start gap-3 font-light"
                  >
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-400/70" />
                    <span>320 W Big Bear Blvd, Big Bear City, CA</span>
                  </a>
                </div>
                <div>
                  <a 
                    href="mailto:help.vankea@gmail.com" 
                    className="text-cyan-100/90 hover:text-white transition-colors text-sm flex items-center gap-3 font-light"
                  >
                    <Mail className="w-4 h-4 text-cyan-400/70" />
                    <span>help.vankea@gmail.com</span>
                  </a>
                </div>
                <div>
                  <a 
                    href="tel:+19514419719" 
                    className="text-cyan-100/90 hover:text-white transition-colors text-sm flex items-center gap-3 font-light"
                  >
                    <Phone className="w-4 h-4 text-cyan-400/70" />
                    <span>+1 (951) 441-9719</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8 pt-8 border-t border-cyan-500/30"
          >
            <div className="max-w-md mx-auto text-center">
              <form onSubmit={handleEmailSubmit} className="relative">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for updates"
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border-2 border-cyan-500/30 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-500 text-sm backdrop-blur-sm"
                    style={{
                      fontFamily: "'Montserrat', sans-serif"
                    }}
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-600/90 to-blue-500/90 text-white px-4 py-2 rounded-lg text-sm font-bold border-2 border-cyan-500/40"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    SUBSCRIBE
                  </button>
                </div>
                {emailSubmitted && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-cyan-400 text-sm mt-3 font-medium"
                    style={{
                      fontFamily: "'Montserrat', sans-serif"
                    }}
                  >
                    Thank you for subscribing to Glacier View updates!
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center pt-8 border-t border-cyan-500/30"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-cyan-300/70 text-sm font-light"
                style={{
                  fontFamily: "'Montserrat', sans-serif"
                }}
              >
                <span>© 2025 GLACIER VIEW — ALPINE-GRADE WINDOWS</span>
                <span className="mx-3 text-cyan-500/40">|</span>
                <a 
                  href="https://www.shopify.com" 
                  onClick={(e) => { e.preventDefault(); handleExternalLink('https://www.shopify.com'); }}
                  className="hover:text-white transition-colors"
                >
                  POWERED BY SHOPIFY
                </a>
              </div>
              <div className="flex gap-4 text-cyan-500 text-sm font-light" style={{
                fontFamily: "'Montserrat', sans-serif"
              }}>
                <a href="#" className="hover:text-white transition-colors">TERMS</a>
                <span className="text-white/30">•</span>
                <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
        
        /* Ultimate Glacier Text Effect */
        .glacier-text {
          background: linear-gradient(135deg, 
            #e0f2fe 0%, 
            #bae6fd 10%, 
            #7dd3fc 25%, 
            #38bdf8 40%, 
            #0ea5e9 55%, 
            #0284c7 70%, 
            #0369a1 85%, 
            #075985 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 300% auto;
          animation: glacierShine 5s ease-in-out infinite alternate;
          text-shadow: 
            0 0 30px rgba(6, 182, 212, 0.15),
            0 0 60px rgba(6, 182, 212, 0.1),
            0 0 90px rgba(6, 182, 212, 0.05);
        }
        
        @keyframes glacierShine {
          0% {
            background-position: 0% 50%;
            text-shadow: 
              0 0 30px rgba(6, 182, 212, 0.15),
              0 0 60px rgba(6, 182, 212, 0.1),
              0 0 90px rgba(6, 182, 212, 0.05);
          }
          100% {
            background-position: 100% 50%;
            text-shadow: 
              0 0 40px rgba(6, 182, 212, 0.25),
              0 0 80px rgba(6, 182, 212, 0.15),
              0 0 120px rgba(6, 182, 212, 0.08);
          }
        }
        
        /* Glacier Glass Effect */
        .glacier-glass {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(30px) saturate(200%);
          -webkit-backdrop-filter: blur(30px) saturate(200%);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }
        
        /* Ice Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.3);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #22d3ee 0%, #3b82f6 50%, #22d3ee 100%);
          border-radius: 4px;
          animation: scrollbarGlow 3s ease-in-out infinite;
          border: 1px solid rgba(34, 211, 238, 0.3);
        }
        
        @keyframes scrollbarGlow {
          0%, 100% {
            box-shadow: 0 0 8px rgba(34, 211, 238, 0.4);
          }
          50% {
            box-shadow: 0 0 15px rgba(34, 211, 238, 0.7);
          }
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #06b6d4 0%, #1d4ed8 50%, #06b6d4 100%);
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.6);
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Glacier Selection */
        ::selection {
          background: rgba(6, 182, 212, 0.4);
          color: white;
          text-shadow: none;
        }
        
        ::-moz-selection {
          background: rgba(6, 182, 212, 0.4);
          color: white;
          text-shadow: none;
        }
        
        /* Aurora Flow Effect */
        .aurora-flow {
          background: linear-gradient(45deg, 
            rgba(6, 182, 212, 0.05) 0%, 
            rgba(59, 130, 246, 0.06) 15%, 
            rgba(147, 51, 234, 0.04) 30%, 
            rgba(236, 72, 153, 0.03) 45%, 
            rgba(6, 182, 212, 0.05) 60%, 
            rgba(59, 130, 246, 0.06) 75%, 
            rgba(147, 51, 234, 0.04) 90%, 
            rgba(6, 182, 212, 0.05) 100%
          );
          background-size: 400% 400%;
          animation: auroraFlow 30s ease infinite;
        }
        
        @keyframes auroraFlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 25%;
          }
          50% {
            background-position: 50% 100%;
          }
          75% {
            background-position: 25% 0%;
          }
        }
        
        /* Ice Grid Pattern */
        .ice-grid {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.04) 1px, transparent 1px);
          background-size: 80px 80px;
          animation: iceGridPulse 8s ease-in-out infinite;
        }
        
        @keyframes iceGridPulse {
          0%, 100% {
            opacity: 0.06;
          }
          50% {
            opacity: 0.12;
          }
        }
        
        /* Ice Glow Effect */
        .ice-glow {
          position: relative;
          overflow: hidden;
        }
        
        .ice-glow::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, 
            transparent, 
            rgba(34, 211, 238, 0.2), 
            rgba(59, 130, 246, 0.2), 
            rgba(34, 211, 238, 0.2), 
            transparent
          );
          border-radius: inherit;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .ice-glow:hover::before {
          opacity: 1;
          animation: iceGlowMove 4s linear infinite;
        }
        
        @keyframes iceGlowMove {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 300% 300%;
          }
        }
        
        /* Frost Shimmer Effect */
        .frost-shimmer {
          position: relative;
          overflow: hidden;
        }
        
        .frost-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.1), 
            transparent
          );
          animation: frostShimmer 4s infinite;
        }
        
        @keyframes frostShimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        
        /* Crystal Shine Effect */
        .crystal-shine {
          position: relative;
          overflow: hidden;
        }
        
        .crystal-shine::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to bottom right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.06) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(30deg);
          animation: crystalShine 5s infinite;
        }
        
        @keyframes crystalShine {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(30deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(30deg);
          }
        }
        
        /* Snowfall Effect */
        .snowfall {
          position: absolute;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          filter: blur(0.4px);
          animation: snowfall linear infinite;
        }
        
        @keyframes snowfall {
          0% {
            transform: translateY(-100%) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(40px) rotate(360deg);
            opacity: 0;
          }
        }
        
        /* Ice Border Effect */
        .ice-border {
          border: 2px solid transparent;
          background: linear-gradient(black, black) padding-box,
                      linear-gradient(45deg, #22d3ee, #3b82f6, #22d3ee) border-box;
          background-size: 300% 300%;
          animation: iceBorder 4s ease infinite;
        }
        
        @keyframes iceBorder {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        /* Ice Pulse Effect */
        .ice-pulse {
          animation: icePulse 2s ease-in-out infinite;
        }
        
        @keyframes icePulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.15);
            opacity: 1;
          }
        }
        
        /* Glacier Drift Effect */
        .glacier-drift {
          animation: glacierDrift 25s ease-in-out infinite;
        }
        
        @keyframes glacierDrift {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(15px, -8px) rotate(1.5deg);
          }
          50% {
            transform: translate(-8px, 12px) rotate(-1.5deg);
          }
          75% {
            transform: translate(12px, 8px) rotate(0.8deg);
          }
        }
        
        /* Ice Stream Effect */
        .ice-stream {
          animation: iceStream 3s linear infinite;
        }
        
        @keyframes iceStream {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10%, 90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
        
        /* Ice Bloom Effect */
        .ice-bloom {
          animation: iceBloom 6s ease-in-out infinite;
        }
        
        @keyframes iceBloom {
          0%, 100% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.3;
          }
        }
        
        /* Crystal Spin Effect */
        .crystal-spin {
          animation: crystalSpin 20s linear infinite;
        }
        
        @keyframes crystalSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        /* Ice Fracture Effect */
        .ice-fracture {
          position: relative;
        }
        
        .ice-fracture::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, 
            transparent 40%, 
            rgba(255, 255, 255, 0.15) 50%, 
            transparent 60%
          );
          background-size: 300% 100%;
          animation: iceFracture 3s linear infinite;
        }
        
        @keyframes iceFracture {
          0% {
            background-position: 300% 0;
          }
          100% {
            background-position: -300% 0;
          }
        }
        
        /* Smooth transitions */
        * {
          transition: background-color 0.3s ease, 
                     border-color 0.3s ease, 
                     transform 0.3s ease, 
                     box-shadow 0.3s ease,
                     opacity 0.3s ease;
        }
        
        /* Performance optimization */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Print styles */
        @media print {
          .glacier-glass,
          .ice-glow::before,
          .frost-shimmer::after,
          .crystal-shine::after {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}