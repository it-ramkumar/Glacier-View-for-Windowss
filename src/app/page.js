"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ShieldCheck, Menu, X, ShoppingCart, Truck, Shield, RotateCcw,
  Play, Mail, MapPin, ArrowRight, ArrowUpRight, Check,
  Snowflake, Droplets, Sun, Layers, Maximize2, Lock,
  Plus, Minus, ChevronLeft, ChevronRight,
  Instagram, Facebook, Youtube,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════════════════
   IMAGE PATHS — drop the downloaded images into /public/images/glacier/
   filename pattern is {productKey}-{index}.webp
   ═══════════════════════════════════════════════════════════════════════════ */

const IMG = (key, i) => `/images/glacier/${key}-${i}.webp`;
const imgs = (key, count) => Array.from({ length: count }, (_, i) => IMG(key, i + 1));

/* ═══════════════════════════════════════════════════════════════════════════
   PRODUCT DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const SHOP_BASE = 'https://vanpartsoutlet.com';
const productUrl = (handle) => `${SHOP_BASE}/products/${handle}`;

const FLAT_PRODUCTS = [
  {
    id: 'flat-50x50',
    name: '19.7" × 19.7"',
    metric: '50 × 50 cm',
    use: 'Rear doors, square openings',
    price: 525,
    handle: 'glacier-view-flat-awning-van-window-19-7-x-19-7-50x50cm',
    inventory: 4,
    images: imgs('flat-50x50', 9),
    blurb:
      'Compact, square — designed for rear doors, kitchen builds, and bunk areas where a low-profile awning matters most.',
  },
  {
    id: 'flat-110x45',
    name: '43 3/16" × 15 5/8"',
    metric: '110 × 45 cm',
    use: 'Side panels, panoramic builds',
    price: 715,
    handle: 'glacier-view-flat-awning-van-window-43-3-16-x-15-110x45cm',
    inventory: 6,
    images: imgs('flat-110x45', 8),
    blurb:
      'Panoramic wide-format flat. The "luxury cabin" look — install it on a side panel and the van feels twice as open.',
  },
];

const BUBBLE_PRODUCTS = [
  {
    id: 'bubble-19',
    name: '19.5" × 19.5"',
    metric: '50 × 50 cm',
    use: 'Bunks, cozy living spaces',
    price: 425,
    handle: 'glacier-view-bubble-awning-van-window-19-5-19-5',
    inventory: 6,
    images: imgs('bubble-19', 2),
    blurb:
      'Curved bubble profile that pushes outward — gain real shoulder room in tight spaces. Insulated double-pane construction.',
  },
];

const FLAT_FEATURES = [
  'Flat, low-profile design — looks factory, not RV',
  'Opens outward from the top for all-weather ventilation',
  'Automotive-grade tinted safety glass',
  'Anodized high-strength aluminum frame',
  'Smooth, quiet hinge with multi-point latch',
  'Integrated blackout shade and mosquito net',
  '90° unobstructed opening angle',
];

const BUBBLE_FEATURES = [
  'Curved bubble profile — extra interior elbow room',
  'Awning-style opening for ventilation in rain',
  'Automotive-grade tinted safety glass',
  'Corrosion-resistant reinforced frame',
  'Smooth open/close mechanism',
  'Secure multi-point locking',
  'Acrylic double-pane insulation',
];

const FLUSH_SLIDING = [
  {
    id: 'flush-driver-front',
    name: 'Driver-Side Front',
    sub: 'Cab quarter window',
    price: 639.99,
    handle: 'glacier-view-sprinter-flush-sliding-window-driver-side-front',
    images: imgs('flush-driver-front', 6),
  },
  {
    id: 'flush-rear-driver',
    name: 'Rear Driver Side',
    sub: 'Rear quarter panel',
    price: 639.99,
    handle: 'glacier-view-sprinter-flush-sliding-window-rear-driver-side',
    images: imgs('flush-rear-driver', 7),
  },
  {
    id: 'flush-rear-passenger',
    name: 'Rear Passenger Side',
    sub: 'Rear quarter panel',
    price: 639.99,
    handle: 'glacier-view-sprinter-flush-sliding-window-rear-passenger-side',
    images: imgs('flush-rear-passenger', 6),
  },
  {
    id: 'flush-sliding-door',
    name: 'Passenger Sliding Door',
    sub: 'Side door window',
    price: 639.99,
    handle: 'glacier-view-sprinter-flush-sliding-window-passenger-sliding-door',
    images: imgs('flush-sliding-door', 6),
  },
];

const SOLID_WINDOWS = [
  {
    id: 'solid-170-driver',
    name: '170 Sprinter Mid Driver',
    sub: 'Long wheelbase, driver side',
    price: 285,
    handle: 'glacier-view-170-sprinter-mid-driver-side-solid-window',
    images: imgs('solid-170-driver', 5),
  },
  {
    id: 'solid-170-passenger',
    name: '170 Sprinter Mid Passenger',
    sub: 'Long wheelbase, passenger side',
    price: 285,
    handle: 'glacier-view-170-sprinter-mid-passenger-side-solid-window',
    images: imgs('solid-170-passenger', 5),
  },
  {
    id: 'solid-rear-passenger',
    name: 'Rear Passenger Solid',
    sub: 'Rear quarter, privacy glass',
    price: 279.99,
    handle: 'glacier-view-sprinter-solid-rear-van-window-passenger-side-privacy-glass',
    images: imgs('solid-rear-passenger', 5),
  },
  {
    id: 'solid-passenger-door',
    name: 'Passenger Door Solid',
    sub: 'Cab passenger door',
    price: 279.99,
    handle: 'glacier-view-sprinter-passenger-side-solid-window',
    images: imgs('solid-passenger-door', 5),
  },
];

const FEATURES = [
  {
    icon: <Layers className="w-5 h-5" strokeWidth={1.5} />,
    title: 'Double-Pane Insulation',
    desc: 'Acrylic double-glazed construction reduces thermal transfer and dampens road noise. Warmer in winter, cooler in summer.',
  },
  {
    icon: <Droplets className="w-5 h-5" strokeWidth={1.5} />,
    title: 'Rain-Safe Ventilation',
    desc: 'Vent-locked mode keeps the window cracked for airflow while sealing out rain. No tradeoffs between fresh air and a dry van.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />,
    title: 'Privacy & Pest Protection',
    desc: 'Integrated blackout shades for total privacy. Fine-mesh mosquito nets keep insects out at the trailhead.',
  },
  {
    icon: <Maximize2 className="w-5 h-5" strokeWidth={1.5} />,
    title: '90° Full Opening',
    desc: 'Swings to a full unobstructed 90 degrees — significantly more airflow than standard RV windows.',
  },
  {
    icon: <Sun className="w-5 h-5" strokeWidth={1.5} />,
    title: '83% UV Privacy Tint',
    desc: 'Dark smoke tint cuts glare and UV exposure while preventing visibility from outside. Sleep in, off-grid.',
  },
  {
    icon: <Lock className="w-5 h-5" strokeWidth={1.5} />,
    title: 'Multi-Point Locking',
    desc: 'Secure latching system at multiple points around the frame. Built for highway speeds and rough trails.',
  },
];

const SPECS = [
  ['Frame Material', 'Anodized high-strength aluminum'],
  ['Glass Type', 'Tempered automotive safety glass'],
  ['Glazing', 'Insulated double-pane'],
  ['Mounting', 'Flush surface mount, clamp ring'],
  ['Tint Level', '83% privacy tint, dark smoke'],
  ['Max Opening', '90 degrees'],
  ['Waterproof Rating', 'IPX6'],
  ['Locking System', 'Multi-point latch'],
  ['Installation', 'DIY or professional'],
  ['Compatibility', 'Sprinter, Transit, ProMaster, NV3500'],
];

const INSTALL_VIDEOS = [
  { id: 1, title: 'Cutting the opening', src: 'https://drive.google.com/file/d/1QZNi1mxtuyjSCmOXte3DGECoGZ64ptTY/preview' },
  { id: 2, title: 'Dry-fit & alignment', src: 'https://drive.google.com/file/d/1ZvveWdJKpHKAGm1N28h2wn5qnqmoDO4P/preview' },
  { id: 3, title: 'Sealing & bonding', src: 'https://drive.google.com/file/d/1DydurvWPt2v3EEo9-U3AL9rHxFcaFqeo/preview' },
  { id: 4, title: 'Final clamp & finish', src: 'https://drive.google.com/file/d/1utAXJr1Ve9kCg65TUr3fzRqKjpy4WdaQ/preview' },
];

const LINKS = {
  shopAll: `${SHOP_BASE}/collections/glacier-view`,
  contact: `${SHOP_BASE}/pages/contact`,
  about: `${SHOP_BASE}/pages/about-us`,
  faq: `${SHOP_BASE}/pages/faq`,
  blog: `${SHOP_BASE}/blogs/news`,
  terms: `${SHOP_BASE}/pages/terms-of-service`,
  privacy: `${SHOP_BASE}/pages/privacy-policy`,
  returns: `${SHOP_BASE}/pages/return-policy`,
};

/* ═══════════════════════════════════════════════════════════════════════════
   MOTION
   ═══════════════════════════════════════════════════════════════════════════ */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

