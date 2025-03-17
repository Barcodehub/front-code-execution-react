import React from "react";

const OutputDisplay = ({ output, error, advice }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg space-y-4">
      {output && (
        <div>
          <h3 className="text-green-400 font-bold">Output:</h3>
          <pre className="text-green-200">{output}</pre>
        </div>
      )}
      {error && (
        <div>
          <h3 className="text-red-400 font-bold">Error:</h3>
          <pre className="text-red-200">{error}</pre>
        </div>
      )}
      {advice && (
        <div>
          <h3 className="text-yellow-400 font-bold">Advice:</h3>
          <pre className="text-yellow-200">{advice}</pre>
        </div>
      )}
    </div>
  );
};

export default OutputDisplay;