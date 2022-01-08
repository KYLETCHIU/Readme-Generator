const generateMarkdown = data => {
  return `# ${data.title}
![GitHub license](https://img.shields.io/badge/Made%20by-%40${data.License}-green)

## Description
${data.description}

## Table of Contents
* [installation](#installation)
* [usage](#usage)
* [contributors](#contributors)
* [tests](#tests)
* [email](#email)
* [license](#license)
* [repo](#repo)

## installation
${data.installation} 

## usage
${data.usage}

## contributing
${data.contributors}

## tests
${data.tests}

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
