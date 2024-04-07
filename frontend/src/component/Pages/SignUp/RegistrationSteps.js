// RegistrationSteps.js
import React, { useState } from 'react';
import UserInfo from './UserInfo'; // Assume this exists with similar structure to CompanyInfo
import CompanyInfo from './CompanyInfo';
import SubscriptionInfo from './SubscriptionInfo';

const RegistrationSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    subscription: '',
    paymentMethod: '',
    // Add other fields as needed
  });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleSubmit = () => {
    // Here you would handle form submission, including payment processing
    console.log("Form data submitted:", formData);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      {currentStep === 1 && <UserInfo formData={formData} setFormData={setFormData} />}
      {currentStep === 2 && <CompanyInfo formData={formData} setFormData={setFormData} />}
      {currentStep === 3 && <SubscriptionInfo formData={formData} setFormData={setFormData} />}

      {currentStep > 1 && <button onClick={prevStep} style={{ marginTop: '20px' }}>Back</button>}
      {currentStep < 3 && <button onClick={nextStep} style={{ marginTop: '20px' }}>Next</button>}
      {currentStep === 3 && <button onClick={handleSubmit} style={{ marginTop: '20px' }}>Submit</button>}
    </div>
  );
};

export default RegistrationSteps;
