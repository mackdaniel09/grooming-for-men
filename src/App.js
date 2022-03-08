import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { footerData } from "./components/pages/data/homeData";
import Home from "./components/pages/Home/Home";
import Voucher from "./components/pages/voucer/Voucher";
import Signatures from "./components/pages/signatures/Signatures";
import Treatments from "./components/pages/treatments/Treatments";
import HairServices from "./components/pages/treatments/HairServices";
import Shaves from "./components/pages/treatments/Shaves";
import HandsAndFeet from "./components/pages/treatments/HandsAndFeet";
import Massages from "./components/pages/treatments/Massages";
import Face from "./components/pages/treatments/Face";
import Waxing from "./components/pages/treatments/Waxing";
import About from "./components/pages/about/About";
import ImageDisplay from "./components/pages/about/ImageDisplay";
import Locations from "./components/pages/locations/Locations";
import Footer from "./components/Footer";

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
            {/* <Route path="/treatments" element={<Treatments />} /> */}
            <Route
              path="/treatments/:hair-services"
              element={<HairServices />}
            />
            {/* <Route path="/treatments/:shaves" element={<Shaves />} /> */}
            <Route
              path="/treatments/:manicures-pedicures"
              element={<HandsAndFeet />}
            />
            <Route path="/treatments/:massages" element={<Massages />} />
            <Route path="/treatments/:facials" element={<Face />} />
            <Route path="/treatments/:hair-removal" element={<Waxing />} />
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
