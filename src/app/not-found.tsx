import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-600">
        Error 404
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Page not found
      </h1>

      <p className="mt-4 max-w-md text-gray-500">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
