// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Readme Generator

  ![License](https://img.shields.io/badge/License-${data.license}-brightgreen)

  ${data.title}


  ## Description

  ${data.description}


  ## Table of Contents 

  - [Description](#description)
  - [Installation](#installation) 
  - [Usage](#usage) 
  - [Contributing](#contributing) 
  - [Test](#test) 
  - [License](#license) 
  - [Questions](#questions)


  ## Installations

 ${data.installation}


  ## Usage

 ${data.usage}


  ## License

  ${data.license} 
 


  ## Contributing

  ${data.contributing}


  ## Test

  ${data.test}


  ## Questions

  ${data.questions}


  For additional questions, please feel free to each out using the links below!

  GitHub UserName: ${data.githubUser}

  GitHub Link: ${data.githubLink}
  
  E-mail: ${data.email}

  `;
}


module.exports = generateMarkdown;

