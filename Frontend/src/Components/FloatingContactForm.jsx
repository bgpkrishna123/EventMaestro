import React, { useState } from 'react';
import './FloatingContactForm.css'; // Import your CSS file for styling if needed

const FloatingContactForm = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
        // Optionally, reset form fields or close the form after submission
        setShowForm(false);
    };

    return (
        <div className="floating-contact">
            <div style={{ display: showForm ? 'none' : 'block', width: '80%', height: 'auto', float: 'right' }}>
                <img
                    src="images/sidebarform.png"
                    alt="contact form"
                    id="call"
                    onClick={toggleForm}
                    style={{ cursor: 'pointer' }}
                />
            </div>

            {showForm && (
                <form onSubmit={handleSubmit} className="validate_form" action="send-mail">
                    <div className="requestbox" id="myshow">
                        <div className="text-center request_call_title">
                            <h3>Contact Form</h3>
                        </div>
                        <span className="slideout-menu-toggle" onClick={toggleForm}>
                            ×
                        </span>
                        <input type="text" placeholder="Name" name="name" className="form-control" required />
                        <input type="email" name="email" placeholder="Email" className="form-control" required />
                        <input type="tel" placeholder="Phone No" name="phone" className="form-control" required />
                        <textarea rows="5" cols="42" placeholder="Message" name="query"></textarea>
                        <input type="submit" name="submit" value="Submit" className="btn btn-custom-color btn-block btn-lg" />
                    </div>
                </form>
            )}
        </div>
    );
};

export default FloatingContactForm;
