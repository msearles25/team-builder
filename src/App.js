import React, { useState } from 'react';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState ([
    {
      id: 1,
      name: 'Bob',
      email: 'bob@bob.com',
      role: 'Front End'
    }
  ])
  return (
    <div className="App">
      <TeamMembers />
    </div>
  );
}

export default App;
