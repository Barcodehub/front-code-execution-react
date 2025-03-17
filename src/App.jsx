import React, { useState } from "react";
import axios from "axios";
import CodeEditor from "./components/CodeEditor";
import OutputDisplay from "./components/OutputDisplay";
import LanguageSelector from "./components/LanguageSelector";
import ExecuteButton from "./components/ExecuteButton";
import HistorySection from "./components/HistorySection";

const App = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [advice, setAdvice] = useState("");
  const [history, setHistory] = useState([]);

  const executeCode = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/code/execute", {
        language,
        code,
      });

      const { output, error, advice } = response.data;
      setOutput(output);
      setError(error);
      setAdvice(advice);

      // Guardar en el historial
      setHistory([
        {
          id: Date.now(),
          language,
          code,
          output,
          error,
          advice,
        },
        ...history,
      ]);
    } catch (err) {
      setError("Error executing code: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8 animate-pulse text-red-500">
  Code Executor
</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <LanguageSelector language={language} setLanguage={setLanguage} />
          <CodeEditor code={code} setCode={setCode} language={language} />
          <ExecuteButton executeCode={executeCode} />
        </div>
        <div>
          <OutputDisplay output={output} error={error} advice={advice} />
          <HistorySection history={history} />
        </div>
      </div>
    </div>
  );
};

export default App;