import React, { useState } from 'react';
import Select from 'react-select';
import emailjs from '@emailjs/browser';

const Form = () => {
    const [display, setDisplay] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        location: '',
        phone: '',
    });
    const [selectedBooks, setSelectedBooks] = useState([]);

    const bookOptions = [
        { value: 'book1', label: 'Book 1' },
        { value: 'book2', label: 'Book 2' },
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Convert selected books to a string
        const selectedBookNames = selectedBooks.map(book => book.label).join(', ');

        const serviceID = "service_uf9880o";  // Replace with your EmailJS Service ID
        const adminTemplateID = "template_yddkn78"; // Email template for admin
        const userTemplateID = "template_8qrdbkm"; // Email template for user
        const publicKey = "IkNI4K_INjT97kCvb";  // Replace with EmailJS Public Key

        const emailParams = {
            name: formData.name,
            email: formData.email,
            country: formData.country,
            address: formData.address,
            phone: formData.phone,
            book: selectedBookNames,
        };

        // Send email to the admin
        emailjs.send(serviceID, adminTemplateID, emailParams, publicKey)
            .then(() => {
                console.log("Admin email sent!");

                // Send email to the user as confirmation
                return emailjs.send(serviceID, userTemplateID, emailParams, publicKey);
            })
            .then(() => {
                alert("Form submitted successfully! A confirmation email has been sent.");
                setDisplay(false);
            })
            .catch((error) => {
                console.error("EmailJS error:", error);
                alert("Failed to send email.");
            });
    };

    return (
        <div>
            {display && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
                    <div className='bg-white p-6 rounded-lg md:w-[400px] w-[293px] shadow-lg'>
                        <h2 className='text-2xl font-semibold mb-4'>Order Book</h2>
                        <form className='flex flex-col space-y-3 text-gray-950' onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Full Name" required className="border p-2 rounded-md" onChange={handleChange} />
                            <input type="email" name="email" placeholder="Email Address" required className="border p-2 rounded-md" onChange={handleChange} />
                            <input type="text" name="country" placeholder="Country" required className="border p-2 rounded-md" onChange={handleChange} />
                            <input type="text" name="address" placeholder="Address" required className="border p-2 rounded-md" onChange={handleChange} />
                            <input type="tel" name="phone" placeholder="Phone Number" required className="border p-2 rounded-md" onChange={handleChange} />

                            <label htmlFor="book" className='text-black text-left'>Select Your Book</label>
                            <Select
                                isMulti
                                name="book"
                                options={bookOptions}
                                className="basic-multi-select text-gray-950"
                                classNamePrefix="select"
                                onChange={(selected) => setSelectedBooks(selected)}
                            />

                            <div className='flex justify-between mt-4'>
                                <button type="button" onClick={() => setDisplay(!display)} className='bg-gray-500 text-white py-1 px-4 rounded-md'>Cancel</button>
                                <button type="submit" className='bg-green-600 text-white py-1 px-4 rounded-md'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Form;
