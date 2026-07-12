const nodemailer = require('nodemailer');
const Busboy = require('busboy');

const EMAIL_TO = process.env.EMAIL_TO || 'pavelmiksim22@gmail.com';
const EMAIL_FROM = process.env.EMAIL_FROM || 'pavelmiksim22@gmail.com';
const EMAIL_USER = process.env.EMAIL_USER || 'pavelmiksim22@gmail.com';
const EMAIL_PASS = process.env.EMAIL_PASS || '';
const EMAIL_HOST = process.env.EMAIL_HOST || 'smtp.gmail.com';
const EMAIL_PORT = Number(process.env.EMAIL_PORT || '587');

const FORM_NAMES = {
  'general-service': 'General Service Request',
  'roadside': 'Roadside Assistance Request',
  'parking': 'Parking Inquiry',
  'freight': 'Freight Quote Request',
  'repair': 'Repair Estimate Request',
  'rebuild': 'Rebuild Estimate Request',
  'fleet': 'Fleet Service Discussion',
  'medium-duty': 'Medium-Duty Service Request',
  'contact': 'Contact Request',
};

function parseMultipart(event) {
  return new Promise((resolve, reject) => {
    const fields = {};
    const files = [];
    const headers = {};
    for (const [key, value] of Object.entries(event.headers || {})) {
      headers[key.toLowerCase()] = value;
    }
    const contentType = headers['content-type'];
    if (!contentType || !contentType.includes('multipart/form-data')) {
      // If not multipart, parse URL-encoded or JSON body
      const body = event.isBase64Encoded ? Buffer.from(event.body, 'base64').toString() : event.body;
      const parsed = new URLSearchParams(body);
      for (const [key, value] of parsed.entries()) {
        if (fields[key]) {
          if (!Array.isArray(fields[key])) fields[key] = [fields[key]];
          fields[key].push(value);
        } else {
          fields[key] = value;
        }
      }
      return resolve({ fields, files });
    }

    const busboy = Busboy({ headers: { 'content-type': contentType } });

    busboy.on('file', (fieldname, file, info) => {
      const chunks = [];
      const { filename, mimeType } = info;
      file.on('data', (data) => chunks.push(data));
      file.on('end', () => {
        if (filename && chunks.length > 0) {
          files.push({
            fieldname,
            filename,
            mimeType,
            content: Buffer.concat(chunks),
          });
        }
      });
    });

    busboy.on('field', (fieldname, value) => {
      if (fields[fieldname]) {
        if (!Array.isArray(fields[fieldname])) fields[fieldname] = [fields[fieldname]];
        fields[fieldname].push(value);
      } else {
        fields[fieldname] = value;
      }
    });

    busboy.on('error', (err) => reject(err));
    busboy.on('finish', () => resolve({ fields, files }));

    if (event.body) {
      const body = event.isBase64Encoded ? Buffer.from(event.body, 'base64') : Buffer.from(event.body);
      busboy.end(body);
    } else {
      resolve({ fields, files });
    }
  });
}

