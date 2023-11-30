import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import data from './problem.json'
import waterMelon from './waterMelon';

function MyTable() {
  return (
    <div id='Problame'>
      <Card>
        <Card.Body>
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td><Card.Link href="#">{item.ID}</Card.Link></td>
                  <td className="text-center"><Card.Link href={item.herf}>{item.ProblemName}</Card.Link></td>
                  <td>{item.level}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyTable;
