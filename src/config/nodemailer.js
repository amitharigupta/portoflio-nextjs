import nodemailer from "nodemailer";
const dotenv = require('dotenv');
dotenv.config();

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;



export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "amitgt9967@gmail.com",
    pass: "guiutbwdsddqwbui",
  },
});

export const mailOptions = {
  from: email,
  to: email,
};