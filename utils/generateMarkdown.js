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
${data.Installation} 

## usage
${data.Usage}

## contributing
${data.Contributors}

## tests
${data.tests}

## Github
${data.github}

## Email
 ${data.email}\n

## License
 ${data.License} 

## Repo
${data.Repo}
`;
}

module.exports = generateMarkdown;
