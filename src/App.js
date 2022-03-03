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

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="1847-signatures" element={<Signatures />} />
          <Route path="treatments" element={<Treatments />}>
            <Route
              path="/treatments/hair-services"
              element={<HairServices />}
            />
            {/* <Route path="/treatments/shaves" element={<HairServices />} />
            <Route
              path="/treatments/manicures-predicures"
              element={<HairServices />}
            />
            <Route path="/treatments/massages" element={<HairServices />} />
            <Route path="/treatments/facials" element={<HairServices />} />
            <Route path="/treatments/hair-removal" element={<HairServices />} /> */}
          </Route>
          <Route path="about-us" element={<About />} />
        </Routes>
        <Footer {...footerData} />
      </Router>
    </div>
  );
}

export default App;
