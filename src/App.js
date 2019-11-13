import React, { useState } from 'react';
import './App.css';

import TeamMembers from './components/TeamMembers';

function App() {
  const [teamMember, setTeamMember] = useState ([
    {
      id: 1,
      name: 'Bob',
      email: 'bob@bob.com',
      role: 'Front End'
    }
  ])
  return (
    <div className="App">
      <TeamMembers teamMember={teamMember}/>
    </div>
  );
}

export default App;
