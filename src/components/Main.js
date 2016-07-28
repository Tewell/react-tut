import React from 'react'
import ReactDOM from 'react-dom'


export default class Main extends React.Component {
	render() {
		return (
				<div>
					Hello world
				</div>
			)
	}
}

const app = document.getElementById('app')
ReactDOM.render(
		<Main />,
		app
	)