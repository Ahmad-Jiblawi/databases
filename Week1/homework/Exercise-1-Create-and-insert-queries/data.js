const employees = [
  { emp_no: 1, emp_name: 'John', salary: 2300, reports_to: 07 },
  { emp_no: 2, emp_name: 'Sam', salary: 2600, reports_to: 06 },
  { emp_no: 3, emp_name: 'Marco', salary: 3000, reports_to: 10 },
  { emp_no: 4, emp_name: 'Nicole', salary: 3200, reports_to: 08 },
  { emp_no: 5, emp_name: 'Hans', salary: 2900, reports_to: 02 },
  { emp_no: 6, emp_name: 'Mandy', salary: 2700, reports_to: 03 },
  { emp_no: 7, emp_name: 'Cris', salary: 3500, reports_to: 05 },
  { emp_no: 8, emp_name: 'Robin', salary: 3900, reports_to: 04 },
  { emp_no: 9, emp_name: 'Edward', salary: 2000, reports_to: 01 },
  { emp_no: 10, emp_name: 'Gerard', salary: 2000, reports_to: 06 }
];
const departments = [
  { dept_no: 100, dept_name: 'Accounting', manager: 01 },
  { dept_no: 101, dept_name: 'Administration', manager: 02 },
  { dept_no: 102, dept_name: 'Customer Service', manager: 03 },
  { dept_no: 103, dept_name: 'Dispatch', manager: 04 },
  { dept_no: 104, dept_name: 'Finance', manager: 05 },
  { dept_no: 105, dept_name: 'Human Resources', manager: 06 },
  { dept_no: 106, dept_name: 'I.T', manager: 07 },
  { dept_no: 107, dept_name: 'Marketing and Advertising', manager: 08 },
  { dept_no: 108, dept_name: 'Maintenance', manager: 09 },
  { dept_no: 109, dept_name: 'Production', manager: 10 },

];
const projects = [
  { proj_no: 'Pro01', proj_name: 'HTML', starting_date: '2019-12-22', ending_date: '2020-02-22' },
  { proj_no: 'Pro01', proj_name: 'CSS', starting_date: '2020-01-12', ending_date: '2020-04-22' },
  { proj_no: 'Pro01', proj_name: 'JavaScript1', starting_date: '2020-2-22', ending_date: '2020-06-22' },
  { proj_no: 'Pro02', proj_name: 'NodeJS', starting_date: '2020-03-12', ending_date: '2020-05-22' },
  { proj_no: 'Pro02', proj_name: 'SQL', starting_date: '2020-04-22', ending_date: '2020-06-22' },
  { proj_no: 'Pro02', proj_name: 'React', starting_date: '2020-07-22', ending_date: '2020-09-22' },
  { proj_no: 'Prp03', proj_name: 'Angular', starting_date: '2019-08-22', ending_date: '2020-02-22' },
  { proj_no: 'Prp03', proj_name: 'GIT', starting_date: '2019-09-22', ending_date: '2020-03-22' },
  { proj_no: 'Pro03', proj_name: 'JavaScript2', starting_date: '2020-01-12', ending_date: '2020-04-22' },
  { proj_no: 'Pro03', proj_name: 'JavaScript3', starting_date: '2020-02-22', ending_date: '2020-05-22' },
];
module.exports = {
  employees,
  departments,
  projects
};
