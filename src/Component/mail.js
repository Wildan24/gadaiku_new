const mailer = require("nodemailer");


const getEmailData = (to, name, template ) => {
    let data = null;

    switch (template) {
        
    }
}



const sendEmail = ( to, name, type ) => {
    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth:{
            user:"wildan14062011@gmail.com",
            pass:"12345"
        }
    })

    const mail = getEmailData(to, name, type)


}