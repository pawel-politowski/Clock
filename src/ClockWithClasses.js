import React, {Component} from 'react';

class ClockWithClasses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>
                    Clock with Classes
                </h1>
                <h2>
                    It is {this.state.date.toLocaleTimeString()}.
                </h2>
            </div>
        )
    }
}

export default ClockWithClasses;