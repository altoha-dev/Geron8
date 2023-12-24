type Tparams = {
    width:number
    height:number
    weight:number
}
type Tdetails = {
    title:string,
    params:Tparams
}
type fullInfo = {
    name:string
    details:Tdetails[]
    mainEngineer:string
    deadline:string
}
type Tdepartment = {
    tech:fullInfo[]
    turbo:fullInfo[]
    chemical:fullInfo[]
}
 const department:Tdepartment = {
    "tech": [
      {
        "name": "Проект Автоматизации",
        "details": [
          {
            "title": "Шасси",
            "params": { "width": 45, "height": 20, "weight": 70 }
          },
          {
            "title": "Двигатель",
            "params": { "width": 35, "height": 35, "weight": 120 }
          },
          {
            "title": "Экран",
            "params": { "width": 25, "height": 15, "weight": 20 }
          },
          {
            "title": "Кабель",
            "params": { "width": 5, "height": 1000, "weight": 30 }
          },
          {
            "title": "Корпус",
            "params": { "width": 60, "height": 40, "weight": 200 }
          }
        ],
        "mainEngineer": "Иван Иванов",
        "deadline": "2023-12-15"
      },
      {
        "name": "Система Охлаждения",
        "details": [
          {
            "title": "Трубы",
            "params": { "width": 10, "height": 200, "weight": 50 }
          },
          {
            "title": "Компрессор",
            "params": { "width": 40, "height": 40, "weight": 110 }
          },
          {
            "title": "Радиатор",
            "params": { "width": 50, "height": 30, "weight": 75 }
          },
          {
            "title": "Вентилятор",
            "params": { "width": 20, "height": 20, "weight": 25 }
          },
          {
            "title": "Фильтр",
            "params": { "width": 15, "height": 15, "weight": 10 }
          }
        ],
        "mainEngineer": "Петр Петров",
        "deadline": "2023-10-20"
      }
    ],
    "turbo": [
      {
        "name": "Турбина A-100",
        "details": [
          {
            "title": "Лопатки",
            "params": { "width": 5, "height": 30, "weight": 20 }
          },
          {
            "title": "Вал",
            "params": { "width": 10, "height": 200, "weight": 100 }
          },
          {
            "title": "Кожух",
            "params": { "width": 100, "height": 100, "weight": 400 }
          },
          {
            "title": "Подшипник",
            "params": { "width": 15, "height": 15, "weight": 10 }
          },
          {
            "title": "Система смазки",
            "params": { "width": 30, "height": 30, "weight": 70 }
          }
        ],
        "mainEngineer": "Сергей Сергеев",
        "deadline": "2024-02-28"
      },
      {
        "name": "Турбогенератор B-200",
        "details": [
          {
            "title": "Ротор",
            "params": { "width": 40, "height": 100, "weight": 300 }
          },
          {
            "title": "Статор",
            "params": { "width": 50, "height": 110, "weight": 320 }
          },
          {
            "title": "Соединительная часть",
            "params": { "width": 20, "height": 30, "weight": 50 }
          },
          {
            "title": "Панель управления",
            "params": { "width": 60, "height": 40, "weight": 90 }
          },
          {
            "title": "Кабельное соединение",
            "params": { "width": 10, "height": 500, "weight": 100 }
          }
        ],
        "mainEngineer": "Андрей Андреев",
        "deadline": "2023-11-15"
      }
    ],
    "chemical": [
      {
        "name": "Синтез органических соединений",
        "details": [
          {
            "title": "Реактор",
            "params": { "width": 100, "height": 200, "weight": 600 }
          },
          {
            "title": "Фильтр",
            "params": { "width": 30, "height": 30, "weight": 40 }
          },
          {
            "title": "Колонна дистилляции",
            "params": { "width": 80, "height": 300, "weight": 800 }
          },
          {
            "title": "Хранилище",
            "params": { "width": 150, "height": 150, "weight": 1000 }
          },
          {
            "title": "Система насосов",
            "params": { "width": 40, "height": 40, "weight": 120 }
          }
        ],
        "mainEngineer": "Екатерина Смирнова",
        "deadline": "2023-09-30"
      },
      {
        "name": "Производство удобрений",
        "details": [
          {
            "title": "Бункер",
            "params": { "width": 200, "height": 200, "weight": 1500 }
          },
          {
            "title": "Мешалка",
            "params": { "width": 50, "height": 50, "weight": 200 }
          },
          {
            "title": "Лента конвейера",
            "params": { "width": 100, "height": 1000, "weight": 400 }
          },
          {
            "title": "Система сушки",
            "params": { "width": 100, "height": 100, "weight": 500 }
          },
          {
            "title": "Пакетировочная машина",
            "params": { "width": 60, "height": 60, "weight": 300 }
          }
        ],
        "mainEngineer": "Ольга Олеговна",
        "deadline": "2023-07-15"
      }
    ]
  }
  export const calculateDetailCost = (params: Tparams): number => {
    return (params.width * params.height) / params.weight * 150;
  };
  
  // Функция для расчета бюджета проекта
 export const calculateProjectBudget = (project: fullInfo): number => {
    let projectBudget = 0;
  
    project.details.forEach((detail) => {
      const detailCost = calculateDetailCost(detail.params);
      console.log(`${project.name}\n${detail.title} - ${detailCost}`);
      projectBudget += detailCost;
    });
  
    console.log(`Общий бюджет на проект: ${projectBudget}`);
    console.log("------------");
  
    return projectBudget;
  };
  // Функция для расчета бюджета отдела
export const calculateDepartmentBudget = (department: fullInfo[]): number => {
    let departmentBudget = 0;
  
    department.forEach((project) => {
      departmentBudget += calculateProjectBudget(project);
    });
  
    return departmentBudget;
  };
  
  // Вывод результатов в консоль
  console.log("tech - Технический");
   export const techBudget = calculateDepartmentBudget(department.tech);
  console.log(`Бюджет на отдел tech: ${techBudget}`);
  console.log("------------");
  
  console.log("turbo - Турбинный цех");
  export const turboBudget = calculateDepartmentBudget(department.turbo);
  console.log(`Бюджет на отдел turbo: ${turboBudget}`);
  console.log("------------");
  
  console.log("chemical - Химические");
  export const chemicalBudget = calculateDepartmentBudget(department.chemical);
  console.log(`Бюджет на отдел chemical: ${chemicalBudget}`);
  console.log("------------");
  
  // Вывод финальных результатов
  console.log("Финальные результаты:");
  console.log(`tech - Технический: ${techBudget}`);
  console.log(`turbo - Турбинный цех: ${turboBudget}`);
  console.log(`chemical - Химические: ${chemicalBudget}`);