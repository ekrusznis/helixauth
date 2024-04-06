import { Table } from 'react-bootstrap';

const ScrollableTable = () => {
  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
            <th>Column 6</th>
            <th>Column 7</th>
            <th>Column 8</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through your data here to render table rows */}
        </tbody>
      </Table>
    </div>
  );
};
