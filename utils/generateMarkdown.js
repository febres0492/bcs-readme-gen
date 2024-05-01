// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const badges = {
    Apache_2: {     segment: "Apache_2.0-blue.svg",           url: "https://opensource.org/licenses/Apache-2.0" },
    Boost_1: {      segment: "Boost_1.0-lightblue.svg",       url: "https://www.boost.org/LICENSE_1_0.txt" } ,
    BSD_3: {        segment: "BSD_3--Clause-blue.svg",        url: "https://opensource.org/licenses/BSD-3-Clause" }   ,
    CC0_1: {        segment: "CC0_1.0-lightgrey.svg",         url: "http://creativecommons.org/publicdomain/zero/1.0/" }   ,
    CC_4: {         segment: "CC_BY_4.0-lightgrey.svg",       url: "https://creativecommons.org/licenses/by/4.0/" }    ,
    CC_SA: {        segment: "CC_BY--SA_4.0-lightgrey.svg",   url: "https://creativecommons.org/licenses/by-sa/4.0/" }   ,
    CC_NC: {        segment: "CC_BY--NC_4.0-lightgrey.svg",   url: "https://creativecommons.org/licenses/by-nc/4.0/" }   ,
    CC_ND: {        segment: "CC_BY--ND_4.0-lightgrey.svg",   url: "https://creativecommons.org/licenses/by-nd/4.0/" }   ,
    EPL_1: {        segment: "EPL_1.0-red.svg",               url: "https://opensource.org/licenses/EPL-1.0" } ,
    GPLv3: {        segment: "GPLv3-blue.svg",                url: "https://www.gnu.org/licenses/gpl-3.0" } ,
    AGPL_v3: {      segment: "AGPL_v3-blue.svg",              url: "https://www.gnu.org/licenses/agpl-3.0" } ,
    LGPL_v3: {      segment: "LGPL_v3-blue.svg",              url: "https://www.gnu.org/licenses/lgpl-3.0" } ,
    FDL_v1: {       segment: "FDL_v1.3-blue.svg",             url: "https://www.gnu.org/licenses/fdl-1.3" }  ,
    Hippocratic_3: {segment: "Hippocratic_3.0-lightgrey.svg", url: "https://firstdonoharm.dev" } ,
    IPL_1: {        segment: "IPL_1.0-blue.svg",              url: "https://opensource.org/licenses/IPL-1.0" } ,
    ISC: {          segment: "ISC-blue.svg",                  url: "https://opensource.org/licenses/ISC" } ,
    MIT: {          segment: "MIT-yellow.svg",                url: "https://opensource.org/licenses/MIT" } ,
    MPL_2: {        segment: "MPL_2.0-brightgreen.svg",       url: "https://opensource.org/licenses/MPL-2.0" } ,
    ODC_BY: {       segment: "ODC_BY-brightgreen.svg",        url: "https://opendatacommons.org/licenses/by/" }  ,
    ODbL: {         segment: "ODbL-brightgreen.svg",          url: "https://opendatacommons.org/licenses/odbl/" } ,
    PDDL: {         segment: "PDDL-brightgreen.svg",          url: "https://opendatacommons.org/licenses/pddl/" } ,
    Perl: {         segment: "Perl-0298c3.svg",               url: "https://opensource.org/licenses/Artistic-2.0" } ,
    Artistic_2: {   segment: "Artistic_2.0-0298c3.svg",       url: "https://opensource.org/licenses/Artistic-2.0" } ,
    OFL_1: {        segment: "OFL_1.1-lightgreen.svg",        url: "https://opensource.org/licenses/OFL-1.1" } ,
    Unlicense: {    segment: "Unlicense-blue.svg",            url: "http://unlicense.org/" } ,
    WTFPL: {        segment: "WTFPL-brightgreen.svg",         url: "http://www.wtfpl.net/about/" }   ,
    Zlib: {         segment: "Zlib-lightgrey.svg",            url: "https://opensource.org/licenses/Zlib" }    ,
}


// creating fallbacks
let fallbacks = {
    project_name: 'My Project',
    github_username: 'Example123',
    email: 'Example123@gmail.com',
    description: 'This is a description \nLorem sed voluptua voluptua sit diam lorem, clita sadipscing et nonumy vero dolore eos sit et, takimata sanctus takimata et est aliquyam et. Sea et sed consetetur ea amet sit amet at sit, consetetur ut est et et takimata lorem.', 
    features: `\n- **Features 1:** Lorem sed voluptua voluptua sit diam lorem,. \n- **Features 2:** Lorem sed voluptua voluptua sit diam lorem,. \n- **Features 3:** Lorem sed voluptua voluptua sit diam lorem,`, 
    technologies: `Technologies used: \n- **HTML** \n- **css** \n- **Javascript**`, 
    installation_commands: 'git clone https://github.com/[github_username]/[project_name].git; cd [project_name]',
    installation: {
        templateType: 'code', 
        instructions: 'Follow these steps to get your development environment set up:', 
        code: `[installation_commands]`
    }, 
    usage_commands: 'npm run start',
    usage: {
        templateType: 'code', 
        instructions: 'Follow these steps to get your development environment set up:', 
        code: `[usage_commands]`
    }, 
    test_commands: 'npm run test',
    test_instructions: {
        templateType: 'code', 
        instructions: 'Follow these steps to get your development environment set up:', 
        code: '[test_commands]'
    }, 
    contribution: 'Contributions are welcome',
    acknowledgments: 'Thank you to all contributors',
    questions: `Please email me at [email] or contact me on [github_username]`,
    license: 'MIT',
}

