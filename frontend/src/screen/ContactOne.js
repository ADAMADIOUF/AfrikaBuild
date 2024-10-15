import React, { useEffect, useState } from 'react'
import { useSendContactFormMutation } from '../Slices/contactApiSlice'
import { useLocation } from 'react-router-dom'

const ContactOne = () => {
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
    <div>
      <form className='form-home-services' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='full name'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type='email'
          placeholder='email address'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type='text'
          placeholder='your inquiry'
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        />
        <button
          className='btn-contact btn'
          type='submit'
          disabled={isLoading || isSubmitting}
        >
          {isLoading ? 'Sending...' : 'Submit'}
          submit now{' '}
        </button>
        {isError && (
          <p className='error-message'>
            An error occurred while submitting the form. Please try again.
          </p>
        )}
      </form>
    </div>
  )
}

export default ContactOne
