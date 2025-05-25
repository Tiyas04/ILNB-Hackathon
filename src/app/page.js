"use client";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel (Styled Like Signup Background) */}
      <div className="w-full relative overflow-hidden min-h-[400px] lg:min-h-screen">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-400 via-teal-500 to-blue-600"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><filter id="blur"><feGaussianBlur stdDeviation="20"/></filter></defs><circle cx="200" cy="300" r="150" fill="rgba(255,255,255,0.1)" filter="url(%23blur)"/><circle cx="800" cy="200" r="100" fill="rgba(255,255,255,0.1)" filter="url(%23blur)"/><circle cx="600" cy="700" r="200" fill="rgba(255,255,255,0.1)" filter="url(%23blur)"/></svg>')`,
          }}
        />
        <div className="absolute inset-0 opacity-20 hidden sm:block">
          <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-white rotate-12"></div>
          <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
        </div>

        <div className="relative z-10 flex justify-between items-center p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <span className="text-white font-bold text-xl">XYZ Company</span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 sm:px-8 mt-10 lg:mt-0 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-10 leading-tight">
            Welcome to <br /> XYZ Company
          </h1>
          <p className="text-white text-lg mb-8 opacity-90">Choose an option to get started</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => router.push("/signup")}
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition"
            >
              Sign Up
            </button>
            <button
              onClick={() => router.push("/login")}
              className="bg-gray-900 text-white hover:bg-gray-800 font-semibold px-8 py-4 rounded-full transition"
            >
              Log In
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel (Optional Branding or Illustration) */}
      <div className="w-full lg:w-1/2 bg-gray-50 flex flex-col justify-center items-center px-6 py-12 lg:flex">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Services</h2>
          <p className="text-gray-600">
            Discover amazing tools and insights with XYZ Company. Join our community and get started today!
          </p>
        </div>
      </div>
    </div>
  );
}
