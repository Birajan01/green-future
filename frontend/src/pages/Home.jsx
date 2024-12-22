import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, TrendingUp, Users } from 'lucide-react';

function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight tracking-tight">
          Welcome to Greenfuture
        </h1>
        <p className="text-lg sm:text-xl mb-6">
            Cultivate a systainable tomorrow with our eco system platform.
        </p>
        <Link
          to="/submit-idea"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out"
        >
          Submit Your Idea
        </Link>
      </div>

      {/* Feature Cards Section */}
      <div className="grid md:grid-cols-3 gap-12 my-16">
        {/* Share Ideas Card with Circular Container */}
        <div className="relative bg-white p-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mx-auto">
          <Lightbulb className="w-16 h-16 text-blue-600 mb-6 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2 text-center text-gray-800">Your Ideas</h3>
          <p className="text-gray-600 text-center">
            Submit your innovative ideas to community.
          </p>
          <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-blue-600 rounded-full pointer-events-none"></div>
        </div>

        {/* Track Progress Card with Diagonal Edges */}
        <div className="bg-white p-8 rounded-tl-3xl rounded-br-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative">
          <TrendingUp className="w-16 h-16 text-blue-600 mb-6 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2 text-center text-gray-800">Progress</h3>
          <p className="text-gray-600 text-center">
            Monitor the development and implementation of your ideas.
          </p>
          <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-blue-600 rounded-tl-3xl rounded-br-3xl pointer-events-none"></div>
        </div>

        {/* Collaborate Card with Pill Shape */}
        <div className="relative bg-white p-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mx-auto">
          <Users className="w-16 h-16 text-blue-600 mb-6 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2 text-center text-gray-800">Collaborate</h3>
          <p className="text-gray-600 text-center">
            Work together with others to bring ideas to life.
          </p>
          <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-blue-600 rounded-full pointer-events-none"></div>
        </div>
      </div>

      {/* Featured Ideas Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg my-16">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
          Featured Ideas
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Go green #{item}
              </h3>
              <p className="text-gray-500 mb-5">
                A...................................
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Submitted 2 days ago</span>
                <Link
                  to={`/idea/${item}`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
