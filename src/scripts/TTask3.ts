type TEmployee = {
  name: string;
  departament: string;
  workPeriod: number;
  salary: number;
  isWill: boolean;
};

const employees: TEmployee[] = [
  {
    "name": "John",
    "departament": "TECH",
    "workPeriod": 3,
    "salary": 400000,
    "isWill": false
  },
  {
    "name": "Alice",
    "departament": "DESIGN",
    "workPeriod": 1,
    "salary": 250000,
    "isWill": true
  },
  {
    "name": "Michael",
    "departament": "PROJECT",
    "workPeriod": 7,
    "salary": 800000,
    "isWill": false
  },
  {
    "name": "Emma",
    "departament": "TECH",
    "workPeriod": 2,
    "salary": 350000,
    "isWill": false
  }
];


export const sortedByExperience: TEmployee[] = employees.slice().sort((a, b) => b.workPeriod - a.workPeriod);

export const departmentWithLongestWorkPeriod: string = (() => {
  const departmentWorkPeriods: { [key: string]: number } = {};

  employees.forEach(employee => {
    const department = employee.departament;
    departmentWorkPeriods[department] = Math.max(departmentWorkPeriods[department] || 0, employee.workPeriod);
  });

  const maxWorkPeriod = Math.max(...Object.values(departmentWorkPeriods));
  return Object.keys(departmentWorkPeriods).find(department => departmentWorkPeriods[department] === maxWorkPeriod) || "";
})();

export const averageSalaryForResigned: number = (() => {
  const resignedEmployees: TEmployee[] = employees.filter(employee => employee.isWill);
  const totalSalary = resignedEmployees.reduce((sum, employee) => sum + employee.salary, 0);
  return resignedEmployees.length > 0 ? totalSalary / resignedEmployees.length : 0;
})();



