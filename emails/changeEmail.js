module.exports = (userId) => `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset email</title>
    <style>
    body {
        font-family: Arial, sans-serif;
        background-color: #010a13;
        color: #333;
        margin: 0;
        padding: 0;
        text-align: center;
    }

    .container {
        width: 90%;
        max-width: 530px;
        height: 555px;
        margin: 20px auto;
        background-color: #545b66;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        position: relative;
    }

    .container2 {
        max-width: 530px;
        height: 240px;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
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
        margin: 10px;
        display: flex;
        justify-content: space-around;
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
        display: flex;
        justify-content: center;
        padding: 15px;
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
                <h1>Have you requested to change your email? 🔐</h1>
                <p>Change it at the following link:</p>
                <br />
                <a class="btn" href="https://www.nanamendozago.com/changeemail/${userId}">New email!</a>
                <br />
            </div>
        </div>
        <div class="footer">
            <p>Instagram</p>
            <p>Website</p>
        </div>
    </div>
</body>
</html>

`