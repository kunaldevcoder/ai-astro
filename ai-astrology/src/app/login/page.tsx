import Layout from "../layout";

export default function Login() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-6">Sign In</h1>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-6 text-right">
              <a href="#" className="text-sm text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
                Sign In
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
