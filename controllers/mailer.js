const { response } = require('express')
const { transporter } = require('../helpers/mailer')

 
const sendContact = async (req, res = response) => {
  const campos = {
    ...req.body 
  }
  try {
    await transporter.sendMail({
      from: `"Formulario de contacto" <${campos.email}>`, // sender address
      to: 'oramirez@jasu.us', // list of receivers
      subject: "Formulario de contacto", // Subject line
      html: `
          <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <table class="table">
        <thead>
            <tr>
                <h2>Formulario de contacto</h2>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Name</th>
                <td>${campos.name}</td>

            </tr>
            <tr>
                <th scope="row">Surname</th>
                <td>${campos.surname}</td>

            </tr>
            <tr>
                <th scope="row">Email</th>
                <td>${campos.email}</td>

            </tr>
            <tr>
                <th scope="row">Phone</th>
                <td>${campos.phone}</td>

            </tr>
            <tr>
                <th scope="row">Bussines</th>
                <td>${campos.business}</td>

            </tr>
            <tr>
                <th scope="row">Contact Reason</th>
                <td>${campos.contactReason}</td>

            </tr>
            <tr>
                <th scope="row">Notes</th>
                <td>${campos.notes}</td>

            </tr>

        </tbody>
    </table>
</body>

</html>
          `,
    });
    return res.status(200).json({
      code: 200,
      message: 'Mensaje envidado',
    })
  } catch (error) {
    console.log('error::: ', error);
    return res.status(400).json({ ok: false, message: 'Algo sacudió mal', error })
  }
} 
const sendQuote = async (req, res = response) => {
  const campos = {
    ...req.body 
  }
  try {
    await transporter.sendMail({
      from: `"Formulario de contacto" <${campos.email}>`, // sender address
      to: 'oramirez@jasu.us', // list of receivers
      subject: "Formulario de contacto", // Subject line
      html: `
          <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <table class="table">
        <thead>
            <tr>
                <h2>Formulario de contacto</h2>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Name</th>
                <td>${campos.name}</td>

            </tr>
            <tr>
                <th scope="row">Surname</th>
                <td>${campos.surname}</td>

            </tr>
            <tr>
                <th scope="row">Email</th>
                <td>${campos.email}</td>

            </tr>
            <tr>
                <th scope="row">Phone</th>
                <td>${campos.phone}</td>

            </tr>
            <tr>
                <th scope="row">Bussines</th>
                <td>${campos.business}</td>

            </tr>
            <tr>
                <th scope="row">Contact Reason</th>
                <td>${campos.contactReason}</td>

            </tr>
            <tr>
                <th scope="row">Notes</th>
                <td>${campos.notes}</td>

            </tr>

        </tbody>
    </table>
</body>

</html>
          `,
    });
    return res.status(200).json({
      code: 200,
      message: 'Mensaje envidado',
    })
  } catch (error) {
    console.log('error::: ', error);
    return res.status(400).json({ ok: false, message: 'Algo sacudió mal', error })
  }
} 





module.exports = {
  
  sendContact
}
