import React, {useEffect, useState} from 'react'


function RoomForm(props) {
    const {getRoom, setRoom, onSave} = props;
    const [thisRoom, SetThisRoom] = useState({
        dateInit: null,
        dateFinish: null,
        amount: 0,
        price: 0,
        status: "",
        resposibleUser:
            {
                idType: "",
                idNumber: "",
                name: "",
                nationality: "",
                phone: "",
                rol: "",
                state: "",
                municipality: "",
                address: "",
                dateOfBirth: "",
                gender: "",
                email: "",
            },
        companions: [
            {
                document: "",
                name: "",
                dateOfBirth: "",
                gender: "",
                idType: "",
            },
        ],
    })

    const limpiar = () => {
        console.log('Limpia')
        SetThisRoom({
            dateInit: null,
            dateFinish: null,
            amount: 0,
            price: 0,
            status: "",
            resposibleUser:
                {
                    idType: "C.C",
                    idNumber: "123456789",
                    name: "Luis Francisco",
                    nationality: "Colombiano",
                    phone: "3124567891",
                    rol: "Agente",
                    state: "Validado",
                    municipality: "Santander",
                    address: "Dirección de prueba",
                    dateOfBirth: "2018-02-12",
                    gender: "Masculino",
                    email: "luisfrancisco@correo.com",
                },
            companions: [],
        })
    }

    useEffect(() => {
        if (setRoom) {
            console.log(setRoom)
            SetThisRoom(setRoom);
        }
    }, [])

    if (thisRoom === null) {
        limpiar();
    }

    const handleChange = (e) => {
        SetThisRoom({
            ...thisRoom, [e.target.name]: e.target.value
        });
    };

    const onClickGuardar = (e) => {
        e.preventDefault();
        onSave(thisRoom);
        limpiar();
    };

    return (
        <div>
            <div className='Login-contener'>
                <h1>Registro de reservas</h1>
                <div className="row">
                    <div className="col-6">
                        <input type="date" className='form-control col-6' placeholder='F. inicio' name='dateInit'
                               value={thisRoom.dateInit} onChange={(e) => {
                            handleChange(e)
                        }}></input>
                    </div>
                    <div className="col-6">
                        <input type="date" className='form-control col-6' placeholder='F. inicio' name='dateFinish'
                               value={thisRoom.dateFinish} onChange={(e) => {
                            handleChange(e)
                        }}></input>
                    </div>
                    <div className="col-6">
                        <input className='form-control col-6 mt-3' placeholder='Cantidad' name='amount' type='number'
                               value={thisRoom.amount} onChange={(e) => {
                            handleChange(e)
                        }}></input>
                    </div>
                    <div className="col-6">
                        <input className='form-control col-6 mt-3' placeholder='Estado' name='status' type='text'
                               value={thisRoom.status} onChange={(e) => {
                            handleChange(e)
                        }}></input>
                    </div>
                </div>
            </div>
            <button className='mt-3 btn btn-primary' onClick={onClickGuardar}>Registrar</button>
        </div>
    )
}

export default RoomForm;
