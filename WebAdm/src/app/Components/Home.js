import React from 'react';
import List from './List'
import lista from '../resources/Lista.json'

class Home extends React.Component {
    render() {
        return(
            <div>
                <h2>Home</h2>
                <List lista={lista}/>
            </div>
        );
    }
}

export default Home;