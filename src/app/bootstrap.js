'use strict';

import React                from 'react';
import ReactDOM             from 'react-dom';
import ReactRouterComponent from './scenes/storeAndReactRouter.js';
import setupRedux           from './store/configureStore.js';

function getProps() {
	let props = document.getElementById('serverProps').innerHTML
	props = JSON.parse(props)
	delete props.html
	delete props.reduxState
	return props;
}

function getStateFromSerialisedState() {
	let serialisedState = document.getElementById('serialisedState').innerHTML;
	let hydratedState   = JSON.parse(serialisedState);
	return hydratedState;
}


const initApp = () => {
	let stateFromServer   = getStateFromSerialisedState();
	let props             = getProps()
	let store             = setupRedux(stateFromServer);
	let mainViewElement   = document.getElementById('root');
	let ReactfiedRouteJsx = React.createElement(ReactRouterComponent, {store, ...props});
	ReactDOM.render(ReactfiedRouteJsx, mainViewElement);
	window.reduxStore = store;
}

// export const start = () => {
	// window.jQuery('body').bootstrapMaterialDesign();
	initApp();
// }

if (module.hot) {
  module.hot.accept();
}
