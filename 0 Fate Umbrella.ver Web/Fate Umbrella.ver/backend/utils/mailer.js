import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function sendVerificationEmail(toEmail, token, username) {
    const verifyLink = `${process.env.FRONTEND_URL}/verify/${token}`;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: toEmail,
        subject: 'Verificacion de Cuenta | Fate/Umbrella.ver',
        html: `
            <p>Hola ${username || ''},</p>
            <p>Gracias por registrarte en Fate/Umbrella.ver. Para activar tu cuenta, hacé click en el siguiente enlace:</p>
            <p> <a href="${verifyLink}">Activá tu cuenta</a> </p>
            <p>Si no podés hacer click, pegá este link en tu navegador:</p>
            <p>${verifyLink}</p>
            <p>El link expirará en 24 horas.</p>
            <br/>
            <p>- Fate/Umbrella.ver</p>
        `,
    };

    return transporter.sendMail(mailOptions);
}