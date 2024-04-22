import React from 'react';
import './ApiTable.css';

const ApiTable = () => {
  // Static data for the table
  const apiData = [
    {
      name: '/api/v2/user',
      operation: 'GET',
      type: 'Internal',
      traceSource: 'Kong',
      securityFindings: { critical: 'ADMIN', high: 'DEV', medium: 'EDITOR'},
      labels: 'Authentication',
      endpoints: 20,
    },
    {
        name: '/api/v1/user',
        operation: 'POST',
        type: 'External',
        traceSource: 'GZ',
        securityFindings: { critical: 'ADMIN', high: 'DEV'},
        labels: 'No Authentication',
        endpoints: 32,
      },
      {
        name: 'api/v2/settings/{id}',
        operation: 'PATCH',
        type: 'Internal',
        traceSource: 'Kong V2',
        securityFindings: { critical: 'ADMIN' },
        labels: 'Authentication',
        endpoints: 21,
      },
    // Add other data entries...
  ];

  return (
    <div className="api-table-container">
      <table className="api-table">
        <thead>
          <tr className='header-tr'>
            <th>Path</th>
            <th>Operation</th>
            <th>Type</th>
            <th>Service</th>
            <th>Roles</th>
            <th>Labels</th>
            <th>Hits</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.operation}</td>
              <td>{item.type}</td>
              <td>{item.traceSource}</td>
              <td>
                <span className="security-critical">{item.securityFindings.critical}</span> |
                <span className="security-high">{item.securityFindings.high}</span> |
                <span className="security-medium">{item.securityFindings.medium}</span> |
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