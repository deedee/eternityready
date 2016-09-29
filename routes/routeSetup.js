import React from 'react'
import ReactServer from 'react-dom/server'
import _ from 'lodash'
import layoutView   from '../src/app/index.js'
import RouteHandler from '../src/app/scenes/storeAndReactRouter.js'

export function createStaticPage(pageTitle, store, renderProps) {
	let serialisedStore   = JSON.stringify(store.getState())
	let viewProps         = _.assign({}, renderProps, {store})
	let PageHandler       = React.createElement(RouteHandler, viewProps)
	let wrappedPage       = React.createElement(layoutView, {
		title: pageTitle,
		reduxState: serialisedStore,
		html: ReactServer.renderToString(PageHandler)
	})

	return ReactServer.renderToStaticMarkup(wrappedPage)
}
