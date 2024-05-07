import React from "react";
import { useTitle } from "../hooks/useTitle";

export const AboutUs = ({ title }) => {
  useTitle(title);

  return (
    <main>
      <div className="container mx-auto px-4 py-8 dark:text-white">
        <h1 className="text-3xl font-bold mb-4">About Cinemate</h1>
        <p className="text-gray-700 mb-6 dark:text-gray-400">
          This website is built with React JS and Tailwind CSS. This 'CINEMATE'
          website employs TMDb API Endpoints. S. M. Shahriar created this
          front-end project.
        </p>
      </div>
    </main>
  );
};
