// "use client";

// import { useRef, useState } from "react";
// import { useScrollReveal } from "@/app/hooks/useGsapAnimations";

// const Contact = () => {
//   const sectionRef = useRef(null);
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("idle");

//   useScrollReveal(sectionRef, ".contact-heading", {
//     mobileY: 24,
//     desktopY: 48,
//     duration: 0.9,
//   });

//   useScrollReveal(sectionRef, ".contact-field", {
//     mobileY: 20,
//     desktopY: 32,
//     stagger: 0.1,
//     duration: 0.7,
//     start: "top 88%",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     if (!form.name || !form.email || !form.message) return;
//     setStatus("loading");

//     const res = await fetch("/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     setStatus(res.ok ? "success" : "error");
//   };

//   return (
//     <section
//       id="contact"
//       ref={sectionRef}
//       className="px-4 sm:px-6 py-20 sm:py-24 md:px-20"
//     >
//       <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 md:gap-20 md:items-start">
//         <div className="flex flex-col gap-6">
//           <h2 className="contact-heading font-display text-[clamp(2.5rem,6vw,4.5rem)] md:text-6xl lg:text-7xl uppercase leading-none tracking-tight text-black">
//             Let&apos;s talk
//           </h2>
//         </div>

//         <div className="flex flex-col gap-5 sm:gap-6">
//           <div className="contact-field flex flex-col gap-1">
//             <label className="text-[10px] sm:text-xs tracking-widest uppercase text-black/40">
//               Name
//             </label>
//             <input
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Your name"
//               className="border-b border-black/20 bg-transparent py-2.5 sm:py-3 text-sm sm:text-base text-black placeholder:text-black/25 outline-none focus:border-black transition-colors"
//             />
//           </div>

//           <div className="contact-field flex flex-col gap-1">
//             <label className="text-[10px] sm:text-xs tracking-widest uppercase text-black/40">
//               Email
//             </label>
//             <input
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="your@email.com"
//               className="border-b border-black/20 bg-transparent py-2.5 sm:py-3 text-sm sm:text-base text-black placeholder:text-black/25 outline-none focus:border-black transition-colors"
//             />
//           </div>

//           <div className="contact-field flex flex-col gap-1">
//             <label className="text-[10px] sm:text-xs tracking-widest uppercase text-black/40">
//               Message
//             </label>
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="Tell us about your project..."
//               rows={4}
//               className="border-b border-black/20 bg-transparent py-2.5 sm:py-3 text-sm sm:text-base text-black placeholder:text-black/25 outline-none focus:border-black transition-colors resize-none"
//             />
//           </div>

//           <button
//             onClick={handleSubmit}
//             disabled={status === "loading"}
//             className="contact-field mt-2 sm:mt-4 self-start bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-body font-medium transition-all hover:bg-accent hover:text-black disabled:opacity-40"
//           >
//             {status === "loading" ? "Sending..." : "Send message"}
//           </button>

//           {status === "success" && (
//             <p className="text-sm text-green-600">
//               Message sent — we&apos;ll be in touch soon.
//             </p>
//           )}
//           {status === "error" && (
//             <p className="text-sm text-red-500">
//               Something went wrong. Please try again.
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


"use client";

import { useRef, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { useScrollReveal } from "@/app/hooks/useGsapAnimations";

const Contact = () => {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  useScrollReveal(sectionRef, ".contact-heading", {
    mobileY: 24,
    desktopY: 48,
    duration: 0.9,
  });

  useScrollReveal(sectionRef, ".contact-field", {
    mobileY: 20,
    desktopY: 32,
    stagger: 0.1,
    duration: 0.7,
    start: "top 88%",
  });

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
    <section
      id="contact"
      ref={sectionRef}
      className="px-4 sm:px-6 py-20 sm:py-24 md:px-20"
    >
      <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 md:gap-20 md:items-start">
        <div className="flex flex-col gap-6">
          <h2 className="contact-heading font-display text-[clamp(2.5rem,6vw,4.5rem)] md:text-6xl lg:text-7xl uppercase leading-none tracking-tight text-black">
            Let&apos;s talk
          </h2>

          <div className="contact-field flex items-center gap-4">
            <a
              href="https://wa.me/8801954468837"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-black/20 text-black transition-colors hover:bg-black hover:text-white"
            >
              <Phone size={18} strokeWidth={1.5} />
            </a>

            <a
              href="mailto:royalerchhobicommunications@gmail.com"
              aria-label="Send an email"
              className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-black/20 text-black transition-colors hover:bg-black hover:text-white"
            >
              <Mail size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:gap-6">
          <div className="contact-field flex flex-col gap-1">
            <label className="text-[10px] sm:text-xs tracking-widest uppercase text-black/40">
              Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="border-b border-black/20 bg-transparent py-2.5 sm:py-3 text-sm sm:text-base text-black placeholder:text-black/25 outline-none focus:border-black transition-colors"
            />
          </div>

          <div className="contact-field flex flex-col gap-1">
            <label className="text-[10px] sm:text-xs tracking-widest uppercase text-black/40">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="border-b border-black/20 bg-transparent py-2.5 sm:py-3 text-sm sm:text-base text-black placeholder:text-black/25 outline-none focus:border-black transition-colors"
            />
          </div>

          <div className="contact-field flex flex-col gap-1">
            <label className="text-[10px] sm:text-xs tracking-widest uppercase text-black/40">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={4}
              className="border-b border-black/20 bg-transparent py-2.5 sm:py-3 text-sm sm:text-base text-black placeholder:text-black/25 outline-none focus:border-black transition-colors resize-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="contact-field mt-2 sm:mt-4 self-start bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-body font-medium transition-all hover:bg-accent hover:text-black disabled:opacity-40"
          >
            {status === "loading" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className="text-sm text-green-600">
              Message sent — we&apos;ll be in touch soon.
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