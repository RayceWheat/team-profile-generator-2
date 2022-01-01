const generateManager = function (manager) {
    return `
    <div>
        <h3>${manager.name}</h3>
        <h4>Manager</h4>
        <p>ID: ${manager.id}</p>
        <p>Email: <a href="mailto:${manager.email}>${manager.email}</a></p>
        <p>Officer number: ${manager.officeNumber}</p>
    </div>
    `
}

const generateEngineer = function (engineer) {
    return `
    <div>
        <h3>${engineer.name}</h3>
        <h4>Engineer</h4>
        <p>ID: ${engineer.id}</p>
        <p>Email: <a href="mailto:${engineer.email}>${engineer.email}</a></p>
        <p>Github: ${engineer.github}</p>
    </div>
    `
}

const generateIntern = function (intern) {
    return `
    <div>
        <h3>${intern.name}</h3>
        <h4>Intern</h4>
        <p>ID: ${intern.id}</p>
        <p>Email: <a href="mailto:${intern.email}>${intern.email}</a></p>
        <p>School: ${intern.school}</p>
    </div>
    `
}

const generatePage = function(employeesData) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
    </head>
    <body>
        <header>
            <div>
                <h1>My Team</title>
            </div>
        </header>
        <main>
            <div class="employee-container">
                <div>
                ${employeesData}
                </div>
            </div>
        </main>
    </body>
    </html>
    `;
}

generateHtml = (data) => {
    
    employeeArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerSection = generateManager(employee);

            employeeArray.push(managerSection);
        }

        if (role === 'Engineer') {
            const engineerSection = generateEngineer(employee);

            employeeArray.push(engineerSection);
        }

        if (role === 'Intern') {
            const internSection = generateIntern(employee);

            employeeArray.push(internSection);
        }
    }

    const employeeSections = employeeArray.join('');

    const generateTeam = generatePage(employeeSections);
    return generateTeam;
}

module.exports = generateHtml;