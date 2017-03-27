import React from 'react'
import POIEntry from './poiEntry.js'
import Search from './search.js'

class POI extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 0,
      selectedPOIs: [],
      foodPlaces: [],
      attractionsPlaces: [],
      allPOIs: this.props.foodMarker.concat(this.props.attractionsMarker)
    }
    this.setTab = this.setTab.bind(this);
    this.addPOI = this.addPOI.bind(this);
    this.deletePOI = this.deletePOI.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      allPOIs: props.foodMarker.concat(props.attractionsMarker)
    })
  }

  setTab(tab) {
    this.setState({
      selectedTab: tab
    })
  }

  addPOI (poi) {
    this.setState({
      selectedPOIs: [...this.state.selectedPOIs, poi]
    })
  }

  deletePOI (poi) {
    let index = this.state.selectedPOIs.findIndex(place => place.place_id === poi.place_id)
    this.setState({
      selectedPOIs: [
      ...this.state.selectedPOIs.slice(0,index),
      ...this.state.selectedPOIs.slice(index + 1)
      ]
    })
  }

  renderPOIEntry() {
    if (this.state.selectedTab === 0) {
      return this.state.allPOIs.map((entry) => {
        return (<POIEntry {...entry} 
                  key={entry.place_id} 
                  setSelectedPOI={this.props.setSelectedPOI}
                  selectedTab={this.state.selectedTab}
                  addPOI={this.addPOI}
                />)
      })
    } else {
      return this.state.selectedPOIs.map((entry) => {
        return (<POIEntry {...entry} 
                  key={entry.place_id} 
                  setSelectedPOI={this.props.setSelectedPOI}
                  selectedTab={this.state.selectedTab}
                  deletePOI={this.deletePOI}
                />)
      })
    }
  }

  render() {
    return(
      <div id="poi">
        <Search setFilters={this.props.setFilters} setRoute={this.props.setRoute} history={this.props.history} food={this.props.food} attractions={this.props.attractions}/>
        <div>
          <div onClick={this.setTab.bind(null, 1)}>My Places</div>
          <div onClick={this.setTab.bind(null, 0)}>Places</div>
        </div>
        <div>
          {this.renderPOIEntry()}
        </div>
      </div>
    )
  }
}

export default POI
