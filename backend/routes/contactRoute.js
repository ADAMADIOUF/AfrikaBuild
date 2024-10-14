import express from 'express'
import { contactFormData } from '../controller/contactController.js'

const router = express.Router()

router.post('/', contactFormData)

export default router
