import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Capital from './components/Capital'
import Logoimg from "./walmart.JPG";

import Sidebar from './components/Sidebar';
import Select from 'react-select';
import ScheduleTaskRisk from './components/ScheduleTaskRisk'

import ProjectSchedule from "./components/ProjectSchedule";
import FinancialPerformance from "./components/FinancialPerformance";
import { Container, Row, Col } from 'reactstrap';

class App extends Component {

    constructor() {
        super()
        this.state = {
            location: [
                {

                    label: 'Week to Date',

                },
                {

                    label: 'Value 2',

                },
                {

                    label: 'Value 3',

                }]
        }
    }

    render() {
        return (
            <div className="App">
                <header>

                    <h1>Construction Management</h1>


                </header>
                <div>
                <Sidebar />

                <Capital/>
                <ProjectSchedule/>
                <ScheduleTaskRisk/>

                </div>

            </div>


        );
    }
}

export default App;
