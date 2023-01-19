import React from 'react'
import { useRef } from 'react'
import { Contact } from './contact-model';
import PropTypes from "prop-types";

function CreateContact({add}) {

    let nombreRef = useRef();
    let apellidoRef = useRef();
    let contectadoRef = false;

    const createNewContact = (e) =>{    
        e.preventDefault();
        const createContact = new Contact(
            nombreRef.current.value,
            apellidoRef.current.value,
            contectadoRef
        );
        console.log(createContact);
        add(createContact);

    }



  return (
    <form onSubmit={createNewContact}>
        <input ref={nombreRef} type="text" placeholder='Nombre' required/>
        <input ref={apellidoRef} type="text" placeholder='Apellido' required />
        <button type='submit'>Crear Contacto</button>
    </form>
  )
};

CreateContact.propTypes = {
  add: PropTypes.func.isRequired
}


export default CreateContact;