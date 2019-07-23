import React, { Component } from 'react';

class ErorrBoundry extends Component {
    constructor() {
        super();
        this.state = {
            isErrorOccur: false
        }
    }

    componentDidCatch() {
        this.setState( {
            isErrorOccur: true
        })
    }

    render() {

        if(this.state.isErrorOccur) {
            return <h1>Oppps. Error is occur</h1>
        }
        return this.props.children
    }
}

export default ErorrBoundry;