function buildEmailHtml(fields, files, formType, sourceUrl, submittedAt) {
  const humanFormName = FORM_NAMES[formType] || formType || 'Form Submission';
  const name = fields.name || fields['p-name'] || fields['c-name'] || fields['f-name'] || 'Not provided';
  const phone = fields.phone || fields['p-phone'] || fields['c-phone'] || fields['f-phone'] || 'Not provided';
  const email = fields.email || fields['p-email'] || fields['c-email'] || fields['f-email'] || 'Not provided';
  const company = fields.company || fields['c-company'] || 'Not provided';
  const location = fields.location || 'Not provided';

  let rows = '';
  const exclude = ['form_type', 'redirect', 'form-name', 'bot-field', 'website'];
  for (const [key, value] of Object.entries(fields)) {
    if (exclude.includes(key)) continue;
    if (typeof value === 'object' && Array.isArray(value)) {
      rows += `<tr><td style="padding:6px 10px;border:1px solid #e0e0e0;vertical-align:top;text-transform:capitalize;">${key.replace(/[-_]/g, ' ')}</td><td style="padding:6px 10px;border:1px solid #e0e0e0;vertical-align:top;">${value.join(', ')}</td></tr>`;
    } else {
      rows += `<tr><td style="padding:6px 10px;border:1px solid #e0e0e0;vertical-align:top;text-transform:capitalize;">${key.replace(/[-_]/g, ' ')}</td><td style="padding:6px 10px;border:1px solid #e0e0e0;vertical-align:top;white-space:pre-wrap;">${value || '-'}</td></tr>`;
    }
  }

  const attachments = files.length > 0 ? `<p><strong>Attached files:</strong> ${files.map(f => f.filename).join(', ')}</p>` : '';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New ${humanFormName}</title>
</head>
<body style="font-family:Inter, Arial, sans-serif; color:#1a1a1d; line-height:1.5;">
  <h1 style="color:#d9830f;">New ${humanFormName}</h1>
  <p style="font-size:1.05rem;">Hello Paul, a new request came in from the BOSSEN INC website. Here is everything you need to know:</p>

  <h2>Quick Summary</h2>
  <table style="border-collapse:collapse;width:100%;max-width:700px;">
    <tr><td style="padding:6px 10px;border:1px solid #e0e0e0;font-weight:700;">Type of request</td><td style="padding:6px 10px;border:1px solid #e0e0e0;">${humanFormName}</td></tr>
    <tr><td style="padding:6px 10px;border:1px solid #e0e0e0;font-weight:700;">Submitted at</td><td style="padding:6px 10px;border:1px solid #e0e0e0;">${submittedAt}</td></tr>
    <tr><td style="padding:6px 10px;border:1px solid #e0e0e0;font-weight:700;">Submitted from</td><td style="padding:6px 10px;border:1px solid #e0e0e0;">${sourceUrl}</td></tr>
    <tr><td style="padding:6px 10px;border:1px solid #e0e0e0;font-weight:700;">Name</td><td style="padding:6px 10px;border:1px solid #e0e0e0;">${name}</td></tr>
    <tr><td style="padding:6px 10px;border:1px solid #e0e0e0;font-weight:700;">Phone</td><td style="padding:6px 10px;border:1px solid #e0e0e0;">${phone}</td></tr>
    <tr><td style="padding:6px 10px;border:1px solid #e0e0e0;font-weight:700;">Email</td><td style="padding:6px 10px;border:1px solid #e0e0e0;">${email}</td></tr>
    <tr><td style="padding:6px 10px;border:1px solid #e0e0e0;font-weight:700;">Company</td><td style="padding:6px 10px;border:1px solid #e0e0e0;">${company}</td></tr>
    <tr><td style="padding:6px 10px;border:1px solid #e0e0e0;font-weight:700;">Location</td><td style="padding:6px 10px;border:1px solid #e0e0e0;">${location}</td></tr>
  </table>

  <h2>All Details</h2>
  <table style="border-collapse:collapse;width:100%;max-width:700px;">
    ${rows}
  </table>

  ${attachments}

  <p style="margin-top:24px;">You can reply to this email or call the phone number listed above to follow up.</p>
  <p style="color:#4e4e50;">This message was sent from the BOSSEN INC website contact form.</p>
</body>
</html>
  `;
}

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const sourceUrl = event.headers.referer || event.headers.Referer || 'unknown page';
  const submittedAt = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });

  try {
    const { fields, files } = await parseMultipart(event);

    // Honeypot check
    if (fields['bot-field'] && fields['bot-field'].trim() !== '') {
      return { statusCode: 400, body: 'Bad Request' };
    }

    const formType = (fields.form_type || fields['form-name'] || 'contact').toString();
    const humanFormName = FORM_NAMES[formType] || 'Form Submission';
    const redirect = (fields.redirect || '/thank-you/').toString();

    if (!EMAIL_PASS) {
      console.error('EMAIL_PASS is not set. Skipping email send.');
      return {
        statusCode: 302,
        headers: { Location: `${redirect}?email=not-configured` },
        body: '',
      };
    }

    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: EMAIL_PORT === 465,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `BOSSEN INC Website <${EMAIL_FROM}>`,
      to: EMAIL_TO,
      replyTo: fields.email || fields['p-email'] || fields['c-email'] || fields['f-email'] || EMAIL_FROM,
      subject: `New BOSSEN INC ${humanFormName} from ${fields.name || 'someone'}`,
      html: buildEmailHtml(fields, files, formType, sourceUrl, submittedAt),
    };

    if (files.length > 0) {
      mailOptions.attachments = files.map((f) => ({
        filename: f.filename,
        content: f.content,
        contentType: f.mimeType,
      }));
    }

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 302,
      headers: { Location: redirect },
      body: '',
    };
  } catch (err) {
    console.error('Form submission error:', err);
    return {
      statusCode: 302,
      headers: { Location: '/thank-you/?status=error' },
      body: '',
    };
  }
};
