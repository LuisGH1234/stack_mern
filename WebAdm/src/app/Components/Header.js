import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        menu: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        }))
    }

    liElements(item, index) {
        return (
            <li key={index}>
                <Link to={item.url} className="item back-color" type="text" id={item.name}/>
            </li>
        );
    }

    render() {
        const { menu } = this.props;
        return(
            <nav className="header nav-horizontal-list grid">
                <div className="left-side-bar">
                    <a href="/" className="logo-header" type="text">Logo</a>
                    <div className="box-search">
                        <input className="search" type="text" placeholder="Search or jump to..."/>
                    </div>
                    <ul>
                    {
                        menu && menu.map(this.liElements)
                    }
                    </ul>
                </div>
                <div className="right-side-bar">
                    <div className="user-bar">
                        <div className="box"></div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;