import React, {useState,useEffect} from 'react'
import Navegador from './Navegador'
import  {useNavigate} from 'react-router-dom';


function Home (){    
    const navegar = useNavigate();
    console.log('Entro');
    return(        
        <div>Home</div>

    )
}

export default Home;