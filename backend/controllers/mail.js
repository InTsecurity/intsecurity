import nodemailer from "nodemailer";

export const handlePost = async (req, res) => {
  try {
    let { mail } = req.params;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailPing = {
      from: process.env.SMTP_EMAIL,
      to: process.env.PING_EMAIL,
      subject: "Contacted on intruder security.",
      text: "You have been contacted on intruder security on intruder.tech. Please check it out.",
    };

    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: mail,
      subject: "Thanks for reaching out to intruder security",
      text: "Thanks for reaching out to intruder security. One of our team member will contact you soon.",
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
        transporter.sendMail(mailPing, (error, info) => {
          if (error) {
            console.error(error);
          } else {
            console.log("Email sent:" + info.response);
          }
        });
        res.status(200).json({
          msg: "Email Sent",
          details: info.response,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
