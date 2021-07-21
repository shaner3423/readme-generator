// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[License](https://img.shields.io/badge/License-MIT-brightgreen)`
  } else if (license === "GNU") {
    return `[License]()`
  } else if (license === "Apache") {
    return `[License]()`
  } else if (license === "Other") {
    return `[License]()`
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
  // console.log(`# ${data.title} 

  // ## Description ${data.description}

  // ## Table of Contents * [Installation](#installation) * [Usage](#usage) * [Credits](#credits) * [License](#license)

  // ## Installations ${data.installation}
  
  // ## Usage ${data.usage}

  // ## License ${data.license}

  // ## Contributing ${data.contributing}

  // ## Test ${data.test}

  // ## Questions ${data.question}

  // `);

  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents 
  * [Installation](#installation) 
  * [Usage](#usage) 
  * * [Credits](#credits) 
  * * [License](#license) 
  
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

  `;
  
}


module.exports = generateMarkdown;


//Table of contents  need to modify later