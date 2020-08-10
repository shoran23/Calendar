import React from 'react'
import '../style/calendar.css'

class WeekDay extends React.Component {
    render() {
        return (
            <div className-='calendar-week-day'>
                {this.props.date ?
                    <div className='calendary-week-day-valid'>

                    </div>
                :
                    <div className='calendary-week-day-invalid'>

                    </div>
                }
            </div>
        )
    }
}

class WeekSelector extends React.Component {
    render() {
        return (
            <div className='calendar-week-selector'>
                <h1>Week Title</h1>
                <div className='calendar-week-selector-options'>
                    <button>{"<"}</button>
                    <button>{">"}</button>
                </div>
            </div>
        )
    }
}

class WeekView extends React.Component {
    render() {
        return (
            <div className='calendar-week-view'>
                <WeekSelector 
                    // functions
                    increaseWeek={this.props.increaseWeek}
                    decreaseWeek={this.props.decreaseWeek}
                    // states
                    month={this.props.month}
                    year={this.props.year}
                    week={this.props.week}
                />
                <div className='calendar-days-of-week'>
                    <div className='calendar-day-of-week'>Sunday</div>
                    <div className='calendar-day-of-week'>Monday</div>
                    <div className='calendar-day-of-week'>Tuesday</div>
                    <div className='calendar-day-of-week'>Wednesday</div>
                    <div className='calendar-day-of-week'>Thursday</div>
                    <div className='calendar-day-of-week'>Friday</div>
                    <div className='calendar-day-of-week'>Saturday</div>
                </div>
                <div>Week View</div>
            </div>
        )
    }
}
