// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const badges = [
    { name: "Apache_2", segment: "Apache_2.0-blue.svg", url: "https://opensource.org/licenses/Apache-2.0" },
    { name: "Boost_1", segment: "Boost_1.0-lightblue.svg", url: "https://www.boost.org/LICENSE_1_0.txt" },
    { name: "BSD_3", segment: "BSD_3--Clause-blue.svg", url: "https://opensource.org/licenses/BSD-3-Clause" },
    { name: "CC0_1", segment: "CC0_1.0-lightgrey.svg", url: "http://creativecommons.org/publicdomain/zero/1.0/" },
    { name: "CC_4", segment: "CC_BY_4.0-lightgrey.svg", url: "https://creativecommons.org/licenses/by/4.0/" },
    { name: "CC_SA", segment: "CC_BY--SA_4.0-lightgrey.svg", url: "https://creativecommons.org/licenses/by-sa/4.0/" },
    { name: "CC_NC", segment: "CC_BY--NC_4.0-lightgrey.svg", url: "https://creativecommons.org/licenses/by-nc/4.0/" },
    { name: "CC_ND", segment: "CC_BY--ND_4.0-lightgrey.svg", url: "https://creativecommons.org/licenses/by-nd/4.0/" },
    { name: "EPL_1", segment: "EPL_1.0-red.svg", url: "https://opensource.org/licenses/EPL-1.0" },
    { name: "GPLv3", segment: "GPLv3-blue.svg", url: "https://www.gnu.org/licenses/gpl-3.0" },
    { name: "AGPL_v3", segment: "AGPL_v3-blue.svg", url: "https://www.gnu.org/licenses/agpl-3.0" },
    { name: "LGPL_v3", segment: "LGPL_v3-blue.svg", url: "https://www.gnu.org/licenses/lgpl-3.0" },
    { name: "FDL_v1", segment: "FDL_v1.3-blue.svg", url: "https://www.gnu.org/licenses/fdl-1.3" },
    { name: "Hippocratic_3", segment: "Hippocratic_3.0-lightgrey.svg", url: "https://firstdonoharm.dev" },
    { name: "IPL_1", segment: "IPL_1.0-blue.svg", url: "https://opensource.org/licenses/IPL-1.0" },
    { name: "ISC", segment: "ISC-blue.svg", url: "https://opensource.org/licenses/ISC" },
    { name: "MIT", segment: "MIT-yellow.svg", url: "https://opensource.org/licenses/MIT" },
    { name: "MPL_2", segment: "MPL_2.0-brightgreen.svg", url: "https://opensource.org/licenses/MPL-2.0" },
    { name: "ODC_BY", segment: "ODC_BY-brightgreen.svg", url: "https://opendatacommons.org/licenses/by/" },
    { name: "ODbL", segment: "ODbL-brightgreen.svg", url: "https://opendatacommons.org/licenses/odbl/" },
    { name: "PDDL", segment: "PDDL-brightgreen.svg", url: "https://opendatacommons.org/licenses/pddl/" },
    { name: "Perl", segment: "Perl-0298c3.svg", url: "https://opensource.org/licenses/Artistic-2.0" },
    { name: "Artistic_2", segment: "Artistic_2.0-0298c3.svg", url: "https://opensource.org/licenses/Artistic-2.0" },
    { name: "OFL_1", segment: "OFL_1.1-lightgreen.svg", url: "https://opensource.org/licenses/OFL-1.1" },
    { name: "Unlicense", segment: "Unlicense-blue.svg", url: "http://unlicense.org/" },
    { name: "WTFPL", segment: "WTFPL-brightgreen.svg", url: "http://www.wtfpl.net/about/" },
    { name: "Zlib", segment: "Zlib-lightgrey.svg", url: "https://opensource.org/licenses/Zlib" },
];

//  ---------------------------------------------------------------      ---------------------------------------------------------------
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(segment) {  
    if (!segment) { return '' }
    return `https://img.shields.io/badge/${segment}`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(link) {
    if (!link) { return '' }
    return `(${link})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) { return '' }
    const badge = badges.find(b => b.name === license)

    return `
        ## License

        [![License](${renderLicenseBadge(badge.segment)})](${renderLicenseLink(badge.url)})
        
        This project is licensed under the ${name} License - see the [LICENSE.md](${link}) file for details.
    `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(name) {
    // console.log('Markdown data:', data)
    
    const sections = {
        project_name: (val)=> `${val}`,
        github_username: (val)=> `${val}`,
        email_address: (val)=> `${val}`,
        usage: (val)=> `${val}`,
        license: (val)=> `${val}`,
        contribution: (val)=> `${val}`,
        features: (val)=> `${val}`,
        technologies: (val)=> `${val}`,
        acknowledgments: (val)=> `${val}`,
    }

    // if(name in sections) {
    //     return sections[name](name)
    // }

    return ` # ${name} `
}

function ln() {
    const e = new Error()
    const frame = e.stack.split("\n")[2]
    const lineNumber = frame.match(/:(\d+):\d+\)?$/)[1]
    return `line ${lineNumber}: `
}

module.exports = { generateMarkdown, badges, ln }
