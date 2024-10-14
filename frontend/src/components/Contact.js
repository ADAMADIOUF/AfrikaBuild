import React, { useState, useEffect } from 'react'
import { useSendContactFormMutation } from '../Slices/contactApiSlice'
import { useLocation, useParams } from 'react-router-dom'

const Contact = () => {
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    message: '',
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [sendContactForm, { isLoading, isError }] = useSendContactFormMutation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      let emailContent = `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone Number: ${formData.phoneNumber}
        Company Name: ${formData.companyName}
        Message: ${formData.message}`

      setIsFormSubmitted(true)

      await sendContactForm({
        ...formData,
        message: emailContent,
      })

      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        message: '',
      })
    } catch (error) {
      console.error('An error occurred while submitting the form:', error)
    }
  }

  return (
    <>
      {!isFormSubmitted && (
        <form onSubmit={handleSubmit} className='contact-form'>
          <h2>Contact Us</h2>
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phoneNumber'>Phone Number:</label>
            <input
              type='tel'
              id='phoneNumber'
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='companyName'>Company Name:</label>
            <input
              type='text'
              id='companyName'
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message:</label>
            <textarea
              id='message'
              rows='3'
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
          </div>
          <button type='submit' className='btn-submit' disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
          {isError && (
            <p className='error-message'>
              An error occurred while submitting the form. Please try again.
            </p>
          )}
        </form>
      )}
      {isFormSubmitted && !isError && (
        <p className='success-message'>
          Message sent successfully! We will respond to you soon.
        </p>
      )}
    </>
  )
}

export default Contact
