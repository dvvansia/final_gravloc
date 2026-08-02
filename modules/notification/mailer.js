const nodemailer = require("nodemailer");
const env = require("../../config/env");

const transporter = nodemailer.createTransport({
  host: env.MAIL_HOST,
  port: Number(env.MAIL_PORT) || 587,
  secure: env.MAIL_SECURE, // true for port 465, false for 587/others
  auth: {
    user: env.MAIL_USER,
    pass: env.MAIL_PASS,
  },
  // Some networks resolve SMTP hosts to IPv6 but have no real IPv6 route,
  // causing ENETUNREACH. Forcing IPv4 avoids that.
  family: 4,
});

/**
 * Sends an email. Throws on failure so callers can decide whether
 * to log-and-continue or surface the error.
 */
const sendMail = async ({ to, subject, html, attachments }) => {
  return transporter.sendMail({
    from: env.MAIL_FROM,
    to,
    subject,
    html,
    attachments,
  });
};

module.exports = {
  transporter,
  sendMail,
};
