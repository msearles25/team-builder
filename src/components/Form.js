import React, { useState } from 'react';

function Form(props) {
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    })

    const changeHandler = e => {
        setMember({ ...member, [e.target.name]: e.target.value })
    }

    const submitForm = e => {
        e.preventDefault();
        props.addTeamMember(member);
        setMember({
            name: '',
            email: '',
            role: ''
        });
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input
                id='name'
                type='text'
                name='name'
                onChange={changeHandler}
                value={member.name}
            />

        </form>
    )
}

export default Form;
