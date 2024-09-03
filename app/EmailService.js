import emailjs from "emailjs-com"

export const EmailService = (e) => {
    emailjs.sendForm("service_mrt5vel", 'template_npb97kq', e, "eGsIJdbZRdme_lRNG")
        .then(data => {console.log(data)})
        .catch(err => {console.log(err)})
}