
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      router.asPath
    );
  }, [router.asPath]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md p-8 rounded-xl bg-white shadow-sm animate-fade-in">
        <h1 className="text-6xl font-bold text-naukri-blue mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! We couldn't find the page you're looking for.
        </p>
        <Button 
          className="bg-naukri-blue hover:bg-naukri-blue/90 transition-all"
          asChild
        >
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
