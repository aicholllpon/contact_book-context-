import React, { useContext, useState } from 'react';
import { contactsContext } from '../../contexts/ContactsContext';
import './AddContact.css';

const AddContact = () => {
    const [inpValue1, setInpValue1] = useState('')
    const [inpValue2, setInpValue2] = useState('')
    const [inpValue3, setInpValue3] = useState('')
    const { addNewContact } = useContext(contactsContext)

    function handleClick() {
        if (!inpValue1.trim() || !inpValue2.trim() || !inpValue3.trim()) return alert('Заполните поля')
        let newObj = {
            name: inpValue1,
            surname: inpValue2,
            phone: inpValue3,
            // status: false
        }
        addNewContact(newObj)
        setInpValue1('')
        setInpValue2('')
        setInpValue3('')
    }

    return (
        <div>
            {/* <Link to="/list">List</Link> */}
            <input value={inpValue1} onChange={(e) => setInpValue1(e.target.value)} type="text" placeholder="name" />
            <input value={inpValue2} onChange={(e) => setInpValue2(e.target.value)} type="text" placeholder="surname" />
            <input value={inpValue3} onChange={(e) => setInpValue3(e.target.value)} type="number" placeholder="phone" />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default AddContact;