import React from "react";

const loading = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-green-100 border-t-green-600" />

        {/* Loading Text */}
        <p className="text-sm font-medium text-green-700">Loading...</p>
      </div>
    </div>
  );
};

export default loading;
