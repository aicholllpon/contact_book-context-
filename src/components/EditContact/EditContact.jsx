import React, { useContext, useEffect, useState } from 'react';
import { contactsContext } from '../../contexts/ContactsContext';

const EditContact = (props) => {
    console.log(props);
    const { saveTask, taskToEdit } = useContext(contactsContext);
    const [a, setA] = useState(taskToEdit)

    useEffect(() => {
        setA(taskToEdit)
    }, [taskToEdit])

    // function handleInputChange(e) {
    //     let obj = {
    //         ...taskToEdit,
    //         [e.target.name]: e.target.value
    //     }
    //     setA(obj)
    //     console.log(obj)
    // }

    return (
        <div>
            {a ?
                <>
                    <input name="name" onChange={(e) => {
                        let newContact = { ...a }
                        newContact.name = e.target.value
                        setA(newContact)
                    }}
                        value={a.name} type="text"
                    />

                    <input name="surname" onChange={(e) => {
                        let newContact = { ...a }
                        newContact.surname = e.target.value
                        setA(newContact)
                    }}
                        value={a.surname} type="text"
                    />

                    <input name="phone" onChange={(e) => {
                        let newContact = { ...a }
                        newContact.phone = e.target.value
                        setA(newContact)
                    }}
                        value={a.phone} type="number"
                    />

                    <button onClick={() => saveTask(a, props.history)} >Save</button>
                </>
                : <h1>LOADING!!!</h1>
            }
        </div>
    );
};

export default EditContact;