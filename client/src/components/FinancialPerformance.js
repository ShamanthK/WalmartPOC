import React, { Component}  from 'react';
import Logoimg from "./superscript.JPG";

class FinancialPerformance extends Component {


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

    onSubmit () {

        alert('Superscript Clicked!');
    }

    render() {

        const { values } = this.state;

        return (

            <div className="aligndiv">


                <div class="card">

                    <h2>Financial Performance <sup onClick={this.onSubmit}></sup></h2>
                    <div className="left"><p className="title">Total</p>
                        <p className="size"><b>
                            {values.map(value => (

                                <p>{value.quantity16}</p>

                            ))}
                        </b></p></div>
                    <div className="right"><p className="title">Budget</p>
                        <p className="size"><b>

                            {values.map(value => (

                                <p>{value.quantity17}</p>

                            ))}
                        </b></p>
                    </div>
                    <hr className="new">
                    </hr>
                    <div className="left">
                        <p className="title">Commitment</p>
                        <p className="title">

                            {values.map(value => (

                                <p>{value.quantity18}</p>

                            ))}

                        </p>
                        <p className="title">Alloted</p>
                        <p className="title">

                            {values.map(value => (

                                <p>{value.quantity19}</p>

                            ))}

                        </p></div>


                </div>

            </div>
        )
    }

}

export default FinancialPerformance;