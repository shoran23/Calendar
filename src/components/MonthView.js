import React from 'react'
import '../style/calendar.css'

class MonthDay extends React.Component {
    render() {
        return ( 
            <div className='calendar-month-day'>
                {this.props.date ?
                    <div 
                        className='calendar-month-day-valid'
                        onClick={() => this.props.selectDay(this.props.day,this.props.date,this.props.month)}
                    >
                        <div>{this.props.date}</div>
                    </div>
                :
                    <div className='calendar-month-day-invalid'>

                    </div>
                }
            </div>
        )
    }
}

class MonthSelector extends React.Component {
    render() {
        return (
            <div className='calendar-month-selector'>
                <h1>{this.props.month.name}<span> {this.props.year}</span></h1>
                <div className='calendar-month-selector-options'>
                    <button onClick={this.props.decreaseMonth}>{"<"}</button>
                    <button onClick={this.props.increaseMonth}>{">"}</button>
                </div>
            </div>
        )
    }
}

class MonthView extends React.Component {
    render() {
        return (
            <div className='calendar-month-view'>
                <MonthSelector 
                    // functions
                    increaseMonth={this.props.increaseMonth}
                    decreaseMonth={this.props.decreaseMonth}
                    // states
                    month={this.props.month}
                    year={this.props.year}
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
                {this.props.month.days ? 
                    <div className='calendar-day-container'>
                        {this.props.month.days.map((day,index)=> (
                            <MonthDay 
                                key={index}
                                date={day.date}
                                day={day.day}
                                month={this.props.month}
                                selectDay={this.props.selectDay}
                            />
                        ))}
                    </div>
                :
                    <div>
                        Retrieving Calendar...
                    </div>
                }
            </div>
        )
    }
}
export default MonthView