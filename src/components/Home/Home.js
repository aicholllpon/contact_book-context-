import React from 'react';
import AddContact from '../AddContact/AddContact';
import ContactsList from '../ContactsList/ContactsList';
// import EditContact from '../EditContact/EditContact';

const Home = () => {
    return (
        <div>
            <AddContact />
            <ContactsList />
            {/* <EditContact /> */}
        </div>
    );
};

export default Home;