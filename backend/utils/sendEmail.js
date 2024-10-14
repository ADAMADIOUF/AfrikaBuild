import nodemailer from 'nodemailer'

const sendEmail = async (options) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  let mailOptions = {
    from: 'adamadiouf2017@gmail.com',
    to: options.to, 
    subject: options.subject,
    text: options.message,
  }

  await transporter.sendMail(mailOptions)
}
export default sendEmail
