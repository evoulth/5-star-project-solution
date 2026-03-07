import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Star,
  Menu,
  X,
  ChevronRight,
  Clock,
  Shield,
  Users,
  ArrowRight,
  Home,
  Building2,
  Dumbbell,
  Sparkles,
  Wind,
  Droplets,
  Waves,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    id: 'sweep',
    title: 'Sweep, Mop & Vacuum Floors',
    description: 'Thorough cleaning of all floor surfaces using professional equipment for a spotless finish.',
    icon: <Droplets className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'disinfect',
    title: 'Disinfect High-Touch Surfaces',
    description: 'Specialized sanitization of door handles, light switches, and all frequently touched areas.',
    icon: <Shield className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'restroom',
    title: 'Restroom & Common Area Cleaning',
    description: 'Complete hygiene maintenance of sanitary facilities and shared residential spaces.',
    icon: <CheckCircle2 className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hygiene',
    title: 'Maintain Hygiene Standards',
    description: 'Continuous monitoring and maintenance to ensure the highest levels of property hygiene.',
    icon: <Sparkles className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Excellent cleaning service! My house looks brand new. The team was professional and very thorough with every corner.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Office Manager',
    content: 'We have been using 5 Star Project Solution for our office for 6 months. Reliable, efficient, and always consistent.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Condo Resident',
    content: 'The deep cleaning service exceeded my expectations. They even managed to remove stains I thought were permanent!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=emily'
  }
];



const FAQS: FAQ[] = [
  {
    question: 'How long does a typical cleaning take?',
    answer: 'A standard house cleaning usually takes between 2 to 4 hours depending on the size of the home and the level of cleaning required.'
  },
  {
    question: 'Do you bring your own cleaning supplies?',
    answer: 'Yes, we bring all professional-grade equipment and eco-friendly cleaning solutions. If you have specific products you prefer us to use, just let us know!'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We currently serve the entire metropolitan area and surrounding suburbs within a 30-mile radius.'
  },
  {
    question: 'Are your cleaners insured and background checked?',
    answer: 'Absolutely. All our staff undergo rigorous background checks and are fully insured for your peace of mind.'
  }
];

// --- Components ---

