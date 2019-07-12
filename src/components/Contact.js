import React, { Component } from 'react'
import PropTypes from 'prop-types';
// import './contact.css' ;
class Contact extends Component {
    state={
        showContactInfo:true
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
                <h4 onClick={this.onShowClick}>{contact.name}{' '}<i  className="fas fa-sort-down"></i></h4>
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


};
export default Contact
