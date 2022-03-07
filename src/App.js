import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { footerData } from "./components/pages/data/homeData";
import Home from "./components/pages/Home/Home";
import Footer from "./components/Footer";
import Treatments from "./components/pages/treatments/Treatments";
import About from "./components/pages/about/About";
import HairServices from "./components/pages/treatments/HairServices";
import Signatures from "./components/pages/signatures/Signatures";
import Massages from "./components/pages/treatments/Massages";
import ImageDisplay from "./components/pages/about/ImageDisplay";
import Voucher from "./components/pages/voucer/Voucher";
import Locations from "./components/pages/locations/Locations";
import HomeTreatment from "./components/pages/treatments/HomeTreatment";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="1847.yougotagift" element={<Voucher />} />
            <Route path="1847-signatures" element={<Signatures />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route
              path="/treatments/:hair-services"
              element={<HairServices />}
            />
            <Route path="/treatments/:massages" element={<Massages />} />
            <Route path="about-us" element={<About />}>
              <Route path=":id" element={<ImageDisplay />} />
            </Route>
            <Route path="/locations" element={<Locations />} />
            <Route path="/franchise" />
          </Routes>
          <Footer {...footerData} />
        </>
      </Router>
    </div>
  );
}

export default App;
