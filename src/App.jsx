import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Work from "./pages/Work";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Certificate from "./pages/Certificate";
import Awards from "./pages/Awards";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/org" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/cer" element={<Certificate />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
