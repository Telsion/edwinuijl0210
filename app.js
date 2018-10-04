// opdracht 1

/*
    First, the lapRounds array is rewritten into an object, all given a number key.
    Then the for loop is created to cycle through the keys to return the values.
*/

const lapRounds =  {
        [0]: 55.99,
        [1]: 63.00,
        [2]: 63.01,
        [3]: 54.01,
        [4]: 62.79,
        [4]: 52.88,
        [5]: 53.10,
        [6]: 54.12
    }

function lapTimeFunction() {
    for (let index = 0; index < 7; index++) {
        console.log(`Today's lap time is ${lapRounds[index]} seconds.`);
    }
}
lapTimeFunction();

// opdracht 2

/* 
    First, the array is created, and then a for loop which cycles through all the values of the array. 
    The [i] behind teachers is necessary to give this revolting machine a pointer which array entry he needs to use.
*/

const teachers = [
    {
        name: "Loek",
        profession: "teacher",
        brand: "Linux"
    },
    {
        name: "Daan",
        profession: "teacher",
        brand: "Arduino"
    },
    {
        name: "Rimmert",
        profession: "teacher",
        brand: "Apple"
    }
]

for (let i = 0; i < teachers.length; i++) {
    console.log(`I have a ${teachers[i].profession} named ${teachers[i].name} and he likes to work on a ${teachers[i].brand} computer.`);
} 

// opdracht 3



let teacherSellout = [
    {
        name: "Loek",
        profession: "teacher",
        brand: "Linux",
        hoursPerWeek: 45,
        salary: 6075,
        salaryPerHour: function() {
            return this.salary / this.hoursPerWeek
        }
    },
    {
        name: "Daan",
        profession: "teacher",
        brand: "Arduino",
        hoursPerWeek: 5,
        salary: 8500,
        salaryPerHour: function() {
            return this.salary / this.hoursPerWeek
        }
    },
    {
        name: "Rimmert",
        profession: "teacher",
        brand: "Apple",
        hoursPerWeek: 39,
        salary: 390,
        salaryPerHour: function() {
            return this.salary / this.hoursPerWeek
        }
    }
]

for (let j = 0; j < teacherSellout.length; j++) {
    console.log(`I have a ${teacherSellout[j].profession} named ${teacherSellout[j].name}, who likes to torture a ${teacherSellout[j].brand} computer. 
    Furthermore, ${teacherSellout[j].name} earns a total of €${teacherSellout[j].salary} while working ${teacherSellout[j].hoursPerWeek} hours, earning a total of
    €${teacherSellout[j].salaryPerHour()} per hour.`);
}