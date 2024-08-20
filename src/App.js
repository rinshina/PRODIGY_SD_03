import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import './App.css';
function App() {
  const [contacts, setContacts] = useState([
    { name: "Febin kp", phone: "7356416560", email: "febink123@gmail.com" },
    { name: "Arshad kp", phone: "7456416560", email: "arshd@gmail.com" }
  ]);
  const [showForm, setShowForm] = useState(false);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
    setShowForm(false);
  };

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const editContact = (index, updatedContact) => {
    const updatedContacts = contacts.map((contact, i) => 
      i === index ? updatedContact : contact
    );
    setContacts(updatedContacts);
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>Contact Management System</h1>
      <button onClick={handleAddClick} className="add-contact-button">
        <span className="add-icon">+</span> Add New Contact
      </button>
      
      {showForm && (
        <div className="popup-overlay">
          <div className="popup-form">
            <ContactForm addContact={addContact} />
            <button onClick={handleCloseForm} className="close-button">&times;</button>
          </div>
        </div>
      )}
      
      <ContactList contacts={contacts} editContact={editContact} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
