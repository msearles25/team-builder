import React, { useState } from 'react';
import './App.css';

import TeamMembers from './components/TeamMembers';
import Form from './components/Form';

function App() {
  const [teamMember, setTeamMember] = useState ([
    {
      id: 1,
      name: 'Bob',
      email: 'bob@bob.com',
      role: 'Front End'
    }
  ])

  const addTeamMember = member => {
    const newTeamMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamMember([...teamMember, newTeamMember]);
  }
  return (
    <div className="App">
      <Form addTeamMember={addTeamMember}/>
      <TeamMembers teamMember={teamMember}/>
    </div>
  );
}

export default App;
