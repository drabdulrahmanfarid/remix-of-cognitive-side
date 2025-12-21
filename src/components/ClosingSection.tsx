import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ArrowUpRight, Calendar, MessageCircle, Send } from 'lucide-react';
import { Suspense, lazy, useState } from 'react';
import { Button } from './ui/button';

const NeonRaymarcher = lazy(() => import('./ui/neon-raymarcher'));

const budgetOptions = [
  { value: '', label: 'Select budget range' },
  { value: 'under-5k', label: 'Less than €5,000' },
  { value: '5k-10k', label: '€5,000 - €10,000' },
  { value: '10k-20k', label: '€10,000 - €20,000' },
  { value: '20k-40k', label: '€20,000 - €40,000' },
  { value: 'over-40k', label: '€40,000+' }
];

interface FormData {
  name: string;
  email: string;
  company: string;
  website: string;
  phone: string;
  budget: string;
  message: string;
  privacy: boolean;
}

const ClosingSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    website: '',
    phone: '',
    budget: '',
    message: '',
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        phone: '',
        budget: '',
        message: '',
        privacy: false
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const handleBookCall = () => {
    window.open('https://calendly.com/cognitiveside', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/message', '_blank');
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent-aqua/50 focus:ring-1 focus:ring-accent-aqua/20 transition-all duration-300 backdrop-blur-sm";

  return (
    <section id="contact" ref={ref} className="py-32 md:py-48 px-6 relative overflow-hidden">
      {/* 3D Raymarcher Background */}
      <div className="absolute inset-0 opacity-40">
        <Suspense fallback={<div className="absolute inset-0 grid-pattern opacity-30" />}>
          <NeonRaymarcher />
        </Suspense>
      </div>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-background/60" />
      
      {/* Availability Status - Top Right */}
      <motion.div
        className="absolute top-8 right-8 z-10 flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.5, 0, 0, 1] }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
        </span>
        <span className="text-sm text-muted-foreground font-medium">
          Available for projects
        </span>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.5, 0, 0, 1] }}
          className="block font-medium tracking-widest uppercase text-primary mb-4 text-center text-3xl"
        >
          Contact Us
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.5, 0, 0, 1] }}
          className="text-4xl md:text-5xl font-bold text-foreground text-center mb-6"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.5, 0, 0, 1] }}
          className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16"
        >
          Have a project in mind? Let's create something exceptional together.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.5, 0, 0, 1] }}
            className="space-y-5 p-8 rounded-2xl bg-card/30 backdrop-blur-xl border border-border"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className={inputClasses}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className={inputClasses}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={inputClasses}
                  placeholder="Company name"
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-foreground mb-2">
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className={inputClasses}
                  placeholder="https://yoursite.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={inputClasses}
                  placeholder="+1 234 567 890"
                />
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className={inputClasses}
                >
                  {budgetOptions.map(option => (
                    <option key={option.value} value={option.value} className="bg-card">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Project Description *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className={inputClasses + " resize-none"}
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                required
                checked={formData.privacy}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 rounded border-border bg-card text-primary focus:ring-accent-aqua/20"
              />
              <label htmlFor="privacy" className="text-sm text-muted-foreground">
                I agree to the processing of my personal data in accordance with the privacy policy *
              </label>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || submitSuccess}
              className="w-full py-6 text-base font-semibold"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                  />
                  Sending...
                </span>
              ) : submitSuccess ? (
                <span className="flex items-center gap-2">
                  ✓ Message Sent!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Send Message
                  <Send className="w-4 h-4" />
                </span>
              )}
            </Button>
          </motion.form>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.5, 0, 0, 1] }}
            className="space-y-8"
          >
            <div className="p-8 rounded-2xl bg-card/30 backdrop-blur-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Prefer a direct conversation?
              </h3>
              
              <div className="space-y-4">
                <motion.button
                  onClick={handleBookCall}
                  className="w-full group flex items-center gap-4 p-4 rounded-xl border border-border bg-card/30 hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left flex-grow">
                    <span className="block text-foreground font-medium">Book a Strategic Call</span>
                    <span className="text-sm text-muted-foreground">15 min discovery call</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.button>

                <motion.button
                  onClick={handleWhatsApp}
                  className="w-full group flex items-center gap-4 p-4 rounded-xl border border-border bg-card/30 hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left flex-grow">
                    <span className="block text-foreground font-medium">WhatsApp</span>
                    <span className="text-sm text-muted-foreground">Quick chat with our team</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.button>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-card/30 backdrop-blur-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Email Us
              </h3>
              <a
                href="mailto:hello@cognitiveside.com"
                className="text-lg text-accent-aqua hover:text-accent-aqua/80 transition-colors duration-300"
              >
                hello@cognitiveside.com
              </a>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
