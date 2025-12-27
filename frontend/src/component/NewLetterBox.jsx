import React, { useState } from "react";

function NewsletterBox() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <section className="w-full bg-gradient-to-l from-[#141414] to-[#0c2025] py-16 flex flex-col items-center gap-4 px-4">
      
      <p className="text-xl md:text-3xl text-[#a5faf7] font-semibold text-center">
        Subscribe Now & Get 20% Off
      </p>

      <p className="text-center text-sm md:text-lg text-blue-100 max-w-2xl font-medium">
        Subscribe now and enjoy exclusive 20% off on your first order! Stay updated
        with our latest products and offers.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col sm:flex-row items-center gap- mt-4"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:flex-1 h-12 rounded-md px-3 outline-none text-white bg-[#1e2e34] border border-gray-600 transition"
        />

        <button
          type="submit"
          disabled={!email}
          className="w-full sm:w-auto h-12 px-6 bg-[#789cdb] text-white font-semibold rounded-md hover:bg-[#70a1ff] transition cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default NewsletterBox;
