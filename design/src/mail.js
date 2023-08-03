// import { createTransport } from 'nodemailer';
 
// // create reusable transporter object using the default SMTP transport
// var transporter = createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
 
// // setup e-mail data with unicode symbols
// var mailOptions = {
//     from: '"Fred Foo 👥" <geethanjaliks001@gmail.com>', // sender address
//     to: 'geethanjaliks001@gmail.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: 'Hello world 🐴', // plaintext body
//     html: '<b>Hello world 🐴</b>' // html body
// };
 
// // send mail with defined transport object
// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);
// });

// export default mailOptions;