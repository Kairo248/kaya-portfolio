"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  // Basic form validation
  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    )
      newErrors.email = "Invalid email address";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await res.json();
  
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setSubmitted(false);
        alert(result.error || "Failed to send message");
      }
    } catch (error) {
      setSubmitted(false);
      alert("Failed to send message");
    }
  };
  

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">

        {/* Fullscreen video section */}
    <div className="relative w-full h-[60vh] overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/contact-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400 text-center">
        Contact Me
      </h1>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
          <p className="opacity-80 leading-relaxed">
            Whether you want to collaborate, ask questions, or just say hi, 
            I’m here and happy to hear from you.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="w-6 h-6 text-cyan-400" />
              <a
                href="mailto:smithkaya404@gmail.com"
                className="hover:text-cyan-300 transition"
              >
                smithkaya404@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="w-6 h-6 text-cyan-400" />
              <a href="tel:+27676359778" className="hover:text-cyan-300 transition">
                +27 67 635 9778
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="w-6 h-6 text-cyan-400" />
              <span>Cape Town, South Africa</span>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-6 bg-white/10 p-8 rounded-lg backdrop-blur-md"
          >
            {submitted && (
              <p className="text-green-400 font-semibold mb-4 text-center">
                Thank you for reaching out! I will get back to you soon.
              </p>
            )}

            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full rounded-md px-4 py-2 bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  errors.name ? "border-2 border-red-500" : "border border-transparent"
                }`}
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 mt-1 text-sm">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-md px-4 py-2 bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  errors.email ? "border-2 border-red-500" : "border border-transparent"
                }`}
                placeholder="Your email"
              />
              {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="subject" className="block mb-1 font-semibold">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full rounded-md px-4 py-2 bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  errors.subject ? "border-2 border-red-500" : "border border-transparent"
                }`}
                placeholder="Subject"
              />
              {errors.subject && <p className="text-red-500 mt-1 text-sm">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full rounded-md px-4 py-2 bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none ${
                  errors.message ? "border-2 border-red-500" : "border border-transparent"
                }`}
                placeholder="Write your message..."
              ></textarea>
              {errors.message && <p className="text-red-500 mt-1 text-sm">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 transition text-black font-semibold py-3 rounded-md"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
