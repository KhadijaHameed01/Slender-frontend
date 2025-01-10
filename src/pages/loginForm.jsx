import { useState } from "react";
import {Link} from "react-router-dom"
const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 m-40 border border-purple-500 rounded-3xl p-10">
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full border-gray-300 rounded-lg p-2 mt-1"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full border-gray-300 rounded-lg p-2 mt-1"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-all duration-300"
      >
        Login
      </button>
     <p className="flex items-center justify-center">
      Do not have an account?
      <Link to="/signupform" className="text-black text-2xl ml-3 hover:text-purple-600 transtion-colors duration-0.3 ">
      SignIn
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
      </Link>
     </p>
    </form>
  );
};

export default LoginForm;
