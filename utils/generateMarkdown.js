const generateMarkdown = data => {
  return `# ${data.title}
![GitHub license](http://img.shields.io/badge/license-${data.license}-green)

## Description
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributors](#Contributors)
* [Tests](#Tests)
* [Questions](Questions)
* [Github](#Github)
* [Email](#Email)
* [License](#License)
* [Repo](#Repo)

## Installation
${data.installation} 

## Usage
${data.usage}

## Contributing
${data.contributors}

## Tests
${data.tests}

## Questions
"Feel free to reach out to be via github or my email with any questions."

## Github
${data.github}

## Email
 ${data.email}\n

## License
 ${data.license} 

## Repo
${data.repo}
`;
}

module.exports = generateMarkdown;
