'use client'
import React from 'react'
import { useState } from "react";

const FooterForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!email) return;
  
    setLoading(true);
    setMessage("");
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Newsletter User",
          email,
          enquiry: "Newsletter",
          message: "Joined via footer form",
        }),
      });
  
      const data = await res.json();
  
      if (data.success) {
        setMessage("Successfully joined!");
        setEmail("");
      } else {
        setMessage("Something went wrong.");
      }
    } catch (err) {
      setMessage("Failed to submit.");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-duration="700"
      data-aos-delay="420"
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="email@you.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-11 w-full rounded-full bg-[#2A1723] px-4 text-[14px] text-[#FAF3F7] outline-none placeholder:text-bodyPink"
      />

      <button
        type="submit"
        disabled={loading}
        className="h-11 rounded-full bg-pink px-5 text-[14px] font-semibold text-black transition hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Joining..." : "Join"}
      </button>

      {message && (
        <p className="absolute mt-12 text-xs text-bodyPink">
          {message}
        </p>
      )}
    </form>
  )
}

export default FooterForm