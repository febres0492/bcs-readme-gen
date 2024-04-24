// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const colors = require('colors');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fs = require('fs');
    fileName = 'README.md'; 
    let fileCreated = false;
    let i = 0;

    // checing if the file exists
    while(fileCreated === false && i < 10) {
        try {
            fs.accessSync(`./output/${fileName}`, fs.F_OK);
            console.log(`File ${fileName} exists.`);
            fileName = `README_${i}.md`;
        } catch (err) {
            console.error('Creating file...', fileName);
            fileCreated = true;
        }
        i++;
    }
    console.log('data:', data);

    data = JSON.stringify(data);

    fs.writeFile(`./output/${fileName}`, data, (err) => {
        if(err) { console.log(`Error: ${err}`); } 
        else {
            console.log(`created ${fileName} file.`);
            fileCreated = true;
        }
    } );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        // {
        //     type: 'input',
        //     message: 'What is your user name?',
        //     name: 'username',
        // },
        // {
        //     type: 'password',
        //     message: 'What is your password?',
        //     name: 'password',
        // },
        // {
        //     type: 'password',
        //     message: 'Re-enter password to confirm:',
        //     name: 'confirm',
        // },
    ])
    .then((response) => {
        // response.confirm === response.password ? console.log(colors.green('Success!')) : console.log(colors.red('You forgot your password already?!'))
        
        writeToFile('README.md', response);
    }
        

    );
}

// Function call to initialize app
init();



