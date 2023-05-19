import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Discover from './components/Discover';
import HillStationBanner from './components/Banners/HillStationBanner';
import BookNow from './components/BookNow';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <div>
      <Header />
      <div className="gyan-container">
        <Hero />
        <Discover />
        <HillStationBanner />
        <BookNow />
        <ContactUs />
      </div>
    </div>
  );
}

export default App;