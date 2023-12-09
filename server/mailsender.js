const nodemailer = require("nodemailer")
require("dotenv").config()

const mailSender = async(req,res) =>{
    const {email,name,message,subject} = req.body;
    console.log(` name ${email}  email id ${email} send message through portfolio`)
    

    try{
        const transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        })

        let info =  await transporter.sendMail({
            from:`"My Portfolio "<${process.env.MAIL_USER}>`,
            to:"vipinchauhan1206@gmail.com",
            subject:`${subject}`,
            html:`Hi my name is ${name} <br/>
                 connect me through : ${email} <br/>
                 message : ${message}`
        })

        console.log(info);
        return res.json({
            success:true,
            info
        })

    } catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }


}

module.exports = mailSender