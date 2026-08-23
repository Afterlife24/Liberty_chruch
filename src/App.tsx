import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ImNewHerePage from './pages/ImNewHerePage';
import WhoIsJesusPage from './pages/WhoIsJesusPage';
import PlanningYourVisitPage from './pages/PlanningYourVisitPage';
import VisionAndValuesPage from './pages/VisionAndValuesPage';
import WhatWeBelievePage from './pages/WhatWeBelievePage';
import LifeOfLibertyPage from './pages/LifeOfLibertyPage';
import SundayGatheringsPage from './pages/SundayGatheringsPage';
import PlacesOfLibertyPage from './pages/PlacesOfLibertyPage';
import NewportLocationPage from './pages/NewportLocationPage';
import RiscaLocationPage from './pages/RiscaLocationPage';
import MediaPage from './pages/MediaPage';
import ListenAgainPage from './pages/ListenAgainPage';
import VideoSessionsPage from './pages/VideoSessionsPage';
import MoreResourcesPage from './pages/MoreResourcesPage';
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
          <Route path="/im-new-here" element={<ImNewHerePage />} />
          <Route path="/im-new-here/who-is-jesus" element={<WhoIsJesusPage />} />
          <Route path="/im-new-here/planning-your-visit" element={<PlanningYourVisitPage />} />
          <Route path="/im-new-here/vision-and-values" element={<VisionAndValuesPage />} />
          <Route path="/im-new-here/what-we-believe" element={<WhatWeBelievePage />} />
          <Route path="/life-of-liberty" element={<LifeOfLibertyPage />} />
          <Route path="/sunday-gatherings" element={<SundayGatheringsPage />} />
          <Route path="/sunday-gatherings/places-of-liberty" element={<PlacesOfLibertyPage />} />
          <Route path="/sunday-gatherings/newport" element={<NewportLocationPage />} />
          <Route path="/sunday-gatherings/risca" element={<RiscaLocationPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/media/listen-again" element={<ListenAgainPage />} />
          <Route path="/media/video-sessions" element={<VideoSessionsPage />} />
          <Route path="/media/more-resources" element={<MoreResourcesPage />} />
          <Route path="/exploring-faith" element={<ExploringFaithPage />} />
          <Route path="/events" element={<UpcomingEventsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
