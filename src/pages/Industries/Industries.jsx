import { Link } from "react-router-dom";

const Industries = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Industries We Serve</h1>
      <p>Discover how our AI-driven solutions are transforming various industries.</p>

      <div className="mt-4 space-y-2">
        <Link to="/Industries/Retail" className="text-blue-600 block">
          Retail
        </Link>
        <Link to="/Industries/BankingServices" className="text-blue-600 block">
          Banking Services
        </Link>
      </div>
    </div>
  );
};

export default Industries;
