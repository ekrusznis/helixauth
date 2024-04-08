// SubscriptionInfo.js
import React from 'react';

const SubscriptionInfo = ({ setFormData, formData }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2 style={{ marginBottom: '20px' }}>Subscription Info</h2>
      <div>
        <input
          type="radio"
          id="monthly"
          name="subscription"
          value="monthly"
          onChange={(e) => setFormData({ ...formData, subscription: e.target.value })}
        />
        <label htmlFor="monthly">Monthly - $10</label>
      </div>
      <div>
        <input
          type="radio"
          id="annually"
          name="subscription"
          value="annually"
          onChange={(e) => setFormData({ ...formData, subscription: e.target.value })}
        />
        <label htmlFor="annually">Annually - $100</label>
      </div>
      <div>
        <input
          type="radio"
          id="paypal"
          name="paymentMethod"
          value="paypal"
          onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
        />
        <label htmlFor="paypal">PayPal</label>
      </div>
      <div>
        <input
          type="radio"
          id="stripe"
          name="paymentMethod"
          value="stripe"
          onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
        />
        <label htmlFor="stripe">Stripe</label>
      </div>
    </div>
  );
};

export default SubscriptionInfo;
