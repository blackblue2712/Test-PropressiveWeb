import React from 'react';

class SearchBox extends React.Component {
    render() {
        return (
            <div className="tc">
                <input
                    type="text"
                    placeholder="search robot"
                    onChange={this.props.onSearchRobots}
                />
            </div>
        )
    }
}

export default SearchBox;