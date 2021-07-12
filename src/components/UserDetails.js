import React from 'react';
import { getFullName } from '../utils/stringUtils';

const UserDetails = ({ selectedUser }) => {
  console.log(selectedUser);
  const { name } = selectedUser;
  return (
    <div className="details">
      <p>Name : {getFullName(name.first, name.last)}</p>
      <p>Email Address : {selectedUser.email}</p>
      <img src={selectedUser.picture.thumbnail} alt="Loading..." />
      <p>View Count : {selectedUser.viewCount}</p>
    </div>
  );
};

export default UserDetails;
