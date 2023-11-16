import express from "express";
import { languageController } from "../Controllers/languageConroller.js";

//router object
const router = express.Router();

//language_id
router.get("/:language_name", languageController);

export default router;
