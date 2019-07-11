import React from 'react'
import PropTypes from 'prop-types';
const Header =(props)=>{
    const{branding}=props
    return (
        // <div>
        //     {/* <h1 style={{color:'red',fontSize:'50px'}}>{branding}</h1> */}
        //     {/* <h1 style={headingStyle}>{branding}</h1> */}
        //     {/* <h1>{branding}</h1> */}
        // </div>
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">{branding}</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )}
Header.defaultProps={
    branding:'My App'
}

Header.propTypes={
    branding:PropTypes.string.isRequired
};
// Another way to add styling
// const headingStyle={
//     color:'red',
//     fontSize:'50px'
// }



export default Header
