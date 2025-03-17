import React from "react";
import { motion } from "framer-motion";

const ExecuteButton = ({ executeCode }) => {
  return (
    <motion.button
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={executeCode}
    >
      Execute Code
    </motion.button>
  );
};

export default ExecuteButton;