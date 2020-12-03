import React, { useReducer } from 'react';
import axios from 'axios';

export const contactsContext = React.createContext();

const INIT_STATE = {
    contacts: [],
    taskToEdit: null,
    detailContact: []
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_CONTACTS_DATA":
            return { ...state, contacts: action.payload }
        case "EDIT_CONTACTS":
            return { ...state, taskToEdit: action.payload }
        case "DETAIL_CONTACTS":
            return { ...state, detailContact: action.payload }
        default: return state
    }
}

const ContactsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    async function addNewContact(newContact) {
        await axios.post('http://localhost:8000/contacts', newContact)
        getContactsData()
    }

    async function getContactsData() {
        const { data } = await axios(' http://localhost:8000/contacts')
        console.log(data)
        dispatch({
            type: "GET_CONTACTS_DATA",
            payload: data
        })
    }

    async function deleteData(id) {
        await axios.delete(`http://localhost:8000/contacts/${id}`)
        getContactsData()
    }

    async function editContact(id) {
        const { data } = await axios.patch(`http://localhost:8000/contacts/${id}`)
        dispatch({
            type: "EDIT_CONTACTS",
            payload: data
        })
    }

    async function saveTask(newContact, history) {
        try {
            await axios.patch(`http://localhost:8000/contacts/${newContact.id}`, newContact)
            history.push('/')
            dispatch({
                type: "EDIT_CONTACTS",
                payload: null
            })
        } catch (error) {
            alert('Произошла ошибка')
        }
    }

    async function details(id) {
        const { data } = await axios(`http://localhost:8000/contacts/${id}`)
        dispatch({
            type: "DETAIL_CONTACTS",
            payload: data
        })
    }
    console.log(state.detailContact)

    return (
        <contactsContext.Provider value={{
            contacts: state.contacts,
            taskToEdit: state.taskToEdit,
            detailContact: state.detailContact,
            addNewContact,
            getContactsData,
            deleteData,
            editContact,
            saveTask,
            details,
        }}>
            {children}
        </contactsContext.Provider>
    );
};

export default ContactsContextProvider;















