import './App.css';
import './Styling/LandingPage.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './component/NavigationBar';
import Intro from './component/Intro';
import OurServices from './component/OurServices';
import WhyUs from './component/WhyUs';
import Testimony from './component/Testimony';
import CTA from './component/CTA';
import FAQ from './component/FAQ';
import Footer from './component/Footer';
import Carimobil from './component/CariMobil/Carimobil';
import PencarianMu from './component/Hasil Pencarian/PencarianMu';
import PaketDetail from './component/Paket Sewa/PaketDetail';


function App() {
  const Homepage = () => (
      <div>
        <Intro withButton/>
        <OurServices />
        <WhyUs />
        <Testimony />
        <CTA />
        <FAQ />
        <Footer />
      </div>
  )
  return (
    <div className="bg-white">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/carimobil" element={<Carimobil />} />
          <Route exact path="/hasilpencarianmu" element={<PencarianMu />} />
          <Route exact path="/car/:id" element={<PaketDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
