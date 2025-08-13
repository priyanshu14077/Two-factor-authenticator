import Link from "next/link";

export default function UserPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="px-6 py-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm border-b border-gray-800">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold text-white">S</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SignUp
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Welcome back!</span>
            <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 border border-gray-700 rounded-xl hover:border-purple-500">
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Welcome Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Welcome to Your Dashboard
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              You&apos;ve successfully signed up! Here&apos;s what you can do
              next to get the most out of our platform.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "📊",
                title: "View Analytics",
                description:
                  "Check your account statistics and performance metrics",
                action: "View Dashboard",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: "⚙️",
                title: "Account Settings",
                description: "Update your profile information and preferences",
                action: "Manage Settings",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: "🔐",
                title: "Security",
                description: "Review and update your security settings",
                action: "Security Center",
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-purple-500/50 hover:bg-gray-900/80 transition-all duration-500 hover:transform hover:-translate-y-2 shadow-xl"
              >
                <div
                  className={`text-5xl mb-6 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}
                >
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {card.description}
                </p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/25">
                  {card.action}
                </button>
                <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Getting Started */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-gray-800 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Getting Started
            </h2>
            <div className="space-y-6">
              {[
                "Complete your profile information",
                "Connect your first integration",
                "Explore our documentation",
                "Join our community forum",
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-2xl border border-gray-700/50"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <span className="text-gray-300 text-lg flex-1">{step}</span>
                  <div className="ml-auto">
                    <button className="text-purple-400 hover:text-purple-300 text-sm font-medium px-4 py-2 rounded-xl hover:bg-purple-500/10 transition-all duration-300">
                      Complete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-8">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {[
                {
                  action: "Account created",
                  time: "Just now",
                  status: "success",
                },
                {
                  action: "Profile updated",
                  time: "2 hours ago",
                  status: "info",
                },
                {
                  action: "Email verified",
                  time: "1 day ago",
                  status: "success",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        activity.status === "success"
                          ? "bg-green-500"
                          : "bg-blue-500"
                      }`}
                    ></div>
                    <span className="text-gray-300 text-lg">
                      {activity.action}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-12 lg:px-8 bg-gray-900/50 border-t border-gray-800">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-gray-400 text-lg">
            Need help?{" "}
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              Contact Support
            </a>{" "}
            or
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 ml-1 transition-colors duration-300"
            >
              visit our Help Center
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
