import React from "react";

const CodeEditor = ({ code, setCode, language }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <textarea
        className="w-full h-64 bg-gray-700 text-white p-4 rounded-lg focus:outline-none font-mono"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder={`Enter your ${language} code here...`}
      />
    </div>
  );
};

export default CodeEditor;