import React, { useState } from 'react';

/**
 * Contact component for the portfolio.
 * Features a contact form and a link to LinkedIn.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '', // Added new state for phone number
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend or a third-party service
    console.log('Form submitted:', formData);
    // NOTE: The alert() function might not work in some sandboxed environments.
    // A custom modal would be a more robust solution in a production app.
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', phoneNumber: '', message: '' }); // Clear form including phone number
  };

  return (
    <div
      id="contact" // Corrected ID for Navbar's jump link
      className="min-h-screen bg-white text-gray-800 p-4 md:p-8 rounded-lg m-4 shadow-lg flex items-center justify-center"
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 max-w-lg">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-2 text-center">
          Tap the Glass
        </h2>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-3 p-3 bg-gray-50 rounded-lg shadow-inner border border-gray-200">
          <div>
            <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-2.5 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-2.5 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-base font-medium text-gray-700 mb-1">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full px-2.5 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3" 
              required
              className="mt-1 block w-full px-2.5 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            // ***MODIFIED***: Replaced the long list of utility classes with your custom .pill class
            className="pill w-full text-base"
          >
            Tap!
          </button>
        </form>

        {/* LinkedIn Link */}
        <div className="text-center mt-4">
          <p className="text-lg mb-2">You can also find me on:</p>
          <a
            href="https://linkedin.com/in/annisa-carter-341559145" // Added https:// for a valid link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-bold rounded-full shadow-lg
                       hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out
                       text-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.687v6.548z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}