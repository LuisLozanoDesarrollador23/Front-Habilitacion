import React from 'react'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

function TableRoom(props) {
  const { Rooms, onDelete, onView } = props;

  return (
    <Card>
      <Card.Title>Tabla de habitaciones</Card.Title>
      <Card.Body>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>No. Personas</th>
              <th>Mascotas</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              Rooms.map((room) => {
                return (<tr key={room._id}>
                  <td>{room.name}</td>
                  <td>{room.numberGuests}</td>
                  <td>{room.pets ? "Si" : "No"}</td>
                  <td><button className="btn btn-secondary" onClick={() => {onView(room)}}>Ver</button></td>
                  <td><button className="btn btn-danger" onClick={() => {onDelete(room._id)}}>Eliminar</button></td>
                </tr>)
              })
            }
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default TableRoom;
