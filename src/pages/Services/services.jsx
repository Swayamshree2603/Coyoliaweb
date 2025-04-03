import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <p>We offer a range of services to help individuals and businesses thrive.</p>

      <div className="mt-4 space-y-2">
        <Link to="/services/career-counselling" className="text-blue-600 block">
          Career Counselling
        </Link>
      </div>
    </div>
  );
};

export default Services;
