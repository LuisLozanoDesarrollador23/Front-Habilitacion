import React, { useEffect, useState } from 'react'
import { GetListHotels, DeleteHotel, AddHotel, UpdateHotel } from '../../ClientApi/HotelApi';
import TableMachine from './TableRoom';
import RoomForm from './RoomForm';
import TableRoom from "./TableRoom";

function Room() {

  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState(null);
  const [viewList, setViewList] = useState(true);

  const Listar = () => {
    GetListHotels().then((data) => {
      setRooms(data.rooms)
      console.log(data)
    }).catch((err) => { console.log(err) })
  }

  if (rooms.length === 0)
    Listar();

  const verLista = (e) => {
    if (viewList) {
      setViewList(false);
    } else {
      setViewList(true);
      setRoom({
        _id: null,
        name: "",
        serial: "",
        price: 0,
        stock: 0,
        status: true,
        characteristics: ""
      })
    }
  }

  const guardar = (machine) => {
    if (machine._id === null) {
      AddHotel(machine).then((data) => { Listar() }).catch((err) => { console.log(err) })
    } else {
      UpdateHotel(machine).then((data) => { Listar() }).catch((err) => { console.log(err) })
    }
    setViewList(true);
  }

  const eliminar = (id) => {
    DeleteHotel(id).then((data) => {
      if (data.message !== "")
        Listar();
    }).catch((err) => { console.log(err) })
  }

  const ver = (machine) => {
    setRoom(machine);
    setViewList(false);
  }

  return (
    <div>
      {!viewList && <button className='btn btn-secondary mb-3 mt-3' onClick={verLista}>Ver Lista</button>}
      {viewList && <button className='btn btn-primary mb-3 mt-3' onClick={verLista}>Crear nuevo registro</button>}
      {!viewList && <RoomForm onSave={guardar} setRoom={room}></RoomForm>}
      {viewList && <TableRoom Rooms={rooms} onDelete={eliminar} onView={ver} />}
    </div>
  )
}

export default Room;