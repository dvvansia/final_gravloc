const nodemailer = require("nodemailer");
const env = require("../../config/env");

const transporter = nodemailer.createTransport({
  host: env.MAIL_HOST,
  // ⚠️ FIXED: Defaults to 2525 (SendGrid) instead of 587 (blocked by Render)
  port: Number(env.MAIL_PORT) || 2525, 
  // ✅ Already safe: your env.js converts "false"/"true" strings to real Booleans
  secure: env.MAIL_SECURE, 
  auth: {
    user: env.MAIL_USER,
    pass: env.MAIL_PASS,
  },
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
