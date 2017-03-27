import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.setFilters = this.setFilters.bind(this);
    this.searchRoute = this.searchRoute.bind(this);
  }

  setFilters(){
    // Get the values of the checkboxes (booleans)
    var food = this.refs.food.checked; //value of checkbox
    var attractions = this.refs.attractions.checked; //value of checkbox
    this.props.setFilters(food, attractions)
  }

  searchRoute () {
    this.props.setRoute(this.refs.start.value, this.refs.end.value)
    this.props.history.push('/trip')
  }

  render() {
    return(
      <div id="search">
      <div className="searchinput">
        <input className="start" ref="start" type="text" placeholder="Start" defaultValue={this.props.start || ''}></input>
        <input className="finish" ref="end" type="text" placeholder="Finish" defaultValue={this.props.end || ''}></input>
        <button className="myButton" onClick={this.searchRoute}>GO</button>
      </div>
      <div className="checkbox">
      <span id="checktext">Show me:</span>
        <input 
          id="checkbox"
          type="checkbox" 
          ref="food" 
          defaultChecked={this.props.food || (!this.props.food && !this.props.attractions)}
          onClick={this.setFilters}
        >
        </input><span id="checktext">Food</span>  
        <input 
          id="checkbox"
          type="checkbox" 
          ref="attractions" 
          defaultChecked={this.props.attractions || (!this.props.food && !this.props.attractions)}
          onClick={this.setFilters}
        >
        </input><span id="checktext">Attractions</span>
      </div>
      </div>
    )
  }
}

export default Search

