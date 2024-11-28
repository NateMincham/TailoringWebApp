import React, { useState } from 'react';

const ContactForm = () => {
    const initialFormData = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
        message: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = ({ target: { name, value } }) => {
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted Successfully!');
        console.log('Form Data:', formData);
        resetForm();
    };

    const handleCancel = () => {
        resetForm();
        alert('Form Cleared');
    };

    const resetForm = () => {
        setFormData(initialFormData);
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1.5rem' }}>
                Contact Us
            </h1>
            <form onSubmit={handleSubmit}>
                {['First Name', 'Last Name', 'Phone Number', 'Email Address', 'Message'].map((field, index) => (
                    <div key={index} style={{ marginBottom: '1rem' }}>
                        <label
                            htmlFor={field.toLowerCase().replace(' ', '')}
                            style={{ display: 'block', fontWeight: 'bold', marginBottom: '.5rem' }}
                        >
                            {field}
                        </label>
                        {field === 'Message' ? (
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                style={{
                                    width: '100%',
                                    border: '1px solid #ccc',
                                    padding: '.5rem',
                                    borderRadius: '4px',
                                }}
                                rows="5"
                                required
                            ></textarea>
                        ) : (
                            <input
                                id={field.toLowerCase().replace(' ', '')}
                                type={field === 'Email Address' ? 'email' : field === 'Phone Number' ? 'tel' : 'text'}
                                name={field.toLowerCase().replace(' ', '')}
                                value={formData[field.toLowerCase().replace(' ', '')]}
                                onChange={handleInputChange}
                                style={{
                                    width: '100%',
                                    border: '1px solid #ccc',
                                    padding: '.5rem',
                                    borderRadius: '4px',
                                }}
                                required
                            />
                        )}
                    </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#000000',
                            color: 'white',
                            padding: '0.5em 1rem',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        style={{
                            backgroundColor: '#000000',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </form>
            <p style={{ marginTop: '2rem', color: '#555', lineHeight: '1.5' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula efficitur nisi, sit amet
                volutpat velit bibendum in. Integer ultricies eros a urna facilisis, a sollicitudin neque cursus.
                Quisque vulputate tincidunt libero nec laoreet. Nam malesuada, orci vel cursus tristique, neque erat
                vehicula risus, vel porttitor risus nisl non purus. Suspendisse volutpat est vitae nisi tincidunt,
                vitae aliquet orci luctus.
            </p>
        </div>
    );
};

export default ContactForm;
