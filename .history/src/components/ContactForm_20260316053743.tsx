// components/ContactForm.tsx
'use client';

import { useState, useEffect } from 'react';
import { submitContactForm } from '../../actions/contact.action';
import { useRouter } from 'next/navigation';

// Declare global window types
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  service?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    service: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formStartTime, setFormStartTime] = useState<number | null>(null);
  const router = useRouter();

  // Unified tracking function
  const trackEvent = (
    eventName: string,
    eventParams: Record<string, any> = {}
  ) => {
    if (typeof window === 'undefined') return;

    const eventData = {
      event: eventName,
      ...eventParams,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      page_path: window.location.pathname,
    };

    if (window.dataLayer) {
      window.dataLayer.push(eventData);
    }

    if (window.gtag) {
      window.gtag('event', eventName, eventParams);
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('Track Event:', eventData);
    }
  };

  // Track when form is viewed
  useEffect(() => {
    const timer = setTimeout(() => {
      trackEvent('form_view', {
        form_name: 'contact_form',
        form_location: 'contact_page'
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Track first interaction
    if (!formStartTime && value.length > 0) {
      setFormStartTime(Date.now());
      trackEvent('form_interaction_start', {
        form_name: 'contact_form',
        interaction_type: 'first_interaction'
      });
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (service: string) => {
    // Track service selection
    trackEvent('form_service_selected', {
      form_name: 'contact_form',
      service_type: service
    });
    
    setFormData(prev => ({
      ...prev,
      service,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Calculate time spent on form
    const timeSpent = formStartTime ? Math.round((Date.now() - formStartTime) / 1000) : 0;
    
    // Track submission attempt
    trackEvent('form_submit_attempt', {
      form_name: 'contact_form',
      has_name: !!formData.name,
      has_email: !!formData.email,
      has_phone: !!formData.phone,
      has_message: !!formData.message,
      has_service: !!formData.service,
      service_selected: formData.service || 'none',
      time_spent_seconds: timeSpent
    });
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      setIsSubmitting(false);
      
      trackEvent('form_validation_error', {
        form_name: 'contact_form',
        error_type: 'missing_required_fields'
      });
      return;
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setErrorMessage('Please enter a valid email address.');
      setIsSubmitting(false);
      
      trackEvent('form_validation_error', {
        form_name: 'contact_form',
        error_type: 'invalid_email'
      });
      return;
    }

    try {
      // Submit to database
      const result = await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        service: formData.service,
      });

      if (result.success) {
        // Track successful submission
        trackEvent('form_submit_success', {
          form_name: 'contact_form',
          service_selected: formData.service || 'none',
          has_phone: !!formData.phone,
          time_spent_seconds: timeSpent
        });
        
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
          service: '',
        });
        // Redirect to success page
        router.push('/contact/success');
      } else {
        throw new Error(result.error || 'Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again or call us directly.');
      
      trackEvent('form_submit_error', {
        form_name: 'contact_form',
        error_type: 'submission_failed',
        error_message: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Contact Us</h3>
      <form 
        onSubmit={handleSubmit} 
        className="space-y-3"
      >
        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="p-2 bg-green-50 border border-green-200 rounded text-xs">
            <div className="flex items-center">
              <svg className="w-3 h-3 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Message sent successfully! We&apos;ll get back to you soon.</span>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="p-2 bg-red-50 border border-red-200 rounded text-xs">
            <div className="flex items-center">
              <svg className="w-3 h-3 text-red-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.196 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span>{errorMessage || 'Error sending message'}</span>
            </div>
          </div>
        )}

        {/* Validation Error */}
        {errorMessage && submitStatus === 'idle' && (
          <div className="p-2 bg-yellow-50 border border-yellow-200 rounded text-xs">
            <div className="flex items-center">
              <svg className="w-3 h-3 text-yellow-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.196 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span>{errorMessage}</span>
            </div>
          </div>
        )}

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-yellow-400 focus:border-transparent"
            placeholder="Your name"
            disabled={isSubmitting}
          />
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-2 gap-3">
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
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-yellow-400 focus:border-transparent"
              placeholder="Phone number"
              disabled={isSubmitting}
            />
          </div>

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
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-yellow-400 focus:border-transparent"
              placeholder="Email address"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Message Field */}
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
            rows={3}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-yellow-400 focus:border-transparent resize-none"
            placeholder="Your message..."
            disabled={isSubmitting}
          />
        </div>

        {/* Service Selection */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-2">
            Service:
          </label>
          <div className="flex flex-wrap gap-3">
            {['Alterations', 'Suit Hire', 'Wedding', 'Other'].map((service) => (
              <label key={service} className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="service"
                  value={service.toLowerCase()}
                  checked={formData.service === service.toLowerCase()}
                  onChange={() => handleServiceChange(service.toLowerCase())}
                  className="w-4 h-4 text-yellow-500 bg-gray-100 border-gray-300 focus:ring-yellow-400"
                  disabled={isSubmitting}
                />
                <span className="ml-2 text-sm text-gray-700">{service}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-medium py-2.5 rounded-lg transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24">
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