import React from 'react';

class IndexTemplate extends React.Component{
	render () {
		return (
				<html>
					<head>
						<title>{this.props.title}</title>
						{/* <link rel="stylesheet" href="/app/assets/styles/index.css" /> */}
					</head>
					<body>
						<div id="root" dangerouslySetInnerHTML={{__html: this.props.html}}></div>
						<script
							type="text/json"
							id="serialisedState"
							dangerouslySetInnerHTML={{__html: this.props.reduxState}}
						/>
						<script
							type="text/json"
							id="serverProps"
							dangerouslySetInnerHTML={{__html: JSON.stringify(this.props)}}
						/>
						<script src="/webpack-dev-server.js"></script>
						<script src="/app/app.bundle.js"></script>
					</body>
				</html>
			)
	}
}


export default IndexTemplate;