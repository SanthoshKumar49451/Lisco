import React from 'react';
import { Code, Smartphone, Cpu, Globe } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center px-8 py-6">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
            <span className="text-white text-sm font-bold">f</span>
          </div>
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-white text-sm">📷</span>
          </div>
          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center cursor-pointer hover:bg-green-400 transition-colors">
            <span className="text-white text-sm">💬</span>
          </div>
          <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
            <span className="text-white text-sm font-bold">in</span>
          </div>
        </div>

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-white animate-spin" style={{ animationDuration: '10s' }} />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full"></div>
          </div>
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              LISCO
            </span>
            <div className="text-xs text-gray-400 -mt-1">DIGITALLY UNSTABLE</div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex space-x-8 text-gray-300">
          <a href="#" className="hover:text-cyan-400 transition-colors font-medium">Home</a>
          <a href="#" className="hover:text-cyan-400 transition-colors font-medium">About</a>
          <a href="#" className="hover:text-cyan-400 transition-colors font-medium">Solutions</a>
          <a href="#" className="hover:text-cyan-400 transition-colors font-medium">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 -mt-20">
        {/* Floating Dots */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* 3D Globe Effect - Top Right */}
        <div className="absolute top-16 right-16">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute inset-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-30 animate-spin" style={{ animationDuration: '30s' }}></div>
            <div className="absolute inset-8 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-40"></div>
            {/* Grid lines */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-30"></div>
            <div className="absolute inset-0 rounded-full border border-cyan-400 opacity-20 transform rotate-45"></div>
            <div className="absolute inset-0 rounded-full border border-cyan-400 opacity-15 transform rotate-90"></div>
            {/* Inner glow */}
            <div className="absolute inset-12 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full opacity-60 blur-sm"></div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Technology At Its Best
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-4">
            Where Your Imagination Ends...
          </div>
          <div className="text-lg md:text-xl text-gray-400">
            Our Engineering Begins
          </div>
        </div>

        {/* Know More Button */}
        <button className="group relative px-10 py-4 mb-20 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 font-medium">
          <span className="relative z-10">Know More</span>
          <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
          {/* Animated border glow */}
          <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg opacity-0 group-hover:opacity-100 animate-pulse"></div>
        </button>

        {/* Services Icons */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-24">
          {/* Web Development */}
          <div className="group flex flex-col items-center cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <Code className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
            </div>
            <span className="text-cyan-400 font-bold text-sm tracking-widest">WEB DEVELOPMENT</span>
          </div>

          {/* Mobile Development */}
          <div className="group flex flex-col items-center cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
            </div>
            <span className="text-cyan-400 font-bold text-sm tracking-widest">MOBILE DEVELOPMENT</span>
          </div>

          {/* IoT Development */}
          <div className="group flex flex-col items-center cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -inset-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
            </div>
            <span className="text-cyan-400 font-bold text-sm tracking-widest">IOT DEVELOPMENT</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative z-10 px-8 py-20 mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-center">
            About Lisco Software
          </h2>
          <div className="text-gray-300 text-xl leading-relaxed max-w-4xl mx-auto">
            <p className="mb-4">
              At <span className="text-cyan-400 font-bold">LISCO SOFTWARE</span>, we are mission-driven explorers
            </p>
            <p className="mb-4">
              navigating the digital cosmos. Our expert team crafts innovative
            </p>
            <p>
              software solutions that fuel businesses across the galaxy. From
            </p>
          </div>
        </div>
      </div>

      {/* Floating Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 flex flex-col space-y-6">
        <div className="w-4 h-4 bg-cyan-400 rounded-full cursor-pointer hover:scale-125 transition-transform shadow-lg"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full cursor-pointer hover:scale-125 transition-transform"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full cursor-pointer hover:scale-125 transition-transform"></div>
      </div>

      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
};

export default LandingPage;