import React, { useState } from 'react';

const ProfileEditingPage = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    bio: 'Lorem ipsum dolor sit amet.'
  });

  const [updatedProfile, setUpdatedProfile] = useState({ ...profile });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile({
      ...updatedProfile,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(updatedProfile);
    alert('Profile updated successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Edit Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={updatedProfile.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="mt-2 p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={updatedProfile.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="mt-2 p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-lg text-gray-700">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={updatedProfile.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            className="mt-2 p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="bio" className="text-lg text-gray-700">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={updatedProfile.bio}
            onChange={handleInputChange}
            placeholder="Tell us about yourself"
            rows="4"
            className="mt-2 p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          ></textarea>
        </div>

        <button type="submit" className="w-full py-3 mt-4 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition duration-300">
          Save Changes
        </button>
      </form>

      <h3 className="text-xl font-semibold text-gray-800 mt-8">Your Profile Information</h3>
      <div className="mt-4 text-gray-700">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
        <p><strong>Bio:</strong> {profile.bio}</p>
      </div>
    </div>
  );
};

export default ProfileEditingPage;
