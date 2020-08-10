const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

const months = [
    {name: 'January', days: 31},
    {name: 'February', days: [28,29]},
    {name: 'March', days: 31},
    {name: 'April', days: 30},
    {name: 'May', days: 31},
    {name: 'June', days: 30},
    {name: 'July', days: 31},
    {name: 'August', days: 31},
    {name: 'September', days: 30},
    {name: 'October', days: 31},
    {name: 'November', days: 30},
    {name: 'December', days: 31} 
]

let today = {}

let createDayList = (startingDay) => {
    let dayList = []
    let remainingDays = 0
    for(let i=startingDay;i<7;i++){
        dayList.push(days[i])
    }
    remainingDays = 7 - dayList.length
    if(remainingDays > 0){
        for(let i=0;i<remainingDays;i++){
            dayList.push(days[i])
        }
    }
    return dayList
}

export var getDate = () => {
    let date = new Date()
    today = {
        date: date.getDate(),
        day: days[date.getDay()],
        month: months[date.getMonth()],
        monthNum: date.getMonth(),
        year: date.getFullYear(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    }
    return today
}

export var createMonth = (year,month) => {
    // get date for first day of the month
    let firstDate = new Date(year, month, 1)
    let firstDay = firstDate.getDay()
    let dayList = createDayList(firstDay)
    // Day Class
    class Day {
        constructor(month,day,date,year) {
            this.month = month;
            this.day = day;
            this.date = date;
            this.year = year
        }
    }
    // create an array for the days within the month
    let daysInMonth = []
    let dayCounter = 0

    // check for february and then determine leap year
    if(month === 1){
        let leapYearAmount = 0
        if(year % 4 === 0){
            leapYearAmount = 1
        } else {
            leapYearAmount = 0
        }
        for(let i=0;i<months[month].days[leapYearAmount];i++){
            if(i % 7 === 0){
                dayCounter = 0
            }
            daysInMonth[i] = new Day(months[month].name,dayList[dayCounter],i + 1,year)
            dayCounter++
        }
    } else {
        for(let i=0;i<months[month].days;i++){
            if(i % 7 === 0){
                dayCounter = 0
            }
            daysInMonth[i] = new Day(months[month].name,dayList[dayCounter],i + 1,year)
            dayCounter++
        }
    }
    // add blank days to the beginning of the month object as needed
    if(firstDay > 0){
        for(let i=firstDay;i>0;i--){
            daysInMonth.unshift({})
        }
    }
    // add blank days to the end of the days object
    if(daysInMonth.length < 35){
        if(daysInMonth.length < 35){
            let addDays = 35 - daysInMonth.length
            for(let i=0;i<addDays;i++){
                daysInMonth.push({})
            }
        }
    } else if(daysInMonth.length > 35) {
        if(daysInMonth.length < 42){
            let addDays = 42 - daysInMonth.length
            for(let i=0;i<addDays;i++){
                daysInMonth.push({})
            }
        }
    }
    // create month object
    let Month = {
        name: months[month].name,
        month: month,
        year: year,
        totalDays: months[month].days,
        days: daysInMonth
    }
    return Month
}



