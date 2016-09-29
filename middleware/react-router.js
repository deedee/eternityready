import { match } from 'react-router'
import reactRouterRoutes from '../src/app/scenes/routes.js'

const ReactRouterRouteMatcher = (req, res, next) => {
	// Note that req.url here will be the full URL path from
	// the original request, including the query string.
	let location = req.url

	match(
		{routes: reactRouterRoutes, location},
		(error, redirectLocation, serverRenderProps) => {
			if (error) {
				return res.status(500).send(error.message)
			}
			else if (redirectLocation) {
				return res.redirect(302, `${redirectLocation.pathname + redirectLocation.search}`)
			}
			else if (!serverRenderProps){
				return res.status(404).send('Not found')
			}

			// You can also check renderProps.components or renderProps.routes for your
			// "not found" component or route respectively, and send a 404 as below, if you're
			// using a catch-all route.
			req.reactRouterRenderProps = serverRenderProps
			next()
		}
	)
}

export default ReactRouterRouteMatcher
