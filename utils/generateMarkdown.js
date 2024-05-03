// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const noBlankSpace = license.replace(/ /g, "_");
  if(license = ""){
    return;
  }
  return `![License](https://img.shields.io/badge/License-${noBlankSpace}-lightgreen.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "MIT License":
      return "https://opensource.org/licenses/MIT";
    case "Apache License 2.0":
      return "https://www.apache.org/licenses/LICENSE-2.0";
    case "GNU GPLv.3.0":
      return "https://www.gnu.org/licenses/gpl-3.0.html";
    default:
      return "";
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //   return `# ${data.title}

  // `;
  const license = data.license;
  renderLicenseBadge(license);
}

module.exports = { generateMarkdown, renderLicenseBadge, renderLicenseLink };
