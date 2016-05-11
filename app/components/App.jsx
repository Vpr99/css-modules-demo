import uuid from 'node-uuid';
import React from 'react';
import CSSModules from 'react-css-modules';
import RequestCard from 'components/RequestCard/RequestCard';
import CurrentJobsList from 'components/CurrentJobsList/CurrentJobsList';
import styles from 'css/main.pcss';

let App = class extends React.Component {
    render() {

        const requests = [
            {
                id: uuid.v4(),
                name: 'Junya Watanabe',
                color: '0',
                request: 'Cabinet Installation'
            },
            {
                id: uuid.v4(),
                name: 'Ralph Lauren',
                color: '1',
                request: 'Stairway Build'
            },
            {
                id: uuid.v4(),
                name: 'Tom Ford',
                color: '2',
                request: 'Deck Repair'
            },
            {
                id: uuid.v4(),
                name: 'Alexander Wang',
                color: '3',
                request: 'Floor Installation'
            }
        ];

        const currentJobs = [
            {
                id: uuid.v4(),
                name: 'John Elliott',
                color: '5',
                request: 'Deck or Porch Repair',
                lastUpdated: '10:32 AM',
                unread: true
            },
            {
                id: uuid.v4(),
                name: 'Michael Bastian',
                color: '6',
                request: 'Interior Trim Installation',
                lastUpdated: 'Yesterday',
                unread: true
            },
            {
                id: uuid.v4(),
                name: 'Jun Takahashi',
                color: '7',
                request: 'Pet Door Installation',
                lastUpdated: 'Monday',
                unread: false
            },
            {
                id: uuid.v4(),
                name: 'Alexander McQueen',
                color: '8',
                request: 'Barn and Shed Repair',
                lastUpdated: 'April 22',
                unread: false
            }
        ];

        return (
            <div>
                <section styleName='container'>
                    {requests.map(request =>
                        <RequestCard key={request.id} name={request.name} color={request.color} request={request.request} />
                    )}
                </section>
                <section styleName='container'>
                    <CurrentJobsList jobs={currentJobs} />
                </section>
            </div>
        );
    }
}

export default CSSModules(App, styles);
