import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

type ClockState = {
    date: Date
}

interface Props {
    variant?: "time" | "date",
}

class Clock extends Component<Props, ClockState> {
    timerID: any;
    constructor(props: Props) {
        super(props);
        this.state = { date: new Date() };
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
        const { variant } = this.props;

        return (
            <Typography variant="caption">
                {variant === "date" ? this.state.date.toLocaleDateString()
                    : variant === "time" ? this.state.date.toLocaleTimeString()
                        : this.state.date.toLocaleString()}.
            </Typography>
        );
    }
}

export default Clock;