function pageTemplate(answers) {
    return `
    # ${answers.title}
  
    ## Manager's Name
    ${answers.name}
   
    ## Manager's ID
    ${answers.id}
  
    ## Manager's Email
    ${answers.email}

    ## Manager's Office
    ${answers.office}
  
  `;
  }
  
module.exports = pageTemplate;