import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import AboutUs from "./pages/AboutUs/AboutUs";
import Solutions from "./pages/Solutions/Solutions";
import Careers from "./pages/Careers/Careers";
import ByUseCase from "./pages/ByUseCase/ByUseCase";
import Clients from "./pages/Clients/Clients";
import Industries from "./pages/Industries/Industries";
import InsightsResources from "./pages/InsightsResources/InsightsResources";
import Services from "./pages/Services/Services";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Solutions" element={<Solutions />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/ByUseCase" element={<ByUseCase />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/Industries" element={<Industries />} />
        <Route path="/InsightsResources" element={<InsightsResources />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
