
import { useEffect } from 'react';
import Layout from "@/components/Layout";
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Team from '@/components/Team';
import CTA from '@/components/CTA';
import ContactForm from '@/components/ContactForm';
import PartnerLogos from "@/components/PartnerLogos";
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
      <Layout>
        <Hero />
        <Services />
        <Products />
        <Team />
        <CTA />
        <PartnerLogos />
        <ContactForm />
      </Layout>
  );
};

export default Index;