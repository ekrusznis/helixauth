import React from 'react';
import './ApiTable.css';

const ApiTable = () => {
  // Static data for the table
  const apiData = [
    {
      name: 'user.bestbags',
      isNew: true,
      type: 'Internal',
      traceSource: 'Kong',
      securityFindings: { critical: 16, high: 3, medium: 163, low: 1 },
      labels: 'No Authentication',
      endpoints: 2,
    },
    {
        name: 'user.bestbags',
        isNew: true,
        type: 'Internal',
        traceSource: 'Kong',
        securityFindings: { critical: 16, high: 3, medium: 163, low: 1 },
        labels: 'No Authentication',
        endpoints: 2,
      },
      {
        name: 'user.bestbags',
        isNew: true,
        type: 'Internal',
        traceSource: 'Kong',
        securityFindings: { critical: 16, high: 3, medium: 163, low: 1 },
        labels: 'No Authentication',
        endpoints: 2,
      },
    // Add other data entries...
  ];

  return (
    <div className="api-table-container">
      <table className="api-table">
        <thead>
          <tr className='header-tr'>
            <th>Name</th>
            <th>New</th>
            <th>Type</th>
            <th>Trace Source</th>
            <th>Security Findings</th>
            <th>Labels</th>
            <th>No. Endpoints</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.isNew ? 'New' : ''}</td>
              <td>{item.type}</td>
              <td>{item.traceSource}</td>
              <td>
                <span className="security-critical">{item.securityFindings.critical}</span> /
                <span className="security-high">{item.securityFindings.high}</span> /
                <span className="security-medium">{item.securityFindings.medium}</span> /
                <span className="security-low">{item.securityFindings.low}</span>
              </td>
              <td>{item.labels}</td>
              <td>{item.endpoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiTable;