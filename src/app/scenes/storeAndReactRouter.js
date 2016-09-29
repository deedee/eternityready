import React from 'react'
import { Router, browserHistory, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
// import { syncHistoryWithStore } from 'react-router-redux'

import routes from './routes.js';


class RouteHandler extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render () {
		let reactRouterObj;

		if (this.props.reactRouterRenderProps) {
			reactRouterObj = <RouterContext {...this.props.reactRouterRenderProps} />
		}
		else {
			reactRouterObj = <Router history={browserHistory} children={routes} />
		}
		return (
			<Provider store={this.props.store}>
				{reactRouterObj}
			</Provider>
		);
	}
}


export default RouteHandler;
