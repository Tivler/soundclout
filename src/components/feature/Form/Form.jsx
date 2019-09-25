import React from 'react';
import './_Form.scss';
import FormHead from '../FormHead/FormHead';

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    firstNameError: "",
    lastNameError: "",
    emailError: ""
  };

class Form extends React.Component {
    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
          [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
      };

    validate = () => {
        let firstNameError = "";
        let lastNameError = "";
        let emailError = "";
        let firstNameClass = document.querySelector('.firstNameError');
        let lastNameClass = document.querySelector('.lastNameError');
        let emailClass = document.querySelector('.emailError');

        if (!this.state.firstName) {
            firstNameError = "Field Required";
        }

        if (!this.state.lastName) {
            lastNameError = "Field Required";
        }

        if (!this.state.email.includes('@')) {
            emailError = 'Invalid Email Address';
        }

        if (emailError || firstNameError || lastNameError) {
            this.setState({emailError , firstNameError , lastNameError});
            firstNameClass.style.display = 'block';
            lastNameClass.style.display = 'block';
            emailClass.style.display = 'block';
            return false;
        }

        return true;
    }

    handleSubmit = (event) => {
        let firstNameClass = document.querySelector('.firstNameError');
        let lastNameClass = document.querySelector('.lastNameError');
        let emailClass = document.querySelector('.emailError');

        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            alert(`Thanks for joining our community, ${this.state.firstName}!`);
            const formData = this.state;
            fetch('/submit' , {
                method: 'post',
                body: formData
            })
            .then((res) => res.text())
            .then((text) => console.log(text , 'Thanks For Subscribing!'));

            console.log(formData);
            this.setState(initialState);
            firstNameClass.style.display = 'none';
            lastNameClass.style.display = 'none';
            emailClass.style.display = 'none';
            window.scrollTo(0,0)
        }
    }
   
    render () {
        return (
            <>
            <FormHead />
            <div className="contact">
                <h2 className="contact__title">Newsletter</h2>
                <p className="contact__description">Recieve notifications when we post new albums</p>
            </div>

            <div className="form__wrapper">
                <form className="form" onSubmit={this.handleSubmit}>
                    <h1 className="form__title">Subscribe</h1>

                    <label htmlFor="inputFirstName"></label>
                    <input 
                        name="firstName" 
                        placeholder="First Name" 
                        value={this.state.firstName} 
                        onChange={this.handleChange} 
                        id="inputFirstName" 
                        className="form--control"
                    />
                    <div className="error firstNameError">{this.state.firstNameError}</div>

                    <label htmlFor="inputLastName"></label>
                    <input 
                        name="lastName" 
                        placeholder="Last Name" 
                        value={this.state.lastName} 
                        onChange={this.handleChange} 
                        id="inputLastName" 
                        className="form--control"
                    />
                    <div className="error lastNameError">{this.state.lastNameError}</div>

                    <label htmlFor="inputEmail"></label>
                    <input 
                        name="email" 
                        placeholder="Email Address" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        id="inputEmail" 
                        className="form--control"
                    />
                    <div className="error emailError">{this.state.emailError}</div>

                   

                    <textarea id="inputMessage" className="form--control" placeholder="Leave us a message!"></textarea>

                    <button className="form--button" id="submitButton" type="submit">Submit</button>

                    <p className="form__copyright">© Soundclout.io</p>
                </form>
            </div>
            </>
        )
    }
}

export default Form;