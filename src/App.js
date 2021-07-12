import React, { useState, useEffect } from 'react';
import { baseUrl } from './constants';
import Header from './components/Header';
import FilterComp from './components/FilterComp';
import UserDetails from './components/UserDetails';
import './styles.css';

export default function App() {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState(null);

  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
        data.results.sort((a, b) => {
          if (a.name.last > b.name.last) {
            return 1;
          } else if (a.name.last < b.name.last) {
            return -1;
          } else {
            return 0;
          }
        });
        setUsers(data.results);
      });
  }, []);

  const onFilterChange = filterText => {
    if (filterText.trim()) {
      const filteredUsers = users.filter(user =>
        user.name.last.includes(filterText)
      );
      if (filteredUsers.length > 0) {
      }
      setSelectedUsers([...filteredUsers]);
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = e => {
    const userEmail = e.target.id;
    const selectedUser = users.find(user => user.email == userEmail);
    selectedUser.viewCount = selectedUser['viewCount']
      ? selectedUser['viewCount'] + 1
      : 1;
    setSelectedUsers([selectedUser]);
  };

  return (
    <div className="container">
      <Header />
      <FilterComp onFilterChange={onFilterChange}  />
      <div className="records">
        {users.map((user, i) => (
          <button key={i} id={user.email} onClick={handleSelectUser}>
            {i + 1}{' '}
          </button>
        ))}
      </div>
      {selectedUsers &&
        selectedUsers.map((selectedUser, i) => (
          <UserDetails
            key={i}
            selectedUser={selectedUser}            
          />
        ))}
    </div>
  );
}
