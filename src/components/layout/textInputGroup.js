import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup=(props)=> {
    const{name,type,onChange,placeholder,value,label,error}=props;
    return (
            <div className="form-group">
                <label htmlFor={label}>Name</label>
                <input 
                className={classnames('form-control form-control-lg',{
                    'is-invalid':error
                })}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}/>
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
    )
}


TextInputGroup.prototypes={
name:PropTypes.string.isRequired,
type:PropTypes.string.isRequired,
label:PropTypes.string.isRequired,
placeholder:PropTypes.string.isRequired,
value:PropTypes.string.isRequired,
error:PropTypes.string
}
TextInputGroup.defaultProps={
    type:'text'
}

export default TextInputGroup;
