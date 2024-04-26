// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const colors = require('colors')
const { generateMarkdown, badges, ln } = require('./utils/generateMarkdown')

// function to give text color
function c(str, color = 'g'){ 
    const opt = { r: 'red', g: 'green', y: 'yellow', b: 'blue' }
    return colors[opt[color]](str) 
}

// TODO: Create an array of questions for user input
const questions = [
    { name: 'project_name'    , type: 'input', message: `What is your ${c('Project name')}?`              , title: 'My Project' }      , 
    { name: 'github_username' , type: 'input', message: `What is your ${c('GitHub')} username?`           , title: 'github_username' } , 
    { name: 'email_address'   , type: 'input', message: `What is your ${c('Email')} address?`             , title: 'email_address' }   , 
    { name: 'usage'           , type: 'list' , message: `Do you need a ${c('Usage')} section?`            , title: 'Usage'             , choices: ['yes', 'no']}  ,
    { name: 'contribution'    , type: 'list' , message: `Do you need a ${c('Contribution')} section?`     , title: 'Contribution'      , choices: ['yes', 'no'] } ,
    { name: 'features'        , type: 'list' , message: `Do you need a ${c('Features')} section?`         , title: 'Features'          , choices: ['yes', 'no'] } ,
    { name: 'technologies'    , type: 'list' , message: `Do you need a ${c('Technologies')} used section?`, title: 'Technologies'      , choices: ['yes', 'no'] } ,
    { name: 'acknowledgments' , type: 'list' , message: `Do you need a ${c('Acknowledgments')} section?`  , title: 'Acknowledgments'   , choices: ['yes', 'no'] } ,
    { type: 'list' , message: c('License type:'), name: 'license', title: 'License' , choices: [c("No License Section -----",'y'), ...badges.map(badge => badge.name)] },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    data = JSON.parse(data)
    const fs = require('fs')
    fileName = 'README.md' 
    let fileCreated = false
    let i = -1
    let fileAmountLimit = 100

    // checing if the file exists and updating the file name
    while(fileCreated === false && i < fileAmountLimit) {
        if(i === fileAmountLimit) { console.log(c('File limit reached. clear the output folder to create more files','r')); break }
        try {
            let subfix = `_${i}`
            fileName = i === -1 ? 'README.md' : `README${subfix}.md`
            fs.accessSync(`./output/${fileName}`, fs.F_OK)
            
        } catch (err) {
            console.log(ln(),i)

            if(i === 0) { console.log(c(`File README.md already exists:`), ) }
            if(i === 1) { console.log(c(`Files README.md and REAME_0.md already exists:`), ) }
            if(i > 1) { console.log(c(`File REAME_0 to _${i-1} already exists:`), ) }

            console.log(ln(),c(`Creating file ${fileName}`, 'y'))
            fileCreated = true
        }
        i++
    }

    // generating markdown
    let markdown = ''
    Object.entries(data).forEach(([key, value]) => {
        console.log(ln(),key, value)

        // if (value === 'yes'){ markdown += generateMarkdown(key) + '\n' }
    })

    // writing to file
    fs.writeFile(`./output/${fileName}`, markdown, (err) => {
        if(err) { console.log(`Error: ${err}`) } 
        else {
            console.log(`created ${fileName} file.`);
            fileCreated = true
        }
    })
}

// TODO: Create a function to initialize app
async function init(input = '') {
    let defaultQuestions = questions
    let defaultValues = {}
    let mode = ''

    // inquiring file creation mode
    await inquirer.prompt([
        {   type: "list",
            message: "Default or Personalized mode?",
            name: "mode",
            choices: ["Default", "Personalized"], 
        }
    ])
    .then((response) => mode = response.mode )

    // skipping questions if in default mode
    if (mode === 'Default') {
        defaultQuestions = [] 
        defaultValues = questions.reduce((acc, question) => {
            acc[question.name] = 'yes' 
            return acc
        }, {})
        console.log(ln(),'mode', mode)
    }

    // inquiring to create file
    inquirer.prompt(defaultQuestions)
    .then((res) => {
        let response = (mode === 'Default') ? defaultValues : res
        console.log(ln(),'response', response)
        writeToFile('README.md', JSON.stringify(response, null, 2)) 
    })
}

// Function call to initialize app
const input = process.argv[2]
init(input)


