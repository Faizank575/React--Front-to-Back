import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faSortDown, faTimes } from '@fortawesome/free-solid-svg-icons';

// import './contact.css' ;
class Contact extends Component {
    state={
        showContactInfo:false
    }

    onDeleteClick =(e)=>{
        this.props.deleteContactHandler();
    }
    onShowClick= e => {
        this.setState({showContactInfo:!this.state.showContactInfo});
    };

    // Another way to set Proptypes
    // static propTypes= {
    //     name:PropTypes.string.isRequired,
    //     email:PropTypes.string.isRequired,
    //     phoneNo:PropTypes.string.isRequired
    // };
    render() {
        const {contact}=this.props;
        const{showContactInfo}=this.state;
        return (
            <div className="card card-body mb-3">
                <h4 >{contact.name}{' '}<FontAwesomeIcon style={{cursor:'pointer'}} onClick={this.onShowClick} icon={faSortDown}/><FontAwesomeIcon style={{cursor:'pointer',float:'right',color:'red'}} icon={faTimes} onClick={this.onDeleteClick}/></h4>
                { showContactInfo ? (
                <ul className="list-group">
                    <li className="list-group-item">{contact.email}</li>
                    <li className="list-group-item">{contact.phoneNo}</li>
                </ul>): null}
            </div>
        )
    }
}
Contact.propTypes = {
    contact:PropTypes.object.isRequired,
    deleteContactHandler:PropTypes.func.isRequired


};
export default Contact
