const http = require("http");
const nodemailer = require("nodemailer");

const server = http.createServer((request, response) => {
    const auth = nodemailer.createTransport({
        service: "gmail",
        secure : true,
        port : 465,
        auth: {
            user: "Your_Email",
            pass: "Your_Password"

        }
    });

    const receiver = {
        from : "Your_Email",
        to : "Sender_Email",
        subject : "Ashish Kumar Node Js Mail Testing!",
        text : "Hello this is a Ashish Automated mail!"
    };

    auth.sendMail(receiver, (error, emailResponse) => {
        if(error)
        throw error;
        console.log("success!");
        response.end();
    });
    
});

server.listen(8080); 