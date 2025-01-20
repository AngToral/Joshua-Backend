module.exports = (clientName, clientLastname, clientEmail, subjectType) => `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New sale</title>
    <style>
    body {
        max-width: 530px;
        margin: 0;
        padding: 0;
    }

    .container-grey {
        border: 1px solid #545b66;
        background-color: #545b66;
        margin: 10px;
        border-radius: 20px;
        max-width: 530px;
    }

    .container-white {
        border: 1px solid #545b66;
        border-radius: 20px;
        background-color: #ffffff;
        padding: 20px;
        max-width: 530px;
    }

    .footer {
        color: #e6eae9;
        border: 1px solid #545b66;
        border-radius: 10px;
        background-color: #545b66;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button {
        border-radius: 10px;
        padding: 10px;
        background-color: transparent;
        border: 2px solid transparent;
        color: #e6eae9;
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

    .btn {
        margin-bottom: 15px;
        padding: 10px 20px;
        font-size: 16px;
        background-color: #979ca2;
        border-radius: 5px;
        width: 150px;
    }

    .container-image {
        text-align: center;
        padding: 15px;
        align-items: center;
    }

    .btn-div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    </style>
</head>

<body>
    <div class="container-grey">
        <div class="container-image">
            <img src="https://res.cloudinary.com/dqvce5mij/image/upload/v1735325545/Gris_ygutmf.png" class="image" />
        </div>
        <div class="container-white">
            <div class="content">
                <h2>Someone wants to buy your services, Joshua! 🔥</h2>
                <p>Create a new account and charge for your services.</p>
                <p>This is the client info:</p>
                <p><strong>Name: </strong>${clientName}</p>
                <p><strong>Lastname: </strong>${clientLastname}</p>
                <p><strong>Email: </strong>${clientEmail}</p>
                <p><strong>Plan: </strong>${subjectType}</p>
                <div class="btn-div">
                    <div class="btn">
                        <button href="http://localhost:5173/login">Create new account!</button>
                    </div>
                </div>
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