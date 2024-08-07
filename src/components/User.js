import React, { useEffect, useState } from "react";

const User = () => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const data = await fetch("https://api.github.com/users/abhishek0705");
    const json = await data.json();
    setUserInfo(json);
  };
  const { name, location, twitter_username, avatar_url } = userInfo || {};
  return (
    <div className="m-4 p-4 rounded-lg bg-gray-200">
      <img src={avatar_url} style={{ width: 100 }} />
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {twitter_username}</h4>
    </div>
  );
};

export default User;
