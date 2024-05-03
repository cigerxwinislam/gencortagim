// Bismillahirahmanirahim



import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Ilan() {
  return (<div> 


<InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1">
          İlan Ara
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      





      <br></br>
    
    <Table striped bordered hover>
      
      <thead>
        <tr>
          <th>ilanlarım</th>

          <th>Açıklama</th>
          <th>Not</th>
          <th>Aktiflik Durumu</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}></td>
          <td></td>
        </tr>
      </tbody>
    </Table> </div>
  );
}

export default Ilan;