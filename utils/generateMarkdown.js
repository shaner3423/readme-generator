// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[License](https://img.shields.io/badge/License-MIT-brightgreen)`
  } else if (license === "GNU") {
    return `[License](https://img.shields.io/badge/License-GNU-orange)`
  } else if (license === "Apache") {
    return `[License](https://img.shields.io/badge/License-Apache-blue)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(`
  # Project Title
  ## ${data.title}

  ## Description
  ### ${data.description}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation) 
  - [Usage](#usage) 
  - [Contributing](#contributing) 
  - [Test](#test) 
  - [License](#license) 
  - [Questions](#questions)

  ## Installations
  ### ${data.installation}

  ## Usage
  ### ${data.usage}

  ## License
  ### ${data.license}
  ### ${data.license}
  ### ${data.license}

  ## Contributing
  ###${data.contributing}

  ## Test
  ###${data.test}


  `);

  return `
  # Project Title
  ## ${data.title}

  ## Description
  ### ${data.description}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation) 
  - [Usage](#usage) 
  - [Contributing](#contributing) 
  - [Test](#test) 
  - [License](#license) 
  - [Questions](#questions)

  ## Installations
  ### ${data.installation}

  ## Usage
  ### ${data.usage}

  ## License
  ### ${data.license}
  ### ${data.license}
  ### ${data.license}

  ## Contributing
  ### ${data.contributing}

  ## Test
  ### ${data.test}

  ## Questions
  ### For additional questions, please feel free to each out using the links below!
  ### GitHub UserName: ${data.githubUser}
  ### GitHub Link: ${data.githubLink}
  ### E-mail: ${data.email}

  `;
}


module.exports = generateMarkdown;


