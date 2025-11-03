const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"jayantthakre70@gmail.com",
        pass:"qrvffnmztgesonwj",
    }
})

const sendMail = async (to , subject , html)=>{
   let newMail ={
    to,
    subject,
    html
   }
   return await transporter.sendMail(newMail)
}

module.exports = sendMail;