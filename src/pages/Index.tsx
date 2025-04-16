
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Team from '@/components/Team';
import CTA from '@/components/CTA';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
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
