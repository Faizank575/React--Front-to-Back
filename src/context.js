import React, { Component } from 'react'


const Context = React.createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case('DELETE_CONTACT'):
            return{
                contacts:state.contacts.filter(contact => contact.id!==action.payload)
            };
        case('ADD_CONTACT'):
            return{
                contacts:[action.payload,...state.contacts]
            };
        default:
            return state;
};
};

export class Provider extends Component{
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
        ],
        dispatch : action => {
            this.setState(state => reducer(state,action))
        }
    }
    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer=Context.Consumer;