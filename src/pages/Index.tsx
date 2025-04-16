
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Team from '@/components/Team';
import CTA from '@/components/CTA';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });

    // Reinitialize AOS after page load to ensure animations work
    window.addEventListener('load', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('load', () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
      <div className="min-h-screen bg-gray-950">
        <Header />
        <Hero />
        <Services />
        <Products />
        <Team />
        <CTA />
        <ContactForm />
        <Footer />
      </div>
  );
};

export default Index;
