import Contact from "../model/contact.model.js";
import { senttomail } from "../service/mail.service.js";

export const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const newContact = await Contact.create({
      name,
      email,
      message
    });
    await senttomail(name, email, message);

    console.log("Email sent successfully");
    res.status(201).json({
      success: true,
      message: "Contact created successfully",
      data: newContact
    });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
  }
}
