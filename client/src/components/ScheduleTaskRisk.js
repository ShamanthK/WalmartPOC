import React, {Component} from 'react';

class ScheduleTaskRisk extends Component {


    constructor(props) {

        super(props);
        this.state = {

            values: [],

        }
    }

    componentDidMount() {

        fetch('http://localhost:5000/api/items')
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then(res => {
                this.setState({values: res});
                console.log("state", this.state.values)

            })
            .catch(error => console.log(error))

    }

    render() {

        const {values} = this.state;

        return (

            <div className="aligndiv">

                <div class="card1">
                    <br></br>
                    <h2>Schedule Task Risk</h2>
                    <div className="left"><p className="title">Total</p>
                        <p className="size"><b>
                            {values.map(value => (

                                <p>{value.quantity7+"%"}</p>

                            ))}
                        </b></p></div>
                    <div className="right"><p className="title">Total Tasks</p>
                        <p className="size"><b>

                            {values.map(value => (

                                <p>{value.quantity8}</p>

                            ))}
                        </b></p>
                    </div>
                    <hr className="new">
                    </hr>
                    <div className="left">
                        <p className="title">On Track</p>
                        <p className="title">

                            {values.map(value => (

                                <p>{value.quantity9}</p>

                            ))}

                        </p>
                        <p className="title">Red</p>
                        <p className="title">

                            {values.map(value => (

                                <p>{value.quantity10}</p>

                            ))}

                        </p></div>


                </div>

            </div>
        )
    }

}

export default ScheduleTaskRisk;