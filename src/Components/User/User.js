import React, { useEffect, useState } from 'react'
import { GetListuser, Deleteuser, Adduser, Updateuser } from '../../ClientApi/UserApi';
import TableUser from './TableUser';
import UserForm from './UserForm';

function User() {

  const [Users, setUsers] = useState([]);
  const [User, setUser] = useState(null);
  const [viewList, setViewList] = useState(true);

  const Listar = () => {
    GetListuser().then((data) => {
      setUsers(data)      
    }).catch((err) => { console.log(err) })
  }

  if (Users.length === 0)
    Listar();

  const verLista = (e) => {
    if (viewList) {
      setViewList(false);
    } else {
      setViewList(true);
      setUser({
        _id: null,
        idType: "",
        idNumber: "",
        name: "",
        nationality: "",
        phone: "",
        rol: "",
        state: "",
        municipality: "",
        address: "",
        dateOfBirth: null,
        gender: "",
        email: "",
        companions: [
          {      
            document: {
              type: String,
              required: true,
            },
            name: {
              type: String,
              required: true,
            },
            dateOfBirth: {
              type: Date,
              required: true,
            },
            gender: {
              type: String,
              required: true,
            },
            idType: {
              type: String,
              required: true,
            },
          },
        ],
      })
    }
  }

  const guardar = (User) => {
    if (User._id === null) {
      Adduser(User).then((data) => { Listar() }).catch((err) => { console.log(err) })
    } else {
      Updateuser(User).then((data) => { Listar() }).catch((err) => { console.log(err) })
    }
    setViewList(true);
  }

  const eliminar = (id) => {
    Deleteuser(id).then((data) => {
      if (data.message !== "")
        Listar();
    }).catch((err) => { console.log(err) })
  }

  const ver = (User) => {
    setUser(User);
    setViewList(false);
  }

  return (
    <div>
      {viewList && <button className='btn btn-secondary mb-3 mt-3' onClick={verLista}>Ver Lista</button>}
      {!viewList && <button className='btn btn-primary mb-3 mt-3' onClick={verLista}>Crear nuevo registro</button>}
      {viewList && <UserForm onSave={guardar} setUser={User}></UserForm>}
      {!viewList && <TableUser Users={Users} onDelete={eliminar} onView={ver} />}
    </div>
  )
}

export default User;