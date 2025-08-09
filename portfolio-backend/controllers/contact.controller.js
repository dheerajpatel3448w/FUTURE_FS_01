import Contact from "../model/contact.model.js";

export const contact = async(req,res) => {
    const {name,email,message} = req.body;
    if(!name || !email || !message){
        return res.status(400).json({message: "Please fill all the fields"});
    }   
    const newContact = await Contact.create({
        name,
        email,
        message
    })
    res.status(201).json({
        success: true,
    
        message: "Contact created successfully",
        data: newContact
    });
  
}
