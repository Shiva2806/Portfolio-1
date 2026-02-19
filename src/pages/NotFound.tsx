import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="flex min-h-screen items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">404</h1>
          <p className="mb-4 text-xl text-slate-400">Oops! Page not found</p>
          <a href="/" className="text-cyan-400 underline hover:text-cyan-300">
            Return to Home
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