//  ------------------------------------------------------------------------------------------------------------------------------
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
function renderLicenseSection(key, license) {
    if (!license || !license.length) { return '' }
    if(typeof license == "object" && license.value) {license = license.value}
    const link = renderLicenseLink(badges[license].url)
    const badge = renderLicenseBadge(badges[license].segment)
    return `## License  
    \n[![License](${badge})]${link}
    \nThis project is licensed under the ${license} License - see the [LICENSE]${link} for details.
    `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    data.test_commands = 'fdsaf;fdsf  ;fdsfsdf;f'
    
    // console.log(ln(), data)
    fallbacks = replacingPlaceHolders(fallbacks, fallbacks)

    data.author = fortmatInput(data.github_username, fallbacks.github_username),

    // formatting data and setting fallbacks
    settingFallbacks(data)

    // replacing [placeholders] with values
    data = replacingPlaceHolders(data, fallbacks)

    // console.log(ln(),data)

    // setting sections order
    const sections = [ 
        'description', 'table_of_content', 'features', 'technologies', 'getting_started', 
        'installation', 'usage', 'test_instructions', 'questions', 'author', 'contribution', 'acknowledgments', 'license',
    ]

    // createing table_of_content links
    createTableContent(data, sections)

    const templates = {
        description: (key, val) => {
            return `# ${data.project_name} 
            \n![screenshot](screenshot.png) 
            \n## Description
            \n${val} 
            \nApplication is live at: https://example.com `
        },

        table_of_content: (key, val)=> {
            const links = val.reduce((acc, cur)=> acc + `\n${cur}`,'')
            return `## Table of Content ${links}`
        },
        getting_started: (key, val) => `## Getting Started 
            \nThis section will guide you through setting up the project locally. By the end of this guide, you will have a working version of [Project Name] running on your machine.
            \n### Prerequisites
            \nBefore you begin, ensure you have the following installed:
            \n- [Node.js](https://nodejs.org/) (v14.0 or later)
            \n- [Git](https://git-scm.com/)
            \n- A text editor like [VSCode](https://code.visualstudio.com/)
        `,
        default: (key, val) => `## ${formatTitle(key)} \n${val}`,

        code: (key, val) => {
            const instructions = val.instructions || 'Follow these steps to get your development environment set up: \n1. Clone the repository:'
            const code = val.code || 'git clone'
            return`## ${formatTitle(key)} \n${instructions} \n\`\`\`bash ${formatCodeStr(code)} \n\`\`\` `
        },

        license: (key, val) => {
            if(val.split(' ')[0].toLowerCase().indexOf('no') > -1) return ''
            return renderLicenseSection(key, val)
        },
    }

    // creating markdown
    let markdown = {}
    sections.forEach( item => {
        markdown[item] = ''
        const value = data[item]
        
        if(Object.keys(templates).includes(item)) {
            markdown[item] += templates[item](item, value) + '\n\n\n'
            return
        }

        if(typeof value == 'object' && 'templateType' in value && value.templateType == 'code'){
            markdown[item] += templates['code'](item, value) + '\n\n\n'
            return
        }
        markdown[item] += templates['default'](item, value) + '\n\n\n'
    })

    return Object.values(markdown).join('')
}

function formatCodeStr(str){
    return str.split(';').reduce((acc, cur) => acc + '\n' + cur.trim(), '')
}

function replacingPlaceHolders(obj, fallback) {
    let objStr = JSON.stringify(obj, null, 2)
    const regex = /\[([^\[\]]+)\]/g
    objStr = objStr.replace(regex, (match, key) => {
        if(key.indexOf('command') > -1 && obj[key] == 'yes'){
            console.log(ln(), key, obj[key], fallback[key])
            return fallback[key]
        }
        return key in obj ? obj[key] : key
    })
    return JSON.parse(objStr)
}

function settingFallbacks(data) {
    return Object.entries(data).forEach(([key, val]) => {
        if (typeof val != 'string') return
        if(key.indexOf('command') > -1) return
        data[key] = fortmatInput(data[key], fallbacks[key])
    })
}

function createTableContent(data, sections) {
    // cheching if sections if an array
    if (!Array.isArray(sections)){
        console.error('sections must be an array')
        return
    }
    const table_of_content = []
    sections.forEach(key => {
        if (key == 'description') return
        if (key in data) {
            const link = `- [${formatTitle(key)}](#${key.replace('_', '-')})`
            table_of_content.push(link)
        }
    })
    data.table_of_content = table_of_content
}

function fortmatInput(val, falback){
    return (val == 'yes' || val == '') ? capFirst(falback) : capFirst(val)
}

function capFirst(str){
    if(!str || typeof str != 'string') return str
    return str[0].toUpperCase() + str.slice(1)
}

function c(str, color = 'g'){ 
    const colors = require('colors')
    const opt = { r: 'red', g: 'green', y: 'yellow', b: 'blue' }
    return colors[opt[color]](str) 
}

function ln() {
    const e = new Error()
    const frame = e.stack.split("\n")[2]
    const lineNumber = frame.match(/:(\d+):\d+\)?$/)[1]
    return c(`line ${lineNumber}`,'r')
}

function formatTitle(str){
    str = str.split('_')
    str = str.map(s=>s[0].toUpperCase() + s.slice(1))
    return str.join(' ')
}

module.exports = { generateMarkdown, badges, ln }
