import React from "react";
import { connect } from "react-redux";
import { userLogout } from "../includes/actions";
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import Overview from './Overview';
import PlayList from './playlist';
import Feature from './feature';
import Wrapper from './Wrapper'

import "./index.css"

const wrapperOverview = Wrapper(Overview);
const wrapperFeature = Wrapper(Feature);
const wrapperPlaylist = Wrapper(PlayList)


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  onUserLogout = () => {
    this.props.userLogout();
    this.props.history.push("/");
  }

  render() {
  
    return (
      <div className="homepage container mt-3">
      <Router>
        <div>
        <nav className="navbar navbar-expand-sm bg-white  navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item mr-4">
              <Link to="/overview">Overview</Link>
            </li>
            <li className="nav-item mr-4">
              <Link to="/playlist">PlayList</Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link dropdown-toggle text-primary" data-toggle="dropdown" to="/featured">Featured</Link>
               <div className="dropdown-menu">
                <Link className="dropdown-item" value="featured" to="/featured">Link 1</Link>
                <Link className="dropdown-item" value="featured" to="/featured">Link 2</Link>
                <Link className="dropdown-item" value="featured" to="/featured">Link 3</Link>
                <Link className="dropdown-item" value="featured" to="/featured">Link 4</Link>
                <Link className="dropdown-item" value="featured" to="/featured">Link 5</Link>
                <Link className="dropdown-item" value="featured" to="/featured">Link 6</Link>
               
                </div>
            </li>
            <li className="nav-item float-right">
              <button className="btn btn-primary" onClick={this.onUserLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      
          <Switch>
            <Route exact path='/overview' component={wrapperOverview}/>
            <Route exact path='/featured' component={wrapperFeature}/>
            <Route exact path="/playlist" component={wrapperPlaylist}/>
        </Switch>
       
        </div>

        </Router>
        {/* <button onClick={this.onUserLogout}>Logout</button> */}
      </div>

    )
  }
}
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  userLogout: userLogout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

