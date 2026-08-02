const path = require("path");
const { sendMail } = require("./mailer");
const userWaitlistTemplate = require("./templates/user-waitlist.template");
const supplierWaitlistTemplate = require("./templates/supplier-waitlist.template");

const logoIconAttachment = {
  filename: "White logo.png",
  path: path.join(__dirname, "..", "..", "public", "images", "White logo.png"),
  cid: "gravloc-logo",
};

const logoWordmarkAttachment = {
  filename: "Logo wordmark white.png",
  path: path.join(
    __dirname,
    "..",
    "..",
    "public",
    "images",
    "Logo wordmark white.png",
  ),
  cid: "gravloc-wordmark",
};

const logoAttachments = [logoIconAttachment, logoWordmarkAttachment];

const sendUserWaitlistEmail = async (email) => {
  const { subject, html } = userWaitlistTemplate({ email });
  return sendMail({ to: email, subject, html, attachments: logoAttachments });
};

const sendSupplierWaitlistEmail = async (email) => {
  const { subject, html } = supplierWaitlistTemplate({ email });
  return sendMail({ to: email, subject, html, attachments: logoAttachments });
};

module.exports = {
  sendUserWaitlistEmail,
  sendSupplierWaitlistEmail,
};
