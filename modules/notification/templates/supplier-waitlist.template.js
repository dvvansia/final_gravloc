const supplierWaitlistTemplate = ({ email }) => {
  const subject = "You're on the GRAVLOC supplier waitlist";

  const html = `
  <!DOCTYPE html>
  <html>
    <body style="margin:0; padding:0; background-color:#f5f3f5; font-family: Arial, Helvetica, sans-serif;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f3f5; padding: 32px 0;">
        <tr>
          <td align="center">
            <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e4e2e4;">
              <tr>
                <td style="background: linear-gradient(135deg, #1e1b4b, #3B82F6); padding: 28px 32px;">
                  <table role="presentation" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="vertical-align: middle; padding-right: 10px;">
                        <img src="cid:gravloc-logo" alt="" width="33" height="26" style="display:block;" />
                      </td>
                      <td style="vertical-align: middle;">
                        <img src="cid:gravloc-wordmark" alt="GRAVLOC" width="157" height="24" style="display:block;" />
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 32px;">
                  <span style="display:inline-block; background-color:#d5e0f8; color:#3c475a; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 12px; border-radius: 9999px;">
                    Supplier Waitlist Confirmed
                  </span>
                  <h1 style="font-size: 22px; line-height: 1.3; color: #1b1c1d; margin: 20px 0 12px;">
                    You're on the list 🚀
                  </h1>
                  <p style="font-size: 15px; line-height: 1.6; color: #44474c; margin: 0 0 16px;">
                    Thanks for your interest in becoming a GRAVLOC supplier. We've added <strong>${email}</strong>
                    to our supplier waitlist.
                  </p>
                  <p style="font-size: 15px; line-height: 1.6; color: #44474c; margin: 0 0 16px;">
                    Our supplier workspace — covering catalogue management, incoming RFQs, purchase order
                    tracking, and buyer relationships in one dashboard — is currently in active development.
                    You'll be among the first to know the moment it goes live and onboarding opens.
                  </p>
                  <p style="font-size: 15px; line-height: 1.6; color: #44474c; margin: 0;">
                    In the meantime, if you have any questions, just reply to this email.
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding: 20px 32px; background-color: #f5f3f5; border-top: 1px solid #e4e2e4;">
                  <p style="font-size: 12px; color: #74777d; margin: 0;">
                    © ${new Date().getFullYear()} GRAVLOC. Precision procurement for mission-critical systems.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;

  return { subject, html };
};

module.exports = supplierWaitlistTemplate;
