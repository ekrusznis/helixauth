import React from 'react';

const CompanyInfo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', width: '80%', margin: 'auto' }}>
      <h2>Company Info</h2>
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
        style={{ margin: '10px', padding: '8px', width: '100%' }}
      />
      <input
        type="text"
        name="streetAddress1"
        placeholder="Street Address 1"
        value={formData.streetAddress1}
        onChange={handleChange}
        style={{ margin: '10px', padding: '8px', width: '100%' }}
      />
      <input
        type="text"
        name="streetAddress2"
        placeholder="Street Address 2"
        value={formData.streetAddress2}
        onChange={handleChange}
        style={{ margin: '10px', padding: '8px', width: '100%' }}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        style={{ margin: '10px', padding: '8px', width: '100%' }}
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
        style={{ margin: '10px', padding: '8px', width: '100%' }}
      />
      <input
        type="text"
        name="zip"
        placeholder="ZIP Code"
        value={formData.zip}
        onChange={handleChange}
        style={{ margin: '10px', padding: '8px', width: '100%' }}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        style={{ margin: '10px', padding: '8px', width: '100%' }}
      />
    </div>
  );
};

export default CompanyInfo;
