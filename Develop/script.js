// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employees = [];

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let addEmployee = true;

  while (addEmployee) {
    const employee = {};
    employee.firstName = prompt("Enter employee's first name.");
    employee.lastName = prompt("Enter  employee's last name.")
    employee.salary = parseInt(prompt("Enter employee's salary."));


    if (isNaN(employee.salary)) {
      employee.salary = 0;
    }

    employees.push(employee)
    addEmployee = confirm("Would you like to add another employee?")
  }

  return employees
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let salarySum = 0;

  for (employee of employeesArray) {
    salarySum += employee.salary;
  }

  return `The average employee salary between our ${employees.length} employee(s) is $${salarySum / employeesArray.length}.`
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomEmployee = employees[Math.floor(Math.random() * employees.length)]
  return `Congratulations ${randomEmployee.firstName} ${randomEmployee.lastName}, you are out random drawing winner!`
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  console.log(displayAverageSalary(employees));

  console.log('==============================');

  console.log(getRandomEmployee(employees));

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
