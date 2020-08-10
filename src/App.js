import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar.js'
import {getDate} from './scripts/date.js'
import {createMonth} from './scripts/date.js'

class App extends React.Component {
    state = {
        today: {},
        month: {}
    }
    render() {
        return (
            <div className="App">
                <Calendar />
            </div>
        )
    }
}
export default App;
