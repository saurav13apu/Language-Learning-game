import express from "express";
import { languagenameController } from "./../Controllers/languagenameController.js";

//router object
const router = express.Router();

//language_id
router.get("/:languagename", languagenameController);

export default router;
