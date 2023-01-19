import React ,{ useState } from 'react'
import { Contact } from './contact-model'
import Contacts from './Contacts'
import CreateContact from './create-contact';

function ContactList() {
    const defaultValue1 = new Contact("Mauri","Murdoch",false);
    const defaultValue2 = new Contact("Mauri","Agustin",false);
    const defaultValue3 = new Contact("Mauri","Fernando",false);
    
    const [conected, setConected] = useState(false);
    const [contacts, setContacts] = useState([defaultValue1,defaultValue2,defaultValue3])
    
    const changeStatus = (contact) => {
        let index = contacts.indexOf(contact);
        let tempContact = [...contacts];
        tempContact[index].conected = !tempContact[index].conected;
        setConected(tempContact)
    };

    const removeContact = (contact) => {
        let index = contacts.indexOf(contact);
        let tempContact = [...contacts];
        tempContact.splice(index,1);
        setContacts(tempContact);
    };

    const addContact = (contact) =>{
        let tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);

    }



  return (
    <div>
        {contacts.map((contact,index)=>{
            return (
            <Contacts key={index}  remove={removeContact} conected={conected} data={contact} changeStatus={changeStatus} setConected={setConected} />
            )
        })}
        <CreateContact add={addContact}/>
    </div>
  )
}

export default ContactList