module.exports = (userId, clientName, clientLastname, clientEmail, subjectType) => `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New sale</title>
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
        height: 690px;
        margin: 20px auto;
        background-color: #545b66;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        position: relative;
    }

    .container2 {
        max-width: 530px;
        height: 370px;
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
                <h1>Someone wants to buy your services, Joshua! 🔥</h1>
                <p>Create a new account and charge for your services.</p>
                <p>This is the client info:</p>
                <p><strong>Name: </strong>${clientName}</p>
                <p><strong>Lastname: </strong>${clientLastname}</p>
                <p><strong>Email: </strong>${clientEmail}</p>
                <p><strong>Plan: </strong>${subjectType}</p>
                <br>
                <a class="btn" href="https://www.nanamendozago.com/newaccount/${userId}">Create new account!</a>
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