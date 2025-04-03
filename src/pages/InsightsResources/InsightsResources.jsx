import { Link } from "react-router-dom";

const InsightsResources = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Insights & Resources</h1>
      <p>Explore our latest articles, webinars, and events to stay updated with industry trends.</p>

      <div className="mt-4 space-y-2">
        <Link to="/InsightsResources/Blog" className="text-blue-600 block">
          Blog
        </Link>
        <Link to="/InsightsResources/webinars" className="text-blue-600 block">
          Webinars
        </Link>
        <Link to="/InsightsResources/Events" className="text-blue-600 block">
          Events
        </Link>
      </div>
    </div>
  );
};

export default InsightsResources;
