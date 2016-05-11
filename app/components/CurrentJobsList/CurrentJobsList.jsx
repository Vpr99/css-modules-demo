import React from 'react';
import CSSModules from 'react-css-modules';
import JobRow from 'components/JobRow/JobRow';
import styles from './CurrentJobsList.pcss';

let CurrentJobsList = class extends React.Component {
    render() {
        return (
            <section styleName='jobsList'>
                {this.props.jobs.map(job =>
                    <JobRow key={job.id} name={job.name} color={job.color} request={job.request} lastUpdated={job.lastUpdated} unread={job.unread} />
                )}
            </section>
        );
    }
}

export default CSSModules(CurrentJobsList, styles);
