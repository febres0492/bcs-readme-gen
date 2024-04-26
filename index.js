// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const colors = require('colors')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    { type: 'input', message: 'What is your project name?',               name: 'project_name',    title: 'My Project' },
    { type: 'input', message: 'What is your GitHub username?',            name: 'github_username', title: 'github_username' },
    { type: 'input', message: 'What is your email address?',              name: 'email_address',   title: 'email_address' },
    { type: 'input', message: 'Do you need a usage section?',             name: 'usage',           title: 'Usage' },
    { type: 'input', message: 'Do you need a license section?',           name: 'license',         title: 'License' },
    { type: 'input', message: 'Do you need a contribution section?',      name: 'contribution',    title: 'Contribution' },
    { type: 'input', message: 'Do you need a features section?',          name: 'features',        title: 'Features' },
    { type: 'input', message: 'Do you need a Technologies used section?', name: 'technologies',    title: 'Technologies' },
    { type: 'input', message: 'Do you need a Acknowledgments section?',   name: 'acknowledgments', title: 'Acknowledgments' },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    data = JSON.parse(data)
    const fs = require('fs')
    fileName = 'README.md' 
    let fileCreated = false
    let i = 0

    // checing if the file exists and updating the file name
    while(fileCreated === false && i < 20) {
        try {
            let subfix = i === 0 ? '' : `_${i}`
            fileName = `README${subfix}.md`
            fs.accessSync(`./output/${fileName}`, fs.F_OK)
            console.log(colors.yellow(`File ${fileName} already exists.`))
        } catch (err) {
            console.log(colors.green(`'Creating file...', ${fileName}`))
            fileCreated = true
        }
        i++
    }

    let markdown = ''
    console.log('data', data)
    Object.entries(data).forEach(([key, value]) => {
        if (value === 'y'){
            const test = generateMarkdown(key)
            console.log('test', test)
            markdown += test + '\n'
        }
    })

    fs.writeFile(`./output/${fileName}`, markdown, (err) => {
        if(err) { console.log(`Error: ${err}`) } 
        else {
            console.log(`created ${fileName} file.`);
            fileCreated = true
        }
    })
}

// TODO: Create a function to initialize app
function init(input = '') {
    let defaultQuestions = questions

    let defaultValues = {}

    if (input === 'default') {
        defaultQuestions = [] 
        defaultValues = questions.reduce((acc, question) => {
            acc[question.name] = 'y' 
            return acc
        }, {})
    }

    inquirer.prompt(defaultQuestions)
    .then((res) => {
        let response = (input === 'default') ? defaultValues : res
        writeToFile('README.md', JSON.stringify(response, null, 2)) 
    })
}

// Function call to initialize app
const input = process.argv[2]
init(input)

