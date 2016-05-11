import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Avatar.pcss';

let RequestCard = class extends React.Component {
    render() {

        // Applies a background color for the avatar based on ID
        let colors = [
            '#df97bb',
            '#80a2a3',
            '#66c5c7',
            '#a39d6b',
            '#838591',
            '#4f6b7c',
            '#909874',
            '#a65766',
            '#b07c77'
        ];

        var color = { background: colors[this.props.color] };

        // Gets the first initial from the name
        var initial = this.props.name.charAt(0).toUpperCase();

        return <div style={color} styleName={this.props.size}>{initial}</div>;
    }
}

export default CSSModules(RequestCard, styles);
