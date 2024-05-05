// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const noBlankSpace = license.replace(/ /g, "_");
  if ((license === "")) {
    return;
  }
  return `![License](https://img.shields.io/badge/License-${noBlankSpace}-lightgreen.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
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
function renderLicenseSection(license) {
  if ((license === "")) {
    return "";
  }
  return `
  ${renderLicenseBadge(license)}

This project is licensed under the terms of the ${license}.
You can find the full text of the license in the LICENSE file or at:
[${renderLicenseLink(license)}](${renderLicenseLink(license)})

  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let contributionText = "";

  let testText = "";
  if (data.contribution) {
    contributionText = `## Contributing
1. **Clone the Repository**
\`\`\`md
git clone <https://github.com/username/repository.git>
\`\`\`
2. **Create a Branch**
\`\`\`md
git checkout -b feature-branch
\`\`\`
3. **Make changes**

4. **Stage changes**
\`\`\`md
git add .
\`\`\`
5. **Commit changes**
\`\`\`md
git commit -m "Add new feature"
\`\`\`
6. **Push changes**
\`\`\`md
git push origin feature-branch
\`\`\`

7. **Create Pull Request**`;
  }

  if (data.tests) {
    testText = ` ## Tests
    **Preconditions:**
    - Familiarize yourself with the project's functionality and expected behavior by reviewing the README and any relevant documentation.
    1. **Basic Functionality Test:**
        - Verify that the basic functionality of the project works as expected.
        - **Expected Result:** The project executes without errors, and the expected output is displayed.
    2. **Input Validation Test:**
        - **Description:** Test the project's handling of different types of input.
        - **Expected Result:** The project properly validates input data and provides appropriate feedback for both valid and invalid inputs.
    3. **Error Handling Test:**
        - Evaluate the project's error handling capabilities.
        - **Expected Result:** The project gracefully handles errors, provides informative error messages, and maintains stability.
    
    **Postconditions:**
    - Record any issues, bugs, or unexpected behavior encountered during testing.
    - Report test results and any identified issues to the me through GitHub issues or other designated channels.`;
  }
  return `# ${data.title}

    ${renderLicenseSection(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

${contributionText}

${testText}

## Questions
If you have any questions or need further clarification about this project, feel free to reach out to me via email at [${
    data.email
  }](mailto:${data.email}). I'm always happy to help!

Created by [GitHub Profile](https://github.com/${data.githubUsername})
  `;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};
