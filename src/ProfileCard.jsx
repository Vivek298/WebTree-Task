import { useEffect, useState } from "react";

const ProfileCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]))
      .catch((err) => console.error("Failed to fetch user data", err));
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black via-purple-900 to-pink-800">
        <p className="text-lg text-gray-200 animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black via-purple-900 to-pink-800">
      {/* Outer Container */}
      <div className="flex justify-center items-center w-[750px] h-[450px] bg-gray-900 border-4 border-teal-500 shadow-lg rounded-xl transform rotate-0 hover:rotate-1 transition-all duration-300 ease-out">
        <div className="w-[650px] h-[350px] bg-gradient-to-r  from-pink-800 via-purple-900 to-black flex items-center px-6 py-4 shadow-xl rounded-md relative overflow-hidden rotate-0 hover:rotate-1 ">
          {/* Glowing Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-pink-600 opacity-40 blur-sm -z-10"></div>

          {/* Image Section */}
          <div className="w-[210px] h-[210px] border-[5px] border-teal-400 flex-shrink-0 ml-4 overflow-hidden shadow-xl rounded-lg rotate-0 hover:rotate-1 ">
            <img
              src={user.picture.large}
              alt="Profile"
              className="w-full h-full object-cover border-4 border-teal-500 transform scale-105 hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Text Section */}
          <div className="ml-12 w-[380px]">
            {/* Name Row */}
            <div className="flex justify-start items-center gap-6">
              <p className="font-bold text-3xl text-teal-400 hover:text-teal-200 transform hover:translate-x-2 transition-all duration-300 ease-in-out">
                {user.name.first}
              </p>
              <p className="font-bold text-3xl text-teal-400 hover:text-teal-200 transform hover:translate-x-2 transition-all duration-300 ease-in-out">
                {user.name.last}
              </p>
            </div>

            {/* Gender */}
            <p className="mt-5 text-lg text-gray-300  hover:text-teal-200 transform hover:translate-x-2 transition-all duration-300 ease-in-out">
              <span className="font-semibold text-teal-300 ">Gender:</span>{" "}
              {user.gender}
            </p>

            {/* Phone */}
            <p className="mt-5 text-lg text-gray-300  hover:text-teal-200 transform hover:translate-x-2 transition-all duration-300 ease-in-out">
              <span className="font-semibold text-teal-300">Phone:</span>{" "}
              {user.phone}
            </p>

            {/* Tech-inspired Footer */}
            <div className="absolute bottom-4 left-4 text-xs text-gray-400 font-mono animate-pulse">
              <p>Cybernetic Profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
