// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return `${license}`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://img.shields.io/badge/${renderLicenseBadge(license)}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `![Static Badge](${renderLicenseLink(license)})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  \`\`\`
  ${data.usage}
  \`\`\`

  ## License
  This project is licensed with ${data.license}.

  ## Contributors
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any concerns or questions about this project, you can contact [${data.username}](github.com/${data.username}) at the following email address: [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
