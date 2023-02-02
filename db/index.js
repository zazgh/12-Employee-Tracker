const inquirer = require("inquirer");
const mysql = require("mysql2");
//const db = require("./connections");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employees_db",
});

function selectOption() {
  inquirer
    .prompt([
      {
        name: "select",
        type: "list",
        message: "select option",
        choices: [
          "view department",
          "view role",
          "view employee",
          "add department",
          "add role",
          "add employee",
          "finish",
        ],
        validate: null,
      },
    ])
    .then((ans) => {
      switch (ans.select) {
        case "view department":
          viewDepartment();
          break;

        case "view role":
          viewRole();
          break;

        case "view employee":
          viewEmployee();
          break;

        case "add department":
          addDepartment();
          break;

        case "add role":
          addRole();
          break;

        case "add employee":
          addEmployee();
          break;

        default:
          console.log("bye!");
          
          break;
      }
    });
}


function viewDepartment() {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    selectOption();
  });
}

function viewRole() {
  db.query(`SELECT * FROM role`, (err, results) => {
    if (err) {
      throw err;
    } else {
      console.table(results);
      selectOption();
    }
  });
}

function viewEmployee() {
  db.query(`SELECT * FROM employee`, (err, results) => {
    if (err) {
      throw err;
    } else {
      console.table(results);
      selectOption();
    }
  });
}

//when select to add

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "add department",
      },
    ])
    .then(function (ans) {
      db.query(
        `INSERT INTO department (name) VALUES ('${ans.department}')`,
        (err, res) => {
          if (err) throw err;
          console.table("added department" + ans.department);
          selectOption();
        }
      );
    });
}

//when select add role
function addRole() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "add role",
      },
      {
        name: "salary",
        type: "input",
        message: "add salary",
      },
      {
        name: "department_id",
        type: "input",
        message: "add department_id",
      },
    ])
    .then(function (ans) {
      db.query(
        `INSERT INTO role (title, salary, department_id) VALUES ('${ans.title}', '${ans.salary}', ${ans.department_id})`,
        (err, res) => {
          if (err) throw err;
          console.table("added role" + ans.title);
          selectOption();
        }
      );
    });
}

//when select add employee
function addEmployee() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "employee first name",
      },
      {
        name: "last_name",
        type: "input",
        message: "employee last name",
      },
      {
        name: "role_id",
        type: "input",
        message: "add role_id",
      },
    ])
    .then(function (ans) {
      db.query(
        `INSERT INTO employee (first_name, last_name, role_id) VALUES ('${ans.first_name}', '${ans.last_name}', ${ans.role_id})`,
        (err, res) => {
          if (err) throw err;
          console.table("added employee" + ans.first_name + ans.last_name);
          selectOption();
        }
      );
    });
}

selectOption();