const HERO_IMAGES = [
  '/assets/hero-1.jpeg',
  '/assets/hero-2.jpeg',
  '/assets/hero-3.jpeg'
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-transparent py-5">
      <div className="w-full px-4 md:px-8 flex justify-between items-start">
        <div className="flex items-center">
          <a href="#" className="flex items-center transition-all">
            <img src="/assets/WhatsApp Image 2026-03-06 at 10.37.10 PM.png" alt="5 Star Project Solution" className="h-16 md:h-20 w-auto logo-glow" />
          </a>
        </div>

        {/* Call to Action Button */}
      </div>
    </nav>
  );
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={HERO_IMAGES[currentImage]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            alt="Professional Cleaning"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 md:pt-28">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <div className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/30 px-4 py-1 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-brand-white" />
            <span className="text-sm font-medium text-brand-white font-bold">Trusted by 500+ Clients</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Professional Cleaning Services <span className="text-brand-blue-light">You Can Trust</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 md:mb-10 max-w-lg">
            Residential & Commercial cleaning solutions tailored to your needs. Experience a spotless environment with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto">
              Book a Cleaning <ArrowRight className="w-4 h-4" />
            </a>

          </div>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6 rounded-2xl flex gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-blue">10k+</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider">Cleanings</div>
          </div>
          <div className="w-px bg-slate-200"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-blue">99%</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider">Satisfaction</div>
          </div>
          <div className="w-px bg-slate-200"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-blue">50+</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider">Experts</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Comprehensive Cleaning Solutions</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From cozy apartments to large corporate offices, we provide top-tier cleaning services designed to make your space shine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-2xl shadow-lg text-brand-blue icon-bounce group-hover:shadow-brand-blue/20 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-brand-blue mb-3 group-hover:text-brand-blue-dark transition-colors">{service.title}</h4>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <a href="#booking" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-blue-dark transition-colors group-hover:gap-3">
                  Learn More <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const benefits = [
    { icon: <Users className="w-10 h-10" />, title: 'Experienced Cleaners', desc: 'Our team is highly trained and background-checked for your safety.' },
    { icon: <Shield className="w-10 h-10" />, title: 'Eco-Friendly Products', desc: 'We use non-toxic, sustainable products that are safe for kids and pets.' },
    { icon: <Clock className="w-10 h-10" />, title: '24/7 Support', desc: 'Our customer service team is always available to help with your needs.' },
    { icon: <CheckCircle2 className="w-10 h-10" />, title: 'Satisfaction Guaranteed', desc: 'Not happy? We will come back and re-clean for free within 24 hours.' }
  ];

  return (
    <section id="why-us" className="section-padding">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
              alt="Cleaning Team"
              className="rounded-[40px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-brand-blue p-8 rounded-[30px] shadow-xl text-white hidden md:block">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-sm font-medium opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-brand-blue font-semibold tracking-widest uppercase mb-4">Why Choose Us</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-blue mb-8">We Provide The Best Cleaning Experience</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex flex-col gap-4 group p-6 rounded-3xl hover:bg-brand-blue-light transition-all duration-300 cursor-default">
                <div className="text-brand-blue transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 w-fit">{benefit.icon}</div>
                <h4 className="text-xl font-bold text-brand-blue group-hover:text-brand-blue-dark transition-colors">{benefit.title}</h4>
                <p className="text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - container.left) / container.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section id="gallery" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-semibold tracking-widest uppercase mb-4">Results</h2>
          <h3 className="text-4xl font-bold text-brand-blue">Before & After Gallery</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative h-[500px] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            {/* After Image */}
            <img
              src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1200"
              alt="After Cleaning"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=1200"
                alt="Before Cleaning"
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-75"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-blue">
                <ChevronDown className="w-6 h-6 rotate-90" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-bold">BEFORE</div>
            <div className="absolute bottom-6 right-6 bg-brand-blue/80 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-bold">AFTER</div>
          </div>
          <p className="text-center mt-8 text-slate-500 italic">Drag the slider to see the transformation</p>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-semibold tracking-widest uppercase mb-4">Testimonials</h2>
          <h3 className="text-4xl font-bold text-brand-blue">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 relative hover-lift hover:border-brand-blue/20 transition-all duration-300 cursor-default">
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-blue text-brand-blue" />
                ))}
              </div>
              <p className="text-slate-600 text-lg mb-8 italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-brand-blue">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'house',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking request sent! We will contact you shortly.');
  };

  return (
    <section id="booking" className="section-padding">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-brand-blue font-semibold tracking-widest uppercase mb-4">Book Now</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-blue mb-8">Schedule Your Professional Cleaning</h3>
          <p className="text-slate-600 text-lg mb-10">
            Ready for a spotless space? Fill out the form and our team will confirm your appointment within 2 hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-brand-blue-light p-4 rounded-2xl text-brand-blue">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium">Call or WhatsApp</div>
                <div className="text-xl font-bold text-brand-blue">8577 2741</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-brand-blue-light p-4 rounded-2xl text-brand-blue">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium">Email Us</div>
                <div className="text-xl font-bold text-brand-blue">hello@5starcleaning.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    placeholder="8298 5418"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Service Type</label>
                <select
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all appearance-none"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Preferred Date</label>
                  <input
                    type="date"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Preferred Time</label>
                  <input
                    type="time"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
              </div>
              <button type="submit" className="w-full btn-secondary py-5 text-lg">
                Schedule Cleaning
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-semibold tracking-widest uppercase mb-4">FAQ</h2>
          <h3 className="text-4xl font-bold text-brand-blue">Common Questions</h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="text-lg font-bold text-brand-blue">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const posts = [
    { title: '10 Tips for a Healthier Home', date: 'March 1, 2024', image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=400' },
    { title: 'Why Eco-Friendly Cleaning Matters', date: 'Feb 25, 2024', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=400' },
    { title: 'How to Maintain Your Office Hygiene', date: 'Feb 20, 2024', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=400' }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-brand-blue font-semibold tracking-widest uppercase mb-4">Blog</h2>
            <h3 className="text-4xl font-bold text-brand-blue">Cleaning Tips & News</h3>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-brand-blue font-bold hover:text-brand-blue-dark">
            View All Posts <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-64 rounded-[30px] overflow-hidden mb-6">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="text-slate-400 text-sm mb-2">{post.date}</div>
              <h4 className="text-xl font-bold text-brand-blue group-hover:text-brand-blue-dark transition-colors">{post.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center">
              <a href="#" className="flex items-center p-2 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <img src="/assets/WhatsApp Image 2026-03-06 at 10.37.10 PM.png" alt="5 Star Project Solution" className="h-14 w-auto logo-glow rounded-xl" />
              </a>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Providing professional cleaning services with trained staff and modern equipment. Your satisfaction is our top priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-brand-blue-light hover:text-brand-blue transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-brand-blue-light hover:text-brand-blue transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-brand-blue-light hover:text-brand-blue transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-brand-blue-light hover:text-brand-blue transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand-green transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-brand-green transition-colors">Our Services</a></li>
              <li><a href="#pricing" className="hover:text-brand-green transition-colors">Pricing Plans</a></li>
              <li><a href="#booking" className="hover:text-brand-green transition-colors">Book a Cleaning</a></li>
              <li><a href="#faq" className="hover:text-brand-green transition-colors">Common Questions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand-green transition-colors">House Cleaning</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Office Cleaning</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Deep Cleaning</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Carpet Cleaning</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Pressure Washing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Contact Info</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex gap-4">
                <MapPin className="w-6 h-6 text-brand-green shrink-0" />
                <span>123 Cleaning St, Suite 100<br />Metropolis, NY 10001</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-6 h-6 text-brand-green shrink-0" />
                <span>8577 2741</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-6 h-6 text-brand-green shrink-0" />
                <span>hello@5starcleaning.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© 2024 5 Star Project Solution. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/85772741"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="w-8 h-8"
      >
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
      </svg>
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-4 py-2 rounded-xl shadow-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
};

export default function App() {
  return (
    <div className="relative font-sans text-slate-900 bg-slate-900">
      <Navbar />
      <div className="sticky top-0 z-0 h-[90vh] w-full">
        <Hero />
      </div>
      <main className="relative z-10 w-full bg-white shadow-2xl">
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <BookingForm />
        <FAQSection />
        <Blog />
        <Footer />
      </main>
      <div className="relative z-[100]">
        <WhatsAppButton />
      </div>
    </div>
  );
}
