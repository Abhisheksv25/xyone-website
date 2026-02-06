import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Science from './pages/Science';
import Pipeline from './pages/Pipeline';
import Contact from './pages/Contact';
import News from './pages/News';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/science" element={<Science />} />
            <Route path="/pipeline" element={<Pipeline />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </HashRouter>
  );
};

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = React.useState(true);
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-white border border-gray-200 shadow-2xl rounded-lg p-6 z-50 flex flex-col md:flex-row gap-6 items-center animate-fade-in-up">
      <div className="flex-1">
        <h6 className="font-bold text-sm mb-2 text-navy-900">Privacy Notice</h6>
        <p className="text-xs text-gray-500 leading-relaxed">
          We use essential cookies to ensure our website functions correctly. By clicking "Accept All", you agree to our use of cookies for analytics and site improvements.
        </p>
      </div>
      <div className="flex gap-3 shrink-0">
        <button 
          onClick={() => setVisible(false)}
          className="px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded transition-colors"
        >
          Settings
        </button>
        <button 
          onClick={() => setVisible(false)}
          className="px-6 py-2 bg-navy-900 text-white text-xs font-bold rounded shadow-lg hover:bg-navy-800 transition-colors"
        >
          Accept All
        </button>
      </div>
    </div>
  );
};

export default App;