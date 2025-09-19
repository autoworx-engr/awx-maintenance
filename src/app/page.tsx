export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00b8b0] to-[#0098da] flex items-center justify-center p-4">
      <div className="max-w-xl w-full text-center">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 transform hover:scale-105 transition-transform duration-300">
          {/* Icon */}
          <div className="mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#00b8b0] to-[#0098da] rounded-full mb-3">
              <span className="text-2xl">🔧</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            We're Making Things Better! ✨
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            <span className="text-xl">🚀</span> Autoworx is currently under
            maintenance
          </p>

          {/* Description */}
          <div className="bg-gradient-to-r from-[#00b8b0] to-[#0098da] text-white rounded-lg p-4 mb-6">
            <p className="text-base md:text-lg font-medium">
              We're working hard to improve your experience! 💪
            </p>
            <p className="text-sm mt-1 opacity-90">
              Our team is implementing exciting new features
            </p>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-lg mb-1">⚡</div>
              <p className="text-xs font-medium text-gray-700">
                Faster Performance
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-lg mb-1">🎨</div>
              <p className="text-xs font-medium text-gray-700">Better Design</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-lg mb-1">🔒</div>
              <p className="text-xs font-medium text-gray-700">
                Enhanced Security
              </p>
            </div>
          </div>

          {/* Loading Animation */}
          <div className="mb-6">
            <div className="flex justify-center items-center space-x-2">
              <div className="w-2 h-2 bg-[#00b8b0] rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-[#0098da] rounded-full animate-bounce"
                style={{ animationDelay: '0.1s' }}
              ></div>
              <div
                className="w-2 h-2 bg-[#00b8b0] rounded-full animate-bounce"
                style={{ animationDelay: '0.2s' }}
              ></div>
            </div>
            <p className="text-gray-500 mt-1 text-sm">Working on it...</p>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-600 text-sm">
              <span className="text-base">⏰</span> Expected return: Soon!
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Thank you for your patience 🙏
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-6 text-white text-center">
          <p className="text-base font-medium opacity-90">
            Follow us for updates:
            <span className="ml-2">📧 📱 🌐</span>
          </p>
        </div>
      </div>
    </div>
  );
}
