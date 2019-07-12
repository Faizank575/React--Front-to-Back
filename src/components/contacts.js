import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
state={
        contacts:[
            {   id:1,
                name:'Faizan',
                email:'faizank575@gmail.com',
                phoneNo:'03015891918'
            },
            {   id:2,
                name:'Hanzla',
                email:'hanzlak575@gmail.com',
                phoneNo:'03015891918'
            },
            {   id:3,
                name:'Adnan',
                email:'adnank575@gmail.com',
                phoneNo:'03109274694'
            }
        ]
    };
    render() {
        const {contacts}=this.state
        return (
            <React.Fragment>
                {contacts.map(contact=>(<Contact key={contact.id} contact={contact}/>))}
            </React.Fragment>
        )
    }
}
export default Contacts

