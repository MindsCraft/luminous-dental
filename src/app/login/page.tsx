"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result?.error) {
      setError("Invalid email or password");
    } else {
      window.location.href = "/management/dashboard";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-aws-lightGray">
      <div className="bg-aws-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-light text-aws-navy mb-6 text-center">Admin Login</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-aws-darkGray mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-aws-darkGray rounded focus:outline-none focus:border-aws-orange"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-aws-darkGray mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-aws-darkGray rounded focus:outline-none focus:border-aws-orange"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-aws-orange text-aws-navy py-2 rounded hover:bg-orange-600 transition-colors duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
