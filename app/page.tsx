export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="px-6 py-6 lg:px-8 border-b border-gray-800">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold text-white">S</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SignUp
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-24 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>

        <div className="relative mx-auto max-w-7xl text-center z-10">
          <div className="mb-12">
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl mb-8">
              <span className="block text-white">Welcome to the</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Future
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-300 max-w-4xl mx-auto">
              Experience the next generation of digital signup with our
              cutting-edge platform. Built for speed, security, and seamless
              user experience.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="http://localhost:3000/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 transition-all duration-300 border border-purple-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                Get Started Now
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>
            <button className="px-10 py-5 border-2 border-gray-600 text-gray-300 font-bold text-lg rounded-2xl hover:border-purple-500 hover:text-purple-400 hover:bg-gray-900/50 transition-all duration-300 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-24 lg:px-8 bg-gray-900/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built with cutting-edge technology and designed for the modern
              user
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                description:
                  "Get started in seconds with our optimized signup process",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description:
                  "Bank-level encryption and security protocols protect your data",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: "📱",
                title: "Mobile First",
                description: "Optimized for all devices with responsive design",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: "🚀",
                title: "Real-time Sync",
                description: "Instant updates and live data synchronization",
                gradient: "from-orange-500 to-red-500",
              },
              {
                icon: "🎨",
                title: "Modern UI/UX",
                description: "Beautiful, intuitive design that delights users",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                icon: "🔧",
                title: "Easy Integration",
                description:
                  "Simple API integration with your existing systems",
                gradient: "from-teal-500 to-blue-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 hover:bg-gray-800/80 transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div
                  className={`text-5xl mb-6 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-24 lg:px-8 bg-black">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "99.9%", label: "Uptime" },
              { number: "50ms", label: "Response Time" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
                <div className="mt-4 w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-y border-gray-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">
            Ready to Transform Your Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of users who have already revolutionized their
            digital journey
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="http://localhost:3000/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 transition-all duration-300 border border-purple-500/20"
            >
              Start Your Journey
            </a>
            <button className="px-12 py-5 border-2 border-gray-600 text-gray-300 font-bold text-lg rounded-2xl hover:border-purple-500 hover:text-purple-400 hover:bg-gray-900/50 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 lg:px-8 bg-gray-900 border-t border-gray-800">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-white">S</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  SignUp
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Building the future of digital user registration with
                cutting-edge technology and unparalleled security.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors duration-300"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors duration-300"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors duration-300"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors duration-300"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors duration-300"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors duration-300"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors duration-300"
                  >
                    Status
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors duration-300"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 SignUp. All rights reserved. |
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 ml-1"
              >
                Privacy Policy
              </a>{" "}
              |
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 ml-1"
              >
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
