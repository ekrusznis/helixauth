import React, { useState } from 'react';
import { supportTicket } from '../../../ApiClient';

const TicketForm = () => {
  const [ticket, setTicket] = useState({
    type: '',
    title: '',
    description: '',
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket({ ...ticket, [name]: value });
  };

  const handleAttachmentChange = (e) => {
    setTicket({ ...ticket, attachment: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('type', ticket.type);
    formData.append('title', ticket.title);
    formData.append('description', ticket.description);
    if (ticket.attachment) {
      formData.append('attachment', ticket.attachment);
    }

    try {
      // Replace submitTicket with your actual API call function
      await submitTicket(formData);
      alert('Ticket submitted successfully!');
    } catch (error) {
      console.error('Error submitting ticket:', error);
      alert('Failed to submit ticket.');
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div>
        <label>Type:</label>
        <select name="type" value={ticket.type} onChange={handleChange} required>
          <option value="">Select a type</option>
          <option value="Bug">Bug</option>
          <option value="Feature">Feature</option>
          <option value="Customization">Customization</option>
        </select>
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={ticket.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={ticket.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Attachment (optional):</label>
        <input
          type="file"
          name="attachment"
          onChange={handleAttachmentChange}
        />
      </div>
      <button type="submit">Submit Ticket</button>
    </form>
  );
};

export default TicketForm;

const submitTicket = async (formData) => {
  // Placeholder for your API call
  console.log('Submitting ticket:', formData);
  // Implement your API call here to submit the form data to the backend
};
