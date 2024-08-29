import Layout from "../layout";
export default function AboutPage() {
  return (
    <Layout>
      <div className="p-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          About AI Astrology
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          At AI Astrology, we blend the ancient wisdom of astrology with the
          cutting-edge capabilities of artificial intelligence. Our mission is
          to make astrology more accessible, personalized, and insightful for
          everyone, whether you're a seasoned astrologer or someone just
          starting to explore the stars.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our AI-powered tools offer deep insights into your astrological chart,
          compatibility reports, and daily horoscopes that are tailored to your
          unique astrological profile. With AI Astrology, you'll discover how
          the movements of the planets can influence your life, and how to make
          the most of the cosmic energies around you.
        </p>
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-4">
          We believe that astrology is a powerful tool for self-discovery and
          personal growth. Our mission is to bring this ancient practice into
          the modern age with the help of AI, offering personalized insights
          that empower our users to navigate their lives with greater awareness
          and confidence.
        </p>
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li>AI-powered personalized horoscopes and reports.</li>
          <li>Accurate and detailed astrological readings.</li>
          <li>User-friendly interface and easy-to-understand insights.</li>
          <li>A team of experienced astrologers and AI experts.</li>
        </ul>
        <p className="text-lg text-gray-700">
          Join us on a journey through the stars and discover the power of AI
          Astrology today.
        </p>
      </div>
    </Layout>
  );
}
