import React from "react";
import { Link } from "react-router-dom";

const Solutions = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Our Solutions</h1>
      <p>Discover our innovative solutions in AI and technology.</p>

      <div className="mt-4 space-y-2">
        <Link to="/Solution/AIinLearning" className="text-blue-600 block">
          AI in Learning and Development
        </Link>
        <Link to="/Solution/AIinHR" className="text-blue-600 block">
          AI in Talent Acquisition and HR
        </Link>
        <Link to="/Solution/InnovationResearch" className="text-blue-600 block">
          Innovation and Research
        </Link>
      </div>
    </div>
  );
};

export default Solutions;
