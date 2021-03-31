const inquirer = require('inquirer');
const Employee = require('./lib/Employee');


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
          console.log('Please enter the employee ID!')
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
          console.log("Please enter the manager's email address!")
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

const promptTeam = teamData => {
    if (!teamData.employees) {
        teamData.employees = []
    }
    return inquirer.prompt({
          type: 'list',
          name: 'employeeChoice',
          message: 'What type of employee would you like to add?',
          choices: ['Engineer', 'Intern', "I'm finished building my team!"]
    })
    .then(({ employeeChoice }) => {
        if (employeeChoice === 'Engineer') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'engineerName',
                    message: "What is the engineer's name?",
                    validate: engineerNameInput => {
                      if (engineerNameInput) {
                        return true;
                      } else {
                        console.log("Please enter the engineer's name!")
                        return false;
                      }
                    }  
                },
                {
                    type: 'input',
                    name: 'engineerID',
                    message: "What is the engineer's employee ID?",
                    validate: engineerIDInput => {
                      if (engineerIDInput) {
                        return true;
                      } else {
                        console.log('Please enter the employee ID!')
                        return false;
                      }
                    }  
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: "What is the engineer's email address?",
                    validate: engineerEmailInput => {
                      if (engineerEmailInput) {
                        return true;
                      } else {
                        console.log('Please enter the engineer email address!')
                        return false;
                      }
                    }  
                },
                {
                    type: 'input',
                    name: 'engineerGitHub',
                    message: "What is the engineer's GitHub username?",
                    validate: engineerGitHubInput => {
                      if (engineerGitHubInput) {
                        return true;
                      } else {
                        console.log('Please enter the engineer GitHub username!')
                        return false;
                      }
                    }  
                }
            ])
            .then(employeeData => {
                teamData.employees.push(employeeData);
                return promptTeam(teamData)
            });
        }
        if (employeeChoice === 'Intern') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'internName',
                    message: "What is the intern's name?",
                    validate: internNameInput => {
                      if (internNameInput) {
                        return true;
                      } else {
                        console.log("Please enter the intern's name!")
                        return false;
                      }
                    }  
                },
                {
                    type: 'input',
                    name: 'internID',
                    message: "What is the intern's ID?",
                    validate: internIDInput => {
                      if (internIDInput) {
                        return true;
                      } else {
                        console.log('Please enter the intern ID!')
                        return false;
                      }
                    }  
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: "What is the intern's email address?",
                    validate: internEmailInput => {
                      if (internEmailInput) {
                        return true;
                      } else {
                        console.log('Please enter the intern email address!')
                        return false;
                      }
                    }  
                },
                {
                    type: 'input',
                    name: 'internSchool',
                    message: "What is the intern's school name?",
                    validate: internSchoolInput => {
                      if (internSchoolInput) {
                        return true;
                      } else {
                        console.log('Please enter the intern school name!')
                        return false;
                      }
                    }  
                }
            ])
            .then(employeeData => {
                teamData.employees.push(employeeData);
                return promptTeam(teamData)
            });
        }
        if (employeeChoice === "I'm finished building my team!") {

            return teamData;
        }

    })
};
promptManager()
.then(promptTeam)
.then(teamData => {
    console.log(teamData);
})

