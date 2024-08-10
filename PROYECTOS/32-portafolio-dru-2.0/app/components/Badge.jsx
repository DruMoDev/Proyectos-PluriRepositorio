import React from "react";

const Badge = ({ children, className }) => {
  return (
    <span
      className={`bg-gray-100 text-primary font-bold text-xs  me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
