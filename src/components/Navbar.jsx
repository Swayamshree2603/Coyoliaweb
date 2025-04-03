import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <div className="text-xl font-bold">Coyolia</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/Solutions">Solutions</Link>
        <Link to="/Careers">Careers</Link>
        <Link to="/ByUseCase">By Use Case</Link>
        <Link to="/Clients">Clients</Link>
        <Link to="/Industries">Industries</Link>
        <Link to="/InsightsResources">Insights Resources</Link>
        <Link to="/Services">Services</Link>
      </div>
    </nav>
  );
};

export default Navbar;
