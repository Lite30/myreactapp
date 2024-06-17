import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState({
    firstName: 'Liteboho',
    lastName: 'Maseli',
    email: 'liteboho@gmail.com',
    phone: '+266 68684344',
  });

  const [password, setPassword] = useState({
    email: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const handleSave = () => {
    // Handle save user info
    console.log('User info saved:', user);
  };

  const handlePasswordUpdate = () => {
    // Handle password update
    console.log('Password updated:', password);
  };

  return (
    <div className="profile-container">
      <div className="profile-section">
        <h2>Profile</h2>
        <img className="profile-image" src="./logo.svg" alt="Profile" />
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleInputChange}
          placeholder="Phone"
        />
        <button onClick={handleSave}>Save</button>
      </div>
      <div className="password-section">
        <h2>Reset Password</h2>
        <input
          type="email"
          name="email"
          value={password.email}
          onChange={handlePasswordChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="oldPassword"
          value={password.oldPassword}
          onChange={handlePasswordChange}
          placeholder="Old Password"
        />
        <input
          type="password"
          name="newPassword"
          value={password.newPassword}
          onChange={handlePasswordChange}
          placeholder="New Password"
        />
        <input
          type="password"
          name="confirmPassword"
          value={password.confirmPassword}
          onChange={handlePasswordChange}
          placeholder="Confirm Password"
        />
        <button onClick={handlePasswordUpdate}>Update</button>
      </div>
    </div>
  );
};

export default Profile;
