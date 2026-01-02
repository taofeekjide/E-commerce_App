import React from "react";

export default function Newsletter() {
  function onSubmitHandler(e) {
    e.preventDefault();
  }

  return (
    <section className="bg-[#FFFDF8] py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-3xl font-semibold text-black">
          Subscribe & Get <span className="text-purple-600">20% Off</span>
        </p>

        <p className="text-gray-500 mt-4 text-sm sm:text-base">
          Join our newsletter and be the first to receive updates, exclusive
          offers, and new arrivals straight to your inbox.
        </p>

        <form
          onSubmit={onSubmitHandler}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 border rounded-full p-2 bg-white shadow-sm"
        >
          <input
            className="w-full px-4 py-3 outline-none text-sm"
            type="email"
            placeholder="Enter your email address"
            required
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition text-white text-sm font-medium px-8 py-3 rounded-full"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
