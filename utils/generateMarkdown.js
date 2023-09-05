function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    const fixedLicense = license.replace(/ /, '%20');
    return `![Static Badge](https://img.shields.io/badge/${fixedLicense}%20License-Active-green)`;
  }  
}

function renderLicenseLink(license) {
  switch (license) {
    case 'None':
      return '';
    case 'MIT':
      return 'https://choosealicense.com/licenses/mit/';
    case 'APACHE 2.0':
      return 'https://choosealicense.com/licenses/apache-2.0/';
    case 'GPL 3.0':
      return 'https://choosealicense.com/licenses/gpl-3.0/';
    case 'BSD 3':
      return 'https://choosealicense.com/licenses/bsd-3-clause/';
  }
}

function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else if (license === 'Other') {
    return 'This project has a unique license. Please edit the README with the appropriate link and badge.';
  } else {
    return `This project is licensed with [${license}](${renderLicenseLink(license)}).`
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

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
  ${renderLicenseSection(data.license)}

  ## Contributors
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any concerns or questions about this project, you can contact [${data.username}](github.com/${data.username}) at the following email address: [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
