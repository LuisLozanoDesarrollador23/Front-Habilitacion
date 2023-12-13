import React, { useEffect, useState } from 'react'


function MachineForm(props) {
    const {getMachine,setMachine,onSave} = props;
    const[thisMachine, SetThisMachine] = useState({
        _id:null,
        name:"",
        serial:"",
        price:0,
        stock:0,
        status:"",
        characteristics:""
    })

    const limpiar = () =>{
        console.log('Limpia')
        SetThisMachine({
        _id:null,
        name:"",
        serial:"",
        price:0,
        stock:0,
        status:"",
        characteristics:""
        })  
    }

    useEffect(() => {
        if (setMachine){
            console.log(setMachine)
            SetThisMachine(setMachine);
        }
    }, [])

    if (thisMachine === null){
        limpiar();
    }

    const handleChange = (e) => {
        SetThisMachine({
            ...thisMachine,[e.target.name]:e.target.value
        });        
    };

    const onClickGuardar = (e) => {
        e.preventDefault();
        thisMachine.status = true;
        onSave(thisMachine);
        limpiar();
    };
 
  return (
    <div>
      <div className='Login-contener'>
        <h1>Registro de Maquinas</h1>        
        <input className='Input col-6' placeholder='Nombre' name='name' value={thisMachine.name} onChange={(e) => {handleChange(e)}}></input>
        <input className='Input col-6' placeholder='Serial' name='serial' value={thisMachine.serial} onChange={(e) => {handleChange(e)}}></input>
        <input className='Input col-6 mt-3' placeholder='Precio' name='price' type='number' value={thisMachine.price} onChange={(e) => {handleChange(e)}}></input>
        <input className='Input col-6 mt-3' placeholder='Stock' name='stock' type='number' value={thisMachine.stock} onChange={(e) => {handleChange(e)}}></input>
        <input className='Input col-6 mt-3' placeholder='Caracteristicas' name='characteristics' value={thisMachine.characteristics} onChange={(e) => {handleChange(e)}}></input>
        </div>
        <button className='mt-3' onClick={onClickGuardar}>Registrar</button>      
    </div>
  )
}

export default MachineForm;
