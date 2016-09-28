import React from 'react';

class IndexTemplate extends React.Component{
	render () {
		return (
				<html>
					<head>
						<title>{this.props.title}</title>
						<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"/>
						<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
						<link rel="stylesheet" href="/app/assets/styles/index.css" />
					</head>
					<body>
						<div id="root"></div>
						<div
							id="main"
							dangerouslySetInnerHTML={{__html: this.props.html}}
						/>
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
						<script src="//code.jquery.com/jquery-2.2.3.min.js"></script>
						<script src="/webpack-dev-server.js"></script>
						<script src="/app/app.bundle.js"></script>
					</body>
				</html>
			)
	}
}


export default IndexTemplate;
