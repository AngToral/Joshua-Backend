module.exports = (userId) => `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset password</title>
    <style>
    body {
        font-family: Arial, sans-serif;
        margin: 0 autop;
        padding: 20px;
        text-align: center;
        width: 100%;
    }

    .container-grey {
        width: 90%;
        border: 1px solid #16375f;
        background-color: #e6eae9;
        margin: 10px auto;
        border-radius: 20px;
        max-width: 470px;
    }

    .container-blue {
        border: 1px solid #16375f;
        border-radius: 20px;
        background-color: #16375f;
        padding: 20px;
        max-width: 470px;
    }

    .footer {
        border: 1px solid #545b66;
        border-radius: 10px;
        background-color: #e6eae9;
        justify-content: center;
        text-align: center;
    }

    button {
        border-radius: 10px;
        padding: 5px;
        background-color: transparent;
        border: 2px solid transparent;
        color: #545b66;
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
        padding: 5px;
        font-size: 16px;
        background-color: white;
        border-radius: 5px;
        width: 120px;
        text-align: center;
    }

    .container-image {
        text-align: center;
        padding: 15px;
        align-items: center;
    }

    .btn-div {
        margin: 20px;
    }

    .content {
        color: #e6eae9;
    }

    .note {
        font-style: italic;
        text-align: end;
    }
    </style>
</head>

<body>
    <div class="container-grey">
        <div class="container-image">
            <img src="https://res.cloudinary.com/dqvce5mij/image/upload/v1735325544/Azul_syotal.png" class="image" />
        </div>
        <div class="container-blue">
            <div class="content">
                <h2>Have you forgotten your password? 🔐</h2>
                <p>Change it at the following link:</p>
                <div class="btn-div">
                    <div class="btn">
                        <button href="http://localhost:5173/setnewpassword/${userId}">New Password!</button>
                    </div>
                </div>
                <p class="note">Do not response to this email</p>
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