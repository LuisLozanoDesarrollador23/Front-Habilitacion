import React, { useEffect, useState } from 'react'
import { GetListHotels, DeleteHotel, AddHotel, UpdateHotel } from '../../ClientApi/HotelApi';
import TableMachine from './TableRoom';
import MachineForm from './RoomForm';

function Machine() {

  const [machines, setmachines] = useState([]);
  const [machine, setMachine] = useState(null);
  const [viewList, setViewList] = useState(true);

  const Listar = () => {
    GetListHotels().then((data) => {
      setmachines(data)      
    }).catch((err) => { console.log(err) })
  }

  if (machines.length === 0)
    Listar();

  const verLista = (e) => {
    if (viewList) {
      setViewList(false);
    } else {
      setViewList(true);
      setMachine({
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
    setMachine(machine);
    setViewList(false);
  }

  return (
    <div>
      {viewList && <button className='btn btn-secondary mb-3 mt-3' onClick={verLista}>Ver Lista</button>}
      {!viewList && <button className='btn btn-primary mb-3 mt-3' onClick={verLista}>Crear nuevo registro</button>}
      {viewList && <MachineForm onSave={guardar} setMachine={machine}></MachineForm>}
      {!viewList && <TableMachine Machines={machines} onDelete={eliminar} onView={ver} />}
    </div>
  )
}

export default Machine;