import React from 'react';
import CSSModules from 'react-css-modules';
import Avatar from 'components/Avatar/Avatar';
import styles from './JobRow.pcss';

let JobRow = class extends React.Component {
    render() {
        return (
            <div styleName='row'>
                <Avatar name={this.props.name} color={this.props.color} size='medium' />
                <div styleName='nameRow'>
                    <h2 styleName='name'>{this.props.name}</h2>
                    <p styleName="request">{this.props.request}</p>
                </div>
                <p styleName={this.props.unread ? 'unread' : 'read'}>{this.props.lastUpdated}</p>

            </div>
        );
    }
}

export default CSSModules(JobRow, styles);
