"use client";

import { useState } from "react";

export default function UserForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      setLoading(true)
      const res = await fetch("http://localhost:8000/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      setMessage("User created successfully ✅");
      setForm({ name: "", email: "", password: "" });
      setLoading(false)
    } catch (error) {
      setMessage(error.message || "Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full bg-white flex justify-between items-center">
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow bg-gray-200 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4 text-black">Create User</h2>
      <p className="text-black">Fill the form , i will be happy , thank you soo much</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-center items-center gap-5 my-5 ">
           <label htmlFor="name" className="text-black font-bold"> Name:-</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded text-black"
        />
        </div>
       


         <div className="flex justify-center items-center gap-5  ">
           <label htmlFor="name" className="text-black font-bold"> Email:-</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-black  text-black rounded"
        />
          </div>



          3<div className="flex justify-center items-center gap-5  ">
           <label htmlFor="name" className="text-black font-bold"> Password:-</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full p-2 border border-black text-black rounded"
        />
          </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded"
        >
          {loading ? "Creating..." : "Create User"}
        </button>
      </form>

      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
    </div>
  );
}
