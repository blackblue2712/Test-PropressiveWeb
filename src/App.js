import React from 'react';
import './App.css';
import ListCard from './components/ListCard';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll.js';
import ErorrBoundry from './components/ErrorBoudry';
import { connect } from 'react-redux';

import { setSearchField, requestRobots } from './actions'; 
import Header from './components/Header';

const mapStateToProps = state => {
  return {
    searchText: state.searchRobots.searchText,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchRobots: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => { requestRobots(dispatch) }
  }
}

class App extends React.Component {

  componentDidMount() {
    // console.log(this.props.store.getState())
    this.props.onRequestRobots();
  }

  render() {
    const { searchText, onSearchRobots, robots } = this.props;
    const robotsFiltered = robots.filter( robot => {
      return robot.name.toLowerCase().includes(searchText.toLowerCase());
    })
    return (
      <div className="App container tc" style={{}}>
          <Header />
          <SearchBox onSearchRobots={onSearchRobots} />
          <Scroll>
            <ErorrBoundry>
              <ListCard robots={robotsFiltered} />
            </ErorrBoundry>
          </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
