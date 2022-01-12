import React from 'react';
import ServerTest from './server-test';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

function App() {
  return (
    <div className="App">
      <GuestList />
      <UserSearch />
      <ServerTest />
    </div>
  );
}

export default App;
