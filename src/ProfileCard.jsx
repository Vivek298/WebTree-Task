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
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-black flex justify-center items-center h-screen">
      {/* Outer Container */}
      <div className="flex justify-center items-center w-[700px] h-[400px] bg-white border border-black shadow-lg">
        <div className="w-[600px] h-[300px] bg-white  border-[6px] border-black flex items-center px-6 py-4 shadow-md">
          {/* Image Section */}
          <div className="w-[200px] h-[200px] border-[5px] border-black flex-shrink-0 ml-4">
            <img
              src={user.picture.large}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="ml-12 mb-14 w-[400px]">
            {/* Name Row */}
            <div className="flex justify-start items-center gap-6">
              <p className="font-semibold text-2xl text-black">
                {user.name.first}
              </p>
              <p className="font-semibold text-2xl text-black">
                {user.name.last}
              </p>
            </div>

            {/* Gender */}
            <p className="mt-5 text-xl text-gray-800">
              <span className="font-medium">Gender:</span> {user.gender}
            </p>

            {/* Phone */}
            <p className="mt-5 text-xl text-gray-800">
              <span className="font-medium">Phone:</span> {user.phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
