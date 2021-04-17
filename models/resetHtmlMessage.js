const message = (link) => {
    return `<!DOCTYPE html>\n
    <html lang="en" dir="ltr">\n
    <head>\n
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap" rel="stylesheet">   \n
         <style>\n
        * {\n
        font-family: 'Roboto', sans-serif;\n
        }\n
        body {\n
            background-color: #fbf8f6;\n
        }\n
        .brand {\n
            text-align: center;\n
            font-size: 34px;\n
            margin: 20px auto 20px auto;\n
        }\n
        .message {\n
            width: 350px;\n
            height: auto;\n
            margin: auto;\n
            padding: 25px;\n
            background-color: white;\n
            box-shadow: 0 0 8px rgb(0, 0, 0, 0.2);\n
        }\n
        .notice {\n
            text-align: center;\n
            font-size: 16px;\n
            font-weight: 500;\n
            color: black;\n
        }\n
        .question {\n
            font-size: 14px;\n
            color: #696969;\n
            padding: 15px 0 15px 0;\n
            line-height: 20px;\n
        }\n
        .link {\n
            display: block;\n
            text-align: center;\n
            width: 200px;\n
            height: 45px;\n
            line-height: 45px;\n
            margin: auto;\n
            background-color: black;\n
            border-radius: 3px;\n
        }\n
        .link a {\n
            text-decoration: none;\n
            color: white;\n
            padding: 15px;\n
        }\n
        </style>\n
    </head>\n
    <body>\n
        <div class="brand">ShortStory</div>\n
        <div class="message">\n
        <div class="notice">We have received a request to reset your password</div>\n
        <div class="question">\n
            If you did not make this request to reset your password, you can ignore this email.
            Otherwise, you can reset your password using the link below.
        </div>\n
    `
    + '<div class="link"><a href=' +link+ '>Set New Password</a><div>\n' +
    `    </div>\n
    </body>\n
    </html>\n`;
}

module.exports = message;