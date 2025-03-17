import React from "react";

const HistorySection = ({ history }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mt-8">
      <h3 className="text-xl font-bold mb-4">Execution History</h3>
      {history.map((item) => (
        <div key={item.id} className="mb-4 p-4 bg-gray-700 rounded-lg">
          <p className="text-sm text-gray-400">{item.language}</p>
          <pre className="text-white">{item.code}</pre>
          {item.output && <pre className="text-green-200">{item.output}</pre>}
          {item.error && <pre className="text-red-200">{item.error}</pre>}
          {item.advice && <pre className="text-yellow-200">{item.advice}</pre>}
        </div>
      ))}
    </div>
  );
};

export default HistorySection;