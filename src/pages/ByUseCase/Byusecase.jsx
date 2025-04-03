import { Link } from "react-router-dom";

const ByUseCase = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">By Use Case</h1>
      <p>Explore how our AI solutions cater to specific business needs.</p>

      <div className="mt-4 space-y-2">
        <Link to="/ByUseCase/InvoicesProcessing" className="text-blue-600 block">
          Invoices, Accounts Payable, and Claims Processing
        </Link>
      </div>
    </div>
  );
};

export default ByUseCase;
