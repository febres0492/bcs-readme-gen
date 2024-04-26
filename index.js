// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const colors = require('colors')

// TODO: Create an array of questions for user input
const questions = [
    { type: 'input', message: 'What is your project name?', name: 'project_name', },
    { type: 'input', message: 'What is your GitHub username?', name: 'github_username', },
    { type: 'input', message: 'What is your email address?', name: 'email_address', },
    { type: 'input', message: 'Do you need a usage section?', name: 'usage', },
    { type: 'input', message: 'Do you need a license section?', name: 'license', },
    { type: 'input', message: 'Do you need a contribution section?', name: 'contribution', },
    { type: 'input', message: 'Do you need a features section?', name: 'features', },
    { type: 'input', message: 'Do you need a Technologies used section?', name: 'technologies', },
    { type: 'input', message: 'Do you need a Acknowledgments section?', name: 'acknowledgments', },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fs = require('fs')
    fileName = 'README.md' 
    let fileCreated = false
    let i = 0

    // checing if the file exists and updating the file name
    while(fileCreated === false && i < 10) {
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

    console.log('data:', data)

    fs.writeFile(`./output/${fileName}`, data, (err) => {
        if(err) { console.log(`Error: ${err}`) } 
        else {
            console.log(`created ${fileName} file.`);
            fileCreated = true
        }
    } )
}

// TODO: Create a function to initialize app
function init(input = '') {
    let defaultQuestions = questions

    let defaultValues = {}

    if (input === 'default') {
        console.log('Using default values for initialization.')
        defaultQuestions = [] 
        defaultValues = questions.reduce((acc, question) => {
            acc[question.name] = 'y' 
            if (question.name === 'project_name') acc[question.name] = 'My Project' 
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

