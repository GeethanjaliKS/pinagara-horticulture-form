import { useState } from "react";
import Admin from './Admin';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle admin login logic here
    if (username === "admin" && password === "password") {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  if (loggedIn) {
    return <Admin />;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-semibold mb-8">Admin Login</h1>
      <form className="w-96" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-3 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
