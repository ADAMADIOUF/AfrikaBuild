import React, { useState, useEffect } from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { useSendContactFormMutation } from '../Slices/contactApiSlice'
import { useLocation } from 'react-router-dom'
import contact from '../assets/contact.png'

const ContactForm = () => {
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    message: '',
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false) // New state variable
  const [sendContactForm, { isLoading, isError }] = useSendContactFormMutation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Prevent further submissions if already submitting
    if (isSubmitting) return

    setIsSubmitting(true) // Set to true when starting the submission

    try {
      let emailContent = `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone Number: ${formData.phoneNumber}
      Company Name: ${formData.companyName}
      Message: ${formData.message}`

      console.log('Submitting contact form:', formData) // Log form data

      await sendContactForm({
        ...formData,
        message: emailContent, // Use the newly constructed email content here
      })

      // Clear form data
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        message: '',
      })

      setIsFormSubmitted(true)

      // Reset isSubmitting after a delay
      setTimeout(() => {
        setIsSubmitting(false)
        setIsFormSubmitted(false) // Reset form submission status
      }, 2000)
    } catch (error) {
      console.error('An error occurred while submitting the form:', error)
      setIsSubmitting(false) // Reset if there's an error
    }
  }


  return (
    <div className='contact-form section-center'>
      <div className='contact-form-container'>
        <article className='contact-form-img'>
          <img src={contact} alt='Contact Us' />
        </article>
        <article className='contact-form'>
          <h2>
            Get Free Quote <GoArrowUpRight />
          </h2>
          <h3>Have a project in mind?</h3>
          {!isFormSubmitted ? (
            <form className='form-contact' onSubmit={handleSubmit}>
              <div>
                <input
                  type='text'
                  placeholder='Your name'
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
                <input
                  type='email'
                  placeholder='Your email'
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <input
                  type='text'
                  placeholder='Your phone number'
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  required
                />
                <input
                  type='text'
                  placeholder='Your company'
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                />
              </div>
              <div>
                <textarea
                  placeholder='Message'
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <button
                type='submit'
                className='btn-contact'
                disabled={isLoading || isSubmitting} // Disable button if loading or submitting
              >
                {isLoading ? 'Sending...' : 'Submit'} <GoArrowUpRight />
              </button>
              {isError && (
                <p className='error-message'>
                  An error occurred while submitting the form. Please try again.
                </p>
              )}
            </form>
          ) : (
            <p className='success-message'>
              Message sent successfully! We will respond to you soon.
            </p>
          )}
        </article>
      </div>
    </div>
  )
}

export default ContactForm
