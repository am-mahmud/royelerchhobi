"use client";

import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setStatus(res.ok ? "success" : "error");
  };

  return (
    <section id="contact" className="px-6 py-24 md:px-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20 md:items-start">
        <div className="flex flex-col gap-6">
          <h2 className="font-serif text-4xl font-bold text-black md:text-6xl lg:text-7xl leading-none">
            Let's talk
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-xs tracking-widest uppercase text-black/40">
              Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="border-b border-black/20 bg-transparent py-3 text-black placeholder:text-black/25 outline-none focus:border-black transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs tracking-widest uppercase text-black/40">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="border-b border-black/20 bg-transparent py-3 text-black placeholder:text-black/25 outline-none focus:border-black transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs tracking-widest uppercase text-black/40">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={4}
              className="border-b border-black/20 bg-transparent py-3 text-black placeholder:text-black/25 outline-none focus:border-black transition-colors resize-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="mt-4 self-start bg-black text-white px-8 py-3 rounded-full text-sm font-medium transition-all hover:bg-yellow-400 hover:text-black disabled:opacity-40"
          >
            {status === "loading" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className="text-sm text-green-600">
              Message sent — we'll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
