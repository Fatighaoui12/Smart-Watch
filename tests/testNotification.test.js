// Importez les modules nécessaires
const nodemailer = require('nodemailer');

// Définissez les informations de connexion SMTP pour Nodemailer (vous pouvez remplacer ces informations par les vôtres)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'AgileMailer@gmail.com',
    pass: 'lppboiuuluhxguhc'
  }
});

// Fonction pour envoyer un e-mail en utilisant Nodemailer
async function sendEmail(recipient, subject, message) {
  // Définissez les détails de l'e-mail
  const mailOptions = {
    from: 'AgileMailer@gmail.com',
    to: recipient,
    subject: subject,
    text: message
  };

  try {
    // Envoyez l'e-mail
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

// Testez l'envoi d'e-mail en utilisant Jest
describe('Email sending', () => {
  test('Sending an email', async () => {
    // Appel de la fonction d'envoi d'e-mail avec des informations de test
    const result = await sendEmail('beslama212@gmail.com', 'Test Subject', 'Test Message');

    // Vérifiez si l'e-mail a été envoyé avec succès
    expect(result).toBe(true);
  });
});
