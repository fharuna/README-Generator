function fileGenerator(response) {
    return `
    ##Title 
    ${response.title}
    
    ## Description 
    ${response.Description}

    ## Table of Contents
    1. [Installation](#Installation)
    2. [Usage](#Usage)
    3. [License](#License)
    4. [Contributing](#Contributing)
    5. [Tests](#Tests)
    6. [Questions](#Questions)

    ## Installation 
    ${response.Installation}

    ## Usage 
    ${response.Usage}

    ## License 
    ${response.License}

    ## Contributing 
    ${response.Contributing}

    ## Tests
     ${response.Tests}

    ## Questions
    ${response.Questions}
    ${response.GitHub}
    ${response.Email}
    `;

}

module.exports = fileGenerator;