import React, { useContext, useEffect } from 'react';
import { contactsContext } from '../../contexts/ContactsContext';
import { Link } from 'react-router-dom'


const Details = () => {
    const { detailContact, details } = useContext(contactsContext);

    useEffect(() => {
        // details()
    }, [])


    return (
        <div>
            <ul>
                <li>
                    {detailContact.name}
                </li>
                <li>
                    {detailContact.surname}
                </li>
                <li>
                    {detailContact.phone}
                </li>

                <Link to="/">

                    <button>Back</button>

                </Link>
            </ul>
        </div>
    );
};

export default Details;