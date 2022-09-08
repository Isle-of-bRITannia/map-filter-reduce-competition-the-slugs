// TASK
// Add explicit types to the gradeData and weatherData 
// variables, and fill in Student and Measurement

type Student = {
    name: string,
    grade: number,
    year: 1 | 2 | 3 | 4 | 5 | '>5'
};

const gradeData: Student[] = [
    {name: 'Zardul', grade: 96, year: 4}, 
    {name: 'Astoroth', grade: 80, year: 4},
    {name: 'Zenzi', grade: 91, year: 3},
    {name: 'Ancaladar', grade: 87, year: 5},
    {name: 'Kyoko', grade: 78, year: 4},
    {name: 'Travis', grade: 59, year: 3},
];


type Measurement =  {
    name: string,
    date: `${number}-${number}-${number}`,
    // or simply
    // date: string,
    snowfall: number
};

const weatherData: Measurement[] = [
    {name: "RIT", date: "2019-03-14", snowfall: 13},
    {name: "UofR", date: "2019-03-14", snowfall: 10},
    {name: "RIT", date: "2019-03-16", snowfall: 12},
    {name: "UofR", date: "2019-03-16", snowfall: 20},
    {name: "RIT", date: "2019-03-18", snowfall: 22},
    {name: "UofR", date: "2019-03-18", snowfall: 3},
];

export {
    Student, Measurement,
    gradeData, weatherData
};