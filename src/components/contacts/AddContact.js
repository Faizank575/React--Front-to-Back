import React, { Component } from 'react';

class AddContact extends Component {
    state={
        name:"",
        email:"",
        phoneNo:""
    }

    onChange =(e) => this.setState({[e.target.name]:e.target.value});
    onSubmit =(e) => {
        e.preventDefault(); 
        console.log(this.state);   
    }
    
    render() {
        const {name, email, phoneNo}=this.state;
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                            className="form-control form-control-lg"
                            type="text"
                            name="name"
                            placeholder="Enter Name..."
                            onChange={this.onChange}
                            value={name}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                            className="form-control form-control-lg"
                            type="email"
                            name="email"
                            placeholder="Enter Email..."
                            onChange={this.onChange}
                            value={email}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNo">Phone No</label>
                            <input 
                            className="form-control form-control-lg"
                            type="text"
                            name="phoneNo"
                            placeholder="Enter Phone No..."
                            onChange={this.onChange}
                            value={phoneNo}/>
                        </div>
                        <button type="submit"  className="btn btn-light btn-lg btn-block">Add Contact</button>
                    </form>
                   
                </div>
            </div>
        )
    }
}

export default AddContact;