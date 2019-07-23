import React, { Component } from 'react';
import Counter from './Counter';

class Header extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        console.log("HEADER")
        return (
            <>
                <h1 className="f1">RoboFirends</h1>
                <Counter />
            </>
        )
            
    }
}

export default Header;