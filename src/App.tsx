import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import WhoIsJesusPage from './pages/WhoIsJesusPage';
import VisionAndValuesPage from './pages/VisionAndValuesPage';
import WhatWeBelievePage from './pages/WhatWeBelievePage';
import ExploringFaithPage from './pages/ExploringFaithPage';
import UpcomingEventsPage from './pages/UpcomingEventsPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-body bg-white min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/im-new-here/who-is-jesus" element={<WhoIsJesusPage />} />
          <Route path="/im-new-here/vision-and-values" element={<VisionAndValuesPage />} />
          <Route path="/im-new-here/what-we-believe" element={<WhatWeBelievePage />} />
          <Route path="/exploring-faith" element={<ExploringFaithPage />} />
          <Route path="/events" element={<UpcomingEventsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
