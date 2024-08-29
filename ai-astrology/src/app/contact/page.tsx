import Layout from "../layout";

export default function page() {
  return (
    <Layout>
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-100 mb-8">
            Contact Us
          </h1>

          <div className="flex justify-center flex-col md:flex-row md:space-x-10">
            {/* Contact Form */}
            <div className="md:w-2/3 bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    rows="6"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
