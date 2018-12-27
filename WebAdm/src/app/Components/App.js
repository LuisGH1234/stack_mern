import React from 'react';
import PropTypes from 'prop-types';

import menu from '../resources/menu';
import Header from './Header';

//import '../css/style.css';

class App extends React.Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    }

    render() {
        const { children } = this.props;
        return(
            <div>
                <Header menu={menu}/>
                <div className="Content">
                    {children}
                </div>
            </div>
        );
    }
}

export default App;