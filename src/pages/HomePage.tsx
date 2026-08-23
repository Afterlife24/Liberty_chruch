import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import NewHere from '../components/NewHere';
import LifeOfLiberty from '../components/LifeOfLiberty';
import SundayGatherings from '../components/SundayGatherings';
import Media from '../components/Media';
import UpcomingEvents from '../components/UpcomingEvents';

export default function HomePage() {
    return (
        <>
            <Hero />
            <Welcome />
            <NewHere />
            <LifeOfLiberty />
            <SundayGatherings />
            <Media />
            <UpcomingEvents />
        </>
    );
}
