import React from "react";

import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Join Our Team</h1>
      <p>Explore opportunities to work with us and be part of an innovative team.</p>

      <div className="mt-4 space-y-2">
        <Link to="/careers/currentOpenings" className="text-blue-600 block">
          Current Openings
        </Link>
        <Link to="/careers/LifeAtCoyolia" className="text-blue-600 block">
          Life at Coyolia
        </Link>
      </div>
    </div>
  );
};

export default Careers;
