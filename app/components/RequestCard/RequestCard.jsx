import React from 'react';
import CSSModules from 'react-css-modules';
import Avatar from 'components/Avatar/Avatar';
import styles from './RequestCard.pcss';

let RequestCard = class extends React.Component {
    render() {
        return (
            <div styleName='card'>
                <div styleName='nameRow'>
                    <h2 styleName='name'>{this.props.name}</h2>
                    <Avatar name={this.props.name} color={this.props.color} size='large' />
                </div>
                <p styleName='title'>Job Request</p>
                <p styleName="request">{this.props.request}</p>
            </div>
        );
    }
}

export default CSSModules(RequestCard, styles);
