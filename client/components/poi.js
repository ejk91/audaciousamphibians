import React from 'react'
import POIEntry from './poiEntry.js'

class POI extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 0,
      selectedPOIs: [],
      allPOIs: this.props.foodMarker.concat(this.props.attractionsMarker)
    }
    this.setTab = this.setTab.bind(this);
  }

  setTab(tab) {
    this.setState({
      selectedTab: tab
    })
  }

  renderPOIEntry() {
    if (this.state.selectedTab === 0) {
      return this.state.allPOIs.map((entry) => {
        return (<POIEntry {...entry} 
                  key={entry.place_id} 
                  setSelectedPOI={this.props.setSelectedPOI}
                  selectedTab={this.state.selectedTab}
                />)
      })
    } else {
      return this.state.selectedPOIs.map((entry) => {
        return (<POIEntry {...entry} 
                  key={entry.place_id} 
                  setSelectedPOI={this.props.setSelectedPOI}
                  selectedTab={this.state.selectedTab}
                />)
      })
    }
  }

  render() {
    return(
      <div id="poi">
        <div>
          <input type="text" placeholder="Start"></input>
          <input type="text" placeholder="Finish"></input>
          <button>Search</button>
        </div>
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
