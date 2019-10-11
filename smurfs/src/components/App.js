import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { getSmurfs, addSmurf } from '../actions';



class App extends Component {

  state = {
    name: '',
    age: '',
    height: ''
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state)
    this.setState({
       name: '', age: '', height: ''
      })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {

    return (
      <>
      <div className="header">Welcome 2 tha smurf village!</div>
      <div className="App">

       

        <div className="smurfs">
          <h1>Smurfsss!</h1>
          <div className="smurrff">
            {this.props.smurfs.map(smurf => {
              return (
                <div className="Smurf">
                  <div className="card">
                  <h3>{smurf.name}</h3>
                  <strong>{smurf.height} cm</strong>
                  <p>{smurf.age} yrs old</p>
                  </div>
                </div>
                
              );
            })}
          </div>
        </div>

        <div className="SmurfForm">

          <h2>Add a Smurf!</h2>

          <form onSubmit={this.addSmurf}>

            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
            
          </form>
<button type="submit">ADD</button>
        </div>


      </div >
      </>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetching,
  error: state.error
})

export default connect(
  mapStateToProps,
  {
    getSmurfs, addSmurf
  }
)(App);
