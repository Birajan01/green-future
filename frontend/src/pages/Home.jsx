import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBulb, AiOutlineRise, AiOutlineTeam } from "react-icons/ai";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

function Home() {
  const { user } = useAuth();
  const [ideas, setIdeas] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get("http://localhost:5000/api/ideas");
        if (response.data && Array.isArray(response.data.ideas)) {
          setIdeas(response.data.ideas);
        } else if (Array.isArray(response.data)) {
          setIdeas(response.data);
        } else {
          console.error(
            "Invalid data format received from API:",
            response.data
          );
          setError("Invalid data format received from the server.");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Network error: Please check your internet connection.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading ideas...</div>;
  }

  if (ideas.length === 0) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Green Future
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Cultivate a systainable tomorrow with our eco system platform.
          </p>
          {user ? (
            <Link
              to="/submit-idea"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Submit Your Idea
            </Link>
          ) : (
            <p className="text-gray-600">
              <Link
                to="/signin"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Signin to Continue
              </Link>
            </p>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 my-12">
          <h2 className="text-2xl font-bold mb-4">No Ideas to Show</h2>
          <p className="text-gray-600">
            There are currently no ideas available. Be the first to submit one!
          </p>
        </div>

        {error && (
          <div className="bg-red-100 text-red-600 p-4 rounded-lg mt-8">
            <p>{error}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to IdeaFlow
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Transform your ideas into reality with our innovative platform
        </p>
        {user ? (
          <Link
            to="/submit-idea"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Submit Your Idea
          </Link>
        ) : (
          <p className="text-gray-600">
            <Link
              to="/signin"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Signin to Continue
            </Link>
          </p>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-8 my-12">
        <div className="bg-blue-100 p-6 rounded-lg shadow-sm">
          <AiOutlineBulb className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-blue-700">
            Share Ideas
          </h3>
          <p className="text-blue-600">
            Submit your innovative ideas and get feedback from the community
          </p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg shadow-sm">
          <AiOutlineRise className="w-12 h-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-green-700">
            Track Progress
          </h3>
          <p className="text-green-600">
            Monitor the development and implementation of your ideas
          </p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-lg shadow-sm">
          <AiOutlineTeam className="w-12 h-12 text-yellow-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-yellow-700">
            Collaborate
          </h3>
          <p className="text-yellow-600">
            Work together with others to bring ideas to life
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 my-12">
        <h2 className="text-2xl font-bold mb-4">All Ideas</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {ideas.map((idea) => (
            <div key={idea._id} className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">{idea.title}</h3>
              <p className="text-gray-600 mb-4">{idea.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Submitted{" "}
                  {idea.createdAt
                    ? new Date(
                        idea.createdAt.seconds * 1000
                      ).toLocaleDateString()
                    : "Date not available"}
                </span>
                <Link
                  to={`/idea/${idea._id}`}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {error && (
        <div className="bg-red-100 text-red-600 p-4 rounded-lg mt-8">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
