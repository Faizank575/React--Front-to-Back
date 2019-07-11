import React, { Component } from 'react'
import PropTypes from 'prop-types';
// import './contact.css' ;
class Contact extends Component {

    // Another way to set Proptypes
    // static propTypes= {
    //     name:PropTypes.string.isRequired,
    //     email:PropTypes.string.isRequired,
    //     phoneNo:PropTypes.string.isRequired
    // };
    render() {
        const {contact}=this.props;
        return (
            <div className="card card-body mb-3">
                <h4>{contact.name}</h4>
                <ul className="list-group">
                    <li className="list-group-item">{contact.email}</li>
                    <li className="list-group-item">{contact.phoneNo}</li>
                </ul>
            </div>
        )
    }
}
Contact.propTypes = {
    contact:PropTypes.object.isRequired,


};
export default Contact
