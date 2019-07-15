import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/textInputGroup';

class AddContact extends Component {
    state={
        name:"",
        email:"",
        phoneNo:"",
        errors:{

        }
    }

    onChange =(e) => this.setState({[e.target.name]:e.target.value});
    onSubmit =(dispatch,e) => {
        e.preventDefault(); 
        const{name,email,phoneNo}=this.state;

        if(name === ''){
            this.setState({errors:{
                name:'Name is required'
            }})
            return;
        }
        if(email === ''){
            this.setState({errors:{
                email:'Email is required'
            }})
            return;
        }
        if(phoneNo === ''){
            this.setState({errors:{
                phoneNo:'Phone No is required'
            }})
            return;
        }
        const newContact={
            id:uuid(),
            name,
            email,
            phoneNo
        }
        dispatch({type:'ADD_CONTACT',payload:newContact});
        this.setState({
            name:'',
            email:'',
            phoneNo:'',
            errors:{
                
            }
})
    };
    
    render() {
        const {name, email, phoneNo,errors}=this.state;
        return (
            <Consumer>
                {value =>{
                    const{dispatch}=value
                    return(
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                        <TextInputGroup 
                        name="name" label="name" placeholder="Enter Name..." 
                        type="text" onChange={this.onChange} value={name}
                        error={errors.name}/>
                        <TextInputGroup 
                        name="email" label="email" placeholder="Enter Email..." 
                        type="email" onChange={this.onChange} value={email}
                        error={errors.email}/>
                        <TextInputGroup 
                        name="phoneNo" label="phoneNo" placeholder="Enter Phone No..." 
                        type="text" onChange={this.onChange} value={phoneNo}
                        error={errors.phoneNo}/>
                        <button type="submit"  className="btn btn-light btn-lg btn-block">Add Contact</button>
                    </form>
                   
                </div>
            </div>
                    )}}
            </Consumer>
        )
    }
}

export default AddContact;
