import asyncHandler from '../middleware/asynchandler.js'
import Contact from '../models/Contact.js'

const contactFormData = asyncHandler(async (req, res) => {
  const { name, email, phoneNumber, companyName, message } = req.body

  try {
    // Create a new instance of Contact using the request body
    const contact = new Contact({
      name,
      email,
      phoneNumber,
      companyName,
      message,
    })

    // Save the contact to the database
    const savedContact = await contact.save()

    res.status(201).json({
      success: true,
      data: savedContact,
    })
  } catch (error) {
    console.error('Error saving contact form data:', error)
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    })
  }
})

export { contactFormData }
