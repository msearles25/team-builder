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
            <label htmlFor='name'>Name: </label>
            <input
                id='name'
                type='text'
                name='name'
                onChange={changeHandler}
                value={member.name}
            />
            <label htmlFor='email'>Email: </label>
            <input 
                id='email'
                type='text'
                name='email'
                onChange={changeHandler}
                value={member.email}
            />
            <label htmlFor='role'>Role: </label>
            <select id='role' name='role' onChange={changeHandler} value={member.role}>
                <option>Select one...</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>Designer</option>
            </select>
            <button type='submit'>Add a member</button>
        </form>
    )
}

export default Form;
