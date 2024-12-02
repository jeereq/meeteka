import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
// import { CaseStudies } from './components/CaseStudies';
import { Diffusion } from './components/Diffusion';
import { DiffusionsPage } from './pages/DiffusionsPage';
import { DiffusionPost } from './pages/DiffusionPost';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { PartnersPage } from './pages/PartnersPage';
import { PartnerDetails } from './pages/PartnerDetails';
import { SuccessStoriesPage } from './pages/SuccessStoriesPage';
import { SuccessStoryDetails } from './pages/SuccessStoryDetails';
import { AboutPage } from './pages/AboutPage';
import { ServiceDetails } from './pages/ServiceDetails';
import { PricingPage } from './pages/PricingPage';

export default function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              {/* <CaseStudies /> */}
              <Diffusion />
              <Team />
              <Testimonials />
              <Contact />
            </>
          } />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/diffusions" element={<DiffusionsPage />} />
          <Route path="/diffusion/:slug" element={<DiffusionPost />} />
          <Route path="/partenaires" element={<PartnersPage />} />
          <Route path="/partenaires/:slug" element={<PartnerDetails />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/success-stories/:slug" element={<SuccessStoryDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}