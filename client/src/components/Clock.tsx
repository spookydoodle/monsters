import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

type ClockState = {
    date: Date
}

interface Props {
    variant: "time" | "date" | "datetime",
}

class Clock extends Component<Props, ClockState> {
    timerID: any;
    constructor(props: Props) {
        super(props);
        this.state = { 
            date: new Date() 
        };
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

    getValue() {
        const { date } = this.state;
        const selected = this.props.variant;
        const variants = {
            "date": date.toLocaleDateString(),
            "time": date.toLocaleTimeString(),
            "datetime": date.toLocaleString(),
        }

        return variants[selected]
    }

    render() {
        const { variant } = this.props;

        return (
            <Typography variant="caption">
                {this.getValue()}
            </Typography>
        );
    }
}

export default Clock;