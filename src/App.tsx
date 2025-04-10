import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
// import { CaseStudies } from './components/CaseStudies';
// import { Testimonials } from './components/Testimonials';
import { Diffusion } from './components/Diffusion';
import { DiffusionsPage } from './pages/DiffusionsPage';
import { DiffusionPost } from './pages/DiffusionPost';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { PartnerDetails } from './pages/PartnerDetails';
import { SuccessStoriesPage } from './pages/SuccessStoriesPage';
import { SuccessStoryDetails } from './pages/SuccessStoryDetails';
import { AboutPage } from './pages/AboutPage';
import { ServiceDetails } from './pages/ServiceDetails';
import { PricingPage } from './pages/PricingPage';
import { OrganisationsPage } from './pages/OrganisationsPage';
import { EntreprisesPage } from './pages/EntreprisesPage';
import { EventsPage } from './pages/EventsPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogPostDetails } from './pages/BlogPost';
import { EventPost } from './pages/EventPost';
import { useEffect } from 'react';

export default function App() {
  const pathname = window.location.pathname;
  useEffect(function () {
    window.scrollTo(0, 0)
  }, [pathname])
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
              {/* <Testimonials /> */}
              <Contact />
            </>
          } />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogPostDetails />} />
          <Route path="/diffusions" element={<DiffusionsPage />} />
          <Route path="/diffusions/:slug" element={<DiffusionPost />} />
          <Route path="/entreprises" element={<EntreprisesPage />} />
          <Route path="/entreprises/:slug" element={<PartnerDetails />} />
          <Route path="/organisations" element={<OrganisationsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:slug" element={<EventPost />} />
          <Route path="/organisations/:slug" element={<PartnerDetails />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/success-stories/:slug" element={<SuccessStoryDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}