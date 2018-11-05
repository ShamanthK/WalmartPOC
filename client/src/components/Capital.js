import React, {Component} from 'react';
import Logoimg from "./superscript.JPG";
import Chart from './Chart'
import Table from './Table'


class Capital extends Component {


    constructor(props) {

        super(props);
        this.state = {

            values: [],
            showCharts: false,
            showTable: false,
            chartData: {}

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

    componentWillMount() {
        this.getChartData();
    }



    onClicked(e) {

        e.preventDefault();
        this.setState({showReply: !this.state.showReply})

    }

    onClickTable(e) {

        e.preventDefault();
        this.setState({showTable: !this.state.showTable})

    }

    getChartData() {

        this.setState({
            chartData: {
                labels: ['Inbox', 'Exp', 'Relo', 'SP'],
                datasets: [
                    {
                        label: 'Projects By Type',
                        data: [
                            16,
                            17,
                            18,
                            19,

                        ],
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',


                        ]
                    }
                ]
            }
        });
    }


    render() {

        const {values} = this.state;

        return (

            <div className="aligndiv">

                <div class="card" onClick={this.onClicked.bind(this)}>
                    <h2>Capital Project <sup onClick={this.onSubmit}><img src={Logoimg}></img></sup></h2>
                    <div className="left"><p className="title">Total</p>
                        <p className="size"><b>
                            {values.map(value => (

                                <p>{value.quantity1+"%"}</p>

                            ))}
                        </b></p></div>

                    <div className="right"><p className="title">CPViz</p>
                        <p className="size"><b>

                            {values.map(value => (

                                <p>{value.quantity2+"%"}</p>

                            ))}
                        </b></p>
                    </div>

                    <hr className="new">
                    </hr>

                    <div className="left">
                        <p className="title">Completed</p>
                        <p className="title">

                            {values.map(value => (

                                <p>{value.quantity3}</p>

                            ))}

                        </p>

                        <p className="title">Active</p>
                        <p className="title">

                            {values.map(value => (

                                <p>{value.quantity5}</p>

                            ))}

                        </p></div>

                    <div className="right"><p className="title">In Progress</p>
                        <p className="title">

                            {values.map(value => (

                                <p>{value.quantity4}</p>
                            ))}

                        </p>

                        <p className="title">Draft</p>
                        <p className="title">

                            {values.map(value => (

                                <p>{value.quantity6}</p>

                            ))}

                        </p></div>

                </div>

                <div  onClick={this.onClickTable.bind(this)}>
                {this.state.showReply &&
                <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>}
                </div>
                {this.state.showTable &&
                <Table/>}

            </div>
        )
    }

}

export default Capital;