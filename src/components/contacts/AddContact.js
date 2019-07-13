import React, { Component } from 'react';

class AddContact extends Component {
    state={
        name:"",
        email:"",
        phoneNo:""
    }
    render() {
        const {name, email, phoneNo}=this.state;
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                            className="form-control form-control-lg"
                            type="text"
                            name="name"
                            placeholder="Enter Name..."
                            value={name}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                            className="form-control form-control-lg"
                            type="email"
                            name="email"
                            placeholder="Enter Email..."
                            value={email}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNo">Phone No</label>
                            <input 
                            className="form-control form-control-lg"
                            type="email"
                            name="phoneNo"
                            placeholder="Enter Phone No..."
                            value={phoneNo}/>
                        </div>
                        <button type="submit" className="btn btn-light btn-lg btn-block">Add Contact</button>
                    </form>
                   
                </div>
            </div>
        )
    }
}

export default AddContact;
