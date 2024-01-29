import { Contact } from "../models/contact.models.js";

const contactController = async (req, res) => {
  try {

    const { name, email, message, categories } = req.body;
    console.log(req.body);

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are mandatory!" });
    }

    const contactForm = await Contact.create({
      name,
      email,
      message,
      categories,
    });

    res.status(201).json(contactForm);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export { contactController };
