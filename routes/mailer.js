/*
Ruta : api/mailer
*/

const { Router } = require("express");
 
const {
   
  sendContact
} = require("../controllers/mailer");
 
const router = Router();


 
router.post("/sendContacto", sendContact); 


module.exports = router;
