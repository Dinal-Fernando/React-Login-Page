import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

class SignInForm extends Component {


    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

    handleChange(e){
        let target=e.target;
        let value=target.type === 'checkbox' ? target.checked : target.value;
        let name=target.name;

        this.setState({
            [name]:value
        });

        // this.setState({
        //     [e.target.name]:e.target.value
        // })


    }

    handleSubmit(e){
       e.preventDefault();

        this.setState({
            email:'',
            password:''
        });

       console.log('The form is submitted with following data');
       console.log(this.state)
        axios
            .post('',this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

    }

    render() {
        const {email,password}=this.state;

        return (
            <div className='FormCenter'>
                <form className='FormFields' onSubmit={this.handleSubmit}>

                    <div className='FormField'>
                        <label className='FormField__Label' htmlFor='email'>E-Mail Address</label>
                        <input type='email' id='email' className='FormField__Input' placeholder='Enter your email' name="email" value={email} onChange={this.handleChange} />

                    </div>

                    <div className='FormField'>
                        <label className='FormField__Label' htmlFor='password'>Password</label>
                        <input type='password' id='password' className='FormField__Input' placeholder='Enter your password' name="password" value={password} onChange={this.handleChange}/>

                    </div>


                    <div className='FormField'>
                        <button className='FormField__Button mr-20'>Sign In</button>
                        <Link to='/' className='FormField__Link'>Create a account</Link>
                    </div>
                </form>
            </div>

        );
    }
}

export default SignInForm;