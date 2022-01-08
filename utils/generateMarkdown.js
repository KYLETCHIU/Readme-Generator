const generateMarkdown = data => {
  return `# ${data.title}
![GitHub license](http://img.shields.io/badge/license-${data.license}-green)

## Description
${data.description}

## Table of Contents
* [installation](#installation)
* [usage](#usage)
* [contributors](#contributors)
* [tests](#tests)
* [questions](questions)
* [github](#github)
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

## questions
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
