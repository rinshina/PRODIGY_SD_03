import React from 'react';
import Contact from './Contact';

function ContactList({ contacts, deleteContact, editContact }) {
  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <Contact
          key={index}
          contact={contact}
          deleteContact={() => deleteContact(index)}
          editContact={(updatedContact) => editContact(index, updatedContact)}
        />
      ))}
    </div>
  );
}

export default ContactList;
