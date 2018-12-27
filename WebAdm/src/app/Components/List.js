import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { lista } = this.props;
        return (
            <div className="ListTable">
                <table>
                    <tbody>
                    {
                        lista.map((val, i) =>
                            <tr key={i} className="solid">
                                <td className="icon">
                                    <label className="name">{val.fol_name}</label>
                                </td>
                                <td className="name">
                                    <label>{val.comm}</label>
                                </td>
                                <td className="time">
                                    <label>{val.timed}</label>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;