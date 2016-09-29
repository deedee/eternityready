export const browse = (req, res, next, setupRedux, createStaticPage) => {
	let {reactRouterRenderProps} = req;
	let store = setupRedux();

	// store.dispatch(Actions.Categories.fetchAllCategories()).then(() => {
		let page = createStaticPage('Home Page', store, {reactRouterRenderProps})
		res.send(page);
	// })
}
