import React, { useState } from 'react';
import './Contact.css';

function Contact({ contact, deleteContact, editContact }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(contact.name);
  const [updatedPhone, setUpdatedPhone] = useState(contact.phone);
  const [updatedEmail, setUpdatedEmail] = useState(contact.email);

  const handleEdit = () => {
    if (isEditing) {
      editContact({ name: updatedName, phone: updatedPhone, email: updatedEmail });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="contact-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="text"
            value={updatedPhone}
            onChange={(e) => setUpdatedPhone(e.target.value)}
          />
          <input
            type="email"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
          />
        </>
      ) : (
        <>
          <h2>{contact.name}</h2>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </>
      )}
      <div className="button-container">
        <button onClick={handleEdit} className="edit-button">
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={deleteContact} className="delete-button">Delete</button>
      </div>
    </div>
  );
}

export default Contact;
