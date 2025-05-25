"use client"
import { useState } from "react";
import { Eye, EyeOff, ArrowLeft, ArrowRight } from "lucide-react";

export default function TripAdvisorSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Hero Section */}
      <div className="flex-1 relative overflow-hidden">
        {/* Background with blur effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-400 via-teal-500 to-blue-600"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><filter id="blur"><feGaussianBlur stdDeviation="20"/></filter></defs><circle cx="200" cy="300" r="150" fill="rgba(255,255,255,0.1)" filter="url(%23blur)"/><circle cx="800" cy="200" r="100" fill="rgba(255,255,255,0.1)" filter="url(%23blur)"/><circle cx="600" cy="700" r="200" fill="rgba(255,255,255,0.1)" filter="url(%23blur)"/></svg>')`,
          }}
        />
        
        {/* Geometric overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-white rotate-12"></div>
          <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
        </div>

        {/* Top Navigation */}
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

        {/* Main Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-8 -mt-20">
          <h1 className="text-6xl font-bold text-white text-center mb-8 leading-tight">
            Let's Get<br />Started...
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
          <div className="flex justify-between items-end">
            {/* User Info Card */}
            <div className="flex items-center space-x-3 bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                🦊
              </div>
              <div>
                <div className="text-white font-semibold">User Info</div>
                <div className="text-white text-sm opacity-80">User Qualification</div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex space-x-4">
              <button className="w-12 h-12 bg-black bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-colors">
                <ArrowLeft size={20} />
              </button>
              <button className="w-12 h-12 bg-black bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Signup Form */}
      <div className="flex-1 bg-gray-50 flex flex-col justify-center px-12">
        <div className="max-w-md mx-auto w-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <span className="text-black font-bold text-xl">XYZ Company</span>
            </div>
          </div>

          {/* Create Account Title */}
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Create Account</h2>

          {/* Social Signup */}
          <div className="mb-8">
            <p className="text-center text-gray-600 mb-6">Sign Up With Open Account</p>
            <div className="flex space-x-4 mb-6">
              <button className="flex-1 border border-gray-300 rounded-full py-3 px-4 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <span className="text-xl">🍎</span>
              </button>
              <button className="flex-1 border border-gray-300 rounded-full py-3 px-4 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <span className="text-xl">G</span>
              </button>
              <button className="flex-1 border border-gray-300 rounded-full py-3 px-4 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <span className="text-xl">f</span>
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-50 text-gray-500">OR</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-6 py-4 border border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Email Id"
                className="w-full px-6 py-4 border border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-6 py-4 border border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember" className="ml-3 text-gray-600">
                Remember Me
              </label>
            </div>

            <button
              type="button"
              className="w-full bg-gray-900 text-white py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}