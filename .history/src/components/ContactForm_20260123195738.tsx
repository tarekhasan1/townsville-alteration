// components/CompactContactForm.tsx
'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  service?: string;
}

export default function CompactContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setErrorMessage('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      const form = e.currentTarget;
      const formDataObj = new FormData(form);
      
      // Add custom fields to form data
      formDataObj.append('name', formData.name);
      formDataObj.append('phone', formData.phone);
      formDataObj.append('message', formData.message);
      formDataObj.append('_subject', `Website Contact Form - ${formData.name}`);
      formDataObj.append('_replyto', formData.email);
      
      const response = await fetch('https://formspree.io/f/mdaawgll', {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        });
        // Reset form element
        if (form) form.reset();
      } else {
        const result = await response.json();
        throw new Error(result.error || 'Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-h-[600px] overflow-visible">
      <form 
        onSubmit={handleSubmit} 
        className="space-y-3"
        method="POST"
        action="https://formspree.io/f/mdaawgll"
      >
        {/* Success Message - Ultra Compact */}
        {submitStatus === 'success' && (
          <div className="p-2 bg-green-50 border border-green-200 rounded text-xs">
            <div className="flex items-center">
              <svg className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-700">
                Message sent successfully. We&apos;ll get back to you soon.
              </span>
            </div>
          </div>
        )}

        {/* Error Message - Ultra Compact */}
        {submitStatus === 'error' && (
          <div className="p-2 bg-red-50 border border-red-200 rounded text-xs">
            <div className="flex items-center">
              <svg className="w-3 h-3 text-red-500 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.196 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span className="text-red-700">
                {errorMessage || 'Something went wrong. Please try again.'}
              </span>
            </div>
          </div>
        )}

        {/* Validation Error - Ultra Compact */}
        {errorMessage && submitStatus === 'idle' && (
          <div className="p-2 bg-yellow-50 border border-yellow-200 rounded text-xs">
            <div className="flex items-center">
              <svg className="w-3 h-3 text-yellow-500 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.196 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span className="text-yellow-700">{errorMessage}</span>
            </div>
          </div>
        )}

        {/* Hidden honeypot field for spam protection */}
        <input type="hidden" name="_gotcha" style={{display: 'none'}} />

        {/* Name Field - Compact */}
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-yellow-400 focus:border-transparent transition outline-none"
            placeholder="Your name"
            disabled={isSubmitting}
          />
        </div>

        {/* Contact Info Grid - Ultra Compact */}
        <div className="grid grid-cols-2 gap-2">
          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-yellow-400 focus:border-transparent transition outline-none"
              placeholder="Phone"
              disabled={isSubmitting}
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-yellow-400 focus:border-transparent transition outline-none"
              placeholder="Email"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Message Field - Very Small */}
        <div>
          <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={2}
            className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-yellow-400 focus:border-transparent transition outline-none resize-none"
            placeholder="Your message..."
            disabled={isSubmitting}
          />
        </div>

        {/* Service Type Selection - Single Row */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Service Needed:
          </label>
          <div className="flex flex-wrap gap-1">
            {['Alterations', 'Suit Hire', 'Wedding', 'Other'].map((service) => (
              <label
                key={service}
                className="flex items-center px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 cursor-pointer text-xs"
              >
                <input
                  type="radio"
                  name="service"
                  value={service.toLowerCase()}
                  className="mr-1 text-yellow-500 focus:ring-yellow-400 w-2.5 h-2.5"
                  disabled={isSubmitting}
                  onChange={handleChange}
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
        </div>

        {/* File Upload - Minimal */}
        <div>
          <label htmlFor="upload" className="block text-xs font-medium text-gray-700 mb-1">
            Attach Photos (Optional)
          </label>
          <input
            type="file"
            id="upload"
            name="upload"
            className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-yellow-400 focus:border-transparent transition outline-none file:mr-2 file:py-0.5 file:px-2 file:rounded file:border-0 file:text-xs file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
            accept="image/*"
            disabled={isSubmitting}
          />
        </div>

        {/* Submit Button - Compact */}
        <div className="pt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold py-2 px-3 rounded transition-all duration-300 shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed text-xs"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}