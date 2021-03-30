const inquirer = require('inquirer');


const promptManager = () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'What is the name of the team manager?',
      validate: managerInput => {
        if (managerInput) {
          return true;
        } else {
          console.log("Please enter the team manager's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerID',
      message: "What is the manager's employee ID?",
      validate: managerIDInput => {
        if (managerIDInput) {
          return true;
        } else {
          console.log('Please enter employee ID!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "What is the manager's employee email address?",
      validate: managerEmailInput => {
        if (managerEmailInput) {
          return true;
        } else {
          console.log("Please enter manager's email address!")
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "What is the manager's employee email address?",
      validate: managerEmailInput => {
        if (managerEmailInput) {
          return true;
        } else {
          console.log("Please enter manager's email address!")
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerOffice',
      message: "What is the manager's office number?",
      validate: managerOfficeInput => {
        if (managerOfficeInput) {
          return true;
        } else {
          console.log("Please enter the manager's office number!")
          return false;
        }
      }
    },
]);
};
