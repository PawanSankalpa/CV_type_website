import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ContactModal from '../components/contact/ContactModal';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import ProjectDetail from '../pages/ProjectDetail';

const AppRouter = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <BrowserRouter>
      <Layout onContactOpen={() => setIsContactOpen(true)}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
        </Routes>
      </Layout>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </BrowserRouter>
  );
};

export default AppRouter;
