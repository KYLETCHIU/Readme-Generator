function generateMarkdown(data) {
  return `
# ${data.title}
![GitHub license](https://img.shields.io/badge/Made%20by-%40${data.License}-green)
## Description
${data.description}
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
* [License](#License)
## languages
${data.Languages} 
## Installation
${data.Installation} 
## Usage
${data.Usage}
## Contributing
${data.Contributing}
## Tests
${data.Tests}
## Questions
Contact email: ${data.email}\n
GitHub: [${data.github}](https://github.com/${data.github})\n
${data.Questions}
## License
This project is licensed under the terms of the ${data.License} license.
`;
}

module.exports = generateMarkdown;
