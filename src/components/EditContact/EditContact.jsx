import React, { useContext, useEffect, useState } from 'react';
import { contactsContext } from '../../contexts/ContactsContext';

const EditContact = (props) => {
    console.log(props);
    const { saveTask, taskToEdit } = useContext(contactsContext);
    const [a, setA] = useState(false)
    console.log('ijijijiji');

    console.log(taskToEdit)

    useEffect(() => {
        setA(taskToEdit)
    }, [taskToEdit])

    function handleInputChange(e) {
        let obj = {
            ...taskToEdit,
            [e.target.name]: e.target.value
        }
        setA(obj)
    }

    return (
        <div>
            {a ?
                <>
                    <input name="name" onChange={handleInputChange} value={a.name} type="text" />
                    <input name="surname" onChange={handleInputChange} value={a.surname} type="text" />
                    <input name="phone" onChange={handleInputChange} value={a.phone} type="number" />
                    <button onClick={() => saveTask(a,props.history)} >Save</button>
                </>
                : <h1>LOADING!!!</h1>}
        </div>
    );
};

export default EditContact;