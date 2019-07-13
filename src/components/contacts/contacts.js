import React, { Component } from 'react'
import Contact from './Contact';

import {Consumer} from '../../context';

class Contacts extends Component {


    deleteContact =(id)=>{
        const {contacts}=this.state;
        const updatedContacts=contacts.filter(contact => contact.id !== id);
        this.setState({contacts:updatedContacts});
    }
    render() {
        return (
            <Consumer>
                {
                    value=>{
                        return(
                        <React.Fragment>
                        {value.contacts.map(contact=>(<Contact key={contact.id} contact={contact}/>))}
                    </React.Fragment>
                        )
                    }
                }
            
            </Consumer>
        )
    }
}
export default Contacts

