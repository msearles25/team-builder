import React from 'react';

function TeamMembers(props) {
    return (
        <div className='team-list'>
            {props.teamMember.map(mate => (
                <div>
                    <h2>{mate.name}</h2>
                    <p>{mate.email}</p>
                    <p>{mate.role}</p>
                </div>
            ))}
        </div>
    )
}

export default TeamMembers;