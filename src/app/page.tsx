import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Statistics from '@/components/Statistics';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import ClientLogos from '@/components/ClientLogos';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <Statistics />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <ClientLogos />
        <Team />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
