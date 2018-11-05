import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Select from 'react-select';





    class Sidebar extends Component {

        constructor() {
            super()
            this.state = {
                location: [
                    {

                        label: 'Construction Management',

                    },
                    {

                        label: 'Value 2',

                    },
                    {

                        label: 'Value 3',

                    }],
                countries: [

                    {

                        label: 'Canada',

                    },
                    {

                        label: 'USA',

                    },
                    {

                        label: 'India',

                    }
                ]
            }
        }


        render() {


            return (
                <Menu>
                    <a className="menu-item" href="/">
                        Home
                    </a>

                    <p> <Select
                        className="design"

                        options={this.state.location}

                    /></p>


                <div>
                    <p> <Select
                        className="design"

                        options={this.state.countries}

                    /></p>


                </div>

                    <a className="menu-item" href="/vue">
                        Dashboard
                    </a>

                    <a className="menu-item" href="/vue">
                        Reports
                    </a>

                    <a className="menu-item" href="/vue">
                        Metadata
                    </a>

                    <a className="menu-item" href="/vue">
                        About Real Estate
                    </a>

                    <a className="menu-item" href="/vue">
                        DATA HUB
                    </a>

                    <a className="menu-item" href="/node">
                        GDP
                    </a>
                </Menu>
            );
        }

    }


    export default Sidebar;


