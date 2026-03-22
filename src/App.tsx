import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import DiscoverPage from './pages/DiscoverPage'
import WhoIsJesusPage from './pages/WhoIsJesusPage'
import GlobalAdventurePage from './pages/GlobalAdventurePage'
import GivingPage from './pages/GivingPage'

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/who-is-jesus" element={<WhoIsJesusPage />} />
            <Route path="/global-adventure" element={<GlobalAdventurePage />} />
            <Route path="/giving" element={<GivingPage />} />
        </Routes>
    )
}

export default App
