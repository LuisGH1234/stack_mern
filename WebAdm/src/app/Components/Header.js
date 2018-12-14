import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    static propTypes = {
        menu: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        }))
    }

    render() {
        const { menu } = this.props;
        return(
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">Logo</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {
                                menu && menu.map((item, index) => 
                                    <li key={index}><Link to={item.url}>{item.name}</Link></li>
                                )
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;