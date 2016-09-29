import { Router } from 'express'
import ReactRouterRouteMatcher from '../middleware/react-router.js'
import { browse } from './browse.js'
import _ from 'lodash'
import setupRedux from '../src/app/store/configureStore.js'
import { createStaticPage } from './routeSetup.js'

const router = Router()

const applyRouteHelpers = (func) => _.partialRight(
	func,
	setupRedux,
	createStaticPage
)

router.use(ReactRouterRouteMatcher)

/* GET home page. */
router.get('/', applyRouteHelpers(browse));

module.exports = router;
