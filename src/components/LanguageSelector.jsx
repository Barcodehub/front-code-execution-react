import React from "react";

const LanguageSelector = ({ language, setLanguage }) => {
  const languages = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C++" },
  ];

  return (
    <select
      className="bg-gray-700 text-white p-2 rounded-lg focus:outline-none"
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
    >
      {languages.map((lang) => (
        <option key={lang.value} value={lang.value}>
          {lang.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;