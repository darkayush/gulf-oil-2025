import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/HomePage/Home';
import Footer from './Components/Footer';

// Importing all pages
import GulfOilIndia from './Pages/GulfOilIndia';
import HindujaGroup from './Pages/HindujaGroup';
import GulfOilInternational from './Pages/GulfOilInternational';
import BoardOfDirectors from './Pages/BoardOfDirectors';
import ChairmanDesk from './Pages/ChairmanDesk';
import InsightsMDCEO from './Pages/InsightsMDCEO';
import SeniorManagement from './Pages/SeniorManagement';
import BusinessModel from './Pages/BusinessModel';
import GulfOilLubricants from './Pages/GulfOilLubricants';
import CFOReview from './Pages/CFOReview';
import LeadershipTeam from './Pages/LeadershipTeam';
import ManufacturingRND from './Pages/ManufacturingRND';
import MarketingInitiatives from './Pages/MarketingInitiatives';
import StrategicPartnerships from './Pages/StrategicPartnerships';
import IntellectualStrength from './Pages/IntellectualStrength';
import MobilitySolutions from './Pages/MobilitySolutions';
import OurPeople from './Pages/OurPeople';
import Sustainability from './Pages/Sustainability';
import Communities from './Pages/Communities';
import Awards from './Pages/Awards';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <main className="mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/gulf-oil-india-at-a-glance" element={<GulfOilIndia />} />
          <Route path="/hinduja-group" element={<HindujaGroup />} />
          <Route path="/gulf-oil-international" element={<GulfOilInternational />} />
          <Route path="/board-of-directors" element={<BoardOfDirectors />} />
          <Route path="/from-the-chairmans-desk" element={<ChairmanDesk />} />
          <Route path="/strategic-insights-from-the-md-ceo" element={<InsightsMDCEO />} />
          <Route path="/senior-management-team" element={<SeniorManagement />} />
          <Route path="/our-robust-business-model" element={<BusinessModel />} />
          <Route path="/gulf-oil-lubricants-india-limited" element={<GulfOilLubricants />} />
          <Route path="/cfos-review-of-financial-performance" element={<CFOReview />} />
          <Route path="/leadership-team" element={<LeadershipTeam />} />
          <Route path="/manufacturing-and-rd-prowess" element={<ManufacturingRND />} />
          <Route path="/marketing-initiatives" element={<MarketingInitiatives />} />
          <Route path="/strategic-partnerships" element={<StrategicPartnerships />} />
          <Route path="/intellectual-strength-digital" element={<IntellectualStrength />} />
          <Route path="/integrated-e-mobility-solutions" element={<MobilitySolutions />} />
          <Route path="/our-people" element={<OurPeople />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>
        <Footer />
        </main>
      </Router>
    </div>
  )
}

export default App;