/* ═══════════════════════════════════════════════════════════════════════════
   PRODUCT CARD WITH GALLERY
   ═══════════════════════════════════════════════════════════════════════════ */

function ProductCard({ product, features, accent }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const next = () => setImgIndex((i) => (i + 1) % product.images.length);
  const prev = () => setImgIndex((i) => (i - 1 + product.images.length) % product.images.length);

  const total = (product.price * quantity).toFixed(2);

  return (
    <motion.div
      variants={fadeUp}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 lg:py-20 border-b border-white/[0.08] last:border-0"
    >
      {/* gallery */}
      <div className="lg:col-span-7">
        <div className="relative aspect-[4/3] bg-[#0e0e10] rounded-sm overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIndex}
              src={product.images[imgIndex]}
              alt={product.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.opacity = '0.3';
                e.currentTarget.style.background = '#1a1a1d';
              }}
            />
          </AnimatePresence>

          {product.images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* corner labels */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-full">
            <span
              className="text-[10px] tracking-[0.25em] uppercase text-white"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {String(imgIndex + 1).padStart(2, '0')} / {String(product.images.length).padStart(2, '0')}
            </span>
          </div>
          <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-white text-black rounded-full">
            <span
              className="text-[10px] tracking-[0.2em] uppercase font-medium"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {product.metric}
            </span>
          </div>
        </div>

        {/* thumbnails */}
        {product.images.length > 1 && (
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {product.images.map((src, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                className={`flex-shrink-0 w-16 h-16 rounded-sm overflow-hidden border-2 transition-all ${
                  i === imgIndex ? 'border-white' : 'border-white/10 hover:border-white/40'
                }`}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={(e) => (e.currentTarget.style.opacity = '0.2')}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* details */}
      <div className="lg:col-span-5 flex flex-col">
        <div
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase mb-4"
          style={{ color: accent }}
        >
          <span className="w-4 h-px" style={{ background: accent }} />
          {product.use}
        </div>

        <h3
          className="text-3xl lg:text-4xl mb-3 leading-[1.05]"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.02em' }}
        >
          {product.name}
        </h3>

        <p
          className="text-stone-400 mb-8 leading-relaxed"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
        >
          {product.blurb}
        </p>

        {/* features */}
        <div className="grid grid-cols-1 gap-2.5 mb-8">
          {features.slice(0, 5).map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: `${accent}20`, border: `1px solid ${accent}40` }}
              >
                <Check className="w-2.5 h-2.5" strokeWidth={3} style={{ color: accent }} />
              </div>
              <span className="text-sm text-stone-300" style={{ fontWeight: 300 }}>
                {f}
              </span>
            </div>
          ))}
        </div>

        {/* price + quantity */}
        <div className="flex items-end justify-between py-5 border-y border-white/[0.08] mb-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-2">
              Quantity
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span
                className="w-6 text-center text-lg"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-1">
              Total
            </div>
            <div
              className="text-3xl text-white"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
            >
              ${total}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <button
            onClick={() => window.open(productUrl(product.handle), '_blank')}
            className="px-6 py-4 border border-white/20 rounded-full text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-white/5 transition-all"
          >
            Add to Cart
          </button>
          <button
            onClick={() => window.open(productUrl(product.handle), '_blank')}
            className="px-6 py-4 rounded-full text-[11px] tracking-[0.2em] uppercase font-semibold text-black transition-all hover:opacity-90"
            style={{ background: accent }}
          >
            Buy Now
          </button>
        </div>

        <div className="flex items-center gap-2 mt-4 text-[11px] text-stone-500">
          <Truck className="w-3.5 h-3.5" />
          {product.inventory} in stock · Free shipping over $500
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECONDARY PRODUCT TILE (for solid windows on dark bg)
   ═══════════════════════════════════════════════════════════════════════════ */

function ProductTile({ product, accent }) {
  return (
    <motion.button
      variants={fadeUp}
      onClick={() => window.open(productUrl(product.handle), '_blank')}
      className="group text-left bg-[#0e0e10] rounded-sm overflow-hidden hover:bg-[#131316] transition-colors duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0c]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => (e.currentTarget.style.opacity = '0.2')}
        />
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h4
            className="text-lg text-white"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
          >
            {product.name}
          </h4>
          <span
            className="text-sm flex-shrink-0"
            style={{ fontFamily: 'var(--font-mono)', color: accent }}
          >
            ${product.price}
          </span>
        </div>
        <p className="text-xs text-stone-500" style={{ fontWeight: 300 }}>
          {product.sub}
        </p>
      </div>
    </motion.button>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════════════════ */

export default function GlacierViewPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  /* color tokens */
  const ACCENT_AMBER = '#F0B23A'; // primary accent — warm amber/gold
  const ACCENT_ICE = '#A8DCFB'; // secondary accent — ice blue for bubble

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openExt = (url) => window.open(url, '_blank', 'noopener,noreferrer');

  return (
    <div
      className="min-h-screen bg-black text-white antialiased"
      style={{ fontFamily: 'var(--font-body)' }}
    >
      {/* ╔═══════════════════════════════════════════════════════════════════
           NAV
         ═══════════════════════════════════════════════════════════════════ */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/85 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #F0B23A 100%)',
              }}
            >
              <Snowflake className="w-4 h-4 text-black" strokeWidth={2.5} />
            </div>
            <span
              className="text-[14px] tracking-[0.2em] font-semibold uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Glacier View
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-9 text-[13px] text-stone-300">
            {[
              ['Flat Series', 'flat'],
              ['Bubble Series', 'bubble'],
              ['Sprinter Sliding', 'flush'],
              ['Solid Windows', 'solid'],
              ['Features', 'features'],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="hover:text-white transition-colors relative group"
                style={{ fontWeight: 400 }}
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-px bg-white transition-all duration-300 w-0 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openExt(LINKS.shopAll)}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase rounded-full font-semibold text-black transition-all hover:opacity-90"
              style={{ background: ACCENT_AMBER }}
            >
              Shop Collection
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full border border-white/15"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black border-t border-white/[0.06] overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-3">
                {[
                  ['Flat Series', 'flat'],
                  ['Bubble Series', 'bubble'],
                  ['Sprinter Sliding', 'flush'],
                  ['Solid Windows', 'solid'],
                  ['Features', 'features'],
                ].map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="text-left text-stone-300 py-2"
                  >
                    {label}
                  </button>
                ))}
                <button
                  onClick={() => openExt(LINKS.shopAll)}
                  className="mt-3 px-4 py-3 text-[11px] tracking-[0.2em] uppercase font-semibold text-black rounded-full"
                  style={{ background: ACCENT_AMBER }}
                >
                  Shop Full Collection
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ╔═══════════════════════════════════════════════════════════════════
           HERO
         ═══════════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-[100vh] min-h-[720px] overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <img
            src={IMG('flat-110x45', 1)}
            alt="Glacier View Flat Awning Window"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.5) contrast(1.1)' }}
            onError={(e) => {
              e.currentTarget.style.background =
                'linear-gradient(135deg, #0a0a0c, #1a1a1d)';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
        </motion.div>

        {/* accent corner block */}
        <div className="absolute top-24 right-6 lg:right-10 z-10 hidden lg:block">
          <div className="w-32 px-4 py-3 border-l-2" style={{ borderColor: ACCENT_AMBER }}>
            <div className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-1">
              Latitude
            </div>
            <div className="text-sm text-white" style={{ fontFamily: 'var(--font-mono)' }}>
              34.2439° N
            </div>
            <div className="text-sm text-white" style={{ fontFamily: 'var(--font-mono)' }}>
              116.8916° W
            </div>
          </div>
        </div>

        {/* grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col justify-end pb-24 lg:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: ACCENT_AMBER }}
              />
              <span
                className="text-[11px] tracking-[0.35em] uppercase text-stone-400"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Van Parts Outlet · Glacier View
              </span>
            </div>

            <h1
              className="text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.03em] mb-8 text-white"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
            >
              The view from
              <br />
              <span style={{ color: ACCENT_AMBER }}>anywhere.</span>
            </h1>

            <p className="text-stone-300 text-lg leading-relaxed max-w-xl mb-10" style={{ fontWeight: 300 }}>
              Insulated double-pane van windows with rain-safe ventilation, flush
              automotive profiles, and a 90° opening angle. Engineered for Sprinter,
              Transit, ProMaster, and NV3500.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('flat')}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-[12px] tracking-[0.2em] uppercase font-semibold text-black transition-all hover:opacity-90"
                style={{ background: ACCENT_AMBER }}
              >
                Explore the Collection
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => openExt(LINKS.contact)}
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/25 rounded-full text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-white/5 transition-all"
              >
                Speak to Sales
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════════════════
           PILLAR STRIP — WHITE BREAK
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white text-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {[
            { num: '01', title: 'Insulated double-pane', desc: 'Acrylic double glazing for genuine thermal and acoustic isolation.' },
            { num: '02', title: 'Rain-locked ventilation', desc: 'Top-hinged awning lets you sleep with airflow in any weather.' },
            { num: '03', title: 'Flush automotive look', desc: 'Sits clean against the van body — never the boxy RV-trailer look.' },
          ].map((p) => (
            <div key={p.num} className="flex gap-5">
              <span
                className="text-[11px] tracking-[0.2em] mt-1"
                style={{ fontFamily: 'var(--font-mono)', color: '#888' }}
              >
                {p.num}
              </span>
              <div>
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-600" style={{ fontWeight: 300 }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════════════════
           FLAT SERIES
         ═══════════════════════════════════════════════════════════════════ */}
      <section id="flat" className="bg-black py-24 lg:py-32 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          >
            <motion.div variants={fadeUp} className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ background: ACCENT_AMBER }} />
                <span
                  className="text-[11px] tracking-[0.3em] uppercase"
                  style={{ color: ACCENT_AMBER, fontFamily: 'var(--font-mono)' }}
                >
                  Series 01 · Flat Awning
                </span>
              </div>
              <h2
                className="text-[clamp(2.25rem,5vw,4rem)] leading-[1] tracking-[-0.025em] mb-5"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
              >
                Low-profile. <span style={{ color: ACCENT_AMBER }}>Flush.</span>
                <br />
                Built for stealth.
              </h2>
              <p className="text-stone-400 leading-relaxed max-w-xl" style={{ fontWeight: 300 }}>
                Sits clean against the van body so the build reads automotive, not RV.
                Top-hinged awning opens to a full 90° for unmatched airflow.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            {FLAT_PRODUCTS.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                features={FLAT_FEATURES}
                accent={ACCENT_AMBER}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════════════════
           BUBBLE SERIES — subtle blue shift
         ═══════════════════════════════════════════════════════════════════ */}
      <section
        id="bubble"
        className="relative py-24 lg:py-32 px-6 lg:px-10 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0a0a0c 0%, #0d1218 100%)' }}
      >
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: ACCENT_ICE }}
        />

        <div className="max-w-[1400px] mx-auto relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="mb-12 max-w-2xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full" style={{ background: ACCENT_ICE }} />
              <span
                className="text-[11px] tracking-[0.3em] uppercase"
                style={{ color: ACCENT_ICE, fontFamily: 'var(--font-mono)' }}
              >
                Series 02 · Bubble Awning
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2.25rem,5vw,4rem)] leading-[1] tracking-[-0.025em] mb-5"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
            >
              Curved profile. <span style={{ color: ACCENT_ICE }}>Extra room.</span>
              <br />
              Panoramic feel.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-stone-400 leading-relaxed" style={{ fontWeight: 300 }}>
              The bubble pushes outward to add genuine shoulder room in cozy bunk areas
              and lounges. Same rain-safe awning function as the Flat series — just with more space.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            {BUBBLE_PRODUCTS.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                features={BUBBLE_FEATURES}
                accent={ACCENT_ICE}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════════════════
           FEATURES GRID
         ═══════════════════════════════════════════════════════════════════ */}
      <section id="features" className="bg-black py-24 lg:py-32 px-6 lg:px-10 border-y border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="mb-16 max-w-2xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-stone-500" />
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-stone-400"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Engineered Details
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2.25rem,5vw,4rem)] leading-[1] tracking-[-0.025em] mb-5"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
            >
              Six things that
              <br />
              <span style={{ color: ACCENT_AMBER }}>matter most.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]"
          >
            {FEATURES.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-black p-8 lg:p-10 hover:bg-[#0e0e10] transition-colors duration-500"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white">
                    {f.icon}
                  </div>
                  <span
                    className="text-[10px] tracking-[0.2em]"
                    style={{ fontFamily: 'var(--font-mono)', color: ACCENT_AMBER }}
                  >
                    {String(i + 1).padStart(2, '0')} / 06
                  </span>
                </div>
                <h3
                  className="text-2xl mb-3"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
                >
                  {f.title}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed" style={{ fontWeight: 300 }}>
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════════════════
           SPRINTER FLUSH SLIDING — WHITE SECTION
         ═══════════════════════════════════════════════════════════════════ */}
      <section id="flush" className="bg-stone-100 text-black py-24 lg:py-32 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="mb-16 max-w-2xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-black" />
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-stone-600"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Series 03 · Sprinter Flush Sliding
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2.25rem,5vw,4rem)] leading-[1] tracking-[-0.025em] mb-5"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
            >
              Sprinter-specific.
              <br />
              <span className="text-stone-500">OEM-quality flush.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-stone-600 leading-relaxed" style={{ fontWeight: 300 }}>
              Precision-engineered for the Mercedes Sprinter. Each window is shaped to the
              exact contour of its panel — cab, sliding door, or rear quarter — for a true
              factory-quality flush finish.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {FLUSH_SLIDING.map((p) => (
              <motion.button
                key={p.id}
                variants={fadeUp}
                onClick={() => openExt(productUrl(p.handle))}
                className="group text-left bg-white rounded-sm overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => (e.currentTarget.style.opacity = '0.2')}
                  />
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h4 className="text-lg" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                      {p.name}
                    </h4>
                    <span className="text-sm flex-shrink-0" style={{ fontFamily: 'var(--font-mono)' }}>
                      ${p.price}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600" style={{ fontWeight: 300 }}>
                    {p.sub}
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════════════════
           SOLID WINDOWS — BACK TO DARK
         ═══════════════════════════════════════════════════════════════════ */}
      <section id="solid" className="bg-black py-24 lg:py-32 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="mb-16 max-w-2xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-stone-400"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Series 04 · Solid Privacy
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2.25rem,5vw,4rem)] leading-[1] tracking-[-0.025em] mb-5"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
            >
              Fixed glass. <span className="text-white">Pure light.</span>
              <br />
              No moving parts.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-stone-400 leading-relaxed" style={{ fontWeight: 300 }}>
              When you want natural light and a clean exterior without ventilation.
              Solid windows offer the strongest seal, the cleanest look, and the lowest price point.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {SOLID_WINDOWS.map((p) => (
              <ProductTile key={p.id} product={p} accent={ACCENT_AMBER} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════════════════
           SPECIFICATIONS
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0c] py-24 lg:py-32 px-6 lg:px-10 border-y border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-stone-500" />
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-stone-400"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Specifications
              </span>
            </div>
            <h2
              className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1] tracking-[-0.025em] mb-6"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
            >
              The technical
              <br />
              <span style={{ color: ACCENT_AMBER }}>details.</span>
            </h2>
            <p className="text-stone-400 leading-relaxed mb-8" style={{ fontWeight: 300 }}>
              Premium materials and engineered tolerances. Compatible with all major van
              platforms — installable as a DIY project or by a pro outfitter.
            </p>
            <button
              onClick={() => openExt(LINKS.faq)}
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase border-b border-white/30 pb-1 hover:border-white transition-colors"
            >
              Full Documentation
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-white/10">
              {SPECS.map(([label, value], i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.03 }}
                  className="grid grid-cols-12 gap-4 py-5 border-b border-white/10 group hover:bg-white/[0.02] transition-colors px-2 -mx-2"
                >
                  <div
                    className="col-span-1 text-[11px] text-stone-600 tracking-[0.15em] pt-1"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div
                    className="col-span-5 text-[12px] tracking-[0.15em] uppercase text-stone-400"
                    style={{ fontWeight: 500 }}
                  >
                    {label}
                  </div>
                  <div
                    className="col-span-6 text-stone-100"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 500 }}
                  >
                    {value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════════════════
           INSTALLATION VIDEOS
         ═══════════════════════════════════════════════════════════════════ */}
      <section id="install" className="bg-black py-24 lg:py-32 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full" style={{ background: ACCENT_AMBER }} />
              <span
                className="text-[11px] tracking-[0.3em] uppercase"
                style={{ color: ACCENT_AMBER, fontFamily: 'var(--font-mono)' }}
              >
                Installation
              </span>
            </div>
            <h2
              className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1] tracking-[-0.025em] mb-5"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
            >
              Four steps to
              <br />
              <span style={{ color: ACCENT_AMBER }}>a finished install.</span>
            </h2>
            <p className="text-stone-400 leading-relaxed" style={{ fontWeight: 300 }}>
              Glacier View windows install in a single afternoon with standard tools.
              Each guide walks through one stage of the process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INSTALL_VIDEOS.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group"
              >
                <div className="relative aspect-video rounded-sm overflow-hidden bg-[#0e0e10] border border-white/[0.06]">
                  {activeVideo === v.id ? (
                    <iframe
                      src={v.src}
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      title={v.title}
                    />
                  ) : (
                    <button
                      onClick={() => setActiveVideo(v.id)}
                      className="absolute inset-0 w-full h-full flex items-center justify-center"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 to-black" />
                      <div
                        className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                        style={{ background: ACCENT_AMBER, color: '#000' }}
                      >
                        <Play className="w-5 h-5 ml-1" strokeWidth={2} />
                      </div>
                    </button>
                  )}
                </div>
                <div className="flex items-center justify-between mt-4 px-1">
                  <h3 className="text-lg" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                    {v.title}
                  </h3>
                  <span
                    className="text-[10px] tracking-[0.25em]"
                    style={{ fontFamily: 'var(--font-mono)', color: ACCENT_AMBER }}
                  >
                    STEP {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════════════════
           GUARANTEES — light strip
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-stone-100 text-black border-y border-stone-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {[
            { icon: <Truck className="w-5 h-5" strokeWidth={1.5} />, title: 'Free Shipping', desc: 'On orders over $500. Fast, insured delivery across North America.' },
            { icon: <Shield className="w-5 h-5" strokeWidth={1.5} />, title: 'Manufacturer Warranty', desc: 'Comprehensive coverage on materials and workmanship.' },
            { icon: <RotateCcw className="w-5 h-5" strokeWidth={1.5} />, title: 'Easy Returns', desc: 'See our full return policy at vanpartsoutlet.com.' },
          ].map((g, i) => (
            <div key={i} className="flex gap-5 items-start">
              <div className="w-11 h-11 rounded-full border border-stone-300 flex items-center justify-center flex-shrink-0">
                {g.icon}
              </div>
              <div>
                <h3 className="text-lg mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                  {g.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed" style={{ fontWeight: 300 }}>
                  {g.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════════════════
           CLOSING CTA
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-black py-32 lg:py-40 px-6 lg:px-10 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-[0.07] pointer-events-none"
          style={{ background: ACCENT_AMBER }}
        />
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ background: ACCENT_AMBER }} />
            <Snowflake className="w-5 h-5" style={{ color: ACCENT_AMBER }} strokeWidth={1.5} />
            <div className="w-8 h-px" style={{ background: ACCENT_AMBER }} />
          </div>
          <h2
            className="text-[clamp(2.5rem,7vw,5rem)] leading-[1] tracking-[-0.03em] mb-8"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
          >
            Your build deserves
            <br />
            <span style={{ color: ACCENT_AMBER }}>a proper window.</span>
          </h2>
          <p
            className="text-stone-400 leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ fontWeight: 300 }}
          >
            Join the builders, weekend travelers, and full-timers who chose Glacier View
            for windows that look right and hold up.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openExt(LINKS.shopAll)}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-[12px] tracking-[0.2em] uppercase font-semibold text-black transition-all hover:opacity-90"
              style={{ background: ACCENT_AMBER }}
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => openExt(LINKS.contact)}
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/25 rounded-full text-[12px] tracking-[0.2em] uppercase hover:bg-white/5 transition-all"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════════════════════════
           FOOTER
         ═══════════════════════════════════════════════════════════════════ */}
      <footer className="bg-black border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #ffffff 0%, #F0B23A 100%)' }}
                >
                  <Snowflake className="w-4 h-4 text-black" strokeWidth={2.5} />
                </div>
                <span
                  className="text-[14px] tracking-[0.2em] font-semibold uppercase"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Glacier View
                </span>
              </div>
              <p
                className="text-sm text-stone-500 leading-relaxed max-w-sm"
                style={{ fontWeight: 300 }}
              >
                Premium van windows engineered for adventure.
                <br />
                A brand of Van Parts Outlet.
              </p>
            </div>

            <div className="md:col-span-2">
              <h4
                className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-5"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Collection
              </h4>
              <ul className="space-y-3 text-sm text-stone-300" style={{ fontWeight: 300 }}>
                <li><a href={LINKS.shopAll} className="hover:text-white transition-colors">Flat Awning</a></li>
                <li><a href={LINKS.shopAll} className="hover:text-white transition-colors">Bubble Awning</a></li>
                <li><a href={LINKS.shopAll} className="hover:text-white transition-colors">Flush Sliding</a></li>
                <li><a href={LINKS.shopAll} className="hover:text-white transition-colors">Solid Windows</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4
                className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-5"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Company
              </h4>
              <ul className="space-y-3 text-sm text-stone-300" style={{ fontWeight: 300 }}>
                <li><a href={LINKS.about} className="hover:text-white transition-colors">About</a></li>
                <li><a href={LINKS.blog} className="hover:text-white transition-colors">Journal</a></li>
                <li><a href={LINKS.faq} className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href={LINKS.contact} className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4
                className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-5"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Contact
              </h4>
              <div className="space-y-3 text-sm text-stone-300" style={{ fontWeight: 300 }}>
                <a
                  href="mailto:vanpartsoutlet@gmail.com"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-stone-500" />
                  vanpartsoutlet@gmail.com
                </a>
                <a
                  href={SHOP_BASE}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-stone-500" />
                  vanpartsoutlet.com
                </a>
              </div>
              <div className="flex gap-3 mt-6">
                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all"
                  >
                    <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p
              className="text-[11px] text-stone-500 tracking-wide"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              © 2026 Glacier View · Van Parts Outlet
            </p>
            <div className="flex gap-6 text-[11px] text-stone-500 tracking-wide">
              <a href={LINKS.terms} className="hover:text-white transition-colors">Terms</a>
              <a href={LINKS.privacy} className="hover:text-white transition-colors">Privacy</a>
              <a href={LINKS.returns} className="hover:text-white transition-colors">Returns</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ╔═══════════════════════════════════════════════════════════════════
           GLOBAL STYLES + FONTS — modern sans-serif system
           Inter (body) · Space Grotesk (display) · JetBrains Mono (numerals)
         ═══════════════════════════════════════════════════════════════════ */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap');

        :root {
          --font-display: 'Space Grotesk', system-ui, sans-serif;
          --font-body: 'Inter', system-ui, sans-serif;
          --font-mono: 'JetBrains Mono', ui-monospace, monospace;
        }

        html { scroll-behavior: smooth; }
        body {
          font-family: var(--font-body);
          font-feature-settings: 'ss01', 'cv01', 'cv02';
        }

        ::selection {
          background: #F0B23A;
          color: #000;
        }

        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.12);
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.25); }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { scrollbar-width: none; }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
