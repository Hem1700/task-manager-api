const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email , name)=>{
    sgMail.send({
        to:email,
        from:'learning1599@gmail.com',
        subject: 'Welcome to Task-Manager',
        text: `Hello , ${name}. Let me know how you get along with the app.`,
        
    })
}

const sendGoodbyeEmail = (email , name)=>{
    sgMail.send({
        to: email,
        from:'learning1599@gmail.com',
        subject: 'Goodbye',
        text: `Goodbye ${name}. We hope you had an amazing experience. Do let us know your feedback.`,
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}