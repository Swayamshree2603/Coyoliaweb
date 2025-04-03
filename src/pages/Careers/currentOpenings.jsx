const CurrentOpenings = () => {
    const jobListings = [
      { id: 1, title: "Software Engineer", location: "Remote" },
      { id: 2, title: "Product Manager", location: "New York, USA" },
      { id: 3, title: "UX Designer", location: "Berlin, Germany" },
    ];
  
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">Current Job Openings</h1>
        <ul className="mt-4 space-y-2">
          {jobListings.map((job) => (
            <li key={job.id} className="p-2 border rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold">{job.title}</h2>
              <p className="text-gray-600">{job.location}</p>
            </li>
          ))}
        </ul>
      </div>
    );
};
  
export default CurrentOpenings;
  