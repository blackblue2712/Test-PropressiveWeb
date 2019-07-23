import React, { Component } from 'react';

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.count !== this.state.count) {
            return true
        }
        return false
    }

    updateCount = () => {
        this.setState( state => {
            return {count: state.count +1}
        })
    }

    render() {
        console.log("Counter")
        return(
            <button className="f1"
                onClick={this.updateCount}
            >
                Count: {this.state.count}
            </button>
        )
    }
}

export default Counter;