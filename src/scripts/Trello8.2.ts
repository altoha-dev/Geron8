type TEmployee = {
    name: string;
    departament: string;
    experience: number;
    isClosedProjects: boolean;
    salary: number;
  };
  type Tdepartment = {}
  const employees: TEmployee[] = [
    {
      "name": "John",
      "departament": "TECH",
      "experience": 3,
      "isClosedProjects": true,
      "salary": 400000
    },
    {
      "name": "Alice",
      "departament": "DESIGN",
      "experience": 1,
      "isClosedProjects": false,
      "salary": 250000
    },
    {
      "name": "Michael",
      "departament": "PROJECT",
      "experience": 7,
      "isClosedProjects": true,
      "salary": 800000
    },

  ];
  
 
 
  export const maxExperienceDepartment: string = (() => {
      const departmentCount: { [key: string]: number } = {};
  
      employees.forEach(employee => {
          if (employee.experience >= 3) {
              const department = employee.departament;
              departmentCount[department] = (departmentCount[department] || 0) + 1;
          }
      });
  
      return Object.keys(departmentCount).reduce((a, b) => (departmentCount[a] > departmentCount[b] ? a : b));
  })();
 
  
  
  export const closedProjectsEmployees: TEmployee[] = employees.filter(employee => employee.isClosedProjects);
  export const departmentWithMaxAverageSalary: string = (() => {
      const departmentTotalSalary: { [key: string]: number } = {};
      const departmentEmployeeCount: { [key: string]: number } = {};
  
      employees.forEach(employee => {
          const department = employee.departament;
          departmentTotalSalary[department] = (departmentTotalSalary[department] || 0) + employee.salary;
          departmentEmployeeCount[department] = (departmentEmployeeCount[department] || 0) + 1;
      });
  
      return Object.keys(departmentTotalSalary).reduce((a, b) => (
          departmentTotalSalary[a] / departmentEmployeeCount[a] > departmentTotalSalary[b] / departmentEmployeeCount[b] ? a : b
      ));
  })();

  
  