import React, { useContext, useEffect } from 'react';
import { contactsContext } from '../../contexts/ContactsContext';
import { Link } from 'react-router-dom';
import './ContactsList.css';

const ContactsList = () => {
    const {
        getContactsData,
        contacts,
        deleteData,
        editContact,
        details
    } = useContext(contactsContext)

    useEffect(() => {
        getContactsData()
    }, [])

    return (
        <div>
            {contacts.map(item => (
                <ul className="ul" key={item.id}>


                    <li>
                        <Link to="/details" onClick={() => details(item.id)}>

                            {item.name} {item.surname} {item.phone}

                        </Link>

                        <button onClick={() => deleteData(item.id)} className="btn-delete">Delete</button>

                        <Link to="/edit">

                            <button onClick={() => editContact(item.id)}>Edit</button>

                        </Link>

                    </li>

                </ul>
            ))}
        </div>
    );
};

export default ContactsList;