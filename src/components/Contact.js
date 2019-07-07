import React, { Component } from 'react'

class Contact extends Component {
    render() {
        const {name,email,phoneNo}=this.props;
        return (
            <div>
                <h3>{name}</h3>
                <ul>
                    <li>{email}</li>
                    <li>{phoneNo}</li>
                </ul>
            </div>
        )
    }
}

export default Contact
