"use client";
import axios from "axios";
import { ChangeEventHandler, useState } from "react";
import Link from "next/link";

export function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    if (!username || !password) {
      setMessage("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await axios.post("/api/user", {
        username,
        password,
      });

      setMessage("Signup successful! Welcome aboard!");
      setUsername("");
      setPassword("");
    } catch (error: any) {
      setMessage(
        error.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold text-white">S</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SignUp
            </span>
          </Link>
          <h1 className="text-4xl font-bold text-white mb-3">Create Account</h1>
          <p className="text-gray-400 text-lg">
            Join the future of digital registration
          </p>
        </div>

        {/* Signup Form */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSignup();
            }}
          >
            <div className="space-y-6">
              <LabelledInput
                onChange={(e) => setUsername(e.target.value)}
                label="Email Address"
                placeholder="Enter your email"
                type="email"
                value={username}
                required
              />

              <LabelledInput
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                type="password"
                placeholder="Create a strong password"
                value={password}
                required
              />

              {message && (
                <div
                  className={`p-4 rounded-xl text-sm border ${
                    message.includes("successful")
                      ? "bg-green-900/20 text-green-400 border-green-700/50"
                      : "bg-red-900/20 text-red-400 border-red-700/50"
                  }`}
                >
                  {message}
                </div>
              )}

              <button
                onClick={handleSignup}
                disabled={isLoading}
                type="button"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-2xl hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-purple-500/25"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Creating Account...
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gray-900/50 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Signup Options */}
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center px-6 py-3 border border-gray-700 rounded-2xl text-gray-300 font-medium hover:border-purple-500 hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-300">
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            <button className="w-full flex items-center justify-center px-6 py-3 border border-gray-700 rounded-2xl text-gray-300 font-medium hover:border-purple-500 hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-300">
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              Continue with Twitter
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center mt-8">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link
                href="/user"
                className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Terms */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500">
            By creating an account, you agree to our{" "}
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function LabelledInput({
  label,
  placeholder,
  type,
  onChange,
  value,
  required,
}: LabelledInputType) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-3">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        value={value}
        className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 placeholder-gray-500 text-white backdrop-blur-sm"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  required?: boolean;
}
