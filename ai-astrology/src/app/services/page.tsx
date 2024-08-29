import React from "react";
import Layout from "../layout";

export default function page() {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            Our Astrology Services
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Personalized Horoscope
              </h2>
              <p className="text-gray-600 mb-6">
                Get a daily, weekly, or monthly horoscope tailored to your
                unique astrological profile.
              </p>
              <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
                Learn More
              </button>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                AI Compatibility Analysis
              </h2>
              <p className="text-gray-600 mb-6">
                Discover your compatibility with others through AI-powered
                astrological analysis.
              </p>
              <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
                Learn More
              </button>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Astrological Birth Chart
              </h2>
              <p className="text-gray-600 mb-6">
                Receive a detailed interpretation of your birth chart,
                personalized by our AI astrologer.
              </p>
              <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">
              More Astrology Services
            </h2>
            <p className="text-gray-200 mb-8">
              Explore a range of services including tarot readings, transit
              reports, and more.
            </p>
            <button className="bg-white text-indigo-600 py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
