import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from 'emailjs-com';


function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (Object.values(formState).filter(v=>v).length < 1) {
            setErrorMessage("You must enter a valid response for all fields")
            return;
        } else {
            setSuccessMessage('Thank you for your email! I will be in touch shortly.')
        }


        console.log(formState)

        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAIL_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setFormState({
            name: '', 
            email: '', 
            message: ''
        })
    }

    //JSX
    return (
        <section>
            <h1 >Hello... Is it me you're looking for?</h1>
            <form id='contact-form' onSubmit={sendEmail}>
                <div>
                    <label className='form-name' htmlFor='name'>Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label className='form-email' htmlFor='email'>Email address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div className='form-message'>
                    <label htmlFor='message'>Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                {successMessage && (
                    <div>
                        <p className='error-text'>{successMessage}</p>
                    </div>
                )}
                <button data-testid="buttontag" type='submit'>Submit</button>
            </form>
            <h2 className='email-contact'> You may also reach me at 
                johnhayesnielsen@gmail.com
            </h2>
        </section>
    );
}

export default ContactForm;