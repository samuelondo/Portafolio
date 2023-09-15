import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Imagen from './Assets/logo.png';



function NavigationBar() {
  return (
    <nav>
        <AppBar position='relative' style={{ backgroundColor: 'rgba(0, 0, 0, 0)', display:'flex', justifyContent:'space-between', flexDirection:'row' , height: '100px', alignItems: 'center', boxShadow: 'none', border: 'none' } }>
        
        <div className='botonesMenu'>
        <Button  style = {{color: 'Black',
                         fontSize: '18px'}}>Sobre Mí</Button>
        <Button  style = {{color: 'Black',
                         fontSize: '18px'}}>Mis Aspiraciones</Button>
        <Button  style = {{color: 'Black',
                         fontSize: '18px'}}>Mis trabajos</Button>
        <Button  style = {{color: 'Black',
                         fontSize: '18px'}}>Contacto</Button>
        </div>

        <div>
        <img alt='' className= 'logo' src={Imagen}></img>
        </div>
        
    </AppBar>
    </nav>
  
  );
}

export default NavigationBar;


