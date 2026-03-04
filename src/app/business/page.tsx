"use client";

import React from "react";
import { FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";
import ClientWebsitesSection from "../components/ClientWebsiteSection";

export default function BusinessPage() {
    const whatsappNumber = "+27676359778";
  const whatsappMessage = encodeURIComponent(
    "Hi Kaya, I am interested in your services."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Video Banner */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <video
          src="/business-video.mp4" // replace with your video path
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold max-w-4xl text-center px-6">
            How I Do Business
          </h1>
        </div>
      </section>

      {/* How I Do Business Sections */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-cyan-400">Our Approach</h2>
          <p className="text-lg leading-relaxed opacity-80">
            I focus on understanding your needs thoroughly to deliver tailored solutions 
            that align perfectly with your vision and goals. Communication is key, and 
            I ensure you’re informed and involved every step of the way.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4 text-cyan-400">Quality & Transparency</h2>
          <p className="text-lg leading-relaxed opacity-80">
            Quality is never compromised. I maintain high standards in design, development, 
            and testing. Transparency is a core value, and I provide clear timelines, 
            honest progress updates, and open collaboration.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4 text-cyan-400">Building Relationships</h2>
          <p className="text-lg leading-relaxed opacity-80">
            Beyond delivering projects, I strive to build long-term relationships 
            based on trust, reliability, and mutual growth. Your success is my success.
          </p>
        </div>

        <section>
        <ClientWebsitesSection />
        </section>

        {/* Contact Section */}
        <section className="bg-cyan-900 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-white">Get In Touch</h2>
          <p className="text-lg opacity-90 mb-4">
            Have questions or want to start a project? Reach out today.
          </p>
          <p className="text-cyan-300 mb-2">Email: <a href="mailto:smithkaya404@gmail.co" className="underline hover:text-cyan-400">smithkaya404@gmail.com</a></p>
          <p className="text-cyan-300 mb-2">Phone: <a href="tel:+27676359778" className="underline hover:text-cyan-400">0676359778</a></p>
          <div className="flex justify-center gap-6 mb-6 text-cyan-300">
        <a
          href="https://www.linkedin.com/in/kaya-smith-32491a319/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-cyan-400 transition"
        >
          <FaLinkedin className="w-8 h-8" />
        </a>
        <a
          href="https://www.facebook.com/kayakairo.smith.1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-cyan-400 transition"
        >
          <FaFacebook className="w-8 h-8" />
        </a>
      </div>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white font-semibold transition"
          >
            <FaWhatsapp className="w-6 h-6" />
            Chat with me on WhatsApp
          </a>
        </section>
      </section>
    </main>
  );
}
