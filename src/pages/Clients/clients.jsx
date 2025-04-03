import { Link } from "react-router-dom";

const Clients = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Our Clients</h1>
      <p>We collaborate with a diverse range of partners and clients to deliver innovative solutions.</p>

      <div className="mt-4 space-y-2">
        <Link to="/clients/AcademicPartners" className="text-blue-600 block">
          Academic Partners
        </Link>
        <Link to="/clients/TechPartners" className="text-blue-600 block">
          Technology Partners
        </Link>
        <Link to="/clients/Resellers" className="text-blue-600 block">
          Resellers
        </Link>
      </div>
    </div>
  );
};

export default Clients;
