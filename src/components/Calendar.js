import React from 'react'
import {getDate} from '../scripts/date.js'
import {createMonth} from '../scripts/date.js'
import '../style/calendar.css'
import MonthView from './MonthView.js'

class CalendarViewSelector extends React.Component {
    render() {
        return (
            <div className='calendar-view-selector'>
                <button >Month View</button>
                <button>Week View</button>
            </div>
        )
    }
}

class Calendar extends React.Component {
    state = {
        year: 2020,
        month: {},
        view: 0
    }
    /* MONTH FUNCTIONS *******************************************************************************/
    setMonth = (month,year) => {
        let createdMonth = createMonth(year,month)
        this.setState({month: createdMonth})
        this.setState({year: createdMonth.year})
    }
    increaseMonth = () => {
        let increasedMonth = 0
        let increasedYear = this.state.year
        if(this.state.month.month === 11){
            increasedMonth = 0
            increasedYear += 1
        } else {
            increasedMonth = this.state.month.month + 1
        }
        this.setMonth(increasedMonth,increasedYear)
    }
    decreaseMonth = () => {
        let decreasedMonth = 0 
        let decreasedYear = this.state.year
        if(this.state.month.month === 0){
            decreasedMonth = 11
            decreasedYear -=1
        } else {
            decreasedMonth = this.state.month.month - 1
        }
        this.setMonth(decreasedMonth,decreasedYear)
    }
    /* WEEK FUNCTIONS ********************************************************************************/
    setWeek = () => {

    }
    increaseWeek = () => {

    }
    decreaseWeek = () => {
        
    }
    /* DAY FUNCTIONS *********************************************************************************/
    selectDay = (day,date,month,year) => {
        console.log(day,date,month)
    }
    render() {
        return (
            <div className='calendar'>
                <MonthView 
                    // functions
                    increaseMonth={this.increaseMonth}
                    decreaseMonth={this.decreaseMonth}
                    selectDay={this.selectDay}
                    // states
                    month={this.state.month}
                    year={this.state.year}
                />
            </div>
        )
    }
    componentDidMount(){
        let todaysDate = getDate()
        let month = createMonth(todaysDate.year,todaysDate.monthNum)
        this.setState({month: month})
        this.setState({year: todaysDate.year})
    }
}

export default Calendar




