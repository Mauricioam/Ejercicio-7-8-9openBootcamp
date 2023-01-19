import React from 'react';
import PropTypes from "prop-types";
import { Contact } from './contact-model';

function Contacts({ data,changeStatus,remove }) {

    const showConected = () => {
        if(data.conected){
            return (<button onClick={()=>changeStatus(data)}>Conectado</button>)
        }else{
            return (<button onClick={()=>changeStatus(data)}>No conectado</button>)
        }
    };


  return (
    <div style={{
        display:"flex",
        alignItems:"center",
        gap:"1rem",
        margin:"1rem"
    }}>
        <h4>{data.name}</h4>
        <h4>{data.lastname}</h4>    
         {showConected()}
         <button onClick={()=>remove(data)}>Borrar</button>
    </div>
  )
};

Contacts.propType ={
    data: PropTypes.instanceOf(Contact),
    changeStatus: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired

}

export default Contacts;