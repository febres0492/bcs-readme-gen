// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const colors = require('colors');

// TODO: Create an array of questions for user input
// const questions = [
//     { type: 'input', message: 'What is your project title?', name: 'username', },
//     { type: 'input', message: 'What is your GitHub username?', github_username: 'username', },
//     { type: 'input', message: 'What is your email address?', email_address: 'username', },
//     { type: 'input', message: 'Do you need a usage section?', usage: 'username', },
//     { type: 'input', message: 'Do you need a license section?', license: 'username', },
//     { type: 'input', message: 'Do you need a contribution section?', contribution: 'username', },
//     { type: 'input', message: 'Do you need a features section?', features: 'username', },
//     { type: 'input', message: 'Do you need a Technologies used section?', Technologies: 'username', },
//     { type: 'input', message: 'Do you need a Acknowledgments section?', Acknowledgments: 'username', },
// ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fs = require('fs');
    fileName = 'README.md'; 
    let fileCreated = false;
    let i = 0;

    // checing if the file exists and updating the file name
    while(fileCreated === false && i < 10) {
        try {
            fs.accessSync(`./output/${fileName}`, fs.F_OK);
            console.log(`File ${fileName} exists.`);
            let prefix = i === 0 ? '' : `${i}_`;
            fileName = `${prefix}README.md`;
        } catch (err) {
            console.error('Creating file...', fileName);
            fileCreated = true;
        }
        i++;
    }

    console.log('data:', data);

    fs.writeFile(`./output/${fileName}`, data, (err) => {
        if(err) { console.log(`Error: ${err}`); } 
        else {
            console.log(`created ${fileName} file.`);
            fileCreated = true;
        }
    } );
}

// TODO: Create a function to initialize app
const questions = [
    { type: 'input', message: 'What is your project title?', name: 'username', },
    { type: 'input', message: 'What is your GitHub username?', name: 'github_username'  },
    { type: 'input', message: 'What is your email address?', name: 'email_address'  },
    { type: 'input', message: 'Do you need a usage section?', name: 'usage'  },
    { type: 'input', message: 'Do you need a license section?', name: 'license'  },
    { type: 'input', message: 'Do you need a contribution section?', name: 'contribution'  },
    { type: 'input', message: 'Do you need a features section?', name: 'features'  },
    { type: 'input', message: 'Do you need a Technologies used section?', name: 'technologies'  },
    { type: 'input', message: 'Do you need a Acknowledgments section?', name: 'acknowledgments'  },
];
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response)
        response.confirm === response.password ? console.log(colors.green('Success!')) : console.log(colors.red('You forgot your password already?!'))
        writeToFile('README.md', JSON.stringify(response));
    });
}

// Function call to initialize app
init();



