import React from 'react'
import PropTypes from 'prop-types';

const TextInputGroup=(props)=> {
    const{name,type,onChange,placeholder,value,label}=props;
    return (
            <div className="form-group">
                <label htmlFor={label}>Name</label>
                <input 
                className="form-control form-control-lg"
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}/>
            </div>
    )
}


TextInputGroup.prototypes={
name:PropTypes.string.isRequired,
type:PropTypes.string.isRequired,
label:PropTypes.string.isRequired,
placeholder:PropTypes.string.isRequired,
value:PropTypes.string.isRequired,
}
TextInputGroup.defaultProps={
    type:'text'
}

export default TextInputGroup;
