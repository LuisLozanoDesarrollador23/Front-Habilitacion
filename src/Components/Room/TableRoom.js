import React from 'react'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

function TableMachine(props) {
  const { Machines, onDelete, onView } = props;

  return (
    <Card>
      <Card.Title>Tabla de maquinas</Card.Title>
      <Card.Body>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Serial</th>
              <th>stock</th>
              <th>Precio</th>              
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              Machines.map((MachineRouter) => {
                return (<tr key={MachineRouter._id}>
                  <td>{MachineRouter.name}</td>
                  <td>{MachineRouter.serial}</td>
                  <td>{MachineRouter.stock}</td>
                  <td>{MachineRouter.price}</td>
                  <td><button onClick={() => {onView(MachineRouter)}}>Ver</button></td>
                  <td><button onClick={() => {onDelete(MachineRouter._id)}}>Eliminar</button></td>
                </tr>)
              })
            }
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default TableMachine;
