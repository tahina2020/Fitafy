import React from 'react';
import './custome-button.style.scss';

const CustomeButon=({children, isGoogleSignIn, ...otherProps})=> {

    return (
        <button className = {`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
export default CustomeButon