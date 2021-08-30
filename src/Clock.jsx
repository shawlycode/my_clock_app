import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    //define || setup a life-cycle method to class to enable app 
    // render to webpage for the first time
    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)
    }
    //setup a life-cylcle method to free up timer after closing webpage
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    render() {
        return (
            <div>
                <h1>{this.state.date.toLocaleString()}</h1>
            </div>
        );
    }
}


export default Clock;

