module.exports = (subjectType, clientName, clientEmail, subject) => `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New client contact</title>
    <style>
    body {
        font-family: Arial, sans-serif;
        background-color: #010a13;
        color: #333;
        margin: 0;
        padding: 0;
        text-align: center;
        height: 100vh;
    }

    .container {
        max-width: 530px;
        height: 610px;
        margin: 20px auto;
        background-color: #545b66;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        position: relative;
    }

    .container2 {
        max-width: 530px;
        height: 300px;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        border: 1px solid #545b66;
        text-align: center;
    }

    .footer {
        max-width: 530px;
        background-color: #979ca2;
        color: #ffffff !important;
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        border-radius: 10px;
        margin-top: 20px;
        text-align: center;
        height: 40px;
    }

    button {
        border-radius: 10px;
        padding: 10px;
        background-color: transparent;
        color: #ffffff !important;
        border: 2px solid transparent;

    }

    .image {
        height: 250px;
    }

    .header {
        display: flex;
        justify-content: center;
    }

    .header img {
        height: 200px;
        margin: auto
    }

    .content {
        text-align: left;
        padding: 10px;
    }

    .highlight-box {
        background-color: #2cb9902e;
        border: 3px solid #2cb990;
        border-radius: 10px;
        padding: 15px;
        margin: 20px 0;
    }

    .highlight-text {
        font-size: 16px;
    }

    .highlight-box strong {
        display: block;
        margin-bottom: 10px;
    }

    .btn {
        margin: 20px;
        padding: 10px 20px;
        font-size: 16px;
        color: #ffffff !important;
        background-color: #545b66;
        text-decoration: none;
        border-radius: 5px;
    }

    .container-image {
        text-align: center;
        padding: 15px;
        align-items: center;
    }
    </style>
</head>
<body>
    <div class="container">
        <div class="container-image">
            <img src="https://res.cloudinary.com/dqvce5mij/image/upload/v1735325545/Gris_ygutmf.png" class="image" />
        </div>
        <div class="container2">
            <div class="content">
                <h2>Someone needs more info, Joshua! 🔥</h2>
                <h3>Client info:</h3>
                <p><strong>Name: </strong>${clientName}</p>
                <p><strong>Email: </strong>${clientEmail}</p>
                <p><strong>Type of info: </strong>${subjectType}</p>
                <p><strong>Message: </strong>${subject}</p>
                <div class="footer">
                    <button href="https://www.instagram.com/">Instagram</button>
                    <button href="https://www.instagram.com/">Website</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

`