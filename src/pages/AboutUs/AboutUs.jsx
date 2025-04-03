import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p>Learn more about our vision and mission.</p>

      <div className="mt-4 space-y-2">
        <Link to="/AboutUs/OurTeam" className="text-blue-600 block">
          Our Team
        </Link>
        <Link to="/AboutUs/OurCulture" className="text-blue-600 block">
          Our Culture
        </Link>
        <Link to="/AboutUs/LeadershipPrinciples" className="text-blue-600 block">
          Leadership Principles
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;

