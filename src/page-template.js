function pageTemplate(answers) {
    return ` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <div class="cards">
            <div class="cardName">
                Manager: ${answers.name}
            </div>

            <div class="cardInfo">
                <p class="info1">ID: ${answers.id}</p>
                
                <p class="info2">Email: 
                <a href="mailto:${answers.email}">${answers.email}</a>
                </p>
            
                <p class="info3">Office #: ${answers.office}</p>                  
            </div>
        </div>
    </body>
    </html>
  
  `;
  }
  
module.exports = {pageTemplate};

