import React, { Component}  from 'react';
import Logoimg from "./superscript.JPG";

class Capital extends Component {


    constructor(props) {

    super(props);
    this.state = {

    total: '50',
    cpviz: '100%',
    completed: '59',
    InProgress: '30',
    active: '100',
    draft: '47'
    }
    }


    onSubmit () {

    alert('Superscript Clicked!');
    }

    render() {


        return (

            <div className="aligndiv">
                <h2 className="capital">Business Summary</h2>


                  <div class="card">
                  <h2>Capital Project <sup onClick={this.onSubmit}><img src={Logoimg}></img></sup></h2>
                                      <div className="left"><p className="title">Total</p>
                                      <p className="size"><b>{this.state.total}</b></p></div>
                                      <div className="right"><p className="title">CPViz</p>
                                                          <p className="size"><b>{this.state.cpviz}</b></p>
                                                                    </div>
                                      <hr className="new">
                                      </hr>
                                      <div className="left">
                                      <p className="title">Completed</p>
                                                          <p className="title">{this.state.completed}</p>
                                      <p className="title">Active</p>
                                                          <p className="title">{this.state.active}</p></div>
                                      <div className="right"><p className="title">In Progress</p>
                                                          <p className="title">{this.state.InProgress}</p>
                                      <p className="title">Draft</p>
                                                          <p className="title">{this.state.draft}</p></div>

                   </div>

            </div>
        )
    }

}

export default Capital;