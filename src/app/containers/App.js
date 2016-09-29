import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { fetchChannels } from '../actions'
// import HomePage from './HomePage'
// import Player from './Player'
// import SearchResults from './SearchResults'

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			queryString: null,
		}
	}

	setQueryString(query) {
		this.setState({queryStringy: query})
	}

	componentDidMount() {
		this.props.fetchChannels()
	}

	render() {
		return (
			<div className="App">
				{this.props.children}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		byCategory: state.channels.byCategory,
	}
}

App.propTypes = {
	byCategory: PropTypes.object.isRequired,
}

App.defaultProps = {
	byCategory: {}
}

// export default connect(mapStateToProps)(App)
export default connect(mapStateToProps, {
	fetchChannels,
})(App)
