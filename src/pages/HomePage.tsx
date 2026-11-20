import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import NewHere from '../components/NewHere';
import LifeOfLiberty from '../components/LifeOfLiberty';
import SundayGatherings from '../components/SundayGatherings';
import Media from '../components/Media';
import UpcomingEvents from '../components/UpcomingEvents';
import LocationsMap from '../components/LocationsMap';
import Seo from '../components/Seo';

export default function HomePage() {
    return (
        <>
            <Seo path="/" />
            <Hero />
            <Welcome />
            <NewHere />
            <LifeOfLiberty />
            <SundayGatherings />
            <Media />
            <UpcomingEvents />
            <LocationsMap />
        </>
    );
}
