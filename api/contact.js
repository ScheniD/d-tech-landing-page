const ALLOWED_ORIGINS = new Set([
  'https://dtechsolutions.eu',
  'https://www.dtechsolutions.eu',
  'http://localhost:3000',
  'http://127.0.0.1:3000'
]);

const sanitizeField = (val, maxLen = 500) =>
  String(val || '')
    .replace(/[\r\n\0]+/g, ' ')
    .trim()
    .slice(0, maxLen);

const sanitizeMessage = (val, maxLen = 4000) =>
  String(val || '')
    .replace(/\0/g, '')
    .trim()
    .slice(0, maxLen);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default async function handler(req, res) {
  const origin = req.headers?.origin || '';
  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', 'https://dtechsolutions.eu');
  }
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});

    if (body.botcheck) {
      return res.status(200).json({ ok: true, status: 'filtered' });
    }

    const name = sanitizeField(body.name, 120);
    const company = sanitizeField(body.company, 160);
    const email = sanitizeField(body.email, 160);
    const phone = sanitizeField(body.phone, 60);
    const website = sanitizeField(body.website, 250);
    const message = sanitizeMessage(body.message, 4000);
    const timing = sanitizeField(body.timing || 'fast', 30);
    const services = Array.isArray(body.services)
      ? body.services.map((s) => sanitizeField(s, 80)).join(', ')
      : sanitizeField(body.services || 'Nicht angegeben', 250);

    if (!name || !email || !EMAIL_RE.test(email) || !message) {
      return res.status(400).json({
        ok: false,
        error: 'Bitte füllen Sie alle Pflichtfelder (Name, gültige E-Mail, Anliegen) aus.'
      });
    }

    const timingLabels = {
      fast: 'Dringend / Notfall',
      q2: 'Nächste Wochen',
      flex: 'Flexibel'
    };
    const timingReadable = timingLabels[timing] || timing;
    const targetEmail = process.env.CONTACT_EMAIL || 'dominiksi@dtechsolutions.eu';
    const subject = `[D-Tech Anfrage] ${timingReadable}: ${name}${company ? ` (${company})` : ''}`;

    const textSummary = [
      `Neue Anfrage über dtechsolutions.eu`,
      `====================================`,
      `Name:          ${name}`,
      `Unternehmen:   ${company || '–'}`,
      `E-Mail:        ${email}`,
      `Telefon:       ${phone || '–'}`,
      `Anliegen:      ${services}`,
      `Dringlichkeit: ${timingReadable}`,
      `Website-URL:   ${website || '–'}`,
      ``,
      `Nachricht:`,
      `${message}`
    ].join('\n');

    let delivered = false;

    if (process.env.RESEND_API_KEY) {
      const resendFrom = process.env.RESEND_FROM_EMAIL || 'D-Tech Website <anfrage@dtechsolutions.eu>';
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: resendFrom,
          to: [targetEmail],
          reply_to: email,
          subject,
          text: textSummary
        })
      });

      if (resendRes.ok) {
        delivered = true;
      }
    }

    if (process.env.CONTACT_WEBHOOK_URL) {
      const hookRes = await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'd-tech-solutions-onepager',
          timestamp: new Date().toISOString(),
          name,
          company,
          email,
          phone,
          services,
          timing: timingReadable,
          website,
          message
        })
      });
      if (hookRes.ok) {
        delivered = true;
      }
    }

    if (!delivered) {
      const accessKey = process.env.WEB3FORMS_ACCESS_KEY || 'b105e343-1e04-4899-a9da-21a05eed1a1a';
      const w3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject,
          from_name: 'D-Tech Solutions Website',
          name,
          company,
          email,
          phone,
          services,
          urgency: timingReadable,
          website: website || 'Keine Angabe',
          message
        })
      });

      if (w3Res.ok) {
        delivered = true;
      }
    }

    return res.status(200).json({
      ok: true,
      delivered,
      message: 'Anfrage erfolgreich übermittelt.'
    });
  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({
      ok: false,
      error: 'Technischer Fehler beim Senden. Bitte kontaktieren Sie mich direkt per Telefon oder E-Mail.'
    });
  }
}
