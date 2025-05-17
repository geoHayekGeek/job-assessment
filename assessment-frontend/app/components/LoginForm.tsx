import React from "react";
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import styles from '../login/Login.module.css'

const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "password") {
      const token = "jwt-token";
      Cookies.set("token", token, {
        expires: 1,
        secure: true,
        sameSite: "Lax",
      });
      router.push("/items");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          placeholder="Enter Your Username"
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 py-2 px-2 block w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          placeholder="Enter Your Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 py-2 px-2 block w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className={`w-full bg-indigo-600 !text-white py-2 px-4 rounded-xl hover:bg-transparent hover:!text-black border-1 border-solid border-indigo-600  transition ${styles.submitBtn}`}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
