import mongoose from 'mongoose'
import sendEmail from '../utils/sendEmail.js'

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

// Send email after saving the contact form data
contactSchema.post('save', async function (doc) {
  const emailOptions = {
    to: 'adamadiouf2017@gmail.com', // Replace with the recipient's email address
    subject: 'New Contact Form Submission',
    message: `
      Name: ${doc.name}
      Email: ${doc.email}
      Phone Number: ${doc.phoneNumber}
      Company Name: ${doc.companyName}
      Message: ${doc.message}
    `,
  }

  try {
    // Call the sendEmail function with emailOptions
    await sendEmail(emailOptions)
    console.log('Notification email sent successfully.')
  } catch (error) {
    console.error('Error sending notification email:', error)
  }
})

const Contact = mongoose.model('Contact', contactSchema)

export default Contact
