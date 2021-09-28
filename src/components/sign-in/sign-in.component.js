import React, { Component } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomeButon from '../../components/custome-button/custome-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.style.scss';
 
export class SignIn extends Component {

    state={
        email:'',
        password:''
    }

    handleSubmit =event=>{
        event.preventDefault();

        this.setState({email:'', password:''})
    }
    handleChange=(event)=>{
        const {value, name} = event.target;

        this.setState({ [name]:value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2> I arleady have anaccount </h2>
                <span> SignIn with in your email and password </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email' 
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='password' 
                        required 
                    />
                    <div className='buttons'>
                        <CustomeButon type='submit' >  Sign In</ CustomeButon>
                        <CustomeButon onClick={ signInWithGoogle } isGoogleSignIn >  {' '} with Google{' '} </ CustomeButon>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
