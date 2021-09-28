import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomeButon from '../custome-button/custome-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.style.scss';

class SignUp extends React.Component{
    state = {
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    };

    handleSubmit = async event => {
        
        event.preventDefault();

        const { displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("password don't match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(
                email, 
                password
            );
            await createUserProfileDocument(user,{displayName});
           
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }catch(error){
            console.error(error);
        }
    };

    handleChange = event =>{
        const {name, value} = event.target;

        this.setState({[name]:value})
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'> I do not have a accompt </h2>
                <span className=''> Sign up with your email and password </span>
                <form className='sign-up-form' onClick={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={password}
                        onChange={this.handleChange}
                        label='confirm Password'
                        required
                    />
                    <CustomeButon type='submit'> SIGN UP  </CustomeButon>        
                </form>
            </div>
        )
    }
}
export default SignUp