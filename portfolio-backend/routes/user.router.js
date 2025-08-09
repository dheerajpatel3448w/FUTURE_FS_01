import { Router } from "express";
import { contact } from "../controllers/contact.controller.js";

const Router1 = Router();

Router1.route("/contact").post(contact);

export default Router1;