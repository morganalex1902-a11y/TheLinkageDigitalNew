import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSEO } from "../hooks/useSEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  useSEO({
    title: "Page Not Found - The Linkage Digital",
    description: "The page you're looking for doesn't exist. Return to The Linkage Digital home page to explore our web design and digital services.",
    keywords: "404, page not found",
    canonicalUrl: "https://thelinkagedigital.com/404",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
