import React, { Component}  from 'react';
import Logoimg from "./superscript.JPG";

class Capital extends Component {


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
                <h2 className="capital">Business Summary</h2>


                  <div class="card">
                  <h2>Capital Project <sup onClick={this.onSubmit}><img src={Logoimg}></img></sup></h2>
                                      <div className="left"><p className="title">Total</p>
                                      <p className="size"><b>
                                      {values.map(value => (

                                            <p>{value.quantity1}</p>

                                      ))}
                                      </b></p></div>
                                      <div className="right"><p className="title">CPViz</p>
                                                          <p className="size"><b>

                                                          {values.map(value => (

                                                              <p>{value.quantity2}</p>

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

                                                                      <p>{value.quantity4}</p>

                                                                                ))}

                                                          </p></div>
                                      <div className="right"><p className="title">In Progress</p>
                                                          <p className="title">

                                                          {values.map(value => (

                                                                        <p>{value.quantity5}</p>
                                                                                 ))}

                                                          </p>
                                      <p className="title">Draft</p>
                                                          <p className="title">

                                                          {values.map(value => (

                                                                  <p>{value.quantity6}</p>

                                                                                ))}

                                                          </p></div>

                   </div>

            </div>
        )
    }

}

export default Capital;