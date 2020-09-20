import React from "react";
import "./App.css";
import Router from "./routes/routes";
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      closeNav: false,
    };
  }
  openNav = () => {
    const { closeNav } = this.state;
    if (!closeNav) {
      document.getElementById("mySidenav").style.width = "200px";
      this.setState({ closeNav: true });
    } else {
      document.getElementById("mySidenav").style.width = 0;
      this.setState({ closeNav: false });
    }
  };
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-navbar d-flex ">
          <a className="navbar-brand" href="/">
            MDB
          </a>
          <span className="navbar-toggler-icon" onClick={this.openNav}></span>
        </nav>
        <Router />
      </div>
    );
  }
}

App.propTypes={
  id:PropTypes.number.isRequired
}

App.defaultProps={
  id:1
}

export default App;
