import React, { useState } from 'react';
import Footer from '../../Shared/Footer';
import LoggedInHeader from '../../Shared/LoggedInHeader';
import './Settings.css'
import { FaQuestionCircle, FaBell, FaCalendarAlt, FaCheckCircle, FaPen, FaSyncAlt  } from 'react-icons/fa';


const Settings = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="settings-page">
      <LoggedInHeader />
        <div className="settings-container">
          <div className='settings-left'>
            <div className='user-info'>
              <p style={{ fontSize: "16px", fontWeight: "800", marginBottom: 10}}>Name Surname</p>
              <p style={{ fontSize: "12px", marginBottom: 0}}>testemail@test.com</p>
              <p style={{ fontSize: "12px", marginBottom: 0}}>password</p>
              <button className='edit-button-user'><FaPen style={{marginRight: 5}}/>Edit</button>
            </div>
            <div className='subscription'>
              <div>
                <p style={{ fontSize: "16px", fontWeight: "800", marginBottom: 0}}>Subscription</p>
                <p style={{ fontSize: "12px", marginBottom: 0}}>Basic</p>
              </div>
              <hr />
              <div>
                <p style={{ fontSize: "16px", fontWeight: "800", marginBottom: 0}}>Payment Status</p>
                <button className='payment-button'>
                  <FaCheckCircle color='green'/>
                  <span style={{marginLeft: 5}}>Paid</span>
                  </button>
              </div>
              <hr />
              <div>
                <p style={{ fontSize: "16px", fontWeight: "800", marginBottom: 0}}>Next Payment Date</p>
                <p style={{ fontSize: "12px", marginBottom: 0}}><FaCalendarAlt style={{marginRight: 5}}/>24 May 2024</p>
              </div>
              <hr />
              <div>
                <p style={{ fontSize: "16px", fontWeight: "800", marginBottom: 0}}>Last Payment Amount</p>
                <p style={{ fontSize: "12px", marginBottom: 0}}>$1112.00</p>
              </div>
              <button className='edit-button-user'><FaSyncAlt style={{marginRight: 5}}/>Update</button>
            </div>
            <div className='amazon'>
              <p style={{ fontSize: "16px", fontWeight: "800", marginBottom: 10}}>Amazon Private Limited</p>
              <p style={{ fontSize: "12px", marginBottom: 0}}>2464 Royal Ln Mesa, New Jersey 45463, United States</p>
              <button className='edit-button-user'><FaPen style={{marginRight: 5}}/>Edit</button>
            </div>
            <div className='api-key'>
              <p style={{ fontSize: "16px", fontWeight: "800", marginBottom: 10}}>API Key</p>
              <input className='api-input'/>
            </div>
          </div>
          <div className='settings-right'>
            <div className='main-container'>
              <p style={{ fontSize: "20px", fontWeight: "800", marginBottom: 0}}>Settings</p>

              <div className='container-item'>
                <p style={{ fontSize: "16px", fontWeight: "700", marginBottom: 0}}>Two-Factor Authentication</p>
                <div className='radio-buttons'>
                  <div className='radio-button'>
                    <input type="radio" id="True" value="true"/>
                    <label for="True">True</label>
                  </div>
                  <div className='radio-button'>
                    <input type="radio" id="False" value="false" />
                    <label for="False">False</label>
                  </div>
                </div>
              </div>

              <hr />

              <div className='container-item'>
                <p style={{ fontSize: "16px", fontWeight: "700", marginBottom: 0}}>Session Timeout Duration</p>
                <input className='settings-input' placeholder='e.g.'/>
              </div>

              <hr />

              <div className='container-item'>
                <p style={{ fontSize: "16px", fontWeight: "700", marginBottom: 0}}>Notification Frequency</p>
                <div className='radio-buttons'>
                  <div className='radio-button'>
                    <input type="radio" id="Hourly" value="hourly"/>
                    <label for="Hourly">Hourly</label>
                  </div>
                  <div className='radio-button'>
                    <input type="radio" id="Daily" value="daily" />
                    <label for="Daily">Daily</label>
                  </div>
                  <div className='radio-button'>
                    <input type="radio" id="Weekly" value="weekly"/>
                    <label for="Weekly">Weekly</label>
                  </div>
                </div>
              </div>

              <hr />

              <div className='container-item'>
                <p style={{ fontSize: "16px", fontWeight: "700", marginBottom: 0}}>API Rate Limit</p>
                <input className='settings-input' placeholder='e.g.'/>
              </div>
              
              <hr />

              <div className='container-item'>
                <p style={{ fontSize: "16px", fontWeight: "700", marginBottom: 0}}>Theme Selection</p>
                <div className='radio-buttons'>
                  <div className='radio-button'>
                    <input type="radio" id="Light" value="light"/>
                    <label for="Light">Light</label>
                  </div>
                  <div className='radio-button'>
                    <input type="radio" id="Dark" value="dark" />
                    <label for="Dark">Dark</label>
                  </div>
                </div>
              </div>

              <hr />

              <div className='container-item'>
                <p style={{ fontSize: "16px", fontWeight: "700", marginBottom: 0}}>Auto-Renew Subscription</p>
                <div className='radio-buttons'>
                  <div className='radio-button'>
                    <input type="radio" id="True" value="true"/>
                    <label for="True">True</label>
                  </div>
                  <div className='radio-button'>
                    <input type="radio" id="False" value="false" />
                    <label for="False">False</label>
                  </div>
                </div>
              </div>

              <hr />

              <div className='container-item'>
                <p style={{ fontSize: "16px", fontWeight: "700", marginBottom: 0}}>Data Backup Frequency</p>
                <div className='radio-buttons'>
                  <div className='radio-button'>
                    <input type="radio" id="Daily" value="daily"/>
                    <label for="Daily">Daily</label>
                  </div>
                  <div className='radio-button'>
                    <input type="radio" id="Weekly" value="weekly" />
                    <label for="Weekly">Weekly</label>
                  </div>
                  <div className='radio-button'>
                    <input type="radio" id="Monthly" value="monthly" />
                    <label for="Monthly">Monthly</label>
                  </div>
                </div>
              </div>

              <hr />

              <div className='container-item'>
                <p style={{ fontSize: "16px", fontWeight: "700", marginBottom: 0}}>Maximum Login Attempts</p>
                <input className='settings-input' placeholder='e.g.'/>
              </div>

              <hr />
              
              <div className='container-item'>
                <p style={{ fontSize: "16px", fontWeight: "700", marginBottom: 0}}>Error Reporting Level</p>
                <div className='radio-buttons'>
                  <div className='radio-button'>
                    <input type="radio" id="Minimal" value="minimal" />
                    <label for="Minimal">Minimal</label>
                  </div>
                  <div className='radio-button'>
                    <input type="radio" id="Standard" value="standard" />
                    <label for="Standard">Standard</label>
                  </div>
                  <div className='radio-button'>
                    <input type="radio" id="Detailed" value="detailed"/>
                    <label for="Detailed">Detailed</label>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default Settings;