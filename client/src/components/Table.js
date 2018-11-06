import React, {Component} from 'react';

class Table extends Component {


    constructor(props) {

        super(props);
        this.state = {

            values: [],


        }
    }

    componentDidMount() {

        fetch('http://localhost:5000/api/tables')
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then(res => {
                this.setState({values: res});
                console.log("state", this.state.values[0].type)

            })
            .catch(error => console.log(error))

    }

    render() {

        const {values} = this.state;



        return (

            <table className="table">
                <tr>
                    <th>Type</th>
                    <th>SubType</th>
                    <th>Project Name</th>
                    <th>Banner</th>
                    <th>City</th>
                    <th>Org Name</th>
                    <th>Name</th>
                    <th>Bid Doc Name</th>
                </tr>

                <tr>
                    <td>






                        {values.map(value => (

                            <p>{value.type}</p>

                        ))}





                    </td>

                    <td>
                        {values.map(value => (

                            <p>{value.subType}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.projectName}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.banner}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.city}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.orgName}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.name}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.bidDocName}</p>

                        ))}
                    </td>

                </tr>

                <tr>
                    <td>
                        {values.map(value => (

                            <p>{value.type}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.subType}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.projectName}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.banner}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.city}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.orgName}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.name}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.bidDocName}</p>

                        ))}
                    </td>

                </tr>

                <tr>
                    <td>
                        {values.map(value => (

                            <p>{value.type}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.subType}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.projectName}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.banner}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.city}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.orgName}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.name}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.bidDocName}</p>

                        ))}
                    </td>

                </tr>

                <tr>
                    <td>
                        {values.map(value => (

                            <p>{value.type}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.subType}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.projectName}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.banner}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.city}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.orgName}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.name}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.bidDocName}</p>

                        ))}
                    </td>

                </tr>

                <tr>
                    <td>
                        {values.map(value => (

                            <p>{value.type}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.subType}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.projectName}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.banner}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.city}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.orgName}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.name}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.bidDocName}</p>

                        ))}
                    </td>

                </tr>

                <tr>
                    <td>
                        {values.map(value => (

                            <p>{value.type}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.subType}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.projectName}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.banner}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.city}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.orgName}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.name}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.bidDocName}</p>

                        ))}
                    </td>

                </tr>

                <tr>
                    <td>
                        {values.map(value => (

                            <p>{value.type}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.subType}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.projectName}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.banner}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.city}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.orgName}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.name}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.bidDocName}</p>

                        ))}
                    </td>

                </tr>

                <tr>
                    <td>
                        {values.map(value => (

                            <p>{value.type}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.subType}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.projectName}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.banner}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.city}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.orgName}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.name}</p>

                        ))}
                    </td>
                    <td>
                        {values.map(value => (

                            <p>{value.bidDocName}</p>

                        ))}
                    </td>

                </tr>



            </table>
        )
    }
}

export default Table;