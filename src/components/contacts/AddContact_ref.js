import React, { Component } from 'react';

class AddContact extends Component {

    constructor(props){
        super(props);
        this.nameInput=React.createRef();
        this.emailInput=React.createRef();
        this.phoneInput=React.createRef();
    }

    onSubmit =(e) => {
        e.preventDefault();
        const contact ={
            name:this.nameInput.current.value,
            email:this.emailInput.current.value,
            phoneNo:this.phoneInput.current.value
        }
        console.log(contact);   
    }
    static defaultProps={
        name:'Faizan Khan',
        email:'Faizank575@gmail.com',
        phoneNo:'03015891918'
    }
    
    render() {
        const {name, email, phoneNo}=this.props;
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
                            defaultValue={name}
                            ref={this.nameInput}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                            className="form-control form-control-lg"
                            type="email"
                            name="email"
                            placeholder="Enter Email..."
                            defaultValue={email}
                            ref={this.emailInput}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNo">Phone No</label>
                            <input 
                            className="form-control form-control-lg"
                            type="text"
                            name="phoneNo"
                            placeholder="Enter Phone No..."
                            defaultValue={phoneNo}
                            ref={this.phoneInput}/>
                        </div>
                        <button type="submit"  className="btn btn-light btn-lg btn-block">Add Contact</button>
                    </form>
                   
                </div>
            </div>
        )
    }
}

export default AddContact;
