const generateEngineer = employeeArr => {
    return `
    ${employeeArr
      .map(({ engineerName, engineerID, engineerEmail, engineerGitHub }) => {
    return`
    <div class="col-3 m-2">
      <div class="card" style="width: 18rem;">
        <div class="card-header bg-warning">
          <h3>${engineerName}</h3>
          <h5>Engineer</h5>
        </div>
        <ul class="list-group px-1 pb-1">
          <li class="list-group-item mb-1">ID: ${engineerID}</li>
          <li class="list-group-item mb-1">Email: <a href="mailto:${engineerEmail}">${engineerEmail}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineerGitHub}">${engineerGitHub}</a></li>
        </ul>
      </div>
    </div>
    `;
})
.join('')}
`
};

const generateIntern = employeeArr => {
  return `
  ${employeeArr
    .map(({ internName, internID, internEmail, internSchool }) => {
  return`
  <div class="col-3 m-2">
    <div class="card" style="width: 18rem;">
      <div class="card-header bg-warning">
        <h3>${internName}</h3>
        <h5>Intern</h5>
      </div>
      <ul class="list-group px-1 pb-1">
        <li class="list-group-item mb-1">ID: ${internID}</li>
        <li class="list-group-item mb-1">Email: <a href="mailto:${internEmail}">${internEmail}</a></li>
        <li class="list-group-item">School: ${internSchool}</li>
      </ul>
    </div>
  </div>
  `;
})
.join('')}
`
}



module.exports = templateData => {
const { engineers, interns, ...manInfo } = templateData;
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <title>The Team</title>
</head>
<body>
    <h1 class="main-header text-light bg-primary text-center py-2">The Team</h1>

    <div class="col-9 mx-auto mt-5">
        <div class="row justify-content-center">
          <div class="col-3 m-2">
            <div class="card" style="width: 18rem;">
                <div class="card-header bg-warning">
                  <h3>${manInfo.managerName}</h3>
                  <h5>Manager</h5>
                </div>
                <ul class="list-group px-1 pb-1">
                  <li class="list-group-item mb-1">ID: ${manInfo.managerID}</li>
                  <li class="list-group-item mb-1">Email: <a href="mailto:${manInfo.managerEmail}">${manInfo.managerEmail}</a></li>
                  <li class="list-group-item">Office number: ${manInfo.managerOffice}</li>
                </ul>
              </div>
          </div>
          ${generateEngineer(engineers)}
          ${generateIntern(interns)}
        </div>  
    </div>
</body>
</html>          
  `;
};
